import React from 'react';

/**
 * A banner component that displays an image and an optional title.
 * @function Banner
 * @param {string} picture - The URL of the banner image.
 * @param {string} title - The title to be displayed on the banner (optional).
 * @returns {ReactNode} JSX injected in the DOM.
 */
const Banner = ({ picture, title }) => {
  return (
    <div className="banner">
      {/* Display the banner image */}
      <img src={picture} className="banner-img" alt="Background landscape" />
      {/* Display the title if it's provided */}
      {title && <h1 className="banner-title">{title}</h1>}
    </div>
  );
}

export default Banner;
