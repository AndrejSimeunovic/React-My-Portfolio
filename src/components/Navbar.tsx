import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

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
    <nav className="flex py-3 px-6 sticky top-0 items-center bg-sky-900">
      <Link
        className={showNav ? "hidden" : "mr-auto cursor-pointer"}
        to="home"
        smooth={true}
        duration={500}
      >
        <div className="text-yellow-600 font-bold text-4xl">AS</div>
      </Link>
      <ul className="md:flex gap-4 text-slate-400 hidden items-center">
        <li className="hover:text-slate-300 cursor-pointer">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:text-slate-300 cursor-pointer">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:text-slate-300 cursor-pointer">
          <Link to="experience" smooth={true} duration={500}>
            Experience
          </Link>
        </li>
        <li className="hover:text-slate-300 cursor-pointer">
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
      </ul>
      {showNav ? (
        <div
          onClick={handleClick}
          className="md:hidden cursor-pointer text-white z-10 absolute right-10 top-10"
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
      <ul
        className={
          !showNav
            ? "hidden"
            : "absolute bg-sky-950 top-0 left-0 w-full flex flex-col justify-center items-center h-screen text-gray-300 text-4xl gap-10 md:hidden"
        }
      >
        <li className="hover:text-slate-300 cursor-pointer">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:text-slate-300 cursor-pointer">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:text-slate-300 cursor-pointer">
          <Link
            onClick={handleClick}
            to="experience"
            smooth={true}
            duration={500}
          >
            Experience
          </Link>
        </li>
        <li className="hover:text-slate-300 cursor-pointer">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
      </ul>
    </nav>
  );
}
