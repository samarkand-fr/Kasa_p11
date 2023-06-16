import { Link } from 'react-router-dom';

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
