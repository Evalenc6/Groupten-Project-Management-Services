import Header from '../../../components/Header';
import styles from '../../../styles/teamdashboard.module.css';
import React from 'react';

const teammates = [
  'Randy McFeltface',
  'George Carlin',
  'Greg Davis',
  'Bob Mortimer',
  'David Mitchell',
  'Jimmy Carr',
];

const TeamDashboard: React.FC = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        {/* Left Content */}
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
            <button className={styles.active}>Analytics</button>
          </div>
        </div>

        {/* Right Panel */}
        <div className={styles.right}>
          <div className={styles.card}>
            <p className={styles.managerName}>Project Manager Name</p>
            <p>(555)-123-4567</p>
            <p>example@email.com</p>
            <p>Office Hours: 9–17 EST</p>
            <div className={styles.icons}>
              <span>🔗</span>
              <span>📞</span>
              <span>📊</span>
              <span>💻</span>
              <span>📄</span>
            </div>
          </div>

          <div className={styles.teammates}>
            {teammates.map((name, idx) => (
              <div key={idx} className={styles.teammate}>
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamDashboard;
