import Header from '@/components/Header';
import styles from '../styles/landingpage.module.css';
import React, { useEffect, useState } from 'react';

const ProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const userString = localStorage.getItem('user');
      const user = userString ? JSON.parse(userString) : null;

      if (!user) return;

      try {
        const response = await fetch('http://localhost:3001/findProjects', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: user.email }),
        });

        if (response.ok) {
          const data = await response.json();
          setProjects(data.projects); // ⬅️ update state
        } else {
          alert('Could not fetch projects');
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects(); 
  }, []);

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <div className={styles.projectsHeader}>
          <h2>Projects</h2>
          <button className={styles.createButton}>+ New Project</button>
        </div>

        {projects.map((proj, index) => (
          <div key={index} className={styles.projectCard}>
            <div className={styles.thumbnail}>
              <span className={styles.editIcon}>✏️</span>
              <div className={styles.placeholderImage} />
            </div>
            <div className={styles.projectInfo}>
              <h3>{proj.nameOfProject}</h3>
              <p>{proj.requirements?.length ?? 0} requirements</p>
              <button className={styles.openButton}>Open Project</button>
              <div className={styles.deadline}>
                <strong>Upcoming Deadline</strong>
                <p>{proj.requirements?.[0]?.[2] ?? 'No upcoming deadlines'}</p>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default ProjectsPage;
