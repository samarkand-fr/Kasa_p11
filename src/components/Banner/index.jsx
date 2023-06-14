import React from 'react';

// A banner component that displays an image and an optional title
const Banner = ({ picture, title }) => {
  return (
    <div className="banner">
      <img src={picture} className="banner-img" alt="Background landscape" />
      {title && <h1 className="banner-title">{title}</h1>}
    </div>
  );
}

export default Banner;
