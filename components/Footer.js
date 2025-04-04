import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-6">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left - Logo and Address */}
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <img
              src="/logo.png" // Ensure this logo is available in the public folder
              alt="Company Logo"
              className="h-12 mx-auto md:mx-0"
            />
            <p className="mt-2 text-sm">
              First Floor, ISBT, Sector 43, Chandigarh, 160047
            </p>
            <p className="text-sm mt-1">
              Phone:{" "}
              <a href="tel:+911234567890" className="hover:underline">
                +91 12345 67890
              </a>{" "}
              |{" "}
              <a href="tel:+9119876543210" className="hover:underline">
                +91 19876 543210
              </a>
            </p>
          </div>

          {/* Center - Google Map */}
          <div className="w-full md:w-1/3 h-32 sm:h-48 md:h-64 mb-4 md:mb-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3471.111848857185!2d76.744539!3d30.7164923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feb7065055365%3A0xc7066c4446227b6f!2sFirst+Floor%2C+ISBT%2C+Sector+43%2C+Chandigarh%2C+160047!5e0!3m2!1sen!2sin!4v1635804906962!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg"
              title="Google Map Location - CBL, Chandigarh"
            ></iframe>
          </div>

          {/* Right - Play Store Button */}
          <div>
            <a
              href="https://play.google.com/store/apps/details?id=com.manpreet.singh.chetanbharat&hl=en" // Your Play Store app link
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-800 flex items-center px-6 py-2 rounded-lg shadow-md hover:bg-gray-200 transition duration-300"
            >
              <img
                src="https://w7.pngwing.com/pngs/530/733/png-transparent-goggle-playstore-icon-google-play-computer-icons-android-play-button-angle-rectangle-triangle.png" // Play Store Icon
                alt="Play Store Icon"
                className="h-8 mr-2"
              />
              Download on Play Store
            </a>
          </div>
        </div>

        {/* Bottom - Copyright */}
        <div className="text-center text-gray-400 mt-4">
          <p>&copy; {new Date().getFullYear()} CBL. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
