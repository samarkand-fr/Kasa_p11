import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav >
      <NavLink exact to="/" >
        Accueil
      </NavLink>
      <NavLink exact to="/about" >
        À Propos
      </NavLink>
    </nav>
  );
};

export default Navigation;