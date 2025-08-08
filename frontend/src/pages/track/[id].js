import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import API from '../../utils/api';

export default function Track() {
  const router = useRouter();
  const { id } = router.query;
  const [req, setReq] = useState(null);

  useEffect(() => {
    if (!id) return;
    let mounted = true;
    const poll = async () => {
      try {
        const res = await API.get(`/api/requests/${id}`);
        if (mounted) setReq(res.data);
      } catch (err) { console.error(err); }
    };
    poll();
    const iv = setInterval(poll, 5000); // poll every 5s
    return () => { mounted = false; clearInterval(iv); };
  }, [id]);

  if (!req) return <p>Loading...</p>;
  return (
    <div style={{ maxWidth: 800, margin: '20px auto' }}>
      <h1>Tracking Request</h1>
      <p>Status: {req.status}</p>
      <p>Customer: {req.customer?.name}</p>
      <p>Mechanic: {req.mechanic?.name || 'Not assigned yet'}</p>
      <p>Breakdown location: {req.breakdownLocation?.lat}, {req.breakdownLocation?.lng}</p>
      <p>ETA: {req.etaMinutes ?? 'N/A'} minutes</p>
    </div>
  );
}