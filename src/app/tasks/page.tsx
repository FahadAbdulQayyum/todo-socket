'use client';

import { setLoading } from '@/components/lib/features/loader/loaderSlice';
import { useAppDispatch } from '@/components/lib/useAppDispatch';
import { PlusCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface TaskProps {
  completed: boolean;
  createdAt?: string;
  description?: string;
  taskId?: string;
  title?: string;
  updatedAt?: string;
  userId?: string;
  __v?: number;
  _id: string;
}

export default function TasksPage() {
  const [tasks, setTasks] = useState<any[]>([]);
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    const fetchTasks = async () => {
      dispatch(setLoading(true));
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
      const response = await fetch('/api/tasks', {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      setTasks(data);
      dispatch(setLoading(false));
    };

    fetchTasks();
  }, []);

  const deleteHandler = async (task: TaskProps) => {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
    try {
      const response = await fetch('/api/task', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ taskId: task.taskId }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `HTTP error! Status: ${response.status}`);
      }

      const responsed = await response.json();
      setTasks(tasks.filter((t) => t.taskId !== task.taskId)); // Update UI
    } catch (error) {
      console.error('Error deleting task:', error && error);
    }
  };

  const editHandler = (task: TaskProps) => {
    router.push(
      `/tasks/update?taskId=${encodeURIComponent(task.taskId || '')}&title=${encodeURIComponent(
        task.title || ''
      )}&description=${encodeURIComponent(task.description || '')}&completed=${encodeURIComponent(task.completed || '')}`
    );
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Your Tasks</h1>
      <ul>
        {tasks?.map((task) => (
          <li key={task.taskId} className="flex justify-between border-b py-2 pe-2">
            <span>
              <h3 className="font-semibold">{task.title}</h3>
              <p>{task.description}</p>
              <p className="text-sm text-gray-500">{task.completed ? 'Completed ✅' : 'Incomplete ❌'}</p>
            </span>
            <span className="flex flex-col space-y-2">
              <button
                className="border bg-black p-2 text-white rounded-lg"
                onClick={() => deleteHandler(task)}
              >
                Delete
              </button>
              <button
                className="border border-black bg-white p-2 text-black rounded-lg"
                onClick={() => editHandler(task)}
              >
                Edit
              </button>
            </span>
          </li>
        ))}
      </ul>
      <div className="flex justify-center space-x-4 w-full mt-4">
        <PlusCircle
          className="text-6xl cursor-pointer"
          aria-label="Favorites"
          size={40}
          onClick={() => router.push('tasks/create')}
        />
      </div>
    </div>
  );
}