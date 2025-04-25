import styles from '../styles/Header.module.css';
import Image from 'next/image';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <h1 className={styles.logo}>Groupten</h1>
        <h2 className={styles.subtitle}>Project Management Services</h2>
      </div>
      <div className={styles.right}>
        <span>Admin Tools</span>
        <span>Username</span>
        <Image
          src="/avatar.png" // Replace this with the avatar path that we will make later
          alt="User Avatar"
          width={40}
          height={40}
          className={styles.avatar}
        />
        <button className={styles.logout}>Logout</button>
      </div>
    </header>
  );
};

export default Header;
