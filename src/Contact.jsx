
function Contact() {
  const email = 'vrajvaghela89@gmail.com';

  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-20 px-4">
      <div className="max-w-3xl mx-auto w-full text-center">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="rounded-xl p-8 border border-white/10 bg-white/5 backdrop-blur-sm">
          <p className="text-gray-300 text-lg mb-8">
            You can reach me directly at:
          </p>
          
          <a
            href={`mailto:${email}`}
            className="inline-block bg-blue-500/10 text-blue-400 border border-blue-500/30 hover:bg-blue-500/20 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 transition duration-200 font-bold py-4 px-8 rounded-lg text-2xl"
          >
            {email}
          </a>

          <p className="text-gray-400 text-sm mt-8">
            I typically respond within 24-48 hours. Looking forward to hearing from you!
          </p>

          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-gray-400 mb-6">
              You can also connect with me on:
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="https://github.com/vraj89"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
