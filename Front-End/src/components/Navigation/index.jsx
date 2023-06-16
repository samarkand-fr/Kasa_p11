import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="nav">
      {/* Render navigation item for the home page */}
      <NavLink className="nav-link" to="/" exact="true">
        Accueil
      </NavLink>
      {/* Render navigation item for the about page */}
      <NavLink className="nav-link" to="/a-propos" exact="true">
        À Propos
      </NavLink>
    </nav>
  );
};

export default Navigation;