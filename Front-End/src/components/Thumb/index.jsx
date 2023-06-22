import { Link } from 'react-router-dom';

/**
 * Renders a thumbnail component.
 * @function Thumb
 * @param {string} link - The link for navigation.
 * @param {string} cover - The URL of the thumbnail cover image.
 * @param {string} title - The title of the thumbnail.
 * @returns {ReactNode} JSX injected in the DOM.
 */

function Thumb({ link, cover, title }) {
  return (
    // Wrapper div for the thumbnail
    <div className="thumb">
      {/* Link component for navigation */}
      <Link to={link}>
        {/* Wrapper div for the thumbnail cover */}
        <div className="thumb-cover-wrapper">
          {/* Cover image */}
          <img src={cover} alt="" />
        </div>
        {/* Thumbnail title */}
        <h2 className="thumb-title">{title}</h2>
      </Link>
    </div>
  );
}

export default Thumb;
