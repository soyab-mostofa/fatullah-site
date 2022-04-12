import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../public/assets/logo.png";
import { motion } from "framer-motion";
import { AiOutlineMenu } from "react-icons/ai";

const NavDropdown = ({ link }) => {
  const items = {
    industries: [
      "Siraj Printing Works",
      "Begum Rokeya Rice Mils",
      "Fatullah Dyeing & Calendaring Mills Ltd.",
      "Fatullah Knitting Mills Ltd",
      "Fatullah Fabrics Ltd",
      "Fatullah Enterprise Ltd",
      "Fatullah Apparels",
      "Fatullah Cotton & Weaving Industries Ltd",
      "Fatullah Woven Labels Ltd",
    ],
    production: [
      "Woven",
      "Knitting",
      "Knit Dying",
      "Knit Garments",
      "Knit Screen Printing",
    ],
  };

  let links = items[link];

  return (
    <motion.ul
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`py-5 top-6 px-2 w-48 -left-10 bg-blue-primary text-gray-50 ${
        !links ? "hidden" : "absolute"
      }`}
    >
      {links?.map((item, i) => {
        return (
          <li
            key={i}
            className="px-3 py-2 text-sm transition-all cursor-pointer hover:bg-gray-50 hover:text-blue-primary"
          >
            {item}
          </li>
        );
      })}
    </motion.ul>
  );
};

const NavLink = ({ link }) => {
  const [menuOpen, setOpenMenu] = React.useState(false);
  return (
    <li
      className="relative"
      onMouseEnter={() => setOpenMenu(true)}
      onMouseLeave={() => setOpenMenu(false)}
    >
      <Link href={link}>
        <a className="uppercase text-gray-50">{link}</a>
      </Link>
      {menuOpen && <NavDropdown link={link} />}
    </li>
  );
};

const Header = ({ open, setOpen }) => {
  return (
    <div className="sticky flex items-center justify-between py-1 border-y border-gray-50">
      <div className="flex items-center gap-3 font-bold uppercase text-gray-50">
        <Image
          className="bg-white"
          height={Logo.height * 0.8}
          width={Logo.width * 0.8}
          src={Logo}
        />
        Fatullah Fabrics
      </div>
      <ul className="hidden gap-3 md:flex">
        <NavLink link="about" title="About" />
        <NavLink link="industries" title="Industries" />
        <NavLink link="csr" title="Csr" />
        <NavLink link="production" title="Production" />
        <NavLink link="contact" title="Contact" />
      </ul>
      <div onClick={() => setOpen(true)}>
        <AiOutlineMenu className="text-3xl cursor-pointer text-gray-50 md:hidden" />
      </div>
    </div>
  );
};

export default Header;
