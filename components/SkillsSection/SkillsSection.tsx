"use client";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next JS",
  "Vue JS",
  "React Native",
  "Tailwind CSS",
  "Node JS",
  "Express JS",
  "MongoDB",
  "PostgreSQL",
  "Python",
  "Flask",
  "Git",
  "Linux",
  "Redux",
  "Firebase",
];

const fadeInVariations = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 1,
    transition: { delay: 0.05 * index },
  }),
};

const SkillsSection = () => {
  const { ref } = useSectionInView("Skills", 0.9);
  return (
    <section
      ref={ref}
      id="skills"
      className="flex h-screen mt-32 flex-col items-center justify-center mb-28 text-center sm:mb-40 scroll-mt-0"
    >
      <p className="text-2xl tracking-widest font-bold py-14">SKILLS</p>
      <ul className="flex flex-wrap justify-center gap-2 gap-y-5 text-lg max-w-[55rem] text-black">
        {skillsData.map((skill, i) => (
          <motion.li
            className="bg-white opacity-60 border-2 border-white rounded-md px-5 py-2"
            key={i}
            variants={fadeInVariations}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={i}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default SkillsSection;
