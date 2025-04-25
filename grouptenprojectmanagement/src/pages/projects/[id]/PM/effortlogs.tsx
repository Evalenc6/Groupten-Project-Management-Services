import Header from '../../../../components/Header';
import styles from '../../../../styles/effortlogs.module.css';
import React, { useState } from 'react';

type EffortLog = {
  id: number;
  initials: string;
  date: string;
  hours: number;
  type: string;
  task: string;
  description: string;
};

const dummyLogs: EffortLog[] = [
  { id: 1, initials: 'JS', date: '06/01/2025', hours: 23, type: 'Requirement', task: 'Requirement1', description: 'Description that runs off the page with ellipses...' },
  { id: 2, initials: 'JC', date: '05/31/2025', hours: 10, type: 'Requirement', task: 'Requirement2', description: 'Description that runs off the page with ellipses...' },
  { id: 3, initials: 'DM', date: '05/30/2025', hours: 12, type: 'Requirement', task: 'Requirement3', description: 'Description that runs off the page with ellipses...' },
  { id: 4, initials: 'GC', date: '05/29/2025', hours: 11, type: 'Meetings', task: '-', description: 'Team sync meeting...' },
  // ... more logs
];

const ManagerEffortLogsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLogs, setSelectedLogs] = useState<number[]>([]);

  const filteredLogs = dummyLogs.filter(log =>
    log.initials.toLowerCase().includes(searchTerm.toLowerCase()) ||
    log.task.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleSelect = (id: number) => {
    setSelectedLogs((prev) =>
      prev.includes(id) ? prev.filter((logId) => logId !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedLogs.length === filteredLogs.length) {
      setSelectedLogs([]);
    } else {
      setSelectedLogs(filteredLogs.map(log => log.id));
    }
  };

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.headerRow}>
          <h1>Effort Logs</h1>
          <input
            type="text"
            placeholder="Search"
            className={styles.search}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <table className={styles.table}>
          <thead>
            <tr>
              <th></th>
              <th>Select All <input type="checkbox" checked={selectedLogs.length === filteredLogs.length} onChange={toggleSelectAll} /></th>
              <th>Date</th>
              <th>Hours</th>
              <th>Type</th>
              <th>Task</th>
              <th>Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredLogs.map((log) => (
              <tr key={log.id}>
                <td>
                  <div className={styles.initials}>{log.initials}</div>
                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedLogs.includes(log.id)}
                    onChange={() => toggleSelect(log.id)}
                  />
                </td>
                <td>{log.date}</td>
                <td>{log.hours} hr</td>
                <td>{log.type}</td>
                <td>{log.task}</td>
                <td className={styles.desc}>{log.description}</td>
                <td className={styles.actions}>
                  <button>Open</button>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManagerEffortLogsPage;
