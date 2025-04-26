import styles from '../styles/Header.module.css';
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/router';
const Header: React.FC = () => {
  const router = useRouter();
  var userString = null;
  var user = null;
  try{
    userString = localStorage.getItem('user');
    user = userString ? JSON.parse(userString) : null;  

  }
  catch(error){
    console.log(error)
}
  var email = '';

  if (user) {
    email = user.email;
    console.log('Logged in user email:', email);
  }
  const handleLogout = () =>{
    localStorage.removeItem('user');
    router.push('/login');
  }
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <h1 className={styles.logo}>Groupten</h1>
        <h2 className={styles.subtitle}>Project Management Services</h2>
      </div>
      <div className={styles.right}>
        <span>Admin Tools</span>

        <span>{email}</span>
        <Image
          src="/avatar.png" // Replace this with the avatar path that we will make later
          alt="User Avatar"
          width={40}
          height={40}
          className={styles.avatar}
        />
        <button className={styles.logout} onClick={handleLogout} >Logout</button>
      </div>
    </header>
  );
};

export default Header;
