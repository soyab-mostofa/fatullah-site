import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="p-4 space-y-3 text-center bg-blue-primary text-gray-50">
      <div className="pt-3 border-t">
        <ul>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/industries">
              <a>Industry</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
      <p>© 2021 All Rights Reserved By fatullah group</p>
    </footer>
  );
};

export default Footer;
