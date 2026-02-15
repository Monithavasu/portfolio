const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          About Me
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed">
          I am a passionate and dedicated frontend developer with a strong
          foundation in React and Tailwind CSS. I enjoy transforming ideas
          into visually appealing, responsive, and user-friendly web
          applications that provide a smooth user experience.
          <br /><br />

          Currently, I am pursuing a <span className="font-semibold text-blue-800 text-xl">Full Stack Development </span>course at{" "}
          <span className="font-semibold text-blue-800 text-xl">
            Pentagon Space
          </span>
          , where I am enhancing my technical skills in Java, SQL, and
          backend technologies. This training has helped me strengthen my
          problem-solving abilities and understand how real-world
          applications are built from front to back.
          <br /><br />
          I am highly motivated to learn new technologies, improve my coding
          skills, and work on meaningful projects. My goal is to grow as a
          software developer and contribute to building scalable and
          impactful web solutions in a professional environment.
        </p>
      </div>
    </section>
  );
};

export default About;
