import Header from '../../../components/Header';
import styles from '../../../styles/AdminDashboard.module.css';
import React from 'react';

const employees = [
  'Randy McFeltface',
  'George Carlin',
  'Greg Davis',
  'Bob Mortimer',
  'David Mitchell',
  'Jimmy Carr',
];

const AdminDashboard: React.FC = () => {
  return (
    <>
    <Header/>
    <div className={styles.container}>

      {/* Left Column */}
      <div className={styles.left}>
        <h1 className={styles.projectTitle}>Project 1</h1>
        <h3 className={styles.subtitle}>A Program for doing things</h3>
        <p>This program does math and makes the computer do things. More description will be added as requirements are completed.</p>
        <p>Lots of room for the descriptions of things.</p>
        <p>Naming stakeholders and other information.</p>

        <div className={styles.buttonGrid}>
          <button>Risks</button>
          <button>Requirements</button>
          <button>Effort</button>
          <button>Analytics</button>
        </div>
      </div>

      {/* Right Column */}
      <div className={styles.right}>
        <h2>Employees</h2>
        <div className={styles.managerCard}>
          <p className={styles.managerName}>Project Manager Name</p>
          <p>(555)-123-4567</p>
          <p>example@email.com</p>
          <p>Office Hours: 9–17 EST</p>
          <div className={styles.icons}>
            <span>🔗</span>
            <span>📞</span>
            <span>📊</span>
            <span>💻</span>
            <span>📝</span>
            <span>⋯</span>
          </div>
        </div>

        <div className={styles.employeeList}>
          {employees.map((name, index) => (
            <div key={index} className={styles.employee}>
              <p>{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default AdminDashboard;
