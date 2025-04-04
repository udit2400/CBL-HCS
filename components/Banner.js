"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const Banner = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <div ref={ref} className="relative h-[500px] overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/mountain1.jpg')", // Replace with actual image path
          y,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4 text-center leading-tight">
          Conquer Your HCS Dreams  <br className="hidden sm:block" />
          Start Your Journey Today!
        </h1>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 hover:bg-blue-700 transition-all text-white font-semibold px-6 py-3 rounded-full shadow-lg mt-4"
          onClick={() => setShowForm(true)} // Show form on button click
        >
          Register for Free Guidance
        </motion.button>
      </div>

      {/* Render Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-20 px-4">
  <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-[500px] md:max-w-[600px] relative">

            {/* Close Button */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
            >
              ✕
            </button>

            {/* Top Center Box */}
            <div className="z-10 absolute -top-5 left-1/2 transform -translate-x-1/2 bg-red-100 text-red-600 font-semibold text-center px-6 py-2 rounded-lg shadow-md">
              Join CBL
            </div>

            {/* Form Container */}
            <div className="border-4 border-red-200 rounded-lg p-6 relative bg-white shadow-lg">
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                Fulfill Your Dream of Becoming an HCS
              </h2>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-6 items-start"
              >
                {/* Left Section */}
                <div className="flex-1 space-y-4">
                  {/* Name Field */}
                  <div className="flex items-center gap-4">
                    <label
                      htmlFor="name"
                      className="text-sm font-semibold text-gray-700 whitespace-nowrap"
                    >
                      Name:
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 ml-3"
                      placeholder="Enter your name"
                    />
                  </div>

                  {/* Phone Field */}
                  <div className="flex items-center gap-4">
                    <label
                      htmlFor="phone"
                      className="text-sm font-semibold text-gray-700 whitespace-nowrap"
                    >
                      Contact:
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="flex items-center gap-4">
                    <label
                      htmlFor="email"
                      className="text-sm font-semibold text-gray-700 whitespace-nowrap"
                    >
                      Email:
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 ml-3"
                      placeholder="Enter your email address"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition-colors"
                  >
                    Enquire
                  </button>
                </div>

                {/* Right Section - Image */}
                <div className=" sm:block ">
                  <img
                    src="/Topper.png" // Replace with your image file name in the public folder
                    alt="Join CBL"
                    className="w-48 h-60 object-cover rounded-lg"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
