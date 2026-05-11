export const Education = () => {
  const education = [
    {
      degree: "B.Tech in Information Technology",
      institution: "MBIT New V.V. Nagar",
      location: "Anand, Gujarat",
      period: "2023 - 2027",
      grade: "CGPA: 8.2+",
      highlights: [
        "Coursework: Data Structures, Web Development, Database Management",
        "Actively learning modern web technologies and best practices",
        "Developed multiple projects in React and JavaScript"
      ]
    }
  ];

  return (
    <section id="education" className="min-h-screen flex flex-col items-center justify-center py-20 px-4 scroll-smooth">
      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My academic background and continuous professional development journey
          </p>
        </div>

        <div className="space-y-6 mb-12">
          {education.map((item, index) => (
            <div
              key={index}
              className="rounded-xl p-8 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 animate-slideIn group hover:-translate-y-1"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 left-0 w-1 h-12 bg-gradient-to-b from-blue-500 to-cyan-400 rounded-br-lg"></div>

              <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-6 mb-6">
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-blue-400 group-hover:text-cyan-400 transition-colors mb-2">
                    {item.degree}
                  </h3>
                  <p className="text-lg font-semibold text-white mb-1">{item.institution}</p>
                  <p className="text-gray-400 text-sm">{item.location}</p>
                </div>
                <div className="text-left md:text-right mt-4 md:mt-0 flex-shrink-0">
                  <p className="text-blue-400 font-semibold">{item.period}</p>
                  <p className="text-cyan-400 font-bold text-lg">{item.grade}</p>
                </div>
              </div>

              <div className="my-6 h-px bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0"></div>

              <div className="space-y-3">
                <p className="text-gray-300 font-semibold uppercase text-sm tracking-wider">Highlights:</p>
                <ul className="space-y-3">
                  {item.highlights.map((highlight, i) => (
                    <li key={i} className="text-gray-400 text-sm flex items-start gap-3">
                      <span className="text-blue-400 font-bold mt-1 text-lg flex-shrink-0">→</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="rounded-lg p-6 bg-white/5 border border-white/10 hover:border-blue-500/30 text-center transition-all hover:bg-white/10 animate-slideUp" style={{ transitionDelay: "0ms" }}>
            <div className="text-3xl font-bold text-blue-400 mb-2">4</div>
            <p className="text-xs text-gray-400">Years of Study</p>
          </div>
          <div className="rounded-lg p-6 bg-white/5 border border-white/10 hover:border-blue-500/30 text-center transition-all hover:bg-white/10 animate-slideUp" style={{ transitionDelay: "100ms" }}>
            <div className="text-3xl font-bold text-cyan-400 mb-2">8.2+</div>
            <p className="text-xs text-gray-400">Current CGPA</p>
          </div>
          <div className="rounded-lg p-6 bg-white/5 border border-white/10 hover:border-blue-500/30 text-center transition-all hover:bg-white/10 animate-slideUp" style={{ transitionDelay: "200ms" }}>
            <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
            <p className="text-xs text-gray-400">Projects Done</p>
          </div>
          <div className="rounded-lg p-6 bg-white/5 border border-white/10 hover:border-blue-500/30 text-center transition-all hover:bg-white/10 animate-slideUp" style={{ transitionDelay: "300ms" }}>
            <div className="text-3xl font-bold text-cyan-400 mb-2">4</div>
            <p className="text-xs text-gray-400">Courses Completed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
