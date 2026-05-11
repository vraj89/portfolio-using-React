export const Intro = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="intro" className="min-h-[calc(100vh-4rem)] flex items-center justify-center relative overflow-hidden scroll-mt-16 px-4 py-16 md:py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="text-center z-10 max-w-5xl mx-auto animate-fadeIn">
        {/* Greeting */}
        <div className="mb-4 text-blue-400 font-semibold text-sm md:text-base tracking-widest uppercase animate-slideDown">
          Welcome to my portfolio
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent leading-tight animate-slideDown" style={{ animationDelay: "0.2s" }}>
          Hi, I'm Vraj Vaghela
        </h1>

        {/* Tagline */}
        <p className="text-gray-200 text-lg md:text-2xl max-w-3xl mx-auto mb-4 leading-relaxed font-light animate-slideUp">
          <span className="font-semibold text-white">React Developer</span> with a passion for crafting modern, interactive web applications
        </p>

        {/* Description */}
        <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed animate-slideUp" style={{ animationDelay: "0.2s" }}>
          I specialize in building responsive, high-performance web applications using React.js and modern JavaScript. My focus is on creating seamless user experiences with clean, optimized code and attention to detail.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16 animate-slideUp" style={{ animationDelay: "0.4s" }}>
          <button
            onClick={() => scrollToSection('projects')}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-4 px-10 rounded-lg font-semibold transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] text-center text-lg"
          >
            View My Work
          </button>
          <button
            onClick={() => {
              window.dispatchEvent(new CustomEvent('hire-me-clicked'));
              scrollToSection('contact');
            }}
            className="border-2 border-blue-500/50 text-blue-400 py-4 px-10 rounded-lg font-semibold transition-all duration-200 hover:-translate-y-1 hover:bg-blue-500/10 hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] text-center text-lg"
          >
            Hire Me
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 pt-8 animate-slideUp" style={{ animationDelay: "0.6s" }}>
          <div className="rounded-lg p-6 bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all hover:bg-white/10">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">6+</div>
            <p className="text-xs md:text-sm text-gray-400">Professional Projects</p>
          </div>
          <div className="rounded-lg p-6 bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all hover:bg-white/10">
            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">2+</div>
            <p className="text-xs md:text-sm text-gray-400">Years of Experience</p>
          </div>
          <div className="rounded-lg p-6 bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all hover:bg-white/10">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">100%</div>
            <p className="text-xs md:text-sm text-gray-400">Dedicated to Excellence</p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 md:mt-20 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm text-gray-400">Scroll to explore</p>
            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
