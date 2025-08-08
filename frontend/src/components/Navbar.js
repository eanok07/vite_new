import Link from 'next/link';
import useAuth from '../hooks/useAuth';
export default function Navbar() {
  const { user, logout } = useAuth();
  return (
    <nav style={{ padding: 12, borderBottom: '1px solid #eee' }}>
      <Link href="/">Home</Link> | {' '}
      {user ? (
        <>
          <Link href="/dashboard">Dashboard</Link> | {' '}
          <a onClick={logout} style={{ cursor: 'pointer' }}>Logout</a>
        </>
      ) : (
        <>
          <Link href="/login">Login</Link> | {' '}
          <Link href="/">Register</Link>
        </>
      )}
    </nav>
  );
}