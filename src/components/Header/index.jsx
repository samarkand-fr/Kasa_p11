import React from 'react';
import logo from '../../assets/logoHeader.svg';
import Navigation from '../Navigation/index.jsx';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <header>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <Navigation />
      </header>
    );
  };
  
export default Header;
