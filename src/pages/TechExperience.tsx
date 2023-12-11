import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { techExp } from "../data/data";
import TechExperienceCard from "../components/TechExperienceCard";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { textVariant } from "../utils/motion";

export default function TechExperience() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <>
      <motion.div
        id="experience"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={textVariant(0.5)}
        className="text-center mb-5"
      >
        <p className="text-gray-500">What I have done so far</p>
        <h3 className="text-4xl text-gray-300">
          Technical Experience & Education
        </h3>
      </motion.div>
      <VerticalTimeline>
        {techExp.map((exp, index) => (
          <TechExperienceCard key={index} {...exp} />
        ))}
      </VerticalTimeline>
    </>
  );
}
