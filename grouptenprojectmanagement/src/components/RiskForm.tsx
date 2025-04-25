import styles from '../styles/riskform.module.css';
import React, { useState } from 'react';
import FormHeader from './FormHeader';

type RiskFormProps = {
  initialData?: {
    name: string;
    description: string;
    likelihood: string;
    rating: string;
    response: string;
    impact: string;
  };
  onClose: () => void;
  onSave: (data: any) => void;
  onDelete?: () => void;
};

const impactLevels = ['Critical', 'High', 'Medium', 'Low', 'Minimal'];

const RiskForm: React.FC<RiskFormProps> = ({ initialData, onClose, onSave, onDelete }) => {
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    description: initialData?.description || '',
    likelihood: initialData?.likelihood || '',
    rating: initialData?.rating || '',
    response: initialData?.response || '',
    impact: initialData?.impact || 'Medium',
  });

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImpactClick = (level: string) => {
    setFormData({ ...formData, impact: level });
  };

  return (
    <div className={styles.card}>
      <FormHeader title="Risk Form" onClose={onClose} />

      <h1 className={styles.riskTitle}>{formData.name || 'Risk Name'}</h1>

      <form className={styles.form}>
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
        <textarea name="likelihood" placeholder="Likelihood" value={formData.likelihood} onChange={handleChange} />
        <textarea name="rating" placeholder="Risk Rating" value={formData.rating} onChange={handleChange} />

        <div className={styles.impactBox}>
          <p>Impact</p>
          {impactLevels.map(level => (
            <div
              key={level}
              className={`${styles.impactItem} ${formData.impact === level ? styles.selected : ''}`}
              onClick={() => handleImpactClick(level)}
            >
              <span className={`${styles.dot} ${styles[level.toLowerCase()]}`}></span>
              {level}
            </div>
          ))}
        </div>

        <textarea name="response" placeholder="Response" value={formData.response} onChange={handleChange} />

        <div className={styles.actions}>
          {onDelete && <button type="button" className={styles.delete} onClick={onDelete}>Delete</button>}
          <button type="button" className={styles.save} onClick={() => onSave(formData)}>Save</button>
        </div>
      </form>
    </div>
  );
};

export default RiskForm;
