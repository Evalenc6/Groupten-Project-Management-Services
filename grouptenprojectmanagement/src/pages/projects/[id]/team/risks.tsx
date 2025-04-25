import Header from '../../../../components/Header';
import styles from '../../../../styles/riskpage.module.css';
import React from 'react';

const risks = [
  { level: 'Critical', description: 'Description of the Risk. Clicking anywhere on the card will open the Risk Popup.', color: 'critical' },
  { level: 'High', description: 'Description of the Risk', color: 'high' },
  { level: 'Med', description: 'Description of the Risk', color: 'medium' },
  { level: 'Med', description: 'Description of the Risk', color: 'medium' },
  { level: 'Low', description: 'Description of the Risk', color: 'low' },
  { level: 'Min', description: 'Description of the Risk', color: 'minimal' },
  { level: 'Min', description: 'Description of the Risk', color: 'minimal' },
];

const RisksPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Risks</h1>
        <div className={styles.grid}>
          {risks.map((risk, index) => (
            <div key={index} className={`${styles.card} ${styles[risk.color]}`}>
              <div className={styles.icon}>ℹ️</div>
              <div>
                <h3 className={styles.level}>{risk.level} Risk</h3>
                <p>{risk.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RisksPage;
