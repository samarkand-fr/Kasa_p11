import React from 'react';
import Gallery from '../../components/Gallery';
import Tag from '../../components/Tag';
import Rating from '../../components/Rate';
import Collapse from '../../components/Collapse';

function AnnonceContent({ annonce }) {
  const { title, location, tags, rating, host, pictures, description, equipments } = annonce;
  const [firstName, lastName] = host.name.split(' ');

  // Set the document title
  document.title = `${title} - Kasa`;

  return (
    <section>
      {/* Gallery component */}
      <Gallery images={pictures} />

      <div className="annonce-info-rating-host-wrapper">
        <div className="annonce-info-wrapper">
          <h1 className="annonce-title">{title}</h1>
          <p className="annonce-location">{location}</p>

          <div className="tag-wrapper">
            {/* Tags */}
            {tags.map((tag, index) => (
              <Tag tagName={tag} key={`${tag}-${index}`} />
            ))}
          </div>
        </div>

        <div className="rating-host-wrapper">
          {/* Rating component */}
          <Rating rating={rating} />

          <div className="host-wrapper">
            <div className="host-name">
              {firstName}
              <br />
              {lastName}
            </div>
            <img className="host-picture" src={host.picture} alt="Host" />
          </div>
        </div>
      </div>

      <div className="description-equipments-wrapper">
        {/* Collapse component for description */}
        <Collapse title="Description" content={description} />
        {/* Collapse component for equipments */}
        <Collapse title="Équipements" content={equipments} />
      </div>
    </section>
  );
}

export default AnnonceContent;
