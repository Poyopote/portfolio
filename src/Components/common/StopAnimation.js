// StopAnimation.js
import React, { forwardRef, useEffect, useRef } from "react";

const StopAnimation = forwardRef(({ threshold = 0.5, children }, ref) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          elementRef.current.classList.add("stopped-animation");
        } else {
          elementRef.current.classList.remove("stopped-animation");
        }
      },
      { threshold }
    );

    const targetElement = elementRef.current;

    if (targetElement) {
      observer.observe(targetElement);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  // Utiliser ref plutôt que elementRef
  useEffect(() => {
    if (ref) {
      ref.current = {
        // Exposer des méthodes ou des propriétés si nécessaire
        // Par exemple : startAnimation: () => { ... }, stopAnimation: () => { ... }
      };
    }
  }, [ref]);

  return React.cloneElement(children, { ref: elementRef });
});

export default StopAnimation;
