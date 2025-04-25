import Header from '../../../../components/Header';
import styles from '../../../../styles/managerrequirementpage.module.css';
import React from 'react';

type Requirement = {
  id: string;
  title: string;
  status: 'Pending' | 'In Progress' | 'Completed';
  type: 'Functional' | 'Non-Functional';
  description: string;
};

const requirements: Requirement[] = [
  { id: '1', title: 'Requirement1', status: 'Pending', type: 'Functional', description: 'Description that tapers off...' },
  { id: '2', title: 'Requirement2', status: 'Completed', type: 'Functional', description: 'Body text for whatever you’d like to say...' },
  { id: '3', title: 'Requirement3', status: 'In Progress', type: 'Functional', description: 'Body text for whatever you’d like to say...' },
  { id: '4', title: 'Requirement4', status: 'Completed', type: 'Functional', description: 'Body text for whatever you’d like to say...' },
  { id: '5', title: 'Requirement5', status: 'Pending', type: 'Functional', description: 'Body text for whatever you’d like to say...' },
  { id: '6', title: 'Requirement6', status: 'Completed', type: 'Functional', description: 'Body text for whatever you’d like to say...' },
  { id: '7', title: 'Requirement1', status: 'Pending', type: 'Non-Functional', description: 'Body text for whatever you’d like to say...' },
  { id: '8', title: 'Requirement2', status: 'Pending', type: 'Non-Functional', description: 'Body text for whatever you’d like to say...' },
  { id: '9', title: 'Requirement3', status: 'Pending', type: 'Non-Functional', description: 'Body text for whatever you’d like to say...' },
];

const ManagerRequirementsPage: React.FC = () => {
  const handleAdd = (type: 'Functional' | 'Non-Functional') => {
    alert(`Open add modal for ${type} requirement`);
  };

  const groupByType = (type: 'Functional' | 'Non-Functional') =>
    requirements.filter((r) => r.type === type);

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Requirements</h1>

        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Functional</h2>
            <button onClick={() => handleAdd('Functional')}>Add Requirement</button>
          </div>
          <div className={styles.grid}>
            {groupByType('Functional').map((req) => (
              <div key={req.id} className={`${styles.card} ${styles[req.status.replace(' ', '').toLowerCase()]}`}>
                <div className={styles.icon}>❗</div>
                <div>
                  <strong>{req.title}</strong>
                  <p className={styles.status}>{req.status}</p>
                  <p className={styles.desc}>{req.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Non-Functional</h2>
            <button onClick={() => handleAdd('Non-Functional')}>Add Requirement</button>
          </div>
          <div className={styles.grid}>
            {groupByType('Non-Functional').map((req) => (
              <div key={req.id} className={`${styles.card} ${styles[req.status.replace(' ', '').toLowerCase()]}`}>
                <div className={styles.icon}>ℹ️</div>
                <div>
                  <strong>{req.title}</strong>
                  <p className={styles.status}>{req.status}</p>
                  <p className={styles.desc}>{req.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ManagerRequirementsPage;
