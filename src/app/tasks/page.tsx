'use client';

import { setLoading } from '@/components/lib/features/loader/loaderSlice';
import { useAppDispatch } from '@/components/lib/useAppDispatch';
import { MinusCircle, PlusCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function TasksPage() {
  const [tasks, setTasks] = useState<any[]>([]);
  const dispatch = useAppDispatch();
  const router = useRouter()

  useEffect(() => {
    const fetchTasks = async () => {
      dispatch(setLoading(true))
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
      dispatch(setLoading(false))
    };

    fetchTasks();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Your Tasks</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.taskId} className="flex justify-between border-b py-2 pe-2">
            <span>
              <h3 className="font-semibold">{task.title}</h3>
              <p>{task.description}</p>
              <p className="text-sm text-gray-500">{task.completed ? 'Completed ✅' : 'Incomplete ❌'}</p>
            </span>
            <span className='flex flex-col space-y-2'>
              {/* <button className='bg-red-500 p-2 text-white rounded-lg'>Delete</button>
              <button className='bg-green-500 p-2 text-white rounded-lg'>Edit</button> */}
              <button className='border bg-black p-2 text-white rounded-lg'>Delete</button>
              <button className='border border-black bg-white p-2 text-black rounded-lg'>Edit</button>
            </span>
          </li>
        ))}
      </ul>
      <div className='flex justify-center space-x-4 w-full mt-4'>
        <PlusCircle className="text-6xl" aria-label="Favorites" size={40} onClick={() => router.push('tasks/create')} />
      </div>
      </div>
  );
}