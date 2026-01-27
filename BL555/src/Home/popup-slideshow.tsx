import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

const PopupSlideshow = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const images = [
    "1763368404165_httpswww.77932555.compromotionsid=3217430.gif",
    "1763370512316_httpswww.77932555.compromotionsid=bv3216562.gif",
    "1763370554878_httpst.meBL555CODEFREE_BOTb.gif",
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-30 left-2 md:bottom-20 md:left-18 z-50">
      <div className="relative w-[95px] md:w-[215px] pointer-events-auto">
        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute -top-6 md:-top-10 right-0 md:right-1 z-10 bg-gray-400 hover:cursor-pointer text-white rounded-full p-0.5 md:p-1 shadow-lg"
        >
          <X size={16} className="md:hidden" />
          <X size={22} className="hidden md:block" />
        </button>

        {/* Slider */}
        <div className="relative w-[80px] h-[80px] md:w-[200px] md:h-[200px] overflow-hidden rounded-lg">
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (isMobile ? 80 : 200)}px)`,
            }}
          >
            {images.map((img, index) => (
              <img
                key={index}
                src={`/assets/${img}`}
                alt={`Promotion ${index + 1}`}
                className="w-[80px] h-[80px] md:w-[200px] md:h-[200px] object-cover flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupSlideshow;
