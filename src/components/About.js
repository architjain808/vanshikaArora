import React from 'react';
import './About.css';
import profilePic from '../assets/profile-pic.jpg';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="about-container">
      <motion.div
        className="aurora-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="aurora__item"></div>
        <div className="aurora__item"></div>
        <div className="aurora__item"></div>
        <div className="aurora__item"></div>
      </motion.div>
      <div className="about-content">
        <motion.div 
          className="about-image-container"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img src={profilePic} alt="Vanshika Arora" className="profile-pic" />
        </motion.div>
        <motion.div 
          className="about-text-container"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <h1>Vanshika Arora</h1>
          <p>
            Rooted in the rich tapestry of Indian heritage, our collection of traditional women’s suits is a tribute to timeless artistry, cultural rituals, and the enduring grace of classic design. Each piece is a celebration of femininity, crafted with meticulous attention to detail and a deep respect for the artisans who bring them to life.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
