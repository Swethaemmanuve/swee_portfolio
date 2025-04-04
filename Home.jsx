import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '../styles/Home.css';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.section 
      className="home-section"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      exit={{ opacity: 0 }}
    >
      <div className="home-content">
        <motion.div className="text-zone" variants={containerVariants}>
          <motion.h1 variants={itemVariants}>
            Hi, <br />I'm <span className="highlight">Swetha</span>
            <br />
          </motion.h1>
          
          <motion.p variants={itemVariants}>
          <p>Fullstack Developer</p>
          </motion.p>
          
          <motion.div className="cta-buttons" variants={itemVariants}>
            <Link to="/contact">
              <motion.button 
                className="primary-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.button>
            </Link>
            <Link to="/projects">
              <motion.button 
                className="secondary-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Work
              </motion.button>
            </Link>
          </motion.div>
          
          <motion.div className="social-icons" variants={itemVariants}>
            <motion.a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noreferrer"
              whileHover={{ y: -5, color: '#6e5494' }}
            >
              <FaGithub />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/swetha-emmanuvel/" 
              target="_blank" 
              rel="noreferrer"
              whileHover={{ y: -5, color: '#0077b5' }}
            >
              <FaLinkedin />
            </motion.a>
     
          </motion.div>
        </motion.div>
        
 
      </div>
      
      <motion.div 
        className="scroll-down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span>scroll down</span>
        <motion.div 
          className="arrow"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          ↓
        </motion.div>
      </motion.div>
      
    </motion.section>
    
  );
};

export default Home;