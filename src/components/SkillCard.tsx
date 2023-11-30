import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

type SkillCardProps = {
  name: string;
  icon: string;
  index: number;
};

export default function SkillCard({ name, icon, index }: SkillCardProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const skillVariant = {
    visible: {
      opacity: 1,
      transition: { ease: "easeInOut", duration: 1, delay: index * 0.01 },
    },
    hidden: { opacity: 0 },
  };
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);
  return (
    <motion.div
      ref={ref}
      variants={skillVariant}
      initial="hidden"
      animate={controls}
      className="flex flex-col justify-center items-center gap-2 px-6 py-3 shadow-md shadow-[#040c16] hover:scale-110"
    >
      <img width={60} height={60} src={icon} alt="logo" />
      <p>{name}</p>
    </motion.div>
  );
}
