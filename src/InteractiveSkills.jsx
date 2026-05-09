

export const InteractiveSkills = ({ selectedSkills, onSkillToggle, filteredProjectCount }) => {
  const skillCategories = [
    {
      category: "Frontend Technologies",
      icon: "🎨",
      skills: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"]
    },
    {
      category: "UI/UX & Design",
      icon: "✨",
      skills: ["Responsive Design", "UI Principles", "Figma Basics", "Accessibility", "Animation Design"]
    },
    {
      category: "Tools & Platforms",
      icon: "🛠️",
      skills: ["Git/GitHub", "Vite", "Vercel", "VS Code", "Webpack", "REST API"]
    },
    {
      category: "Advanced Skills",
      icon: "⚡",
      skills: ["State Management", "Context API", "Testing", "Performance Optimization", "Problem Solving"]
    }
  ];

  const proficiencyLevels = {
    "React.js": { level: 85, color: "from-blue-500 to-cyan-400" },
    "JavaScript (ES6+)": { level: 80, color: "from-yellow-500 to-orange-400" },
    "CSS3": { level: 90, color: "from-purple-500 to-pink-400" },
    "Tailwind CSS": { level: 90, color: "from-cyan-500 to-blue-400" },
    "HTML5": { level: 95, color: "from-orange-500 to-red-400" },
    "REST API": { level: 85, color: "from-green-500 to-emerald-400" },
    "Git/GitHub": { level: 85, color: "from-gray-500 to-slate-400" }
  };

  return (
    <section id="skills" className="min-h-screen flex flex-col items-center justify-center py-20 px-4 scroll-smooth">
      <div className="max-w-6xl mx-auto w-full">
        {/* Title and Description */}
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-6">
            Click on any skill to filter projects. Explore my expertise across modern web technologies.
          </p>
          
          {/* Filter Info */}
          {selectedSkills.length > 0 && (
            <div className="inline-block bg-white/5 border border-blue-500/30 rounded-lg px-6 py-3 mb-6">
              <p className="text-sm text-gray-300">
                <span className="text-blue-400 font-semibold">{selectedSkills.length} skill(s) selected</span> — 
                <span className="ml-2">{filteredProjectCount} project(s)</span>
              </p>
            </div>
          )}

          {/* Clear Filters Button */}
          {selectedSkills.length > 0 && (
            <button
              onClick={() => {
                selectedSkills.forEach(skill => onSkillToggle(skill));
              }}
              className="inline-block ml-3 bg-red-500/20 hover:bg-red-500/30 text-red-300 hover:text-red-200 px-4 py-2 rounded-lg text-sm font-medium border border-red-500/30 transition-all"
            >
              Clear Filters
            </button>
          )}
        </div>

        {/* Skills Grid by Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className="rounded-xl p-8 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 animate-slideIn group"
              style={{ transitionDelay: `${catIndex * 100}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-xl font-bold text-blue-400 group-hover:text-cyan-400 transition-colors">
                  {category.category}
                </h3>
              </div>

              {/* Skills in Category */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => {
                  const isSelected = selectedSkills.includes(skill);
                  const proficiency = proficiencyLevels[skill];

                  return (
                    <div key={skillIndex} className="group/skill relative">
                      <button
                        onClick={() => onSkillToggle(skill)}
                        className={`px-4 py-2.5 rounded-full text-sm font-medium border transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group/btn
                          ${isSelected
                            ? 'bg-blue-500/40 text-blue-100 border-blue-400 shadow-lg shadow-blue-500/30'
                            : 'bg-blue-500/10 text-blue-300 border-blue-500/20 hover:bg-blue-500/20 hover:border-blue-500/40 hover:shadow-md hover:shadow-blue-500/20'
                          }
                        `}
                      >
                        {skill}
                        {isSelected && (
                          <span className="ml-2 inline-block text-lg">✓</span>
                        )}
                      </button>

                      {/* Proficiency Tooltip */}
                      {proficiency && (
                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-2 px-3 rounded opacity-0 group-hover/skill:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap border border-white/10 z-50">
                          <div className="font-semibold mb-1">{proficiency.level}% Proficiency</div>
                          <div className="w-24 h-1.5 bg-white/20 rounded-full overflow-hidden">
                            <div 
                              className={`h-full bg-gradient-to-r ${proficiency.color}`}
                              style={{ width: `${proficiency.level}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Summary */}
        <div className="rounded-xl p-8 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300">
          <h3 className="text-2xl font-bold text-blue-400 mb-8">Proficiency Overview</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(proficiencyLevels).map(([skill, data], index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 font-medium">{skill}</span>
                  <span className="text-blue-400 font-bold">{data.level}%</span>
                </div>
                <div className="h-2.5 bg-white/10 rounded-full overflow-hidden border border-white/5">
                  <div
                    className={`h-full bg-gradient-to-r ${data.color} shadow-lg shadow-blue-500/20 transition-all duration-500`}
                    style={{ width: `${data.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Info Box */}
        <div className="mt-12 p-6 rounded-xl border border-cyan-500/30 bg-cyan-500/5 text-gray-300 text-center">
          <p className="text-sm leading-relaxed">
            💡 <span className="font-semibold text-cyan-400">Pro Tip:</span> Click on skills above to see how they relate to my projects. This helps you understand my expertise in each technology!
          </p>
        </div>
      </div>
    </section>
  );
};
