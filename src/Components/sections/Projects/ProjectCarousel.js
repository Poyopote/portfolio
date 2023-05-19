import React, { useState, useEffect } from 'react';

const ProjectCarousel = ({ media }) => {
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);

  useEffect(() => {
    setActiveMediaIndex(0); // Réinitialise l'index du média actif lorsque le projet change
  }, [media]);

  const handlePreviousMedia = () => {
    setActiveMediaIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex < 0 ? media.length - 1 : newIndex;
    });
  };

  const handleNextMedia = () => {
    setActiveMediaIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex >= media.length ? 0 : newIndex;
    });
  };

  const isValidIndex = activeMediaIndex >= 0 && activeMediaIndex < media.length;
  const activeMedia = isValidIndex ? media[activeMediaIndex] : null;
  const showPreviousMedia = media.length > 1 && isValidIndex && activeMediaIndex !== 0;
  const showNextMedia = media.length > 1 && isValidIndex && activeMediaIndex !== media.length - 1;

  return (
    <div className="project-carousel">
      {showPreviousMedia && (
        <button className="carousel-button" onClick={handlePreviousMedia}>
          Previous
        </button>
      )}
      {activeMedia && (
        <>
          {activeMedia.type === 'image' && (
            <img className="carousel-image" src={activeMedia.source} alt="" />
          )}
          {activeMedia.type === 'video' && (
            <video className="carousel-video" controls>
              <source src={activeMedia.source} type="video/mp4" />
            </video>
          )}
        </>
      )}
      {showNextMedia && (
        <button className="carousel-button" onClick={handleNextMedia}>
          Next
        </button>
      )}
    </div>
  );
};

export default ProjectCarousel;
