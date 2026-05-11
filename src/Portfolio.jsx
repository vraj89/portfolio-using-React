import { useState, useEffect, useMemo } from "react";
import { Intro } from "./Intro";
import { Education } from "./Education";
import { InteractiveSkills } from "./InteractiveSkills";
import InteractiveProjects from "./InteractiveProjects";
import Contact from "./Contact";

export const PortfolioPage = () => {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [activeSection, setActiveSection] = useState("intro");
  const [menuOpen, setMenuOpen] = useState(false);

  const filteredProjectCount = useMemo(() => {
    if (selectedSkills.length === 0) {
      return 6;
    } else {
      // Count projects matching selected skills
      const projects = [
        { technologies: ["React", "JavaScript", "REST API", "Tailwind CSS", "Vercel"] },
        { technologies: ["React", "JavaScript", "Tailwind CSS", "Vercel"] },
        { technologies: ["React", "JavaScript", "Tailwind CSS", "React Hooks"] },
        { technologies: ["React", "REST API", "Tailwind CSS", "JavaScript (ES6+)", "Vercel"] },
        { technologies: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "Bootstrap", "REST API"] },
        { technologies: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "State Management", "Responsive Design"] }
      ];

      const projectCount = projects.filter(p =>
        p.technologies.some(tech => selectedSkills.includes(tech))
      ).length;

      return projectCount;
    }
  }, [selectedSkills]);

  const toggleSkill = (skill) => {
    setSelectedSkills(prev =>
      prev.includes(skill)
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  // Track active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['intro', 'education', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black text-gray-100 scroll-smooth">
      {/* Smooth Scroll Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            VV
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-2xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>

          <div className="hidden md:flex items-center gap-8">
            {[
              { id: 'intro', label: 'Home' },
              { id: 'education', label: 'Education' },
              { id: 'skills', label: 'Skills' },
              { id: 'projects', label: 'Projects' },
              { id: 'contact', label: 'Contact' }
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => {
                  const element = document.getElementById(id);
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`relative font-medium transition-all duration-300 group ${
                  activeSection === id ? 'text-blue-400' : 'text-gray-400 hover:text-white'
                }`}
              >
                {label}
                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 ${
                  activeSection === id ? 'w-full' : 'w-0'
                } group-hover:w-full`}></div>
              </button>
            ))}
          </div>

          <button
            onClick={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all hover:-translate-y-0.5"
          >
            Hire Me
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-md z-50 flex flex-col items-center justify-center md:hidden">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-white text-3xl focus:outline-none"
            aria-label="Close menu"
          >
            ✕
          </button>

          <div className="flex flex-col gap-8 text-center">
            {[
              { id: 'intro', label: 'Home' },
              { id: 'education', label: 'Education' },
              { id: 'skills', label: 'Skills' },
              { id: 'projects', label: 'Projects' },
              { id: 'contact', label: 'Contact' }
            ].map(({ id, label }, index) => (
              <button
                key={id}
                onClick={() => {
                  const element = document.getElementById(id);
                  element?.scrollIntoView({ behavior: 'smooth' });
                  setMenuOpen(false);
                }}
                className="text-2xl text-gray-300 hover:text-white transition-colors"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {label}
              </button>
            ))}

              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
                  setMenuOpen(false);
                }}
                className="mt-8 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all hover:-translate-y-0.5"
              >
                Hire Me
              </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="pt-16">
        {/* Intro Section */}
        <Intro />

        {/* Education Section */}
        <Education />

        {/* Skills Section */}
        <InteractiveSkills
          selectedSkills={selectedSkills}
          onSkillToggle={toggleSkill}
          filteredProjectCount={filteredProjectCount}
        />

        {/* Projects Section */}
        <InteractiveProjects selectedSkills={selectedSkills} />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Floating Skill Filter Badge */}
      {selectedSkills.length > 0 && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 animate-slideUp">
          <div className="bg-gray-900 border border-blue-500/50 rounded-full px-6 py-3 flex items-center gap-4 shadow-lg shadow-blue-500/20">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400">Filters:</span>
              <div className="flex gap-2">
                {selectedSkills.map(skill => (
                  <button
                    key={skill}
                    onClick={() => toggleSkill(skill)}
                    className="bg-blue-500/20 text-blue-300 text-xs px-2.5 py-1 rounded-full hover:bg-blue-500/30 transition-all flex items-center gap-1.5"
                  >
                    {skill}
                    <span>×</span>
                  </button>
                ))}
              </div>
            </div>
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
                  setMenuOpen(false);
                }}
                className="mt-8 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all hover:-translate-y-0.5"
              >
                Hire Me
              </button>
          </div>
        </div>
      )}

      {/* Scroll Progress Indicator */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className="flex flex-col gap-4">
          {[
            { id: 'intro', label: 'Home' },
            { id: 'education', label: 'Education' },
            { id: 'skills', label: 'Skills' },
            { id: 'projects', label: 'Projects' },
            { id: 'contact', label: 'Contact' }
          ].map(({ id, label }) => (
            <button
              key={id}
              onClick={() => {
                const element = document.getElementById(id);
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 group relative ${
                activeSection === id
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/50'
                  : 'bg-white/20 hover:bg-white/40'
              }`}
            >
              <div className="absolute right-6 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 px-2 py-1 rounded border border-white/10 pointer-events-none">
                {label}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
