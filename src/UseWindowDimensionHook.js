import { useState, useEffect } from 'react';

export default function useWindowDimensions() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
  }, []);

  return width;
}