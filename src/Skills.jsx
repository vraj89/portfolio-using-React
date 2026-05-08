export const Skills = () => {
  const frontendSkills = ["React js", "Tailwind CSS", "Javascript", "Bootstrap"];

  return (
    <section id="skills" className="min-h-screen flex flex-col items-center justify-center py-20 px-4">
      <div className="max-w-5xl mx-auto w-full">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Skills
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Check out my technical expertise
          </p>
        </div>

        {/* Skills Card */}
        <div className="rounded-xl p-8 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300">
          <h3 className="text-2xl font-bold mb-6 text-blue-400">Frontend Skills</h3>
          <div className="flex flex-wrap gap-3">
            {frontendSkills.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-500/10 text-blue-300 py-2 px-4 rounded-full text-sm font-medium border border-blue-500/20 hover:bg-blue-500/20 hover:border-blue-500/40 transition-all cursor-pointer"
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