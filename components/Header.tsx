"use client";

import Link from "next/link";
import Container from "./ui/container";
import { Button } from "./ui/button";
import { Sun, Moon, Menu } from "lucide-react";
import { useTheme } from "next-themes";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import ProfileButton from "./ui/ProfileButton";

const routes = [
  {
    href: "/",
    label: "About Me",
  },
  {
    href: "/",
    label: "Education",
  },
  {
    href: "/",
    label: "Skills",
  },
  {
    href: "/",
    label: "Projects",
  },
  {
    href: "/",
    label: "Achievements",
  },
  {
    href: "/",
    label: "Contact Me",
  },
];

const Header = () => {
  const { theme, setTheme } = useTheme();
  return (
    <header className="sm:sticky sm:top-0 z-30 dark:bg-black bg-white sm:flex sm:justify-between border-b py-3 px-4">
      <Container>
        <div className="w-full flex h-12 px-4 sm:px-6 lg:px-8 justify-between relative">
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger>
                <Menu className="h-6 w-6 md:hidden" />
              </SheetTrigger>
              <SheetContent side="left">
                <nav className="flex flex-col gap-y-4">
                  {routes.map((route, i) => (
                    <Link
                      key={i}
                      href={route.href}
                      className="block px-2 py-1 text-lg"
                    >
                      {route.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            <Link href="/" className="ml-4 lg:ml-0">
              <h1 className="text-xl font-bold">Pradeeshwar</h1>
            </Link>
          </div>
          <nav className="mx-6 hidden md:flex items-center space-x-4 lg:space-x-6 ">
            {routes.map((route, i) => (
              <Button key={i} asChild variant="ghost">
                <Link
                  href={route.href}
                  className="text-sm font-medium transition-colors"
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
            <ProfileButton />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
