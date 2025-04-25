import Header from '../../../../components/Header';
import styles from '../../../../styles/requirementpage.module.css';
import React from 'react';

type Requirement = {
  id: string;
  title: string;
  status: 'Pending' | 'In Progress' | 'Completed';
  type: 'Functional' | 'Non-Functional';
  description: string;
};

const requirements: Requirement[] = [
  {
    id: 'r1',
    title: 'Requirement1',
    status: 'Pending',
    type: 'Functional',
    description: 'Description that tapers off after a certain amount of words so that it doesn’t push...',
  },
  {
    id: 'r2',
    title: 'Requirement3',
    status: 'In Progress',
    type: 'Functional',
    description: "Body text for whatever you'd like to say...",
  },
  {
    id: 'r3',
    title: 'Requirement4',
    status: 'Completed',
    type: 'Functional',
    description: "Body text for whatever you'd like to say...",
  },
  {
    id: 'r4',
    title: 'Requirement5',
    status: 'Pending',
    type: 'Functional',
    description: "Body text for whatever you'd like to say...",
  },
  {
    id: 'r5',
    title: 'Requirement1',
    status: 'Pending',
    type: 'Non-Functional',
    description: "Body text for whatever you'd like to say...",
  },
  {
    id: 'r6',
    title: 'Requirement3',
    status: 'Pending',
    type: 'Non-Functional',
    description: "Body text for whatever you'd like to say...",
  },
];

const RequirementsPage: React.FC = () => {
  const groupByType = (type: 'Functional' | 'Non-Functional') =>
    requirements.filter((r) => r.type === type);

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Requirements</h1>

        <div className={styles.section}>
          <h2>Functional</h2>
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
          <h2>Non-Functional</h2>
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

export default RequirementsPage;
