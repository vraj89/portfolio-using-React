export const Education = () => {
  return (
    <section id="education" className="min-h-screen flex flex-col items-center justify-center py-20 px-4">
      <div className="max-w-5xl mx-auto w-full">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Learn more about my academic background
          </p>
        </div>

        {/* Education Card */}
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
    </section>
  );
};

export default Education;