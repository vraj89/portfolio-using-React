import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16 md:pt-0">
      <div className="text-center z-10 px-4 max-w-4xl mx-auto">
        <div className="mb-2 text-blue-400 font-semibold text-sm md:text-base tracking-widest uppercase">
          Welcome to my portfolio
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent leading-tight">
          Hi, I'm Vraj Vaghela
        </h1>
        
        <p className="text-gray-300 text-lg md:text-2xl max-w-3xl mx-auto mb-4 leading-relaxed">
          <span className="font-semibold text-white">React Developer</span> with a passion for crafting modern, interactive web applications
        </p>
        
        <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          I specialize in building responsive web applications using React.js, with expertise in frontend development, UI/UX implementation, and modern JavaScript. Always eager to learn new technologies and take on exciting challenges.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <Link
            to="/projects"
            className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-8 rounded-lg font-semibold transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] text-center"
          >
            View My Projects
          </Link>
          <Link
            to="/contact"
            className="border-2 border-blue-500/50 text-blue-400 py-3 px-8 rounded-lg font-semibold transition-all duration-200 hover:-translate-y-1 hover:bg-blue-500/10 hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] text-center"
          >
            Get In Touch
          </Link>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 pt-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-1">5+</div>
            <p className="text-xs md:text-sm text-gray-400">Projects Done</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-1">2+</div>
            <p className="text-xs md:text-sm text-gray-400">Years Learning</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-1">100%</div>
            <p className="text-xs md:text-sm text-gray-400">Dedicated</p>
          </div>
        </div>
      </div>
    </section>
  )
}
