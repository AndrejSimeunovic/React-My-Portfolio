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
              Motivated Computer Science and Engineering graduate known for
              excelling in collaborative settings, drawing on strong
              communication, teamwork, motivation, time management, and
              interpersonal skills developed through my background as a football
              player.
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
