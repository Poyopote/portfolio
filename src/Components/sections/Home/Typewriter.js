import { useMemo, useState, useEffect } from 'react';

function Typewriter({ className }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [delay, setDelay] = useState(200);
  const titles = useMemo(() => ['Designer UI', 'Intégrateur Front-end', 'Web Designer', 'Développeur React'], []);
  const typingSpeed = 50;

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentIndex = index % titles.length;
      const currentTitle = titles[currentIndex];

      if (!isDeleting) {
        setText(currentTitle.substring(0, text.length + 1));
      } else {
        setText(currentTitle.substring(0, text.length - 1));
      }

      if (!isDeleting && text === currentTitle) {
        setIsDeleting(true);
        setDelay(typingSpeed);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setIndex((index) => index + 1);
        setDelay(200);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [index, isDeleting, delay, text, titles]);

  return <h1 className={ className } id="site-title">{text}</h1>;
}

export default Typewriter;