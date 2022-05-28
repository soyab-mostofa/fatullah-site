import Link from 'next/link';
import React from 'react';
import {
  AiOutlineCloseCircle,
  AiOutlineDown,
  AiOutlineUp,
} from 'react-icons/ai';
import { AnimatePresence, motion } from 'framer-motion';

const navItems = [
  {
    title: 'About',
    link: '/about',
    sub: [
      { title: 'Journey', link: '/about/journey' },
      { title: 'History', link: '/about/history' },
      { title: 'Leadership', link: '/about/leadership' },
      { title: 'Awards', link: '/about/awards' },
      { title: 'Impacts', link: '/about/impacts' },
    ],
  },
  {
    title: 'Industries',
    link: 'industries',
  },
  { title: 'CSR', link: 'csr' },
  {
    title: 'Production',
    link: 'production',
  },

  { title: 'Contact', link: 'contact' },
];

const NavLink = ({ title, sub, link }) => {
  const [openSub, setOpenSub] = React.useState(false);
  const [path, setPath] = React.useState(null);
  const handleOpen = () => {
    if (openSub) {
      setOpenSub(false);
    } else {
      setOpenSub(true);
    }
  };

  return (
    <div className="mb-3">
      <div className="flex items-center mb-3 cursor-pointer">
        <Link href={link} passHref>
          <p className="p-2 text-xl text-gray-50">{title}</p>
        </Link>
        {sub !== undefined &&
          (openSub ? (
            <AiOutlineUp
              onClick={handleOpen}
              className="text-xl text-gray-50"
            />
          ) : (
            <AiOutlineDown
              onClick={handleOpen}
              className="text-xl text-gray-50"
            />
          ))}
      </div>
      <AnimatePresence>
        {openSub &&
          sub &&
          sub.map((item, i) => {
            return (
              <Link href={item.link} key={i} passHref>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="cursor-pointer text-gray-50"
                >
                  {item.title}
                </motion.div>
              </Link>
            );
          })}
      </AnimatePresence>
    </div>
  );
};

const renderedLinks = navItems.map((item, i) => {
  return (
    <NavLink
      key={i}
      link={item.link}
      title={item.title}
      sub={item.sub && item.sub}
    />
  );
});

const menuVariants = {
  hidden: {
    x: '100vh',
  },
  shown: {
    x: 0,
    transition: { type: 'tween' },
  },
  exit: {
    x: '100vh',
    transition: { type: 'tween' },
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
          className={` fixed top-0 right-0 z-50 w-80 h-screen px-10 pt-10 space-y-3 bg-blue-primary/90 backdrop-blur-sm`}
        >
          <div onClick={() => setOpen(false)}>
            <AiOutlineCloseCircle
              className={`mb-10 text-5xl cursor-pointer text-neutral-50 `}
            />
          </div>
          {renderedLinks}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
