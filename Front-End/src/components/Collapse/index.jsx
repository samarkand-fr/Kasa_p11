import React, { useState } from 'react';
import chevron from '../../assets/chevron.svg';

/**
 * Renders a collapse component.
 * @function Collapse
 * @param {string} title - The title of the collapse section.
 * @param {string[]|string} content - The content of the collapse section. It can be either a string or an array of strings.
 * @returns {ReactNode} JSX injected in the DOM.
 */
function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  /**
   * Toggles the collapse section.
   */
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-section ">
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
