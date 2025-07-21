import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { textVariant } from "../utils/motion";

export default function About() {
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
    <div id="about" className="h-screen w-full text-gray-300">
      <div className="h-full mx-auto max-w-xl flex items-center">
        <div className="flex flex-col justify-center items-center gap-4">
          <motion.p
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={textVariant(0)}
            className="border-b-4 border-b-yellow-900 text-4xl font-bold"
          >
            About Me
          </motion.p>
          <div className="flex items-center px-4 gap-3 leading-loose">
            <motion.p
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={textVariant(0.5)}
            >
              Junior Software Engineer with hands-on experience building
              production-ready applications using TypeScript, React, GraphQL,
              and NestJS. Proven track record of delivering features end-to-end
              in cross-functional teams, from planning to deployment. Former
              professional footballer, bringing discipline, teamwork, and a
              drive for continuous improvement to every project. Passionate
              about building impactful products and growing as a software
              engineer.
            </motion.p>
            <motion.p
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={textVariant(1)}
            >
              I'm deeply passionate about frontend development, and I've
              dedicated my spare time to creating a wide range of applications,
              from pure front-end to full-stack, utilizing technologies like
              HTML/CSS, JavaScript, React, Node.js, Express.js, and MongoDB.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}
