import Header from '../../../components/Header';
import styles from '../../../styles/employeeslist.module.css';
import React from 'react';

const employees = [
  {
    initials: 'JS',
    lastName: 'Lastname',
    firstName: 'Firstname',
    role: 'Project Manager',
    projects: ['Project1', 'Project2'],
    requirements: ['Requirement1', 'Requirement2', 'Requirement3'],
  },
  {
    initials: 'JC',
    lastName: 'Lastname',
    firstName: 'Firstname',
    role: 'Team Member',
    projects: ['Project1', 'Project2'],
    requirements: ['Requirement1', 'Requirement4', 'Requirement7'],
  },
  // ...add more mock entries
];

const EmployeeList: React.FC = () => {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Employees Database</h1>
        <button className={styles.addBtn}>Add Employee</button>

        <div className={styles.listContainer}>
          {employees.map((emp, index) => (
            <div key={index} className={styles.row}>
              <div className={styles.initials}>{emp.initials}</div>
              <div className={styles.info}>
                {emp.lastName} - {emp.firstName} - {emp.role} - {emp.projects.join(', ')} - {emp.requirements.join(', ')}...
              </div>
              <div className={styles.actions}>
                <button>Contact</button>
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default EmployeeList;
