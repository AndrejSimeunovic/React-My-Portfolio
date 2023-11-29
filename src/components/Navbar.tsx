import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);

  function handleClick() {
    setShowNav(!showNav);
  }

  useEffect(() => {
    function handleResize(this: Window) {
      if (window.innerWidth >= 768) setShowNav(false);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <nav className="flex py-3 px-6 sticky top-0 items-center z-[999] bg-gradient-to-tr from-green-950 to-slate-900 shadow-lg">
      <Link
        className={showNav ? "hidden" : "mr-auto cursor-pointer"}
        to="home"
        smooth={true}
        duration={500}
      >
        <div className="text-green-400 font-thin text-4xl">AS</div>
      </Link>
      <ul className="md:flex gap-4 text-slate-400 hidden items-center">
        <li className="hover:border-b-4 hover:border-green-400 duration-100 cursor-pointer">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:border-b-4 hover:border-green-400 duration-100 cursor-pointer">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:border-b-4 hover:border-green-400 duration-100 cursor-pointer">
          <Link to="experience" smooth={true} duration={500} offset={-100}>
            Experience
          </Link>
        </li>
        <li className="hover:border-b-4 hover:border-green-400 duration-100 cursor-pointer">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="hover:border-b-4 hover:border-green-400 duration-100 cursor-pointer">
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
      </ul>
      {showNav ? (
        <div
          onClick={handleClick}
          className="md:hidden cursor-pointer text-white z-10 absolute right-10 top-10 border rounded-full px-3 py-2 hover:bg-white hover:text-black duration-300"
        >
          X
        </div>
      ) : (
        <Menu
          onClick={handleClick}
          color="white"
          className="md:hidden cursor-pointer"
        />
      )}

      <AnimatePresence>
        {showNav && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            transition={{ duration: 0.4 }}
            exit={{
              opacity: 0,
              height: 0,
              transition: { ease: "easeInOut", duration: 0.4 },
            }}
            className="absolute bg-gradient-to-tr from-green-950 to-slate-900 top-0 left-0 w-full flex flex-col justify-center items-center h-screen  text-gray-300 text-4xl gap-10 md:hidden"
          >
            <li className="hover:border-b-4 hover:border-green-400 duration-100 cursor-pointer">
              <Link
                onClick={handleClick}
                to="home"
                smooth={true}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="hover:border-b-4 hover:border-green-400  cursor-pointer">
              <Link
                onClick={handleClick}
                to="about"
                smooth={true}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="hover:border-b-4 hover:border-green-400  cursor-pointer">
              <Link
                onClick={handleClick}
                to="experience"
                smooth={true}
                duration={500}
                offset={-100}
              >
                Experience
              </Link>
            </li>
            <li className="hover:border-b-4 hover:border-green-400 cursor-pointer">
              <Link
                onClick={handleClick}
                to="skills"
                smooth={true}
                duration={500}
              >
                skills
              </Link>
            </li>
            <li className="hover:border-b-4 hover:border-green-400  cursor-pointer">
              <Link
                onClick={handleClick}
                to="work"
                smooth={true}
                duration={500}
              >
                Work
              </Link>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
