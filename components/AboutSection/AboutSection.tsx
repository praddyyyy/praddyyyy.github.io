import Image from "next/image";
import about from "../../public/images/about.svg";

const AboutSection = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-evenly">
      <p className="text-2xl tracking-widest font-bold">ABOUT ME</p>
      <div className="flex flex-col sm:flex-row justify-evenly items-center w-full">
        <Image src={about} alt="about" />
        <div className="max-w-[250px] sm:max-w-[500px]">
          <p className="text-lg font-light">
            I am an ambitious individual, with an analytical mind and a strong
            academic background. I am currently pursuing 2 Bachelors Degree,
            namely,{" "}
            <span className="font-bold">
              B.E in Electronics and Communications at SSN College of
              Engineering
            </span>{" "}
            and{" "}
            <span className="font-bold">
              B.Sc. in Data Science and Applications at IITM
            </span>
            . I am a fast learner and have a unique perspective in general. That
            coupled with the fact that I love innovating and inventing, adds
            value to any team/organization I work with.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
