export default function About() {
  return (
    <div id="about" className="h-screen w-full text-gray-300">
      <div className="h-full mx-auto max-w-xl flex items-center">
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="border-b-4 border-b-yellow-900 text-4xl font-bold">
            About
          </p>
          <div className="flex items-center px-4 gap-3">
            <p className="text-4xl font-bold">
              Hi. I'm Andrej, nice to meet you. Please take a look around!
            </p>
            <p className="">
              I'm deeply passionate about frontend development, and I've
              dedicated my spare time to creating a wide range of applications,
              from pure front-end to full-stack, utilizing technologies like
              HTML/CSS, JavaScript, React, Node.js, Express.js, and MongoDB.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
