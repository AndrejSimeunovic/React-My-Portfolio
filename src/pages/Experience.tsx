export default function Experience() {
  return (
    <div id="experience" className="h-screen w-full text-gray-300">
      <div className="h-full flex flex-col justify-center max-w-xl mx-auto gap-3 px-3">
        <p className="text-4xl border-b-4 border-b-yellow-900">Experience</p>
        <p>// These are the techologies I have worked with</p>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-4 h-64 px-3 overflow-auto">
          <div className="flex flex-col justify-center items-center gap-2 px-6 py-3 shadow-md shadow-[#040c16] hover:scale-110">
            <img width={60} height={60} src="/images/html.png" alt="logo" />
            <p>HMTL</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 px-6 py-3 shadow-md shadow-[#040c16] hover:scale-110">
            <img width={60} height={60} src="/images/css.png" alt="logo" />
            <p>CSS</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 px-6 py-3 shadow-md shadow-[#040c16] hover:scale-110">
            <img width={60} height={60} src="/images/tailwind.png" alt="logo" />
            <p>TailwindCSS</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 px-6 py-3 shadow-md shadow-[#040c16] hover:scale-110">
            <img
              width={60}
              height={60}
              src="/images/javascript.png"
              alt="logo"
            />
            <p>JavaScript</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 px-6 py-3 shadow-md shadow-[#040c16] hover:scale-110">
            <img width={60} height={60} src="/images/react.png" alt="logo" />
            <p>React</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 px-6 py-3 shadow-md shadow-[#040c16] hover:scale-110">
            <img width={60} height={60} src="/images/angular.png" alt="logo" />
            <p>Angular</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 px-6 py-3 shadow-md shadow-[#040c16] hover:scale-110">
            <img width={60} height={60} src="/images/node.png" alt="logo" />
            <p>Node.js</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 px-6 py-3 shadow-md shadow-[#040c16] hover:scale-110">
            <img width={60} height={60} src="/images/mongo.png" alt="logo" />
            <p>MongoDB</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 px-6 py-3 shadow-md shadow-[#040c16] hover:scale-110">
            <img width={60} height={60} src="/images/java.png" alt="logo" />
            <p>Java</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 px-6 py-3 shadow-md shadow-[#040c16] hover:scale-110">
            <img width={60} height={60} src="/images/python.png" alt="logo" />
            <p>Python</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 px-6 py-3 shadow-md shadow-[#040c16] hover:scale-110">
            <img width={60} height={60} src="/images/php.png" alt="logo" />
            <p>PHP</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 px-6 py-3 shadow-md shadow-[#040c16] hover:scale-110">
            <img width={60} height={60} src="/images/haskell.png" alt="logo" />
            <p>Haskell</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 px-6 py-3 shadow-md shadow-[#040c16] hover:scale-110">
            <img width={60} height={60} src="/images/github.png" alt="logo" />
            <p>Github</p>
          </div>
        </div>
      </div>
    </div>
  );
}
