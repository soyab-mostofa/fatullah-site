import "../styles/globals.css";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import React from "react";
import Header from "../components/elements/Header";
import TopHeader from "../components/elements/TopHeader";
import Footer from "../components/elements/Footer";
import MobileNav from "../components/elements/MobileNav";

function MyApp({ Component, pageProps }) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      {/* navbar */}

      <header>
        <div className="container px-3 py-3 mx-auto md:px-0">
          <TopHeader />
          <Header open={open} setOpen={setOpen} />
          <MobileNav open={open} setOpen={setOpen} />
        </div>
      </header>

      {/* main */}

      <main>
        <Component {...pageProps} />
      </main>

      {/* footer */}
      <Footer />
    </>
  );
}

export default MyApp;
