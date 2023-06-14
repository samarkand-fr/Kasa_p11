import React from 'react';
import logo from '../../assets/logoFooter.svg';

const Footer = () => {
  return (
    <div className="footer">
      <img src={logo} alt="logo" className="footer-img" />
      <p className="footer-rights">© 2020 Kasa. All rights reserved</p>
    </div>
  );
};

export default Footer;