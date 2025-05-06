'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Switch } from '@/components/ui/switch';

export default function UpdateTaskPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Initialize state with query parameters
  const [taskId, setTaskId] = useState<string>(searchParams.get('taskId') || '');
  const [title, setTitle] = useState<string>(searchParams.get('title') || '');
  const [description, setDescription] = useState<string>(searchParams.get('description') || '');
  const [complete, setComplete] = useState<boolean>(
    searchParams.get('complete') === 'true' // Convert query param to boolean
  );

  // Update state if query parameters change
  useEffect(() => {
    setTaskId(searchParams.get('taskId') || '');
    setTitle(searchParams.get('title') || '');
    setDescription(searchParams.get('description') || '');
    setComplete(searchParams.get('complete') === 'true'); // Convert query param to boolean
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
    try {
      const response = await fetch('/api/task', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ taskId, title, description, complete }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `HTTP error! Status: ${response.status}`);
      }

      router.push('/tasks');
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Update Task</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        {/* Add the Switch for toggling completion status */}
        <div className="flex items-center space-x-2">
          <Switch
            checked={complete} // Use the boolean state
            onCheckedChange={(newCheckedValue) => setComplete(newCheckedValue)} // Update state with new value
            aria-label={`Toggle completion status for task: ${title}`}
          />
          <span>Mark as Complete</span>
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          Update Task
        </button>
      </form>
    </div>
  );
}



















// 'use client';

// import { useState, useEffect } from 'react';
// import { useRouter, useSearchParams } from 'next/navigation';
// import { Switch } from '@/components/ui/switch';

// export default function UpdateTaskPage() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
  
//   // Initialize state with query parameters
//   const [taskId, setTaskId] = useState<string>(searchParams.get('taskId') || '');
//   const [title, setTitle] = useState<string>(searchParams.get('title') || '');
//   const [description, setDescription] = useState<string>(searchParams.get('description') || '');
//   const [complete, setComplete] = useState<string|boolean>(searchParams.get('complete') || '');

//   // Update state if query parameters change
//   useEffect(() => {
//     setTaskId(searchParams.get('taskId') || '');
//     setTitle(searchParams.get('title') || '');
//     setDescription(searchParams.get('description') || '');
//     setComplete(searchParams.get('complete') || '');
//   }, [searchParams]);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
//     try {
//       const response = await fetch('/api/task', {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({ taskId, title, description, complete }),
//       });

//       if (!response.ok) {
//         const errorData = await response.json().catch(() => ({}));
//         throw new Error(errorData.error || `HTTP error! Status: ${response.status}`);
//       }

//       router.push('/tasks');
//     } catch (error) {
//       console.error('Error updating task:', error && error);
//     }
//   };

//   return (
//       <div className="p-8">
//         <h1 className="text-2xl font-bold mb-4">Update Task</h1>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium mb-2">Title</label>
//             <input
//               type="text"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="w-full border rounded px-3 py-2"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium mb-2">Description</label>
//             <textarea
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               className="w-full border rounded px-3 py-2"
//               required
//             />
//           </div>
//           {/* Add the Switch for toggling completion status */}
//           <Switch
//                 checked={!!complete}
//                 onCheckedChange={() => setComplete(!!complete)}
//                 aria-label={`Toggle completion status for task: ${title}`}
//               />
//           <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
//             Update Task
//           </button>
//         </form>
//       </div>
//   );
// }














// // 'use client';

// // import { useEffect, useState } from 'react';
// // import { useRouter } from 'next/navigation';

// // export default function UpdateTaskPage() {
// //   const [title, setTitle] = useState('');
// //   const [description, setDescription] = useState('');
// //   const router = useRouter();

// //   useEffect(() => {

// //   }, [])

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
// //     try {
// //       const response = await fetch('/api/task', {
// //         method: 'PUT',
// //         headers: {
// //           'Content-Type': 'application/json',
// //           Authorization: `Bearer ${token}`,
// //         },
// //         body: JSON.stringify({
// //           userId: 'a66b0aeb-926f-425a-b861-0064dda3cf0d',
// //           title,
// //           description,
// //         }),
// //       });

// //       if (!response.ok) {
// //         const errorData = await response.json().catch(() => ({}));
// //         throw new Error(errorData.error || `HTTP error! Status: ${response.status}`);
// //       }

// //       router.push('/tasks');
// //     } catch (error) {
// //       console.error('Error creating task:', error && error);
// //     }
// //   };

// //   return (
// //     <div className="p-8">
// //       <h1 className="text-2xl font-bold mb-4">Update Task</h1>
// //       <form onSubmit={handleSubmit} className="space-y-4">
// //         <div>
// //           <label className="block text-sm font-medium mb-2">Title</label>
// //           <input
// //             type="text"
// //             value={title}
// //             onChange={(e) => setTitle(e.target.value)}
// //             className="w-full border rounded px-3 py-2"
// //             required
// //           />
// //         </div>
// //         <div>
// //           <label className="block text-sm font-medium mb-2">Description</label>
// //           <textarea
// //             value={description}
// //             onChange={(e) => setDescription(e.target.value)}
// //             className="w-full border rounded px-3 py-2"
// //             required
// //           />
// //         </div>
// //         <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
// //           Update Task
// //         </button>
// //       </form>
// //     </div>
// //   );
// // }












// // // 'use client';

// // // import { useState } from 'react';
// // // import { useRouter } from 'next/navigation';

// // // export default function UpdateTaskPage() {
// // //   const [title, setTitle] = useState('');
// // //   const [description, setDescription] = useState('');
// // //   const router = useRouter();

// // //   const handleSubmit = async (e: React.FormEvent) => {
// // //     e.preventDefault();
// // //     const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
// // //     // const response = await fetch('/api/tasks', {
// // //     const response = await fetch('/api/task', {
// // //       method: 'POST',
// // //       headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
// // //       body: JSON.stringify({userId: "a66b0aeb-926f-425a-b861-0064dda3cf0d", title, description }),
// // //     });

// // //     if (response.ok) {
// // //       router.push('/tasks');
// // //     }
// // //   };

// // //   return (
// // //     <div className="p-8">
// // //       <h1 className="text-2xl font-bold mb-4">Create Task</h1>
// // //       <form onSubmit={handleSubmit} className="space-y-4">
// // //         <div>
// // //           <label className="block text-sm font-medium mb-2">Title</label>
// // //           <input
// // //             type="text"
// // //             value={title}
// // //             onChange={(e) => setTitle(e.target.value)}
// // //             className="w-full border rounded px-3 py-2"
// // //             required
// // //           />
// // //         </div>
// // //         <div>
// // //           <label className="block text-sm font-medium mb-2">Description</label>
// // //           <textarea
// // //             value={description}
// // //             onChange={(e) => setDescription(e.target.value)}
// // //             className="w-full border rounded px-3 py-2"
// // //             required
// // //           />
// // //         </div>
// // //         <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
// // //           Update Task
// // //         </button>
// // //       </form>
// // //     </div>
// // //   );
// // // }