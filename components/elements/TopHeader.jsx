import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";

const TopHeader = () => {
  const { asPath } = useRouter();
  return (
    <div
      className={`flex justify-between ${
        asPath === "/" ? "text-gray-50" : ""
      } pt-3`}
    >
      <div className="flex gap-3 mb-3 cursor-pointer ">
        <Link
          href="https://www.facebook.com/fatullahgroup/"
          passHref
          target="_blank"
        >
          <FaFacebook />
        </Link>
        <FaTwitter />
        <FaInstagram />
        <FaLinkedinIn />
      </div>
      <div className="space-x-3">
        <Link href="#">
          <a>Login</a>
        </Link>
        <Link href="#">
          <a>Sign up</a>
        </Link>
      </div>
    </div>
  );
};

export default TopHeader;
