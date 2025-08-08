import { useState, useEffect } from 'react';
import API from '../utils/api';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [requests, setRequests] = useState([]);
  const [loc, setLoc] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    const raw = localStorage.getItem('user');
    if (!raw) { router.push('/login'); return; }
    setUser(JSON.parse(raw));
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const res = await API.get('/api/requests');
      setRequests(res.data);
    } catch (err) { console.error(err); }
  };

  const getLocation = () => {
    if (!navigator.geolocation) return alert('No geolocation');
    navigator.geolocation.getCurrentPosition(p => setLoc({ lat: p.coords.latitude, lng: p.coords.longitude }));
  };

  const createRequest = async () => {
    try {
      const res = await API.post('/api/requests', { breakdownLocation: loc });
      alert('Request created');
      fetchRequests();
    } catch (err) { console.error(err); alert('Create failed'); }
  };

  return (
    <div style={{ maxWidth: 800, margin: '20px auto' }}>
      <h1>Dashboard</h1>
      <p>Welcome {user?.name} ({user?.role})</p>
      <div>
        <button onClick={getLocation}>Get My Location</button>
        <button onClick={createRequest}>Report Breakdown</button>
      </div>
      <h3>Your Requests</h3>
      <ul>
        {requests.map(r => (
          <li key={r._id}>
            {r.status} — <a href={`/track/${r._id}`}>Track</a>
          </li>
        ))}
      </ul>
    </div>
  );
}