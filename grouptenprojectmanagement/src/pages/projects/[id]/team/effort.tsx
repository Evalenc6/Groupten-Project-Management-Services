import Header from '../../../../components/Header';
import styles from '../../../../styles/effortpage.module.css';
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const effortStats = [
  { label: 'Project Total Hours', value: 640 },
  { label: 'Month Total Hours', value: 91 },
  { label: 'Week Total Hours', value: 32 },
  { label: 'Average Monthly Hours', value: 74.6 },
  { label: 'Average Weekly Hours', value: 32.4 },
  { label: 'Average Daily Hours', value: 6.4 },
  { label: 'Another Stat', value: 0 },
  { label: 'Another Stat', value: 0 },
  { label: 'Another Stat', value: 0 },
];

const monthlyData = [
  { month: 'Dec', hours: 1023 },
  { month: 'Jan', hours: 1610 },
  { month: 'Feb', hours: 1943 },
  { month: 'Mar', hours: 1680 },
  { month: 'Apr', hours: 1642 },
  { month: 'May', hours: 1320 },
  { month: 'Jun', hours: 1653 },
  { month: 'Jul', hours: 2040 },
  { month: 'Aug', hours: 1452 },
  { month: 'Sep', hours: 1890 },
  { month: 'Oct', hours: 1674 },
  { month: 'Nov', hours: 1322 },
];

const EffortPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Effort</h1>
        <div className={styles.layout}>
          {/* Left Sidebar */}
          <div className={styles.sidebar}>
            <button className={styles.action}>New Effort Log</button>
            <button className={styles.action}>Past Effort Logs</button>
          </div>

          {/* Main Grid */}
          <div className={styles.stats}>
            {effortStats.map((stat, index) => (
              <div key={index} className={styles.card}>
                <h2>{stat.value}</h2>
                <p>{stat.label}</p>
              </div>
            ))}

            <div className={styles.chartBox}>
              <h3>Total Project Hours in the last 12 months</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="hours" fill="#90caf9" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EffortPage;
