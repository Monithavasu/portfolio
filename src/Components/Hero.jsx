import myPhoto from '../Assets/myphoto.jpg'
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-40 min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-6 bg-gradient-to-b from-gray-50 to-white"
    >
      {/* Left Content */}
      <div className="text-center md:text-left max-w-xl">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Monitha
          </span>
        </h1>

        <p className="text-gray-600 text-lg mb-8">
          Frontend Developer specializing in React & Tailwind.
          Passionate about building beautiful and functional web apps.
        </p>

        <div className="flex gap-4 justify-center md:justify-start">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-gray-300 rounded-full hover:bg-gray-100 transition"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div>
        <div className="w-60 h-60 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1 shadow-xl">
          <img
            src={myPhoto}
            alt="profile"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
