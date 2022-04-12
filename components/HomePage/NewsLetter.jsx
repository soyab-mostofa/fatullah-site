import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
const NewsLetter = () => {
  return (
    <div className="bg-blue-primary">
      <div className="container px-2 py-10 mx-auto space-y-3">
        <div className="flex items-center justify-center gap-3">
          <h1 className=" text-gray-50">Sign up for latest updates</h1>
          <div className="relative overflow-hidden rounded-lg">
            <input
              type="text"
              className="px-5 py-1 focus:outline-none"
              placeholder="enter your email"
            />
            <button className="absolute top-0 right-0 px-5 py-1 text-gray-50 bg-blue-primary/60">
              Sign up
            </button>
          </div>
        </div>

        {/* icons */}
        <div className="flex justify-center gap-3 text-gray-50">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedinIn />
        </div>

        <div className="flex flex-col items-center justify-center pt-10 space-y-3">
          <h3 className="text-2xl font-bold text-center text-gray-50">
            Lets get your work done.
          </h3>
          <button className="w-40 px-5 py-2 border border-gray-50 text-gray-50">
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
