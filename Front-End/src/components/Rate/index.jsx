import React from 'react';
import starFull from '../../assets/star-full.svg';
import starEmpty from '../../assets/star-empty.svg';

const Rating = ({ rating }) => {
  // 1- create a new array instance with Array.from()
  // 2- { length: 5 }: argument passed to Array.from() , creates an array with a length of 5.
  // 3- '_' : indicate that the argument is intentionally unused 
  // 4- "index + 1":(mapping function)takes the index of each element in the array (0 to length-1) and increments it by 1. 
  const starRange = Array.from({ length: 5 }, (_, index) => index + 1);
  // Calculate the number of filled and empty stars
  const filledStars = Math.floor(rating);
  const emptyStars = starRange.length - filledStars;

  // Function to render a series of stars
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
