import React, { useEffect, useState } from 'react';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    setIsVisible(scrollTop <= 20);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleSectionHover = (event) => {
      const section = event.target.closest('.in-the-dark, .in-the-light');
      const button = document.querySelector('.back-to-top-button');

      if (button !== null && !button.classList.contains('visible')) {
        if (section !== null && section.classList.contains('in-the-dark')) {
          setTimeout(() => {
            button.classList.add('light');
            button.classList.remove('dark');
          }, 100); // Temps de temporisation en millisecondes (0,1 seconde)
        } else if (section !== null && section.classList.contains('in-the-light')) {
      setTimeout(() => {
        button.classList.add('dark');
        button.classList.remove('light');
      }, 100); // Temps de temporisation en millisecondes (0,1 seconde)
    } else {
      // Ne rien faire (aucun changement de couleur)
    }
    };

    };
    
    document.addEventListener('mouseover', (event) => {
      handleSectionHover(event);
    });
    

    return () => {
      document.removeEventListener('mouseover', handleSectionHover);
    };
  }, []);

  return (
    <div
      className={`back-to-top-button hidden sm:flex ${isVisible ? 'visible' : ''} ${isVisible ? 'not-at-top' : ''}`}
      onClick={scrollToTop}
      style={{ transform: 'scaleY(-1)' }}
    >
      <svg
        className="back-to-top-button-svg"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
      >
        <path
          fillRule="nonzero"
          d="M11.384 13.333h9.232c.638 0 .958.68.505 1.079l-4.613 4.07c-.28.246-.736.246-1.016 0l-4.613-4.07c-.453-.399-.133-1.079.505-1.079z"
        />
      </svg>
    </div>
  );
};

export default BackToTopButton;