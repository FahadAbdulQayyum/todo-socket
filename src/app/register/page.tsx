'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { setLoading } from '@/components/lib/features/loader/loaderSlice';
import { useAppDispatch } from '@/components/lib/useAppDispatch';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'user' | 'admin'>('user');
  const [error, setError] = useState('');
  
  const router = useRouter();
  const dispatch = useAppDispatch()

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        dispatch(setLoading(true))
        console.log('...email...password...role...', email, password, role)
        const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, role }),
      });

      if (response.ok) {
        router.push('/login');
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Registration failed');
      }
      dispatch(setLoading(false))
    } catch (err) {
      setError('An error occurred. Please try again.');
      dispatch(setLoading(false))
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleRegister} className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Role</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value as 'user' | 'admin')}
            className="w-full border rounded px-3 py-2"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="submit" className="w-full bg-green-500 text-white py-2 rounded">
          Register
        </button>
      </form>
    </div>
  );
}