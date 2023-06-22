import React from 'react';
import starFull from '../../assets/star-full.svg';
import starEmpty from '../../assets/star-empty.svg';

/**
 * Renders a rating component.
 * @function Rating
 * @param {number} rating - The rating value.
 * @returns {ReactNode} JSX injected in the DOM.
 */
const Rating = ({ rating }) => {
  // Create a new array instance with Array.from()
  // Generate an array with a length of 5 and values from 1 to 5
  const starRange = Array.from({ length: 5 }, (_, index) => index + 1);

  // Calculate the number of filled and empty stars
  const filledStars = Math.floor(rating);
  const emptyStars = starRange.length - filledStars;

  /**
   * Render a series of stars.
   * @param {number} count - The number of stars to render.
   * @param {boolean} isFilled - Indicates whether the stars should be filled or empty.
   * @returns {ReactNode} JSX representing the series of stars.
   */
  const renderStars = (count, isFilled) =>
    Array.from({ length: count }, (_, index) => (
      <img
        key={index}
        src={isFilled ? starFull : starEmpty}
        alt={isFilled ? 'étoile remplie' : 'étoile non remplie'}
        className="rating__item"
      />
    ));

  return (
    <div className="rating">
      {/* Render the filled stars */}
      {renderStars(filledStars, true)}
      {/* Render the empty stars */}
      {renderStars(emptyStars, false)}
    </div>
  );
};

export default Rating;
