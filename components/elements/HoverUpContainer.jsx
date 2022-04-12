import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  initial: {
    y: 100,
  },
  animate: {
    y: 0,
    transition: {
      ease: "easeIn",
    },
  },
};

const HoverUpContainer = ({ children }) => {
  return (
    <motion.div variant={containerVariants} initial="initial" animate="animate">
      {children}
    </motion.div>
  );
};

export default HoverUpContainer;
