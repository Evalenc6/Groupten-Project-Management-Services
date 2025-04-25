import Header from '@/components/Header';
import styles from '../styles/landingpage.module.css';
import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Project1',
    description: 'Project description '.repeat(10),
    deadline: 'Put the description of the schedule deadline here.',
  },
  {
    id: 2,
    title: 'Project2',
    description: 'Project description '.repeat(10),
    deadline: 'Put the description of the schedule deadline here.',
  },
];

const ProjectsPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header/>

      <main className={styles.main}>
        <div className={styles.projectsHeader}>
          <h2>Projects</h2>
          <button className={styles.createButton}>+ New Project</button>
        </div>

        {projects.map((proj) => (
          <div key={proj.id} className={styles.projectCard}>
            <div className={styles.thumbnail}>
              <span className={styles.editIcon}>✏️</span>
              <div className={styles.placeholderImage} />
            </div>
            <div className={styles.projectInfo}>
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <button className={styles.openButton}>Open Project</button>
              <div className={styles.deadline}>
                <strong>Upcoming Deadline</strong>
                <p>{proj.deadline}</p>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default ProjectsPage;
