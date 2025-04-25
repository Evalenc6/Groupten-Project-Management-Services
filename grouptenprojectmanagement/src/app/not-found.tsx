'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    router.push('/login'); // this uses app router's navigation
  }, [router]);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Segoe UI, sans-serif',
      flexDirection: 'column',
      backgroundColor: '#000',
      color: '#fff'
    }}>
      <h1>Redirecting to login...</h1>
    </div>
  );
}
