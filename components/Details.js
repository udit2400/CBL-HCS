import React from "react";

const WhyChooseCBL = () => {
  const points = [
    "DAILY LIVE CLASSES",
    "Daily NEWSPAPER CLASSES",
    "State-of-the art Infrastructure",
    "DAILY MCQ Practice Assignments",
    "24*7 5G Library",
    "MOCK INTERVIEW PREPARATION",
    "Centrally located in Chandigarh",
    "PERSONAL MENTORSHIP by Experts - Chetan Sir discussion with students",
  ];

  const images = [
    "/1.jpg",
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg",
    "/7.jpg",
    "/8.jpg",
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 mt-10">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Why Choose CBL?
      </h2>

      {/* Rectangular Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {points.map((point, index) => (
          <div
            key={index}
            className="relative flex flex-col justify-between w-full h-[200px] mx-auto bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform overflow-hidden"
          >
            {/* Image Section (3/4 Height) */}
            <div className="h-3/4 bg-gray-300 flex items-center justify-center">
              <img
                src={images[index]} // Dynamically load the image based on the index
                alt={point}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Text Section (1/4 Height) */}
            <div className="h-1/4 bg-red-200 flex items-center justify-center">
              <span className="p-2 text-sm font-semibold text-gray-800 text-center">
                {point}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Animated Button */}
      <div className="mt-20 flex justify-center mb-20">
        <button
          className="px-6 py-3 bg-red-500 text-white font-bold rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 animate-pulse"
        >
          Enroll for free demo classes & Counseling Session
        </button>
      </div>
    </div>
  );
};

export default WhyChooseCBL;
