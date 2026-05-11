export const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Technologies",
      skills: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
      category: "UI/UX & Design",
      skills: ["Responsive Design", "Bootstrap", "Figma Basics", "UI Principles", "Accessibility"]
    },
    {
      category: "Tools & Platforms",
      skills: ["Git/GitHub", "Vite", "Render", "VS Code", "Webpack"]
    },
    {
      category: "Soft Skills",
      skills: ["Problem Solving", "Communication", "Team Collaboration", "Project Management", "Continuous Learning"]
    }
  ];

  const proficiencyLevel = [
    { skill: "React.js", level: 85 },
    { skill: "JavaScript", level: 80 },
    { skill: "CSS/Tailwind", level: 90 },
    { skill: "HTML", level: 95 },
  ];

  return (
    <section id="skills" className="min-h-screen flex flex-col items-center justify-center py-20 px-4">
      <div className="max-w-5xl mx-auto w-full">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My expertise and proficiency in various technologies and tools
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="rounded-xl p-6 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-blue-400 mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-blue-500/10 text-blue-300 py-2 px-3 rounded-full text-sm font-medium border border-blue-500/20 hover:bg-blue-500/20 hover:border-blue-500/40 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Levels */}
        <div className="rounded-xl p-8 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300">
          <h3 className="text-2xl font-bold mb-8 text-blue-400">Proficiency Levels</h3>
          <div className="space-y-6">
            {proficiencyLevel.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-white">{item.skill}</span>
                  <span className="text-blue-400 font-bold">{item.level}%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden border border-white/5">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-cyan-400 h-full rounded-full transition-all duration-500"
                    style={{ width: `${item.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
