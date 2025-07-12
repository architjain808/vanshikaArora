import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <svg className="background-svg" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="weavePattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="10" height="10" fill="#2a2a2a" />
            <rect x="10" y="10" width="10" height="10" fill="#2a2a2a" />
            <line x1="0" y1="0" x2="20" y2="20" stroke="#c7c5bd" strokeWidth="0.5" opacity="0.3" />
            <line x1="20" y1="0" x2="0" y2="20" stroke="#c7c5bd" strokeWidth="0.5" opacity="0.3" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#weavePattern)" />
      </svg>
      <div className="home-content">
        <h1>Timeless Artistry, Modern Grace</h1>
        <p>Discover a collection that celebrates the rich heritage of Indian craftsmanship.</p>
        <div className="home-cta">
          <Link to="/collection" className="cta-button">View Collection</Link>
          <Link to="/about" className="cta-button-secondary">About Us</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
