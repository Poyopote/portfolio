import React, { useEffect, useState } from 'react';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isButtonDark, setIsButtonDark] = useState(false);
  const [isBackgroundDark, setIsBackgroundDark] = useState(false);

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
    const background = calculateColorContrast('light'); // Modifier avec la couleur de fond de votre élément ciblé
    const button = calculateColorContrast('dark'); // Modifier avec la couleur du bouton

    setIsButtonDark(button.isDark);
    setIsBackgroundDark(background.isDark);
  }, [isVisible]);

  const calculateColorContrast = (color) => {
    const backgroundLuminance = calculateLuminance(color);
    const buttonLuminance = calculateLuminance(isButtonDark ? 'light' : 'dark'); // Inverser la couleur du bouton

    const contrastRatio = calculateContrast(backgroundLuminance, buttonLuminance);
    const isDark = contrastRatio < 4.5;

    return { isDark };
  };

  const calculateLuminance = (color) => {
    const r = parseInt(color.substring(1, 3), 16);
    const g = parseInt(color.substring(3, 5), 16);
    const b = parseInt(color.substring(5, 7), 16);

    return luminance(r, g, b);
  };

  const luminance = (r, g, b) => {
    const RED = 0.2126;
    const GREEN = 0.7152;
    const BLUE = 0.0722;
    const GAMMA = 2.4;

    const a = [r, g, b].map((v) => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, GAMMA);
    });

    return a[0] * RED + a[1] * GREEN + a[2] * BLUE;
  };

  const calculateContrast = (lum1, lum2) => {
    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);

    return (brightest + 0.05) / (darkest + 0.05);
  };

  return (
    <div
      className={`back-to-top-button ${isVisible ? 'visible' : ''} ${isVisible ? 'not-at-top' : ''} ${isButtonDark && isBackgroundDark ? 'dark' : ''}`}
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
