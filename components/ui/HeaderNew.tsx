"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export const routes = [
  {
    hash: "#home",
    label: "Home",
  },
  {
    hash: "#about",
    label: "About",
  },
  // {
  //   hash: "#education",
  //   label: "Education",
  // },
  {
    hash: "#projects",
    label: "Projects",
  },
  {
    hash: "#skills",
    label: "Skills",
  },
  // {
  //   hash: "#achievements",
  //   label: "Achievements",
  // },
  {
    hash: "#contact",
    label: "Contact",
  },
];

const HeaderNew = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  return (
    <header className="z-[999] relative">
      <motion.div
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-sm border border-teal-500 border-opacity-50 bg-teal-500 bg-opacity-50 shadow-lg shadow-black/[0/3] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[30rem] sm:rounded-full"
      ></motion.div>
      <nav className="flex fixed top-[0.3rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[20rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-200 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {routes.map((link) => (
            <motion.li
              key={link.hash}
              className="h-3/4 flex items-center justify-center relative"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Link
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.label);
                  setTimeOfLastClick(Date.now());
                }}
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-black transition",
                  {
                    "text-black": activeSection === link.label,
                  }
                )}
              >
                {link.label}
                {link.label === activeSection && (
                  <motion.span
                    layoutId="activeLink"
                    className="bg-teal-300 rounded-full absolute inset-0 -z-10"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default HeaderNew;
