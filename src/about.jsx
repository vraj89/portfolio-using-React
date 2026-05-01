export const About = () => {
  const frontendSkills = ["React js", "Tailwind CSS", "Javascript", "Bootstrap"];

  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center py-20 px-4">
      <div className="max-w-5xl mx-auto w-full">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Learn more about my skills, education, and experience
          </p>
        </div>

        {/* Bio Card */}
        <div className="rounded-xl p-8 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 mb-12">
          <p className="text-gray-300 leading-relaxed text-lg text-center">
            Passionate developer with expertise in React.js, dedicated to building modern, responsive, 
            and user-friendly web applications. I love turning ideas into reality through clean and 
            efficient code.
          </p>
        </div>

        {/* Skills and Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Frontend Skills */}
          <div className="rounded-xl p-8 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-6 text-blue-400">Frontend</h3>
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

          {/* Education */}
          <div className="rounded-xl p-8 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-6 text-blue-400">Education</h3>
            <div className="space-y-4">
              <div className="bg-white/5 p-4 rounded-lg border border-white/5 hover:border-blue-500/20 transition-all">
                <p className="text-gray-100 font-semibold mb-2">
                  B.Tech in Information Technology
                </p>
                <p className="text-gray-400 text-sm">
                  MBIT New V.V. Nagar Anand
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  Duration: 2023 - 2027
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl p-6 border border-white/10 bg-white/5 text-center hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300">
            <div className="text-3xl font-bold text-blue-400 mb-2">5+</div>
            <p className="text-gray-400">Projects Completed</p>
          </div>
          <div className="rounded-xl p-6 border border-white/10 bg-white/5 text-center hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300">
            <div className="text-3xl font-bold text-blue-400 mb-2">2+</div>
            <p className="text-gray-400">Years Learning</p>
          </div>
          <div className="rounded-xl p-6 border border-white/10 bg-white/5 text-center hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300">
            <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
            <p className="text-gray-400">Dedication</p>
          </div>
        </div>
      </div>
    </section>
  );
};
