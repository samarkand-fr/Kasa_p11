import React, { useState } from 'react';
import GallerySlides from './GallerySlides'; // Import the GallerySlides component
import sliderArrow from '../../assets/slider-arrow.svg';

function Gallery({ images }) {
  const [current, setCurrent] = useState(0); // State to track the current slide index
  const length = images.length; // Length of the images array

  const nextSlide = () => {
    setCurrent((current + 1) % length); // Function to move to the next slide
  };

  const previousSlide = () => {
    setCurrent((current - 1 + length) % length); // Function to move to the previous slide
  };

  if (!Array.isArray(images) || length === 0) {
    return null; // If images is not an array or empty, return null to not render anything
  }

  return (
    <div className="gallery">
      {length > 1 && (
        <>
          {/* Render the left arrow if there are more than one image */}
          <img
            src={sliderArrow}
            className="left-arrow"
            onClick={previousSlide}
            alt="Previous Arrow"
          />
          {/* Render the right arrow if there are more than one image */}
          <img
            src={sliderArrow}
            className="right-arrow"
            onClick={nextSlide}
            alt="Next Arrow"
          />
        </>
      )}
      {/* Render the GallerySlides component and pass images and current as props */}
      <GallerySlides images={images} current={current} />
      {length > 1 && (
        // Render the current page number if there are more than one image
        <div className="page-number">{`${current + 1}/${length}`}</div>
      )}
    </div>
  );
}

export default Gallery;
