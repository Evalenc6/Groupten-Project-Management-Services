import Header from '../../../../components/Header';
import styles from '../../../../styles/analyticpage.module.css';
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'Project Manager', hours: 180 },
  { name: 'Employee1', hours: 300 },
  { name: 'George Carlin', hours: 340 },
  { name: 'Jimmy Carr', hours: 310 },
  { name: 'David Mitchell', hours: 260 },
  { name: 'Employee2', hours: 290 },
  { name: 'Employee3', hours: 400 },
  { name: 'Employee4', hours: 370 },
  { name: 'Employee5', hours: 340 },
  { name: 'Employee6', hours: 310 },
  { name: 'Employee7', hours: 280 },
];

const AnalyticsPage: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Analytics</h1>
        <div className={styles.container}>
          <div className={styles.sidebar}>
            <button className={styles.active}>Effort Distribution</button>
            <button>Requirement Progress</button>
            <button>Generate Reports</button>
          </div>

          <div className={styles.chartBox}>
            <h3>Effort Distribution for Current Month</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" angle={-30} textAnchor="end" interval={0} height={80} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="hours" fill="#90caf9" />
              </BarChart>
            </ResponsiveContainer>
            <button className={styles.printButton} onClick={handlePrint}>Print</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnalyticsPage;
