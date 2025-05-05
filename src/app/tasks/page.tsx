'use client';

import { useEffect, useState } from 'react';

export default function TasksPage() {
  const [tasks, setTasks] = useState<any[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
      console.log('!...token...!', token)
      // const response = await fetch('/api/tasks', {
      const response = await fetch('/api/tasks?userId=a66b0aeb-926f-425a-b861-0064dda3cf0d', {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      console.log('...data...', data)
      setTasks(data);
    };

    fetchTasks();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Your Tasks</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.taskId} className="border-b py-2">
            <h3 className="font-semibold">{task.title}</h3>
            <p>{task.description}</p>
            <p className="text-sm text-gray-500">{task.completed ? 'Completed' : 'Incomplete'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}