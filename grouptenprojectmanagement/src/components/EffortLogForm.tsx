import React, { useState } from 'react';
import styles from '../styles/EffortLogForm.module.css';
import FormHeader from './FormHeader';

type EffortLogFormProps = {
  onClose: () => void;
  onSave: (data: any) => void;
  onDelete?: () => void;
};

const taskOptions = [
  'Requirement1', 'Requirement2', 'Requirement3', 'Requirement4',
  'Requirement5', 'Requirement6', 'Requirement7', 'Meetings'
];

const EffortLogForm: React.FC<EffortLogFormProps> = ({ onClose, onSave, onDelete }) => {
  const [description, setDescription] = useState('');
  const [hours, setHours] = useState('');
  const [selectedTasks, setSelectedTasks] = useState<string[]>([]);

  const handleToggleTask = (task: string) => {
    setSelectedTasks(prev =>
      prev.includes(task) ? prev.filter(t => t !== task) : [...prev, task]
    );
  };

  const handleSubmit = () => {
    onSave({
      date: '01/01/2025',
      description,
      hours,
      tasks: selectedTasks
    });
  };

  return (
    <div className={styles.card}>
      <FormHeader title="Effort Log" onClose={onClose} />

      <p className={styles.date}>Date: 01/01/2025</p>

      <textarea
        placeholder="Description of Work"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <textarea
        placeholder="Hours Worked"
        value={hours}
        onChange={(e) => setHours(e.target.value)}
      />

      <div className={styles.tasks}>
        <p>Relevant Tasks</p>
        <div className={styles.checkboxGrid}>
          {taskOptions.map((task) => (
            <label key={task}>
              <input
                type="checkbox"
                checked={selectedTasks.includes(task)}
                onChange={() => handleToggleTask(task)}
              />
              {task}
            </label>
          ))}
        </div>
      </div>

      <div className={styles.actions}>
        {onDelete && (
          <button type="button" className={styles.delete} onClick={onDelete}>
            Delete
          </button>
        )}
        <button type="button" className={styles.save} onClick={handleSubmit}>
          Save
        </button>
      </div>
    </div>
  );
};

export default EffortLogForm;
