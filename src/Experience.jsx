export const Experience = ({ selectedSkills }) => {
  const experiences = [
    {
      role: "Full Stack Developer Intern",
      company: "Tech Solutions Inc.",
      period: "June 2024 - December 2024",
      location: "Remote",
      description: "Developed and maintained React-based web applications for multiple clients",
      responsibilities: [
        "Built responsive UI components using React and Tailwind CSS",
        "Implemented real-time data visualization with JavaScript",
        "Optimized application performance reducing load time by 40%",
        "Collaborated with cross-functional teams using Git and GitHub"
      ],
      skills: ["React.js", "JavaScript", "Tailwind CSS", "REST API", "Git/GitHub"],
      achievements: [
        "Successfully delivered 3 projects on schedule",
        "Mentored 2 junior developers",
        "Improved code quality with comprehensive testing"
      ]
    },
    {
      role: "Frontend Developer",
      company: "Web Design Studio",
      period: "January 2024 - May 2024",
      location: "Hybrid",
      description: "Created pixel-perfect UI implementations and interactive components",
      responsibilities: [
        "Translated design mockups into responsive web pages",
        "Implemented smooth CSS animations and transitions",
        "Performed cross-browser testing and debugging",
        "Participated in agile development sprints"
      ],
      skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "UI/UX Principles"],
      achievements: [
        "Won 'Best UI Implementation' award",
        "Maintained 99.5% uptime for deployed applications",
        "Reduced CSS bundle size by 30%"
      ]
    },
    {
      role: "React Developer",
      company: "StartUp Labs",
      period: "October 2023 - December 2023",
      location: "On-site",
      description: "Developed dynamic React applications with focus on user experience",
      responsibilities: [
        "Created component-based architecture for scalability",
        "Managed state using React Hooks and Context API",
        "Implemented form validation and error handling",
        "Wrote unit and integration tests with Jest"
      ],
      skills: ["React.js", "JavaScript (ES6+)", "Context API", "Testing", "Bootstrap"],
      achievements: [
        "Increased application performance by 50%",
        "Implemented accessibility standards (WCAG 2.1)",
        "Created reusable component library"
      ]
    }
  ];

  const filteredExperiences = selectedSkills.length === 0 
    ? experiences 
    : experiences.filter(exp => 
        exp.skills.some(skill => selectedSkills.includes(skill))
      );

  return (
    <section id="experience" className="min-h-screen flex flex-col items-center justify-center py-20 px-4 scroll-smooth">
      <div className="max-w-5xl mx-auto w-full">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {selectedSkills.length > 0 
              ? `Showing experience with: ${selectedSkills.join(", ")}`
              : "My professional journey and career development"
            }
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-400 rounded-full"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {filteredExperiences.map((exp, index) => (
              <div 
                key={index} 
                className={`relative md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 animate-slideIn transition-all duration-500`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                  <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full border-4 border-black relative z-10 shadow-lg shadow-blue-500/50"></div>
                </div>

                {/* Content Card */}
                <div className="md:w-1/2 rounded-xl p-8 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 group hover:-translate-y-1">
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between sm:gap-4 mb-2">
                      <div>
                        <h3 className="text-2xl font-bold text-blue-400 group-hover:text-cyan-400 transition-colors mb-1">
                          {exp.role}
                        </h3>
                        <p className="text-lg font-semibold text-white">{exp.company}</p>
                      </div>
                      <div className="text-right mt-2 sm:mt-0">
                        <p className="text-sm text-blue-300 font-medium">{exp.period}</p>
                        <p className="text-xs text-gray-400">{exp.location}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                  </div>

                  {/* Responsibilities */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="text-gray-400 text-sm flex items-start gap-3">
                          <span className="text-blue-400 mt-0.5 flex-shrink-0">▸</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  {exp.achievements && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-green-400/80 text-sm flex items-start gap-3">
                            <span className="mt-0.5 flex-shrink-0">✓</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Skills Tags */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">
                      Skills Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                            selectedSkills.includes(skill)
                              ? 'bg-blue-500/40 text-blue-100 border-blue-400'
                              : 'bg-blue-500/10 text-blue-300 border-blue-500/20 hover:bg-blue-500/20 hover:border-blue-500/40'
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredExperiences.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg mb-4">No experience matches the selected skills</p>
              <button 
                onClick={() => window.location.reload()}
                className="text-blue-400 hover:text-blue-300 underline transition-colors"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
