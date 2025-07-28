import CarouselComponentTwo from "../CarouselComponentTwo/CarouselComponentTwo";
import CarouselComponentOne from "../CarouselComponentOne/CarouselComponentOne";
import { useEffect, useState } from "react";
import "./bannerCarousel.css";
const BannerCarousel = () => {
  let [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-section">
      <div
        className={`carousel-item-wrapper ${activeIndex === 0 ? "show" : ""}`}
      >
        <CarouselComponentOne />
      </div>
      <div
        className={`carousel-item-wrapper ${activeIndex === 1 ? "show" : ""}`}
      >
        <CarouselComponentTwo />
      </div>
    </div>
  );
};

export default BannerCarousel;
