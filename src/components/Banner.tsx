'use client';

import { useState, useEffect } from 'react';

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const setSlide = (idx: number) => {
    setCurrentSlide(idx);
  };

  return (
    <div className="banner-agile position-relative">
      <ul className="slider list-unstyled m-0 p-0">
        <li className={currentSlide === 0 ? 'active' : ''}>
          <div className="banner-w3ls-1" style={{ height: '40vw', minHeight: '300px', backgroundPosition: 'center', backgroundSize: 'cover' }}></div>
        </li>
        <li className={currentSlide === 1 ? 'active' : ''}>
          <div className="banner-w3ls-2" style={{ height: '40vw', minHeight: '300px', backgroundPosition: 'center', backgroundSize: 'cover' }}></div>
        </li>
        <li className={currentSlide === 2 ? 'active' : ''}>
          <div className="banner-w3ls-3" style={{ height: '40vw', minHeight: '300px', backgroundPosition: 'center', backgroundSize: 'cover' }}></div>
        </li>
      </ul>

      {/* Pager Dots */}
      <ul className="pager list-unstyled position-absolute d-flex justify-content-center w-100" style={{ bottom: '20px', zIndex: 10 }}>
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <li
            key={idx}
            data-index={idx}
            className={`mx-1 rounded-circle cursor-pointer ${currentSlide === idx ? 'active' : ''}`}
            style={{
              width: '12px',
              height: '12px',
              backgroundColor: currentSlide === idx ? '#fff' : 'rgba(255,255,255,0.5)',
              cursor: 'pointer',
              transition: 'background-color 0.3s'
            }}
            onClick={() => setSlide(idx)}
          ></li>
        ))}
      </ul>
    </div>
  );
}
