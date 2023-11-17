import { ArrowRight } from "lucide-react";
import { Link } from "react-scroll";

export default function Home() {
  return (
    <div id="home" className="h-screen w-full">
      <div className="flex flex-col justify-center h-full max-w-xl px-8 mx-auto">
        <img
          className="rounded-full self-center mb-3"
          width={90}
          height={90}
          src="/images/Andrej.jpg"
        />
        <div className="text-yellow-600 text-sm font-bold">Hi, my name is</div>
        <div className="text-5xl text-slate-400">Andrej Simeunovic</div>
        <div className="text-4xl text-gray-500">
          I'm a Junior Software Engineer
        </div>
        <div className="text-sm text-gray-500">
          As a recent graduate in Computer Science, I am a highly motivated and
          dedicated professional with a strong passion for the field.
        </div>
        <button className="border  bg-inherit mr-auto p-2 gap-1 flex text-white mt-2 hover:bg-yellow-900">
          <Link to="work" smooth={true} duration={500}>
            View Work
          </Link>
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}
