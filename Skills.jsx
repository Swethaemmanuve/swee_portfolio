import React from 'react';
import { motion } from 'framer-motion';
import SkillBar from '../components/SkillBar';
import { FaReact, FaNodeJs, FaTools } from 'react-icons/fa';
import '../styles/Skills.css';

const Skills = () => {
  const frontendSkills = [
    { skill: 'ReactJS', percentage: 85 },
    { skill: 'NextJS', percentage: 85 },
    { skill: 'JavaScript', percentage: 80 },
    { skill: 'TypeScript', percentage: 75 },
    { skill: 'HTML/CSS', percentage: 85 },
    { skill: 'Redux', percentage: 75 },
  ];

  const backendSkills = [
    { skill: 'NodeJs', percentage: 85 },
    { skill: 'Express', percentage: 80 },
    { skill: 'MySQL', percentage: 75 },
    { skill: 'Firebase', percentage: 80 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.section 
      className="skills-section"
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
          Skills & Expertise
        </motion.h2>
        
        <div className="skills-content">
          <motion.div 
            className="skills-categories"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="skill-category" variants={itemVariants}>
              <div className="category-header">
                <FaReact className="category-icon" />
                <h3>Frontend Development</h3>
              </div>
              <div className="skillbars">
                {frontendSkills.map((item, index) => (
                  <SkillBar 
                    key={index} 
                    skill={item.skill} 
                    percentage={item.percentage} 
                  />
                ))}
              </div>
            </motion.div>
            
            <motion.div className="skill-category" variants={itemVariants}>
              <div className="category-header">
                <FaNodeJs className="category-icon" />
                <h3>Backend Development</h3>
              </div>
              <div className="skillbars">
                {backendSkills.map((item, index) => (
                  <SkillBar 
                    key={index} 
                    skill={item.skill} 
                    percentage={item.percentage} 
                  />
                ))}
              </div>
            </motion.div>
            
            <motion.div className="skill-category" variants={itemVariants}>
              <div className="category-header">
                <FaTools className="category-icon" />
                <h3>Tools & Workflow</h3>
              </div>
              <div className="tools-grid">
                {['Git', 'Jest', 'CI/CD'].map((tool, index) => (
                  <motion.div 
                    key={index} 
                    className="tool-item"
                    whileHover={{ scale: 1.05, backgroundColor: '#5d5dff20' }}
                  >
                    {tool}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="skills-summary"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3>My Development</h3>
            <p>I'm passionate about creating clean, efficient, and maintainable code. With a strong focus on user experience, I build applications that are not only functional but also intuitive and accessible.</p>
            
            <h3>Key Strengths</h3>
            <ul>
              <li>Building responsive, performant React applications</li>
              <li>Implementing complex state management solutions</li>
              <li>Creating reusable component libraries</li>
              <li>Optimizing applications for maximum speed</li>
              <li>Developing RESTful APIs and backend services</li>
            </ul>
            
            <h3>Always Learning</h3>
            <p>Currently expanding my knowledge in:</p>
            <div className="learning-badges">
              {[ 'GraphQL', 'AWS', 'React Native'].map((item, index) => (
                <span key={index} className="learning-badge">{item}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;