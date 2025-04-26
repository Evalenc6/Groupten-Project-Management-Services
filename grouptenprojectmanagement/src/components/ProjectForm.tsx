import React, { useState } from 'react';
import styles from '../styles/effortlogform.module.css'; // You can reuse EffortLogForm styles or make a new one
import FormHeader from './FormHeader';

type NewProjectFormProps = {
  onClose: () => void;
  onSave: (data: any) => void;
};

const NewProjectForm: React.FC<NewProjectFormProps> = ({ onClose, onSave }) => {
  const [nameOfProject, setNameOfProject] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [admins, setAdmins] = useState<string[]>([]);
  const [pms, setPms] = useState<string[]>([]);
  const [teamMembers, setTeamMembers] = useState<string[]>([]);

  const [adminInput, setAdminInput] = useState('');
  const [pmInput, setPmInput] = useState('');
  const [teamMemberInput, setTeamMemberInput] = useState('');

  const handleAddAdmin = () => {
    if (adminInput.trim()) {
      setAdmins(prev => [...prev, adminInput.trim()]);
      setAdminInput('');
    }
  };

  const handleAddPm = () => {
    if (pmInput.trim()) {
      setPms(prev => [...prev, pmInput.trim()]);
      setPmInput('');
    }
  };

  const handleAddTeamMember = () => {
    if (teamMemberInput.trim()) {
      setTeamMembers(prev => [...prev, teamMemberInput.trim()]);
      setTeamMemberInput('');
    }
  };

  const handleSubmit = () => {
    onSave({
      nameOfProject,
      projectDescription,
      admin: admins,
      pm: pms,
      team_members: teamMembers,
      risks: [],
      effortlogs: [],
      requirements: []
    });
  };

  return (
    <div className={styles.card}>
      <FormHeader title="New Project" onClose={onClose} />

      <input
        type="text"
        placeholder="Project Name"
        value={nameOfProject}
        onChange={(e) => setNameOfProject(e.target.value)}
      />

      <textarea
        placeholder="Project Description"
        value={projectDescription}
        onChange={(e) => setProjectDescription(e.target.value)}
      />

      <div className={styles.tasks}>
        <p>Admins</p>
        <div className={styles.inputRow}>
          <input
            type="text"
            placeholder="Admin Email"
            value={adminInput}
            onChange={(e) => setAdminInput(e.target.value)}
          />
          <button type="button" onClick={handleAddAdmin}>Add</button>
        </div>
        <ul>
          {admins.map((admin, idx) => (
            <li key={idx}>{admin}</li>
          ))}
        </ul>
      </div>

      <div className={styles.tasks}>
        <p>Project Managers (PMs)</p>
        <div className={styles.inputRow}>
          <input
            type="text"
            placeholder="PM Email"
            value={pmInput}
            onChange={(e) => setPmInput(e.target.value)}
          />
          <button type="button" onClick={handleAddPm}>Add</button>
        </div>
        <ul>
          {pms.map((pm, idx) => (
            <li key={idx}>{pm}</li>
          ))}
        </ul>
      </div>

      <div className={styles.tasks}>
        <p>Team Members</p>
        <div className={styles.inputRow}>
          <input
            type="text"
            placeholder="Team Member Email"
            value={teamMemberInput}
            onChange={(e) => setTeamMemberInput(e.target.value)}
          />
          <button type="button" onClick={handleAddTeamMember}>Add</button>
        </div>
        <ul>
          {teamMembers.map((member, idx) => (
            <li key={idx}>{member}</li>
          ))}
        </ul>
      </div>

      <div className={styles.actions}>
        <button type="button" className={styles.save} onClick={handleSubmit}>
          Save Project
        </button>
      </div>
    </div>
  );
};

export default NewProjectForm;
