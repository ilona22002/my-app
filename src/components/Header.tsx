import React from 'react';
import { NavLink } from 'react-router-dom';
import SkipLink from './SkipLink';

const Header: React.FC = () => {
  return (
    <header role="banner">
      <SkipLink />
      <nav aria-label="Main navigation">
        <ul>
          <li><NavLink to="/" aria-current="page">Home</NavLink></li>
          <li><NavLink to="/form">Form</NavLink></li>
          <li><NavLink to="/content">Content</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;