import styles from '../styles/Login.module.css';
import { useState } from 'react';
import { useRouter } from 'next/router';
import {User} from '../../UserClass'

export default function Login() {
  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('');
  const router = useRouter();
  
  const onSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:3002/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log("data" , data.user)
        localStorage.setItem('user',JSON.stringify(data.user));
        router.push('/landingpage')
      } else {
        alert('Invalid credentials.');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };
  
  return (
    <div className={styles.container}>
      <h1 className={styles.logo}>Groupten</h1>
      <h2 className={styles.subtitle}>Project Management Services</h2>
      <div className={styles.card}>
      <form id="loginForm" onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        
        <label>Email</label>
        <input
          id = "inputform"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
          placeholder="example@email.com"
        />
        <label>Password</label>
        <input
          id = "inputform"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
          placeholder="**************"
        />
        <button type="submit" className={styles.button}>Sign In</button>
      </form>
      <a className={styles.a} href="#">Forgot password?</a>

      </div>
    </div>
  );
}
