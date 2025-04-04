import React from "react";

const courses = [
  {
    name: "COMPREHENSIVE COURSE",
    description: "Complete preparation covering all aspects of the exam.",
    details: "Ideal for aspirants seeking in-depth knowledge and guidance.",
    image: "/COMPREHENSIVE_COURSE.png",
  },
  {
    name: "PRELIMS TEST SERIES",
    description: "Practice with high-quality mock tests for Prelims.",
    details: "Designed to improve accuracy and time management.",
    image: "/PRELIMS TEST SERIES.jpeg",
  },
  {
    name: "MAINS TEST SERIES",
    description: "Exclusive test series for UPSC Mains preparation.",
    details: "Includes structured evaluation and feedback.",
    image: "/MAINS TEST SERIES.jpeg",
  },
  {
    name: "LANGUAGE COURSE",
    description: "Specialized training for language proficiency.",
    details: "Covers essay writing, comprehension, and grammar.",
    image: "/LANGUAGE COURSE.jpeg",
  },
];

const CourseCard = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Centered "Our Courses" Heading */}
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
        Our Courses
      </h2>

      {/* Responsive Grid Layout */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300 ease-in-out flex flex-col h-full"
          >
            {/* Course Image */}
            <div className="relative">
              <img
                src={course.image}
                alt={course.name}
                className="w-full h-56 object-cover rounded-t-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-t-2xl"></div>
            </div>

            {/* Course Content */}
            <div className="p-6 flex-1">
              <h3 className="text-2xl font-bold text-gray-800">{course.name}</h3>
              <p className="text-gray-600 mt-2">{course.description}</p>
              <p className="text-gray-500 text-sm mt-1">{course.details}</p>
            </div>

            {/* Enquire Now Button (Always at Bottom) */}
            <div className="p-6 bg-gray-100 flex justify-center mt-auto">
              <button className="bg-red-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-red-700 hover:-translate-y-1 transition-all duration-300">
                Enquire Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCard;
