import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './styles/App.css';

const App = () => {
  // References for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 70,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Router>
      <div className="app">
        <Navbar scrollToSection={scrollToSection} refs={{ homeRef, aboutRef, projectsRef, skillsRef, contactRef }} />
        
        <main className="main-content">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home ref={homeRef} />} />
              <Route path="/about" element={<About ref={aboutRef} />} />
              <Route path="/projects" element={<Projects ref={projectsRef} />} />
              <Route path="/skills" element={<Skills ref={skillsRef} />} />
              <Route path="/contact" element={<Contact ref={contactRef} />} />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
