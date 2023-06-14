import React from 'react';
import { Link } from 'react-router-dom';

const Error = ({ title = "Erreur", subtitle = "Oops,  une erreur s'est produite", subtitle2 = "" }) => {
  // Function to generate the combined subtitle with line breaks
  const generateSubtitle = () => {
    if (subtitle2) {
      return (
        <>
          {subtitle}
          <br className="error-subtitle-br" />
          {subtitle2}
        </>
      );
    }
    return subtitle;
  };

  return (
    <section className="error">
      {/* Error title */}
      <h1 className="error-title">{title}</h1>
      {/* Error subtitle */}
      <h2 className="error-subtitle">{generateSubtitle()}</h2>
      {/* Link to homepage */}
      <Link className="error-link" to="/">
        Retourner sur la page d'accueil
      </Link>
    </section>
  );
};

export default Error;
