import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import { useEffect } from "react";

export default function Home() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const homeVariants = {
    visible: { opacity: 1, scale: 1, transition: { delay: 0.9, duration: 2 } },
    hidden: { opacity: 0, scale: 0.5 },
  };
  const imgVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 2 } },
    hidden: { opacity: 0, scale: 0.5 },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);
  return (
    <div id="home" className="h-screen w-full">
      <div className="flex justify-center flex-col-reverse md:flex-row md:justify-between items-center h-full max-w-[1000px]  px-8 mx-auto">
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={homeVariants}
          className="md:max-w-[400px] w-full"
        >
          <div className="text-green-400 text-sm font-bold">Hi, my name is</div>
          <div className="text-5xl text-slate-400">Andrej Simeunovic</div>
          <span className="text-2xl text-gray-300">And I'm a </span>

          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Computer Science graduate",
              2000,
              "Junior Software Engineer",
              4000,
            ]}
            wrapper="span"
            speed={50}
            className="text-2xl text-green-400"
            repeat={Infinity}
          />
          {/* <div className="text-sm text-gray-500">
            As a recent graduate in Computer Science, I am a highly motivated
            and dedicated professional with a strong passion for the field.
  </div>*/}
          <div className="flex gap-3 my-4">
            <a
              className="flex justify-between items-center  border border-green-400 rounded-full p-3 hover:bg-green-700  shadow-md hover:shadow-white duration-300"
              href="https://www.linkedin.com/in/andrej-simeunovic-a73a941a2/"
              target="_blank"
            >
              <Linkedin color="white" />
            </a>
            <a
              className="flex justify-between items-center  border border-green-400 rounded-full p-3 hover:bg-green-700  shadow-md hover:shadow-white duration-300"
              href="https://github.com/AndrejSimeunovic"
              target="_blank"
            >
              <Github color="white" />
            </a>
          </div>
          {/**projectbtn */}
          <button className="border md:hidden bg-inherit mr-auto p-2 gap-1 flex group text-white mt-2 hover:text-green-400">
            <Link to="work" smooth={true} duration={500}>
              View Work
            </Link>
            <ArrowRight className="group-hover:rotate-90 duration-500" />
          </button>
          <Link
            to="work"
            smooth={true}
            duration={500}
            className="hidden mr-auto group relative md:flex justify-center items-center w-fit cursor-pointer"
          >
            <img
              src="/images/rounded-text.png"
              alt="logo"
              className="w-full h-full max-w-[141px] max-h-[148px] animate-spin-slow"
            />
            <ArrowRight
              size={50}
              color="white"
              className="group-hover:rotate-90 duration-500 absolute text-4xl"
            />
          </Link>
        </motion.div>
        <motion.img
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={imgVariants}
          className="rounded-full self-center mb-3 border-2 border-white shadow-lg shadow-white md:w-[350px] md:h-[400px] hover:animate-pulse"
          width={100}
          height={100}
          src="/images/Andrej.jpg"
        />
      </div>
    </div>
  );
}
