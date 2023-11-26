"use client";

import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { ArrowDownToLine } from "lucide-react";
import Link from "next/link";
import { useSectionInView } from "@/lib/hooks";

const HeroSection = () => {
  const { ref } = useSectionInView("Home", 0.5);

  const [text, count] = useTypewriter({
    words: [
      "<Developer />",
      "<Designer />",
      "<Data Scientist />",
      "<Freelancer />",
      "<#BuyMeCoffee />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section
      ref={ref}
      className="h-screen flex flex-col items-center justify-center"
      id="home"
    >
      <div className="text-3xl sm:text-6xl text-center font-bold">
        <p className="text-2xl sm:text-5xl">Hi👋,</p>
        <p>
          I&apos;m <span className="text-teal-500">Pradeeshwar A</span>
        </p>
      </div>
      <h1 className="text-lg font-semibold sm:text-4xl sm:font-bold py-3 sm:py-10">
        <span>{text}</span>
        <Cursor cursorColor="#10b981" />
      </h1>
      <div className="py-8 flex flex-row w-[30rem] justify-evenly items-stretch">
        <Button className="bg-teal-500 hover:bg-teal-700">
          My Resume <ArrowDownToLine className="h-5 w-5 ml-3" />
        </Button>
        <div>
          <Button
            size="icon"
            variant="outline"
            className="mr-3 rounded-full bg-white/10"
          >
            <Link target="_blank" href="https://www.github.com/praddyyyy/">
              <FaGithub className="h-6 w-6" />
            </Link>
          </Button>
          <Button
            size="icon"
            variant="outline"
            className="rounded-full bg-white/10"
          >
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/pradeeshwar/"
            >
              <FaLinkedin className="h-6 w-6" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
