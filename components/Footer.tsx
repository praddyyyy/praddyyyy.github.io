import { Instagram, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <div className="w-full h-[15rem] bg-black flex flex-col justify-center items-center text-white space-y-6">
      <p className="text-2xl font-extrabold">PRADEESHWAR A</p>
      <div className="flex flex-row space-x-5">
        <a
          href="https://www.instagram.com/pradeeshwar_a/"
          target="_blank"
          className="hover:text-red-500"
        >
          <Instagram className="h-6 w-6" />
        </a>
        <a
          href="https://www.twitter.com/pradeeshwar_a/"
          target="_blank"
          className="hover:text-blue-500"
        >
          <Twitter className="h-6 w-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/pradeeshwar/"
          target="_blank"
          className="hover:text-blue-500"
        >
          <Linkedin className="h-6 w-6" />
        </a>
        <a
          href="https://www.github.com/praddyyyy/"
          target="_blank"
          className="hover:text-gray-500"
        >
          <Github className="h-6 w-6" />
        </a>
      </div>
      <div className="text-md font-normal">
        Created with <span className="text-red-500">❤</span> by Pradeeshwar
      </div>
    </div>
  );
};

export default Footer;
