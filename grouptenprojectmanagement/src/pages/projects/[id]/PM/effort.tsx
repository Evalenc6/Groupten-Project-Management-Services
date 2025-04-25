import Header from '../../../../components/Header';
import styles from '../../../../styles/managereffortpage.module.css';
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

const effortStats = [
  { label: 'Project Total Hours', value: 21753 },
  { label: 'Month Total Hours', value: 1604 },
  { label: 'Week Total Hours', value: 212 },
  { label: 'Average Monthly Hours', value: 1773.1 },
  { label: 'Average Weekly Hours', value: 204.7 },
  { label: 'Average Daily Hours', value: 6.4 },
  { label: 'Another Stat', value: 0 },
  { label: 'Another Stat', value: 0 },
  { label: 'Another Stat', value: 0 },
];

const monthlyData = [
  { month: 'Dec', hours: 1023 },
  { month: 'Jan', hours: 1750 },
  { month: 'Feb', hours: 1900 },
  { month: 'Mar', hours: 1800 },
  { month: 'Apr', hours: 1650 },
  { month: 'May', hours: 1300 },
  { month: 'Jun', hours: 1700 },
  { month: 'Jul', hours: 2000 },
  { month: 'Aug', hours: 1500 },
  { month: 'Sep', hours: 1850 },
  { month: 'Oct', hours: 1700 },
  { month: 'Nov', hours: 1400 },
];

const ManagerEffortPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Effort</h1>
        <div className={styles.layout}>
          {/* Sidebar */}
          <div className={styles.sidebar}>
            <button>Employee Effort Logs</button>
            <button>Last Week's Effort Logs</button>
            <button>Last Month's Effort Logs</button>
          </div>

          {/* Stats + Chart */}
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

export default ManagerEffortPage;
