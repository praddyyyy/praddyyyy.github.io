"use client";

import { useRef, useEffect } from "react";
import Container from "./ui/container";
import { Button } from "./ui/button";
import { Sun, Moon, Menu } from "lucide-react";
import { useTheme } from "next-themes";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Link } from "react-scroll/modules";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const routes = [
  {
    href: "about",
    label: "About",
  },
  // {
  //   href: "education",
  //   label: "Education",
  // },
  // {
  //   href: "skills",
  //   label: "Skills",
  // },
  {
    href: "projects",
    label: "Projects",
  },
  {
    href: "achievements",
    label: "Achievements",
  },
  {
    href: "contact",
    label: "Contact",
  },
];

const Header = () => {
  const { theme, setTheme } = useTheme();

  // // Gsap animation
  // gsap.registerPlugin(ScrollTrigger);

  // const navbarRef = useRef(null);

  // useEffect(() => {
  //   const showNav = gsap
  //     .fromTo(
  //       navbarRef.current,
  //       { opacity: 0, duration: 1.5 },
  //       { opacity: 1, duration: 0.4 }
  //     )
  //     .progress(1);
  //   ScrollTrigger.create({
  //     start: "top top",
  //     end: "max",
  //     onUpdate: (self) => {
  //       if (self.direction === -1) {
  //         showNav.play();
  //       } else {
  //         showNav.reverse();
  //       }
  //     },
  //   });
  // }, []);

  return (
    <header
      // ref={navbarRef}
      className="sticky top-0 z-30 dark:bg-black bg-white sm:flex sm:justify-between border-b py-3 sm:px-4"
    >
      <Container>
        <div className="w-full flex h-12 px-4 sm:px-6 lg:px-8 justify-between relative">
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger>
                <Menu className="h-6 w-6 lg:hidden" />
              </SheetTrigger>
              <SheetContent side="left">
                <nav className="flex flex-col gap-y-4">
                  {routes.map((route, i) => (
                    <Link
                      key={i}
                      to={route.href}
                      smooth={true}
                      duration={500}
                      spy={true}
                      offset={0}
                      className="block px-2 py-1 text-lg"
                    >
                      {route.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            <Link
              to="hero"
              smooth={true}
              duration={500}
              spy={true}
              offset={-73}
              className="hidden md:block ml-4 lg:ml-0"
            >
              <h1 className="text-xl font-bold hover:cursor-pointer">
                Pradeeshwar
              </h1>
            </Link>
          </div>
          <nav className="mx-4 hidden lg:flex items-center space-x-4 lg:space-x-6">
            {routes.map((route, i) => (
              <Button key={i} asChild variant="ghost">
                <Link
                  to={route.href}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={0}
                  className="text-sm font-medium transition-colors hover:cursor-pointer hover:text-gray-900 dark:hover:text-gray-100"
                >
                  {route.label}
                </Link>
              </Button>
            ))}
          </nav>
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle Theme"
              className="mr-6"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle Theme</span>
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
