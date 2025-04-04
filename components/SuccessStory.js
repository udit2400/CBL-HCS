import React from "react";

const SuccessStory = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 text-center">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-red-600 mb-6 animate-fade-in">
        CBL Celebrates Phenomenal Success in Haryana Civil Services Exam
      </h2>
      
      {/* Video Section */}
      <div className="flex justify-center mb-8 animate-fade-in delay-100">
        <iframe
          className="w-full max-w-3xl h-64 md:h-96 rounded-xl shadow-lg"
          src="https://www.youtube.com/embed/wvQ-o-TrDEE"
          title="Success Story"
          allowFullScreen
        ></iframe>
      </div>

      {/* Description Section */}
      <div className="bg-gray-100 p-6 rounded-xl shadow-md max-w-4xl mx-auto animate-fade-in delay-200">
        <p className="text-lg text-gray-800 leading-relaxed">
          <strong>Outstanding Results Achieved by Dedicated Students and Committed Faculty</strong>
        </p>
        <p className="text-gray-700 mt-4">
          We are thrilled to announce the outstanding success of our coaching institute in the Haryana Civil Services Exam 2021.
          Our dedicated faculty and comprehensive curriculum have enabled numerous students to secure top ranks and fulfill their dreams.
        </p>
        <p className="text-gray-700 mt-4">
          Chetan Bharat Learning has consistently produced remarkable results, with <strong>5 out of the top 10 rank holders</strong>:
        </p>
        <ul className="list-disc list-inside text-gray-800 mt-4">
          <li><strong>RANK 1:</strong> Kamal Chaudhary (SDM)</li>
          <li><strong>RANK 3:</strong> Sakshi (SDM)</li>
          <li>And many more achieving great heights...</li>
        </ul>
      </div>
    </div>
  );
};

export default SuccessStory;