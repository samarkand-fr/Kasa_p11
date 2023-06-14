import React from 'react';

function GallerySlides({ images, current }) {
  return (
    <div className="slides-container">
      {/* Iterate over the images array and generates a div for each image. */}
      {images.map((slider, index) => (
        <div
          className={index === current ? 'slide active' : 'slide'}
          key={`slider-${index}`}
        >
          {/* Render the image if the index matches the current index */}
          {index === current && (
            <img
              src={slider}
              alt={`Slide ${index + 1}`}
              className="image"
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default GallerySlides;
