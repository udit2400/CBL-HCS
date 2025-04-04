"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/slider1.jpg",
    testimonial: "HCS helped me achieve my dream! Highly recommended!",
    name: "Rahul Sharma",
    stat: "100+ Candidates Selected Last Year",
  },
  {
    image: "/slider2.jpg",
    testimonial: "The guidance and support were exceptional!",
    name: "Priya Mehta",
    stat: "Join Thousands of Successful HCS Officers!",
  },
  {
    image: "/slider3.png",
    testimonial: "Thanks to HCS, I'm now a proud officer!",
    name: "Amit Khanna",
    stat: "Success Rate Over 90%",
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-[500px] md:h-[400px] sm:h-[300px] overflow-hidden rounded-lg bg-gray-100">
      {/* Headline */}
      <h2 className="hidden absolute top-4 left-1/2 -translate-x-1/2 text-2xl md:text-xl sm:text-lg font-bold text-purple-800 z-10 text-center">
        Join Thousands of Successful HCS Officers!
      </h2>

      {/* Slides */}
      <AnimatePresence initial={false} custom={currentIndex}>
      <motion.img
  key={slides[currentIndex].image}
  src={slides[currentIndex].image}
  alt={`Slide ${currentIndex + 1}`}
  initial={{ opacity: 0, x: 100 }}
  animate={{ opacity: 1, x: 0 }}
  exit={{ opacity: 0, x: -100 }}
  transition={{ duration: 0.5, ease: "easeInOut" }}
  className="absolute inset-0 h-[60%] object-cover lg:w-[100%] lg:h-[100%] lg:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2"
/>

      </AnimatePresence>

      {/* Testimonial */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="absolute bottom-16 sm:bottom-12 left-1/2 -translate-x-1/2 bg-white p-4 sm:p-3 rounded-lg shadow-md w-[80%] md:w-[90%] sm:w-[95%] text-center"
      >
        <p className="text-lg md:text-base sm:text-sm font-medium text-gray-700">
          "{slides[currentIndex].testimonial}"
        </p>
        <p className="mt-2 text-sm text-gray-500">— {slides[currentIndex].name}</p>
      </motion.div>

      {/* Success Stats */}
      <div className="absolute top-12 left-4 md:top-10 sm:top-8 bg-black/50 text-white p-2 sm:p-1 rounded-md text-sm sm:text-xs">
        {slides[currentIndex].stat}
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-2 top-1/2 transform -translate-y-1/2 bg-black/40 text-white p-3 sm:p-2 rounded-full hover:bg-black/60 transition-all z-10"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-2 top-1/2 transform -translate-y-1/2 bg-black/40 text-white p-3 sm:p-2 rounded-full hover:bg-black/60 transition-all z-10"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 sm:w-2 sm:h-2 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            } transition-all`}
          />
        ))}
      </div>

      {/* CTA Button */}
      <motion.button
        onClick={() => alert("Start your journey!")}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 sm:px-4 py-2 sm:py-1 text-lg sm:text-sm rounded-full shadow-lg hover:bg-blue-700 transition-all"
      >
        Start Your Success Story
      </motion.button>
    </div>
  );
};

export default Slider;
