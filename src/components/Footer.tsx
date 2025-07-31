import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer role="contentinfo">
      <Link to="/accessibility">Accessibility Statement</Link>
    </footer>
  );
};

export default Footer;