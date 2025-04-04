import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-logo">
          <h3>Swetha</h3>
          <p>Fullstack Developer</p>
        </div>
        
        <div className="footer-links">
          <div className="footer-nav">
            <h4>Navigation</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/skills">Skills</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-social">
            <h4>Connect</h4>
            <div className="social-links">
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
         
            </div>
          </div>
        </div>
      </div>
      
      <div className="copyright">
        <div className="container">
        <p>&copy; {new Date().getFullYear()}</p>      
        </div>
      </div>
    </footer>
  );
};

export default Footer;