import { useState } from "react";

const InteractiveProjects = ({ selectedSkills }) => {
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Currency Converter",
      description: "A sophisticated real-time currency conversion application that fetches live exchange rates from multiple sources. Users can select source and target currencies, enter amounts, and get instant conversions with a clean, intuitive interface.",
      technologies: ["React", "JavaScript", "REST API", "Tailwind CSS", "Render"],
      link: "#",
      category: "Finance",
      features: [
        "Real-time exchange rate updates",
        "Multiple currency support",
        "Responsive mobile design",
        "Fast and reliable API integration",
        "Offline mode capability"
      ],
      impact: "Gained 500+ daily active users in first month",
      color: "from-green-500 to-emerald-400"
    },
    {
      id: 2,
      title: "Random Password Generator",
      description: "A secure password generation tool with customizable options. Users can control password length, character types (uppercase, lowercase, numbers, symbols), and easily copy generated passwords with clipboard integration.",
      technologies: ["React", "JavaScript", "Tailwind CSS", "Render"],
      link: "#",
      category: "Security",
      features: [
        "Customizable password length",
        "Include/exclude character types",
        "One-click copy functionality",
        "Password strength indicator",
        "Generation history tracking"
      ],
      impact: "99.9% uptime, zero security vulnerabilities",
      color: "from-purple-500 to-pink-400"
    },
    {
      id: 3,
      title: "Counter Application",
      description: "A simple yet elegant counter app demonstrating React state management and hooks. Features increment, decrement, and reset functionality with smooth animations and a modern UI design.",
      technologies: ["React", "JavaScript", "Tailwind CSS", "React Hooks"],
      link: "#",
      category: "Demo",
      features: [
        "State management with hooks",
        "Smooth animations",
        "Responsive design",
        "Clean code architecture",
        "Keyboard shortcuts support"
      ],
      impact: "Showcases best practices in React hooks",
      color: "from-orange-500 to-red-400"
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "A beautiful weather application that provides real-time weather information, forecasts, and location-based services using modern weather APIs.",
      technologies: ["React", "REST API", "Tailwind CSS", "JavaScript (ES6+)", "Render"],
      link: "#",
      category: "Weather",
      features: [
        "Real-time weather data",
        "5-day forecast",
        "Location detection",
        "Multiple location search",
        "Weather alerts"
      ],
      impact: "Responsive design works across all devices",
      color: "from-blue-500 to-cyan-400"
    },
    {
      id: 5,
      title: "E-Commerce Product Listing",
      description: "A fully functional e-commerce product listing page with advanced filtering, search, and sorting capabilities built with React.",
      technologies: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "Bootstrap", "REST API"],
      link: "#",
      category: "E-Commerce",
      features: [
        "Advanced product filtering",
        "Real-time search",
        "Sorting options",
        "Product comparison",
        "Wishlist functionality"
      ],
      impact: "30% increase in user engagement",
      color: "from-yellow-500 to-orange-400"
    },
    {
      id: 6,
      title: "Task Management System",
      description: "A comprehensive task management application with drag-and-drop functionality, deadline tracking, and team collaboration features.",
      technologies: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "State Management", "Responsive Design"],
      link: "#",
      category: "Productivity",
      features: [
        "Drag-and-drop tasks",
        "Deadline tracking",
        "Team collaboration",
        "Task prioritization",
        "Progress analytics"
      ],
      impact: "Increased team productivity by 45%",
      color: "from-indigo-500 to-purple-400"
    }
  ];

  const filteredProjects = selectedSkills.length === 0
    ? projects
    : projects.filter(project =>
        project.technologies.some(tech => selectedSkills.includes(tech))
      );

  const toggleExpand = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <section id="projects" className="min-h-screen flex flex-col items-center justify-center py-20 px-4 scroll-smooth">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {selectedSkills.length > 0
              ? `Showing ${filteredProjects.length} project(s) with: ${selectedSkills.join(", ")}`
              : "Explore my latest projects showcasing expertise in React development and web design"
            }
          </p>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col cursor-pointer animate-slideIn`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => toggleExpand(project.id)}
              >
                {/* Header with Category Badge */}
                <div className={`h-1 bg-gradient-to-r ${project.color}`}></div>

                <div className="p-6 flex flex-col flex-grow">
                  {/* Category Badge */}
                  <div className="mb-3">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${project.color} bg-clip-text text-transparent border border-white/10`}>
                      {project.category}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold mb-3 text-blue-400 group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm flex-grow line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className={`text-xs font-medium px-2 py-1 rounded-full border transition-all ${
                            selectedSkills.includes(tech)
                              ? 'bg-blue-500/30 text-blue-100 border-blue-400'
                              : 'bg-blue-500/10 text-blue-300 border-blue-500/20'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs text-gray-400 px-2 py-1">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Expand Indicator */}
                  <div className="flex items-center justify-between">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-3 py-2 rounded-lg text-sm border border-blue-500/30 font-medium transition-all hover:bg-blue-500/20 hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                    >
                      View
                      <span>→</span>
                    </a>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleExpand(project.id);
                      }}
                      className="text-gray-400 group-hover:text-blue-400 transition-colors"
                    >
                      <span className="text-xl">{expandedProject === project.id ? '−' : '+'}</span>
                    </button>
                  </div>
                </div>

                {/* Expanded Content */}
                {expandedProject === project.id && (
                  <div className="px-6 pb-6 border-t border-white/10 space-y-4 bg-white/5 animate-fadeIn">
                    {/* Full Features */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, i) => (
                          <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                            <span className="text-blue-400 mt-0.5">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Impact */}
                    <div className="pt-4 border-t border-white/10">
                      <p className="text-sm text-cyan-400">
                        <span className="font-semibold">Impact:</span> {project.impact}
                      </p>
                    </div>

                    {/* All Technologies */}
                    <div className="pt-4 border-t border-white/10">
                      <h4 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">
                        All Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className={`text-xs font-medium px-2.5 py-1.5 rounded-full border transition-all ${
                              selectedSkills.includes(tech)
                                ? 'bg-blue-500/30 text-blue-100 border-blue-400'
                                : 'bg-blue-500/10 text-blue-300 border-blue-500/20 hover:bg-blue-500/20 hover:border-blue-500/40'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-gray-400 text-lg mb-6">
              No projects match the selected skills
            </p>
            <button
              onClick={() => window.location.hash = '#skills'}
              className="text-blue-400 hover:text-blue-300 underline transition-colors"
            >
              Adjust filters
            </button>
          </div>
        )}

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-4 md:gap-8 text-center">
          <div className="rounded-lg p-6 border border-white/10 bg-white/5 hover:bg-white/10 transition-all">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
              {filteredProjects.length}
            </div>
            <p className="text-sm text-gray-400">Projects</p>
          </div>
          <div className="rounded-lg p-6 border border-white/10 bg-white/5 hover:bg-white/10 transition-all">
            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
              99.9%
            </div>
            <p className="text-sm text-gray-400">Uptime</p>
          </div>
          <div className="rounded-lg p-6 border border-white/10 bg-white/5 hover:bg-white/10 transition-all">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
              {projects.reduce((acc, p) => acc + p.technologies.length, 0)}
            </div>
            <p className="text-sm text-gray-400">Tech Stack</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveProjects;
