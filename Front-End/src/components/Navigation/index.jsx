import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    // Set initial active link on component mount
    //runs whenever the location.pathname changes and updates the activeLink state accordingly.
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <nav className="nav">
      {/* Navigation link for Accueil */}
      <NavLink
        className={`nav-link ${activeLink === '/' && 'active'}`}
        to="/"
        onClick={() => handleLinkClick('/')}
        exact="true"
      >
        Accueil
      </NavLink>
      {/* Navigation link for À Propos */}
      <NavLink
        className={`nav-link ${activeLink === '/a-propos' && 'active'}`}
        to="/a-propos"
        onClick={() => handleLinkClick('/a-propos')}
        exact="true"
      >
        À Propos
      </NavLink>
    </nav>
  );
};

export default Navigation;
