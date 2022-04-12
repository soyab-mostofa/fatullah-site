import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import Link from "next/link";

const TopHeader = () => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-3 mb-3 text-gray-50">
        <FaFacebook />
        <FaTwitter />
        <FaInstagram />
        <FaLinkedinIn />
      </div>
      <div className="space-x-3">
        <Link href="login">
          <a className="text-gray-50">Login</a>
        </Link>
        <Link href="signup">
          <a className="text-gray-50">Sign up</a>
        </Link>
      </div>
    </div>
  );
};

export default TopHeader;
