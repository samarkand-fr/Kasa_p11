import React, { useEffect } from 'react';
import aproposBanner from '../../assets/apropos-banner.jpg';
import Collapse from '../../components/Collapse';
import Banner from '../../components/Banner';

/**
 * Renders the About page component.
 * @function About
 * @returns {ReactNode} JSX injected in the DOM.
 */

function About() {
  useEffect(() => {
    // Update the document title using the useEffect hook to ensure it only runs once.
    document.title = 'A Propos - Kasa';
  }, []);

  const aboutContent = [
    {
      title: 'Fiabilité',
      content:
        'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
    },
    {
      title: 'Respect',
      content:
        'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    },
    {
      title: 'Service',
      content:
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      title: 'Sécurité',
      content:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];

  return (
    <section className="about-section  content-wrapper">
      <Banner
        picture={aproposBanner}
        className="banner-img about-banner"
        alt="Banner"
      />
      {/* Loop through the aboutContent array and display each item as a Collapse */}
      {aboutContent.map((about, index) => (
        <Collapse
          title={about.title}
          content={about.content}
          key={`${about.title}-${index}`}
        />
      ))}
    </section>
  );
}

export default About;
