import styles from '../styles/formheader.module.css';
import React from 'react';

type FormHeaderProps = {
  title: string;
  onClose: () => void;
};

const FormHeader: React.FC<FormHeaderProps> = ({ title, onClose }) => {
  return (
    <div className={styles.header}>
      <div className={styles.logoBlock}>
        <h1 className={styles.logo}>Groupten</h1>
        <p className={styles.subtitle}>Project Management Services</p>
      </div>
      <button className={styles.close} onClick={onClose}>✕</button>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
};

export default FormHeader;
