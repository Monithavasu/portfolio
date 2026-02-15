const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "Designed and developed a fully responsive portfolio using React and Tailwind CSS to showcase skills, projects, and contact details.",
    tech: ["React", "Tailwind CSS"],
  },
  {
    title: "Smart Bookmark Manager",
    description:
      "Built a web application to organize and manage bookmarks efficiently with search functionality and clean UI design.",
    tech: ["React", "JavaScript"],
  },
  
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto ">
        <h2 className="text-4xl font-bold text-center mb-4">
          Projects
        </h2>
        <p className="text-center text-gray-500 mb-14">
          A selection of projects showcasing my frontend and backend skills
        </p>

        <div className="grid md:grid-cols-3 gap-10 ml-[300px]">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 p-8 flex flex-col"
            >
              {/* Title */}
              <h3 className="text-2xl font-semibold mb-4">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3">
                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
