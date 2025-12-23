import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

const FloatingGifts = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [index, setIndex] = useState(0);
  const [transition, setTransition] = useState(true);

  const images = [
    "float-1.226dbb1.gif",
    "float-2.b37c4bf.gif",
    "float-3.3d6fc75.gif",
  ];

  const slides = [...images, images[0]]; // clone ảnh đầu
  const SLIDE_TIME = 3000;
  const ANIM_TIME = 700;

  useEffect(() => {
    if (!isVisible) return;

    let timer;

    if (index === images.length) {
      // đang ở ảnh clone
      timer = setTimeout(() => {
        setTransition(false);
        setIndex(0);

        // bật lại transition cho lần sau
        requestAnimationFrame(() => {
          setTransition(true);
        });
      }, ANIM_TIME);
    } else {
      timer = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, SLIDE_TIME);
    }

    return () => clearTimeout(timer);
  }, [index, images.length, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-18 right-6 z-50">
      <div className="relative w-[100px] h-[100px] animate-float">
        {/* Close */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute -top-2 -left-2 z-10 bg-[#6fc4dd] text-black rounded-full w-5 h-5 flex items-center justify-center shadow"
        >
          <X size={12} />
        </button>

        {/* Slider */}
        <div className="w-[100px] h-[100px] overflow-hidden">
          <div
            className={`flex ${
              transition ? "transition-transform duration-700 ease-in-out" : ""
            }`}
            style={{
              transform: `translateX(-${index * 100}px)`,
            }}
          >
            {slides.map((img, i) => (
              <img
                key={i}
                src={`/src/assets/${img}`}
                className="w-[100px] h-[100px] object-contain flex-shrink-0"
                alt=""
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingGifts;
