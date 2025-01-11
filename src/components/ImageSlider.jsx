import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const images = ["/slider1.jpeg", "/slider2.jpeg", "/slider3.jpeg"];

export default function ImageSlider() {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (i) => {
    setIndex(i);
  };

  return (
    <div className="px-8 sm:px-16 py-12">
        <h2 className="font-bold text-3xl pb-5">Our Works</h2>

      <div className="flex justify-center items-center w-full">
        {/* Slider Container (75% width of the browser) */}
        <div className="relative w-10/12 h-[400px] overflow-hidden rounded-2xl">
          {/* Images */}
          <div
            className="flex h-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {images.map((img, i) => (
              <div key={i} className="min-w-full h-full">
                <img
                  src={img}
                  alt={`Slide ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, i) => (
              <span
                key={i}
                onClick={() => handleDotClick(i)}
                className={`h-3 w-10 cursor-pointer border-2 border-white transition-colors duration-300 ${
                  i === index ? "bg-white" : "bg-transparent"
                }`}
              ></span>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div
            className="absolute top-1/2 left-3 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center cursor-pointer border-2 border-white bg-white/10 hover:bg-white/20 transition-colors duration-300"
            onClick={handlePrev}
          >
            <FaAngleLeft className="text-white text-2xl" />
          </div>
          <div
            className="absolute top-1/2 right-3 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center cursor-pointer border-2 border-white bg-white/10 hover:bg-white/20 transition-colors duration-300"
            onClick={handleNext}
          >
            <FaAngleRight className="text-white text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
