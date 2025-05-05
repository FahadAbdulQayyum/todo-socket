'use client';

import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { useToast } from "@/hooks/use-toast"
import { useAppDispatch } from '@/components/lib/useAppDispatch';
import { setLoading } from '@/components/lib/features/loader/loaderSlice';

export default function AdminDashboard() {
  const [tasks, setTasks] = useState<any[]>([]);

  const { toast } = useToast()
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Initialize the WebSocket connection
    const socket = io('http://localhost:3001', {
      transports: ['websocket'], // Force WebSocket instead of long-polling
    });

    // Fetch initial tasks from the API
    const fetchTasks = async () => {
      try {
        dispatch(setLoading(true))
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
        dispatch(setLoading(false))
      } catch (error) {
        dispatch(setLoading(false))
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
      fetchTasks()
      toast(
        {
            title: "Change Detected",
            description: "Task change has been detected",
            duration: 3000
        })
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
          tasks.map((task) => (
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
















// 'use client';

// import { useEffect, useState } from 'react';
// import io from 'socket.io-client';

// export default function AdminDashboard() {
//   const [tasks, setTasks] = useState<any[]>([]);

//   useEffect(() => {
//     const socket = io('http://localhost:3001', {
//       transports: ['websocket'], // Force WebSocket instead of long-polling
//     });

//     // Listen for real-time updates via WebSocket
//     socket.on('newTask', (task) => {
//       console.log('New task received:', task);
//       setTasks((prev) => [...prev, task]);
//     });

//     socket.on('taskUpdated', (updatedTask) => {
//       console.log('Task updated:', updatedTask);
//       setTasks((prev) =>
//         prev.map((task) => (task.taskId === updatedTask.taskId ? updatedTask : task))
//       );
//     });

//     return () => {
//       socket.disconnect();
//       console.log('WebSocket connection closed');
//     };
//   }, []);

//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
//       <ul>
//         {tasks.length === 0 ? (
//           <p>No tasks found.</p>
//         ) : (
//           tasks.map((task) => (
//             <li key={task.taskId} className="border-b py-2">
//               <h3 className="font-semibold">{task.title}</h3>
//               <p>{task.description}</p>
//               <p className="text-sm text-gray-500">
//                 {task.completed ? 'Completed' : 'Incomplete'}
//               </p>
//             </li>
//           ))
//         )}
//       </ul>
//     </div>
//   );
// }



















// // 'use client';

// // import { useEffect, useState } from 'react';
// // import io from 'socket.io-client';

// // export default function AdminDashboard() {
// //   const [tasks, setTasks] = useState<any[]>([]);

// //   useEffect(() => {
// //     // Initialize the WebSocket connection inside useEffect
// //     const socket = io('http://localhost:3001', {
// //       transports: ['websocket'], // Force WebSocket instead of long-polling
// //     });

// //     // Fetch initial tasks
// //     const fetchTasks = async () => {
// //       try {
// //         const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
// //         const response = await fetch('/api/admin/tasks', {
// //           method: 'GET',
// //           headers: { Authorization: `Bearer ${token}` },
// //         });

// //         if (!response.ok) {
// //           throw new Error('Failed to fetch admin tasks');
// //         }

// //         const data = await response.json();
// //         setTasks(data);
// //       } catch (error) {
// //         console.error('Error fetching tasks:', error);
// //       }
// //     };

// //     fetchTasks();

// //     // Listen for real-time updates via WebSocket
// //     socket.on('newTask', (task) => {
// //       console.log('New task received:', task);
// //       setTasks((prev) => [...prev, task]);
// //     });

// //     socket.on('taskUpdated', (updatedTask) => {
// //       console.log('Task updated:', updatedTask);
// //       setTasks((prev) =>
// //         prev.map((task) => (task.taskId === updatedTask.taskId ? updatedTask : task))
// //       );
// //     });

// //     socket.on('connect', () => {
// //       console.log('Connected to WebSocket server');
// //     });

// //     socket.on('disconnect', () => {
// //       console.log('Disconnected from WebSocket server');
// //     });

// //     // Cleanup function to disconnect the socket when the component unmounts
// //     return () => {
// //       socket.disconnect();
// //       console.log('WebSocket connection closed');
// //     };
// //   }, []); // Empty dependency array ensures this runs only once

// //   return (
// //     <div className="p-8">
// //       <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
// //       <ul>
// //         {tasks.length === 0 ? (
// //           <p>No tasks found.</p>
// //         ) : (
// //           tasks.map((task) => (
// //             <li key={task.taskId} className="border-b py-2">
// //               <h3 className="font-semibold">{task.title}</h3>
// //               <p>{task.description}</p>
// //               <p className="text-sm text-gray-500">
// //                 {task.completed ? 'Completed' : 'Incomplete'}
// //               </p>
// //             </li>
// //           ))
// //         )}
// //       </ul>
// //     </div>
// //   );
// // }
















// // // 'use client';

// // // import { useEffect, useState } from 'react';
// // // import io from 'socket.io-client';

// // // const socket = io('http://localhost:3001');

// // // export default function AdminDashboard() {
// // //   const [tasks, setTasks] = useState<any[]>([]);

// // //   useEffect(() => {
// // //     // Fetch initial tasks
// // //     const fetchTasks = async () => {
// // //       const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
// // //       const response = await fetch('/api/admin/tasks', {
// // //       // const response = await fetch('/api/admin/tasks?userId=a66b0aeb-926f-425a-b861-0064dda3cf0d', {
// // //         method: 'GET',
// // //         headers: { Authorization: `Bearer ${token}` },
// // //       });
// // //       const data = await response.json();
// // //       setTasks(data);
// // //     };

// // //     fetchTasks();

// // //     // Listen for real-time updates
// // //     socket.on('newTask', (task) => {
// // //       setTasks((prev) => [...prev, task]);
// // //     });

// // //     socket.on('taskUpdated', (updatedTask) => {
// // //       setTasks((prev) =>
// // //         prev.map((task) => (task.taskId === updatedTask.taskId ? updatedTask : task))
// // //       );
// // //     });

// // //     return () => {
// // //       socket.disconnect();
// // //     };
// // //   }, []);

// // //   return (
// // //     <div className="p-8">
// // //       <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
// // //       <ul>
// // //         {tasks.map((task) => (
// // //           <li key={task.taskId} className="border-b py-2">
// // //             <h3 className="font-semibold">{task.title}</h3>
// // //             <p>{task.description}</p>
// // //             <p className="text-sm text-gray-500">{task.completed ? 'Completed' : 'Incomplete'}</p>
// // //           </li>
// // //         ))}
// // //       </ul>
// // //     </div>
// // //   );
// // // }