"use client";

import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Button } from "../ui/button";

const HeroSection = () => {
  const [text, count] = useTypewriter({
    words: [
      "<Developer />",
      "<Designer />",
      "<Data Scientist />",
      "<Freelancer />",
      "<#BuyMeCoffee/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col items-center justify-center">
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
      <div className="py-8">
        <Button className="bg-teal-500 hover:bg-teal-700">My Resume</Button>
      </div>
    </div>
  );
};

export default HeroSection;
