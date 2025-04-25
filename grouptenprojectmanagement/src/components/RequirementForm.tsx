import React, { useState } from 'react';
import styles from '../styles/RequirementForm.module.css';
import FormHeader from './FormHeader';

type RequirementFormProps = {
  onClose: () => void;
  onSave: (data: any) => void;
  onDelete?: () => void;
};

const priorityLevels = ['Critical', 'High', 'Medium', 'Low', 'Minimal'];
const progressOptions = ['Pending', 'In Progress', 'Complete'];
const employeeList = [
  'Employee1', 'Employee2', 'Employee3', 'Employee4',
  'Employee5', 'Employee6', 'Employee7', 'Employee8'
];

const RequirementForm: React.FC<RequirementFormProps> = ({ onClose, onSave, onDelete }) => {
  const [description, setDescription] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [functional, setFunctional] = useState(true);
  const [priority, setPriority] = useState('Medium');
  const [progress, setProgress] = useState('Pending');
  const [tasks, setTasks] = useState('');
  const [assignedEmployees, setAssignedEmployees] = useState<string[]>([]);

  const toggleEmployee = (name: string) => {
    setAssignedEmployees(prev =>
      prev.includes(name) ? prev.filter(e => e !== name) : [...prev, name]
    );
  };

  const handleSubmit = () => {
    onSave({
      description,
      deliveryDate,
      functional,
      priority,
      progress,
      tasks,
      assignedEmployees
    });
  };

  return (
    <div className={styles.card}>
      <FormHeader title="Requirement" onClose={onClose} />

      <form className={styles.form}>
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div className={styles.splitRow}>
          <textarea
            placeholder="Delivery Date"
            value={deliveryDate}
            onChange={(e) => setDeliveryDate(e.target.value)}
          />
          <label className={styles.toggleRow}>
            Functional
            <input
              type="checkbox"
              checked={functional}
              onChange={() => setFunctional(!functional)}
            />
          </label>
        </div>

        <div className={styles.priorityBox}>
          <p>Priority</p>
          {priorityLevels.map((level) => (
            <div
              key={level}
              className={`${styles.priorityItem} ${priority === level ? styles.selected : ''}`}
              onClick={() => setPriority(level)}
            >
              <span className={`${styles.dot} ${styles[level.toLowerCase()]}`}></span>
              {level}
            </div>
          ))}
        </div>

        <div className={styles.progress}>
          <p>Progress</p>
          {progressOptions.map((opt) => (
            <label key={opt}>
              <input
                type="radio"
                name="progress"
                checked={progress === opt}
                onChange={() => setProgress(opt)}
              />
              {opt}
            </label>
          ))}
        </div>

        <textarea
          placeholder="Tasks (Separated by Comma)"
          value={tasks}
          onChange={(e) => setTasks(e.target.value)}
        />

        <div className={styles.assigned}>
          <p>Assigned Employees</p>
          <div className={styles.employeeGrid}>
            {employeeList.map((name) => (
              <label key={name}>
                <input
                  type="checkbox"
                  checked={assignedEmployees.includes(name)}
                  onChange={() => toggleEmployee(name)}
                />
                {name}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.actions}>
          {onDelete && (
            <button type="button" className={styles.delete} onClick={onDelete}>Delete</button>
          )}
          <button type="button" className={styles.save} onClick={handleSubmit}>Save</button>
        </div>
      </form>
    </div>
  );
};

export default RequirementForm;
