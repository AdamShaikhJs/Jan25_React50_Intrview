import React, { useState, useEffect } from 'react';

// Throttle utility function
function throttle(func, limit) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      func(...args);
    }
  };
}

const ThrottleScrollComponent = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Throttled scroll handler
  const handleScroll = throttle(() => {
    setScrollPosition(window.scrollY);
  }, 200); // Limit to one call every 200ms

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <main >
      <h3>Scroll position: {scrollPosition}</h3>
    </main>
  );
};

export default ThrottleScrollComponent;
