import { useEffect, useState } from 'react';
import API from '../utils/api';

export default function MechanicPage() {
  const [list, setList] = useState([]);
  useEffect(() => { fetchAssigned(); }, []);
  const fetchAssigned = async () => {
    try { const res = await API.get('/api/mechanic/assigned'); setList(res.data); } catch (err) { console.error(err); }
  };
  return (
    <div style={{ maxWidth: 800, margin: '20px auto' }}>
      <h1>Mechanic Dashboard</h1>
      <ul>
        {list.map(r => (
          <li key={r._id}>{r.status} — {r.customer?.name}</li>
        ))}
      </ul>
    </div>
  );
}