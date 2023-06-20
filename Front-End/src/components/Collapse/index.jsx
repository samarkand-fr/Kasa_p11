import React, { useState } from 'react';
import chevron from '../../assets/chevron.svg';

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the collapse
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse-section ${isOpen ? 'active' : ''}`}>
       {/* Button to toggle the collapse */}
      <button className="collapse" onClick={toggleCollapse}>
        <span className="collapse-title">{title}</span>
        <img src={chevron} className={`collapse-icon ${isOpen ? 'rotate' : ''}`} alt="" />
      </button>

      {isOpen && (
        <div className="collapse-wrapper">
          {/* Check if content is an array */}
          {Array.isArray(content) ? (
            <div className="collapse-text">
              {content.map((item, index) => (
                <div key={`${item}-${index}`}>{item}</div>
              ))}
            </div>
          ) : (
            <div className="collapse-text">{content}</div>
          )}
        </div>
      )}
    </div>
  );
}

export default Collapse;
