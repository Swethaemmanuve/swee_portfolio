import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/SkillBat.css';

const SkillBar = ({ skill, percentage }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const barVariants = {
    hidden: { width: 0 },
    visible: {
      width: `${percentage}%`,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  return (
    <div className="skill-bar-container" ref={ref}>
      <div className="skill-info">
        <span>{skill}</span>
        <span>{percentage}%</span>
      </div>
      <div className="skill-bar-bg">
        <motion.div
          className="skill-bar-fill"
          variants={barVariants}
          initial="hidden"
          animate={controls}
        />
      </div>
    </div>
  );
};

export default SkillBar;