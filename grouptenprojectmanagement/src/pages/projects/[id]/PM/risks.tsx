import Header from '../../../../components/Header';
import styles from '../../../../styles/managerrisks.module.css';
import React from 'react';
import { useRouter } from 'next/router';

const risks = [
  { level: 'Critical', description: 'Description of the risk.', color: 'critical' },
  { level: 'High', description: 'Description of the risk.', color: 'high' },
  { level: 'Med', description: 'Description of the risk.', color: 'medium' },
  { level: 'Med', description: 'Description of the risk.', color: 'medium' },
  { level: 'Low', description: 'Description of the risk.', color: 'low' },
  { level: 'Min', description: 'Description of the risk.', color: 'minimal' },
  { level: 'Min', description: 'Description of the risk.', color: 'minimal' },
];

const stats = [
  { label: 'Total Risks', value: 7 },
  { label: 'Active Management', value: 1 },
  { label: 'Risks Closed', value: 2 },
  { label: 'Triggered Risks', value: 3 },
];

const ManagerRisksPage: React.FC = () => {
  const router = useRouter();

  const handleRiskClick = (risk: any) => {
    alert(`Open editor for: ${risk.level} Risk`);
  };

  const handleAddRisk = () => {
    alert('Open Add Risk Modal');
  };

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Risks</h1>
        <div className={styles.grid}>
          {risks.map((risk, index) => (
            <div
              key={index}
              className={`${styles.card} ${styles[risk.color]}`}
              onClick={() => handleRiskClick(risk)}
            >
              <div className={styles.icon}>❗</div>
              <div>
                <h3>{risk.level} Risk</h3>
                <p>{risk.description}</p>
              </div>
            </div>
          ))}

          <div className={`${styles.card} ${styles.addCard}`} onClick={handleAddRisk}>
            <div className={styles.addIcon}>➕</div>
            <p>Add Risk</p>
          </div>
        </div>

        <div className={styles.statsRow}>
          {stats.map((s, i) => (
            <div key={i} className={styles.statBox}>
              <h3>{s.value}</h3>
              <p>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ManagerRisksPage;
