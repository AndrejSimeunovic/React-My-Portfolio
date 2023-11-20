import { data } from "../data/data";

export default function Work() {
  return (
    <div id="work" className="h-screen w-full text-gray-300">
      <div className="h-full flex flex-col max-w-[1000px] mx-auto gap-3 px-3 justify-center">
        <p className="text-4xl border-b-4 border-b-yellow-900">Work</p>
        <p>// These are the projects I have worked with</p>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4 h-[300px] px-3 overflow-auto">
          {data.map((project) => (
            <div className="shadow-md shadow-[#040c16] group rounded relative">
              <img
                src={project.image}
                alt="logo"
                className="w-full h-full object-cover rounded"
              />

              {/**hover */}
              <div className="flex justify-center items-center gap-2 opacity-0 group-hover:opacity-100 border bg-blue-500 absolute inset-0 rounded p-3">
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
        </div>
      </div>
    </div>
  );
}
