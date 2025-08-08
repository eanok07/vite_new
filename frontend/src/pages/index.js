import { useState } from 'react';
import API from '../utils/api';
import { useRouter } from 'next/router';

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'user' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async () => {
    try {
      const res = await API.post('/api/auth/register', form);
      // store token & user
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      router.push('/dashboard');
    } catch (err) {
      alert(err?.response?.data?.message || 'Register failed');
      console.error(err);
    }
  };

  return (
    <div style={{ maxWidth: 640, margin: '40px auto' }}>
      <h1>Register</h1>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="password" placeholder="Password" type="password" onChange={handleChange} />
      <select name="role" onChange={handleChange}>
        <option value="user">User</option>
        <option value="mechanic">Mechanic</option>
        <option value="admin">Admin</option>
      </select>
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}