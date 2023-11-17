import { Linkedin, Github } from "lucide-react";

export default function Aside() {
  return (
    <div className=" hidden fixed top-[50%] left-0 lg:flex flex-col">
      <a
        className="flex justify-between items-center gap-2 bg-blue-600 p-3 hover:scale-x-110 duration-300"
        href="https://www.linkedin.com/in/andrej-simeunovic-a73a941a2/"
        target="_blank"
      >
        LinkedIn
        <Linkedin color="#b8a8a8" />
      </a>
      <a
        className="flex justify-between items-center  bg-gray-600 p-3 hover:scale-x-110 duration-300"
        href="https://github.com/AndrejSimeunovic"
        target="_blank"
      >
        Github
        <Github color="#b8a8a8" />
      </a>

      <div></div>
    </div>
  );
}
