'use client';

import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { useToast } from "@/hooks/use-toast";
import { useAppDispatch } from '@/components/lib/useAppDispatch';
import { setLoading } from '@/components/lib/features/loader/loaderSlice';

export default function AdminDashboard() {
  const [tasks, setTasks] = useState<any[]>([]);

  const { toast } = useToast();
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Initialize the WebSocket connection
    const socket = io('http://localhost:3001', {
      transports: ['websocket'], // Force WebSocket instead of long-polling
    });

    // Fetch initial tasks from the API
    const fetchTasks = async () => {
      try {
        dispatch(setLoading(true));
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
        const response = await fetch('/api/admin/tasks', {
          method: 'GET',
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch admin tasks');
        }

        const data = await response.json();
        setTasks(data);
        dispatch(setLoading(false));
      } catch (error) {
        dispatch(setLoading(false));
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();

    // Listen for real-time updates via WebSocket
    socket.on('newTask', (task) => {
      console.log('New task received:', task);
      setTasks((prev) => [...prev, task]);
    });

    socket.on('taskUpdated', (updatedTask) => {
      console.log('Task updated:', updatedTask);
      setTasks((prev) =>
        prev.map((task) => (task.taskId === updatedTask.taskId ? updatedTask : task))
      );
      toast({
        title: "Change Detected",
        description: "Task change has been detected",
        duration: 3000,
      });
    });

    // Listen for incomplete tasks from the cron job
    socket.on('incompleteTasks', (payload) => {
      console.log('Incomplete tasks received:', payload.data);

      const incompleteTasks = payload.data;

      // Display toast notification summarizing incomplete tasks
      toast({
        title: `Reminder for ${incompleteTasks.length} incomplete tasks.`,
        description: `Your system has ${incompleteTasks.length} incomplete tasks.`,
        duration: 5000,
        variant: 'destructive', // Optional: Use a warning or error style
      });
    });

    return () => {
      socket.disconnect();
      console.log('WebSocket connection closed');
    };
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <ul>
        {tasks.length === 0 ? (
          <p>No tasks found.</p>
        ) : (
          tasks?.map((task) => (
            <li key={task.taskId} className="border-b py-2">
              <h3 className="font-semibold">{task.title}</h3>
              <p>{task.description}</p>
              <p className="text-sm text-gray-500">
                {task.completed ? 'Completed ✅' : 'Incomplete ❌'}
              </p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}