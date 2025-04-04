"use client"

import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const teachers = [
  {
    name: "Chetan Sharma",
    image: "/images/1.jpg",
    details:
      "Ethics, International Relations, Science & Technology (10+ yrs. experience)\nB.Tech (Hons.) (U.K.), M.A. (Political Science), L.L.B, M.B.A (IIM-K)",
  },
  {
    name: "Adv. Manvendra Singh Mangat",
    image: "/images/2.jpg",
    details: "Polity, Governance & Public Administration (10+ yrs. experience)\nL.L.B",
  },
  {
    name: "Maneesh Mittal (PCS RANK 55)",
    image: "/images/3.jpg",
    details: "History, Polity, Law (5+ yrs. experience)\nM.A., LL.M, Appeared in PCS Interview Twice",
  },
  {
    name: "Yashkirti Goyal",
    image: "/images/4.jpg",
    details: "Economics, India After Independence (8+ yrs. experience)\nM.Com, M.A. (Economics), UGC NET (Commerce & Economics) [4 times]",
  },
  {
    name: "Abhishek Graak",
    image: "/images/5.jpg",
    details: "Political Science, General Studies (UPSC Interview Appeared)\nB.Com (Hons.), M.A. (Political Science)",
  },
  {
    name: "Jashanjot Singh",
    image: "/images/6.jpg",
    details: "Science & Technology, Geography (5+ yrs. experience)\nB.E. (Electronics & Communication Engineering), Thapar Institute of Engineering & Technology",
  },
  {
    name: "Dr. Jaspreet",
    // image: "/images/7.jpg",
    details: "Punjabi Language & Literature (20+ yrs. experience)\nPh.D., M.A. (Punjabi & Political Science), B.Ed.",
  },
  {
    name: "Dr. Ratnesh",
    // image: "/images/8.jpg",
    details: "English Language, Essay Writing (10+ yrs. experience)\nM.B.A, M.A. (English)",
  },
  {
    name: "Manish Sharma",
    // image: "/images/9.jpg",
    details: "CSAT (20+ yrs. experience)\nB.A., M.A.",
  }
];

const FacultySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleTeachersCount = 3;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teachers.length - visibleTeachersCount : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= teachers.length - visibleTeachersCount ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="max-w-7xl mx-auto p-6 text-center">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-2">Our Faculty</h2>
      <p className="text-lg text-gray-600 mb-8">
        Meet our experienced faculty dedicated to shaping future leaders.
      </p>

      <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col md:flex-row items-center">
        <img
          src={teachers[currentIndex].image}
          alt={teachers[currentIndex].name}
          className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-lg border-4 border-red-500 shadow-md"
        />
        <div className="mt-4 md:ml-6 text-center md:text-left">
          <h3 className="text-2xl font-bold text-gray-800">
            {teachers[currentIndex].name}
          </h3>
          <p className="text-gray-600 mt-2">{teachers[currentIndex].details}</p>
        </div>
      </div>

      <div className="relative flex items-center justify-center mt-8">
        <button
          onClick={handlePrev}
          className="absolute left-0 p-3 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition"
        >
          <FaArrowLeft />
        </button>

        <div className="overflow-hidden w-full max-w-4xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex % teachers.length) * (100 / visibleTeachersCount)}%)`,
            }}
          >
            {teachers.map((teacher, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-1/3 p-4 text-center opacity-80 hover:opacity-100 transition"
              >
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-24 h-24 mx-auto object-cover rounded-full border-2 border-gray-300 shadow-md hover:scale-105 transition"
                />
                <h3 className="text-sm font-semibold mt-2 text-gray-700">
                  {teacher.name}
                </h3>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleNext}
          className="absolute right-0 p-3 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition"
        >
          <FaArrowRight />
        </button>
      </div>

      <div className="mt-12 flex justify-center">
        <button className="px-6 py-3 bg-red-500 text-white font-bold rounded-lg shadow-lg transform transition hover:scale-105 animate-pulse">
          Enroll for Free Demo Classes & Counseling Session
        </button>
      </div>
    </div>
  );
};

export default FacultySection;
