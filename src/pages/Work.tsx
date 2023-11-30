import { motion, useAnimation } from "framer-motion";
import { projects } from "../data/data";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { textVariant } from "../utils/motion";

export default function Work() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const borderVariant = {
    visible: { width: "auto", opacity: 1, transition: { duration: 0.5 } },
    hidden: { width: 0, opacity: 0 },
  };
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);
  return (
    <div id="work" className="h-screen w-full text-gray-300">
      <div className="h-full flex flex-col max-w-[1000px] mx-auto gap-3 px-3 justify-center">
        <motion.p
          ref={ref}
          variants={borderVariant}
          initial="hidden"
          animate={controls}
          className="text-4xl border-b-4 border-b-yellow-900"
        >
          Work
        </motion.p>
        <motion.p
          ref={ref}
          variants={textVariant(0.5)}
          initial="hidden"
          animate={controls}
        >
          These are the projects I have worked with
        </motion.p>
        <motion.div
          ref={ref}
          variants={textVariant(1)}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4 h-[300px] px-3 overflow-auto md:scrollbar"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="shadow-md shadow-[#040c16] group rounded relative"
            >
              <img
                src={project.image}
                alt="logo"
                className="w-full h-full object-cover rounded"
              />

              {/**hover */}
              <div className="flex justify-center items-center gap-2 opacity-0 group-hover:opacity-100 border bg-gradient-to-r from-indigo-500 to-blue-700 absolute inset-0 rounded p-3 duration-300">
                <div className="flex flex-col justify-center items-center gap-4">
                  <p>{project.name}</p>
                  <div className="flex gap-3">
                    {project.demo && (
                      <a href={project.demo} target="_blank">
                        <button className="rounded px-2 py-1 bg-slate-200 text-black">
                          Demo
                        </button>
                      </a>
                    )}

                    <a href={project.code} target="_blank">
                      <button className="rounded px-2 py-1 bg-slate-200 text-black">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
