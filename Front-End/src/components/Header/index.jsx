import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logoHeader.svg';
import Navigation from '../Navigation';

/**
 * Renders a header component.
 * @function Header
 * @returns {ReactNode} JSX injected in the DOM.
 */
const Header = () => {
  return (
    <header className="header-wrapper">
      {/* Link to the home page */}
      <Link to="/">
        <img src={logo} alt="Kasa Logo" className="header-logo" />
      </Link>
      {/* Render the navigation component */}
      <Navigation />
    </header>
  );
};

export default Header;
