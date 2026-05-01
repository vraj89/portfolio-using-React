
import { projects } from "./projectsData";

export const Project = () => {
    return (
        <section id="projects" className="min-h-screen flex flex-col items-center justify-center py-20 px-4">
            <div className="max-w-5xl mx-auto w-full">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                        Featured Projects
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Explore my latest projects and see what I've been working on
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group rounded-xl p-8 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-300"
                        >
                            {/* Project Title */}
                            <h3 className="text-2xl font-bold mb-3 text-blue-400 group-hover:text-cyan-400 transition-colors">
                                {project.title}
                            </h3>

                            {/* Project Description */}
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                {project.description}
                            </p>

                            {/* Technologies Section */}
                            <div className="mb-6">
                                <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                                    Technologies
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="bg-blue-500/10 text-blue-300 px-3 py-1.5 rounded-full text-xs font-medium border border-blue-500/20 hover:bg-blue-500/20 hover:border-blue-500/40 transition-all"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* View Project Link */}
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-2.5 rounded-lg border border-blue-500/30 font-medium transition-all hover:bg-blue-500/20 hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                            >
                                View Project
                                <span className="text-lg">→</span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}