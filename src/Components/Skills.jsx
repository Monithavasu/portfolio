const frontendSkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS"
];

const backendSkills = [
  "Java",
  "SQL",
  "Git",
  "GitHub"
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 px-6">
      <h2 className="text-4xl font-bold text-center mb-16">
        Technical Skills
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">

        {/* Frontend */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Frontend
          </h3>

          <p className="text-gray-600 mb-8 px-4">
            Experienced in building responsive and user-friendly interfaces
            using modern frontend technologies. I focus on clean UI design,
            accessibility, and smooth user experience.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {frontendSkills.map((skill, index) => (
              <span
                key={index}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium shadow-lg hover:scale-110 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div className="text-center mt-[-10px]">
          <h3 className="text-2xl font-semibold mb-4">
            Backend
          </h3>

          <p className="text-gray-600 mb-8 px-4">
  I have a solid foundation in backend development with hands-on
  experience in Java and SQL. Currently, I am expanding my backend
  skill set by learning Spring Boot and JDBC to build efficient,
  scalable, and database-driven applications. I am focused on
  understanding real-world backend workflows and best practices.
</p>



          <div className="flex flex-wrap justify-center gap-6">
            {backendSkills.map((skill, index) => (
              <span
                key={index}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium shadow-lg hover:scale-110 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
