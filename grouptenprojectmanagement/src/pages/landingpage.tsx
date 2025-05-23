import Header from '@/components/Header';
import styles from '../styles/landingpage.module.css';
import React, { useEffect, useState } from 'react';
import NewProjectForm from '@/components/ProjectForm';

const ProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [showNewProjectForm, setShowNewProjectForm] = useState(false);
  const createProject = () =>{
    setShowNewProjectForm(true);
  }
  const handleCloseForm = () =>{
    setShowNewProjectForm(false);
  }

  const handleSaveProject  = (newProject: any) =>{
    const updatedProject = {
      ...newProject,
      risks: [],
      effortlogs: [],
      requirements: [],
    };
    setProjects(prev => [...prev, updatedProject]);
    setShowNewProjectForm(false);
  }
  useEffect(() => {
    const fetchProjects = async () => {
      const userString = localStorage.getItem('user');
      const user = userString ? JSON.parse(userString) : null;

      if (!user) return;

      try {
        const response = await fetch('http://localhost:3002/findProjects', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: user.email }),
        });

        if (response.ok) {
          const data = await response.json();
          localStorage.setItem('projects', JSON.stringify(data))
          console.log(data.projects);
          setProjects(data.projects); 
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
          <button className={styles.createButton} onClick={createProject}>+ New Project</button>
        </div>

        {showNewProjectForm && (
          <div className={styles.overlay}>
            <NewProjectForm onClose={handleCloseForm} onSave={handleSaveProject} />
          </div>
        )}


        {projects.map((proj, index) => (
          <div key={index} className={styles.projectCard}>
            <div className={styles.thumbnail}>
              <span className={styles.editIcon}>✏️</span>
              <div className={styles.placeholderImage} />
            </div>
            <div className={styles.projectInfo}>
              <h3>{proj.nameOfProject}</h3>
              <p>{proj.projectDescription}</p>
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
