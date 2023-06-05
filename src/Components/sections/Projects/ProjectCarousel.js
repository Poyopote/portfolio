import React, { useState, useEffect } from 'react';
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon, ArrowTopRightOnSquareIcon} from '@heroicons/react/24/solid';

const ProjectCarousel = ({ media }) => {
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    setActiveMediaIndex(0); // Réinitialise l'index du média actif lorsque le projet change
    setIsImageLoaded(false); // Réinitialise l'état de chargement de l'image
  }, [media]);

  const handlePreviousMedia = () => {
    setActiveMediaIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex < 0 ? media.length - 1 : newIndex;
    });
    setIsImageLoaded(false); // Réinitialise l'état de chargement de l'image lors du changement de média
  };

  const handleNextMedia = () => {
    setActiveMediaIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex >= media.length ? 0 : newIndex;
    });
    setIsImageLoaded(false); // Réinitialise l'état de chargement de l'image lors du changement de média
  };

  const handleImageLoad = () => {
    setIsImageLoaded(true); // Définit l'état de chargement de l'image à true une fois que l'image est chargée
  };

  const isValidIndex = activeMediaIndex >= 0 && activeMediaIndex < media.length;
  const activeMedia = isValidIndex ? media[activeMediaIndex] : null;
  const showPreviousMedia = media.length > 1 && isValidIndex && activeMediaIndex !== 0;
  const showNextMedia = media.length > 1 && isValidIndex && activeMediaIndex !== media.length - 1;

  return (
    <div className="project-carousel flex flex-col justify-center lg:col-span-2 sm:py-9 sm:px-10 p-2 ">
      <div className='container' >
      {activeMedia && (
          <figure className="w-full drop-shadow-xl">
            {activeMedia.type === 'image' && (
                <>
                <img
                className="carousel-image"
                src={activeMedia.source}
                alt=""
                onLoad={handleImageLoad} // Appelle la fonction de gestion du chargement de l'image
                style={{ display: isImageLoaded ? 'block' : 'none' }} // Masque l'image jusqu'à ce qu'elle soit chargée
              />
              <figcaption><a href={activeMedia.source} target='_blank'  rel="noreferrer" >Voir média <ArrowTopRightOnSquareIcon className='inline-block h-6 w-6'/> </a></figcaption>
              
                </>
              

            )}
            {activeMedia.type === 'video' && (
              <video className="carousel-video" controls>
                <source src={activeMedia.source} type="video/mp4" />
              </video>
            )}
          </figure>
        )}

        {(showPreviousMedia || showNextMedia) && (
          <div className="flex items-center justify-center gap-3 p-10">
            <button
              className={`carousel-button ${activeMediaIndex === 0 && media.length > 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={activeMediaIndex !== 0 ? handlePreviousMedia : null}
              disabled={activeMediaIndex === 0}
            >
              <ChevronDoubleLeftIcon className="h-6 w-6 text-customWhite" />
            </button>

            <span className="text-center">{`${activeMediaIndex + 1}/${media.length}`}</span>

            <button
              className={`carousel-button ${activeMediaIndex === media.length - 1 && media.length > 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={activeMediaIndex !== media.length - 1 ? handleNextMedia : null}
              disabled={activeMediaIndex === media.length - 1}
            >
              <ChevronDoubleRightIcon className="h-6 w-6 text-customWhite" />
            </button>
          </div>
        )}
      </div>
      
    </div>
  );
};

export default ProjectCarousel;
