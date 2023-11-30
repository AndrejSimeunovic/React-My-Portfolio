import SkillCard from "../components/SkillCard";
import { skills } from "../data/data";

export default function Skills() {
  return (
    <div id="skills" className="h-screen w-full text-gray-300">
      <div className="h-full flex flex-col justify-center max-w-[1000px] mx-auto gap-3 px-3">
        <p className="text-4xl border-b-4 border-b-yellow-900">Skills</p>
        <p>These are the techologies I have worked with</p>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-4 h-64 px-3 overflow-auto md:scrollbar">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
