"use client";

import Image from "next/image";
import about from "../../public/images/about.svg";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";

const AboutSection = () => {
  const { ref, inView } = useInView();
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("About");
      console.log("in view");
    }
  }, [inView, setActiveSection]);

  return (
    <section
      id="about"
      ref={ref}
      className="h-screen mt-8 flex flex-col items-center justify-evenly"
    >
      <p className="text-2xl tracking-widest font-bold">ABOUT ME</p>
      <div className="flex flex-col sm:flex-row justify-evenly items-center w-full">
        <div className="w-[200px] h-[200px] sm:h-[300px] sm:w-[300px] lg:h-[400px] lg:w-[400px]">
          <Image priority src={about} alt="about" />
        </div>
        <div className="py-10 sm:py-0 max-w-[300px] md:max-w-[350px] lg:max-w-[500px]">
          <p className="text-md text-justify sm:text-lg font-light">
            I am an ambitious individual, with an analytical mind and a strong
            academic background. I am currently pursuing 2 Bachelors Degree,
            namely,{" "}
            <span className="font-semibold sm:font-bold">
              B.E in Electronics and Communications at SSN College of
              Engineering
            </span>{" "}
            and{" "}
            <span className="font-semibold sm:font-bold">
              B.Sc. in Data Science and Applications at IITM
            </span>
            . I am a fast learner and have a unique perspective in general. That
            coupled with the fact that I love innovating and inventing, adds
            value to any team/organization I work with.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
