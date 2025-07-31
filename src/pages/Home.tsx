import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <main id="main-content" tabIndex={-1}>
      <h1>Welcome to Our Accessible Website</h1>
      <section aria-labelledby="about-heading">
        <h2 id="about-heading">About This Site</h2>
        <p>
          This website is designed with accessibility in mind, following WCAG 2.1 AA guidelines.
        </p>
      </section>
      
      <section aria-labelledby="features-heading">
        <h2 id="features-heading">Key Features</h2>
        <ul>
          <li>Keyboard navigable</li>
          <li>Screen reader friendly</li>
          <li>Proper color contrast</li>
          <li>Semantic HTML</li>
        </ul>
      </section>
      
      <section aria-labelledby="quick-links-heading">
        <h2 id="quick-links-heading">Quick Links</h2>
        <nav aria-label="Quick links">
          <ul>
            <li><Link to="/form">Go to Form Page</Link></li>
            <li><Link to="/content">Go to Content Page</Link></li>
          </ul>
        </nav>
      </section>
    </main>
  );
};

export default Home;