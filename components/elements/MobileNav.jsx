import Link from "next/link";
import React from "react";
import {
  AiOutlineCloseCircle,
  AiOutlineDown,
  AiOutlineUp,
} from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { title: "About" },
  {
    title: "Industries",
    sub: [
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
  },
  { title: "CSR" },
  {
    title: "Production",
    sub: [
      "Woven",
      "Knitting",
      "Knit Dying",
      "Knit Garments",
      "Knit Screen Printing",
    ],
  },
  { title: "Contact" },
];

const NavLink = ({ title, sub }) => {
  const [openSub, setOpenSub] = React.useState(false);

  const handleOpen = () => {
    if (openSub) {
      setOpenSub(false);
    } else {
      setOpenSub(true);
    }
  };

  return (
    <Link href="#">
      <div className="mb-3">
        <div
          onClick={handleOpen}
          className="flex items-center mb-3 cursor-pointer"
        >
          <p className="p-2 text-xl text-gray-50">{title}</p>
          {sub !== undefined &&
            (openSub ? (
              <AiOutlineUp className="text-xl text-gray-50" />
            ) : (
              <AiOutlineDown className="text-xl text-gray-50" />
            ))}
        </div>
        <AnimatePresence>
          {openSub &&
            sub &&
            sub.map((item, i) => {
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-gray-50"
                >
                  {item}
                </motion.div>
              );
            })}
        </AnimatePresence>
      </div>
    </Link>
  );
};

const renderedLinks = navItems.map((item, i) => {
  return <NavLink key={i} title={item.title} sub={item.sub && item.sub} />;
});

const menuVariants = {
  hidden: {
    x: "100vh",
  },
  shown: {
    x: 0,
    transition: { type: "tween" },
  },
  exit: {
    x: "100vh",
    transition: { type: "tween" },
  },
};

const MobileNav = ({ open, setOpen }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          variants={menuVariants}
          initial="hidden"
          animate="shown"
          exit="exit"
          className={` fixed top-0 right-0 z-50 w-80 h-screen px-10 pt-10 space-y-3 bg-blue-primary`}
        >
          <div onClick={() => setOpen(false)}>
            <AiOutlineCloseCircle className="mb-10 text-5xl cursor-pointer text-gray-50" />
          </div>
          {renderedLinks}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
