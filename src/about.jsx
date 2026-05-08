export const About = () => {
  const skills = [
    "React.js",
    "JavaScript (ES6+)",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Responsive Design",
    "UI/UX Principles"
  ];

  const expertise = [
    {
      title: "Frontend Development",
      description: "Building responsive, user-friendly web applications with React and modern JavaScript"
    },
    {
      title: "UI Component Design",
      description: "Creating reusable, scalable components with clean and maintainable code"
    },
    {
      title: "Performance Optimization",
      description: "Ensuring fast load times and smooth user experiences across all devices"
    }
  ];

  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center py-20 px-4">
      <div className="max-w-5xl mx-auto w-full">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate React developer focused on building scalable and user-friendly applications
          </p>
        </div>

        {/* Bio */}
        <div className="rounded-xl p-8 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 mb-12">
          <p className="text-gray-300 leading-relaxed text-lg">
            I'm a dedicated React developer with a strong foundation in modern web technologies. Currently in my final year of B.Tech in Information Technology, I combine academic knowledge with practical experience to create exceptional web applications. My journey in web development has been driven by curiosity, continuous learning, and a passion for delivering quality solutions.
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {expertise.map((item, index) => (
            <div
              key={index}
              className="rounded-xl p-6 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-blue-400 mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="rounded-xl p-8 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300">
          <h3 className="text-2xl font-bold mb-6 text-blue-400">Technical Skills</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-500/10 text-blue-300 py-2 px-4 rounded-full text-sm font-medium border border-blue-500/20 hover:bg-blue-500/20 hover:border-blue-500/40 transition-all cursor-default"
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