import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css';

const About = ({ 
  bio = `I’m a Full Stack Developer with 3 years of experience in React.js, Next.js, TypeScript, JavaScript, and Node.js—basically, if it involves scalable web apps and seamless user experiences, I’m in! 🛠️
  
What I Do Best:
• Build blazing-fast, responsive UIs with Framer Motion, Chakra UI & Styled Components
• Ensure secure authentication & smooth data flow using Redux, Supabase & MySQL
• Optimize performance so your app loads faster than your morning coffee kicks in ☕
  
👨‍💻 When I’m not coding…
• I’m either a sleepy panda 😴
• Or experimenting with new recipes (which may or may not set off my smoke alarm 🔥😂)
  
Let’s connect and build something awesome (and bug-free, hopefully)!`,
 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  // Container variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  // Variants for each animated item
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Scroll indicator bouncing animation
  const scrollDownVariants = {
    animate: {
      y: [0, 10, 0],
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        repeat: Infinity
      }
    }
  };

  return (
    <motion.div 
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div 
        className="about-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="about-content">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="main-content"
          >
            {/* Bio Section */}
            <motion.section 
              variants={itemVariants} 
              className="section"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="section-title">Who Am I?</h3>
              <motion.p 
                className="section-text"
                whileHover={{ scale: 1.02 }}
              >
                {bio}
      
              </motion.p>
            </motion.section>
            
            {/* Hobbies Section */}
            <motion.section 
              variants={itemVariants} 
              className="section"
              whileInView="visible"
              viewport={{ once: true }}
            >
              
            </motion.section>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        className="scroll-indicator"
        variants={scrollDownVariants}
        animate="animate"
      >
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12,16.5L6,10.5H18L12,16.5Z" />
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default About;
