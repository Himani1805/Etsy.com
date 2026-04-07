import React, { useCallback, useEffect, useRef, useState } from 'react';
import './ScrollCanvas.css';

function useScrollLogic() {
  const containerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const checkScroll = useCallback(() => {
    const element = containerRef.current;
    if (!element) return;

    const maxScrollLeft = element.scrollWidth - element.offsetWidth;
    const safeMax = Math.max(0, maxScrollLeft);

    // Left arrow appears only when content has been scrolled from the start.
    setShowLeftArrow(element.scrollLeft > 0);
    // Right arrow appears only when there is hidden content on the right.
    setShowRightArrow(element.scrollLeft < safeMax - 1);
  }, []);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const resizeObserver = new ResizeObserver(() => {
      checkScroll();
    });

    element.addEventListener('scroll', checkScroll);
    resizeObserver.observe(element);
    checkScroll();

    return () => {
      element.removeEventListener('scroll', checkScroll);
      resizeObserver.disconnect();
    };
  }, [checkScroll]);

  return { containerRef, showLeftArrow, showRightArrow, checkScroll };
}

export default function ScrollCanvas({ children }) {
  const { containerRef, showLeftArrow, showRightArrow, checkScroll } = useScrollLogic();

  const handleScroll = (direction) => {
    const element = containerRef.current;
    if (!element) return;

    const scrollAmount = direction === 'right' ? element.clientWidth : -element.clientWidth;
    element.scrollBy({ left: scrollAmount, behavior: 'smooth' });

    // Sync arrow state shortly after smooth scroll starts.
    window.setTimeout(checkScroll, 250);
  };

  return (
    <div className="scroll-canvas-wrapper">
      {showLeftArrow && (
        <button
          type="button"
          className="scroll-arrow scroll-arrow-left"
          aria-label="Scroll left"
          onClick={() => handleScroll('left')}
        >
          {'<'}
        </button>
      )}

      <div ref={containerRef} className="scroll-content">
        {children}
      </div>

      {showRightArrow && (
        <button
          type="button"
          className="scroll-arrow scroll-arrow-right"
          aria-label="Scroll right"
          onClick={() => handleScroll('right')}
        >
          {'>'}
        </button>
      )}
    </div>
  );
}
