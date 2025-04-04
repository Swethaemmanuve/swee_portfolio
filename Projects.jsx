import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import '../styles/Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with React, Node.js, and MongoDB',
      image: '/images/project1.jpg',
      category: 'fullstack',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux'],
      githubLink: 'https://github.com/yourusername/ecommerce',
      demoLink: 'https://yourdemo.com/ecommerce'
    },
    {
      id: 2,
      title: 'Real-Time Chat Application',
      description: 'Socket.io powered chat app with user authentication and private messaging',
      image: '/images/project2.jpg',
      category: 'frontend',
      technologies: ['React', 'Socket.io', 'CSS Modules', 'Firebase'],
      githubLink: 'https://github.com/yourusername/chat-app',
      demoLink: 'https://yourdemo.com/chat'
    },
    {
      id: 3,
      title: 'Task Management Dashboard',
      description: 'Drag-and-drop task management with data visualization',
      image: '/images/project3.jpg',
      category: 'frontend',
      technologies: ['React', 'TypeScript', 'react-beautiful-dnd', 'Chart.js'],
      githubLink: 'https://github.com/yourusername/task-manager',
      demoLink: 'https://yourdemo.com/tasks'
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.section 
      className="projects-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Check out some of my recent work
        </motion.p>
        
        <motion.div 
          className="filter-buttons"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilter('all')}
          >
            All
          </motion.button>
          <motion.button 
            className={`filter-btn ${filter === 'frontend' ? 'active' : ''}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilter('frontend')}
          >
            Frontend
          </motion.button>
          <motion.button 
            className={`filter-btn ${filter === 'fullstack' ? 'active' : ''}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilter('fullstack')}
          >
            Full Stack
          </motion.button>
        </motion.div>
        
        <motion.div 
          className="projects-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;