import React from 'react';
import './About.css';
import { motion } from 'framer-motion';
import profilePic from '../../assets/profile-pic.jpg';
import work1 from '../../assets/work-1.jpg';
import work2 from '../../assets/work-2.jpg';
import work3 from '../../assets/work-3.jpg';
import work4 from '../../assets/work-4.jpg';

const About = () => {
  const aboutText = `Rooted in the rich tapestry of Indian heritage, our collection of traditional women’s suits is a tribute to timeless artistry, cultural rituals, and the intricate craftsmanship that defines India’s diverse regions. Every piece we create tells a story — of ancient traditions reimagined through a modern lens, of hands that weave not just fabric but generations of skill, and of rituals that celebrate the strength and grace of womanhood.\n\nAt the heart of our brand lies a deep respect for India’s artistic diversity — from the delicate threadwork of Lucknowi chikankari to the vibrant block prints of Rajasthan and the regal weaves of Banarasi silks. We collaborate with skilled artisans and local craftspeople, preserving techniques passed down through generations while ensuring fair, ethical practices.\n\nMindful of our impact, we embrace sustainability not as a trend, but as a responsibility. Using eco-friendly fabrics, natural dyes, and conscious production methods, our garments are designed to be as kind to the Earth as they are beautiful to wear. Each suit is thoughtfully designed to be versatile — effortlessly transitioning from festive occasions to intimate gatherings, from tradition to trend.\n\nWe invite you to discover clothing that’s more than just attire — it’s a canvas of culture, a celebration of femininity, and a conscious step toward a more meaningful way of dressing.`;

  return (
    <div className="about-page">
      <motion.div 
        className="about-hero"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <img src={profilePic} alt="Vanshika Arora" className="about-hero-image" />
        <div className="hero-overlay"></div>
        <h1>Vanshika Arora</h1>
      </motion.div>

      <div className="about-content-grid">
        <motion.div 
          className="about-text-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {aboutText.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </motion.div>

        <div className="about-image-grid">
          <motion.img src={work1} alt="Work 1" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.8 }} />
          <motion.img src={work2} alt="Work 2" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 1.0 }} />
          <motion.img src={work3} alt="Work 3" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 1.2 }} />
          <motion.img src={work4} alt="Work 4" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 1.4 }} />
        </div>
      </div>
    </div>
  );
};

export default About;
