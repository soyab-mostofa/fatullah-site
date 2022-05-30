import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../public/assets/logo.png";
import tw from "tailwind-styled-components";
import { motion } from "framer-motion";
import { AiOutlineMenu } from "react-icons/ai";
import { useRouter } from "next/router";
import Show from "./Show";

const NavContainer = tw.div`relative py-3 z-20 flex justify-between items-center px-4 `;

const A = tw.a`text-neutral-50 font-semibold px-2 py-1.5 text-center text-sm hover:bg-neutral-50 hover:text-neutral-900 transition-all tracking-wider`;

const navItems = [
  {
    title: "About",
    link: "/about",
    sub: [
      { title: "Journey", link: "/about/journey" },
      { title: "History", link: "/about/history" },
      { title: "Leadership", link: "/about/leadership" },
      { title: "Awards", link: "/about/awards" },
      { title: "Impacts", link: "/about/impacts" },
    ],
  },
  {
    title: "Industries",
    link: "/industries",
  },

  {
    title: "Contact",
    link: "/contact",
  },
];

const NavItem = ({ item, key }) => {
  const { asPath } = useRouter();
  const B = tw.a` font-semibold px-2 py-1 text-center tracking-wider  ${(p) =>
    p.$light ? "text-neutral-50" : "text-neutral-900"} `;

  const light = asPath === "/" ? true : false;

  const [show, setShow] = React.useState(false);
  return (
    <div
      key={key}
      className="relative"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <Link href={item.link} passHref>
        <B $light={light}>{item.title}</B>
      </Link>
      <div className="absolute z-50 flex flex-col -right-4 bg-blue-primary/60 backdrop-blur-md">
        <Show show={show}>
          {item.sub &&
            item.sub.map((it, i) => {
              return (
                <Link key={i} href={it.link} passHref>
                  <A>{it.title}</A>
                </Link>
              );
            })}
        </Show>
      </div>
    </div>
  );
};

const Header = ({ setOpen }) => {
  const { asPath } = useRouter();

  const light = asPath === "/" ? true : false;

  return (
    <NavContainer>
      <Link href="/" passHref>
        <Image src={Logo} alt="logo" className="cursor-pointer bg-neutral-50" />
      </Link>
      <div className="justify-end hidden space-x-3 md:flex">
        {navItems.map((item, i) => (
          <NavItem item={item} key={i} />
        ))}
      </div>
      <div
        className={`md:hidden text-3xl cursor-pointer text-neutral-50 ${
          light ? "text-neutral-50" : "text-neutral-900"
        }`}
      >
        <AiOutlineMenu onClick={() => setOpen(true)} />
      </div>
    </NavContainer>
  );
};

export default Header;
