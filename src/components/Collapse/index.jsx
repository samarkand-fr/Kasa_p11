import React, { useState } from 'react';
import chevron from '../../assets/chevron.svg';

// A component that collapses and expands content based on user interaction
function Collapse({ title, content }) {
  // State variable to track the collapse state
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
          {/* Chevron icon with dynamic rotation based on collapse state */}
          <img src={chevron} className={`collapse-icon ${isOpen ? 'rotate' : ''}`} alt="" />
      </button>

      {/* Render the collapse content if it is open */}
      {isOpen && (
        <div className="collapse-wrapper">
          {/* Check if content is an array */}
          {Array.isArray(content) ? (
            // Render each item in the content array, limited to 9 items
            <div className="collapse-text">
              {content.slice(0, 9).map((item, index) => (
                <div key={`${item}-${index}`}>{item}</div>
              ))}
            </div>
          ) : (
            // Render the single content item
            <div className="collapse-text">{content}</div>
          )}
        </div>
      )}
    </div>
  );
}

export default Collapse;
