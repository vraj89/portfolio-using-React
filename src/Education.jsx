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

  const certifications = [
    "React.js Fundamentals",
    "JavaScript ES6+ Advanced",
    "Responsive Web Design",
    "Frontend Development Best Practices"
  ];

  return (
    <section id="education" className="min-h-screen flex flex-col items-center justify-center py-20 px-4">
      <div className="max-w-5xl mx-auto w-full">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Education & Learning
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My academic background and professional development
          </p>
        </div>

        {/* Education Cards */}
        <div className="space-y-6 mb-12">
          {education.map((item, index) => (
            <div
              key={index}
              className="rounded-xl p-8 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-6 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-blue-400 mb-2">{item.degree}</h3>
                  <p className="text-lg font-semibold text-white mb-1">{item.institution}</p>
                  <p className="text-gray-400 text-sm">{item.location}</p>
                </div>
                <div className="text-right md:text-left mt-4 md:mt-0">
                  <p className="text-blue-400 font-semibold">{item.period}</p>
                  <p className="text-gray-400 text-sm">{item.grade}</p>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-gray-300 font-semibold mb-3">Highlights:</p>
                <ul className="space-y-2">
                  {item.highlights.map((highlight, i) => (
                    <li key={i} className="text-gray-400 text-sm flex items-start gap-3">
                      <span className="text-blue-400 font-bold mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="rounded-xl p-8 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300">
          <h3 className="text-2xl font-bold mb-6 text-blue-400">Skills & Certifications</h3>
          <div className="flex flex-wrap gap-3">
            {certifications.map((cert, index) => (
              <span
                key={index}
                className="bg-blue-500/10 text-blue-300 py-2 px-4 rounded-full text-sm font-medium border border-blue-500/20 hover:bg-blue-500/20 hover:border-blue-500/40 transition-all"
              >
                ✓ {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;