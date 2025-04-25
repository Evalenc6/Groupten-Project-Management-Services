import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/login'); // push instead of replace for history behavior
    }, 100); // slight delay so Next.js doesn't freak out

    return () => clearTimeout(timer); // cleanup
  }, [router]);

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      flexDirection: 'column',
      fontFamily: 'Segoe UI, sans-serif'
    }}>
      <h1>Redirecting to login...</h1>
      <p>If you are not redirected, <a href="/login">click here</a>.</p>
    </div>
  );
}
