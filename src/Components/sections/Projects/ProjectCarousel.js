import React, { useState } from "react";

const ProjectCarousel = ({ images }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handlePreviousImage = () => {
    setActiveImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setActiveImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const showPreviousImage = activeImageIndex !== 0;
  const showNextImage = activeImageIndex !== images.length - 1;

  return (
    <div className="project-carousel">
      {showPreviousImage && (
        <button className="carousel-button" onClick={handlePreviousImage}>
          Previous
        </button>
      )}
      <img
        className="carousel-image"
        src={images[activeImageIndex].source}
        alt=""
      />
      {showNextImage && (
        <button className="carousel-button" onClick={handleNextImage}>
          Next
        </button>
      )}
    </div>
  );
};

export default ProjectCarousel;
