import { useEffect, useRef, useState } from "react";
import CarouselComponentOne from "../CarouselComponentOne/CarouselComponentOne";
import CarouselComponentTwo from "../CarouselComponentTwo/CarouselComponentTwo";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./bannerCarousel.css"; // Contains keyframes and other styles

const components = [ <CarouselComponentOne />,<CarouselComponentTwo />];

const BannerCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 10000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? components.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === components.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchEnd = (e) => {
    if (!isDragging) return;
    const diff = e.changedTouches[0].clientX - startX;
    if (diff > 50) handlePrev();
    else if (diff < -50) handleNext();
    setIsDragging(false);
  };

  const handleMouseDown = (e) => {
    setStartX(e.clientX);
    setIsDragging(true);
  };

  const handleMouseUp = (e) => {
    if (!isDragging) return;
    const diff = e.clientX - startX;
    if (diff > 50) handlePrev();
    else if (diff < -50) handleNext();
    setIsDragging(false);
  };

  const isLightBanner = activeIndex === 0;

  return (
    <div
      className="banner-container relative overflow-hidden w-full h-auto min-h-[400px] md:h-[70vh]"
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={() => setIsDragging(false)}
    >
      <div
        className="flex transition-transform duration-700 ease-in-out h-full slide-in-right"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {components.map((Component, index) => (
          <div key={index} className="w-full flex-shrink-0 h-full">
            {Component}
          </div>
        ))}
      </div>

      {/* Arrows (visible only on md and above) */}
      <button
        className={`absolute top-1/2 left-3 transform -translate-y-1/2 z-10 p-2 rounded-full transition duration-300 hidden md:block ${
          isLightBanner ? "bg-black text-white" : "bg-white text-black"
        }`}
        onClick={handlePrev}
      >
        <FaArrowLeft />
      </button>
      <button
        className={`absolute top-1/2 right-3 transform -translate-y-1/2 z-10 p-2 rounded-full transition duration-300 hidden md:block ${
          isLightBanner ? "bg-black text-white" : "bg-white text-black"
        }`}
        onClick={handleNext}
      >
        <FaArrowRight />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {components.map((_, i) => (
          <span
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              activeIndex === i ? "bg-white scale-110" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;
