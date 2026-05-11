
import { useEffect, useRef, useState } from 'react';
import { sendEmail } from './services/email';

function Contact() {
  const email = 'vrajvaghela89@gmail.com';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const nameInputRef = useRef(null);

  useEffect(() => {
    const prepareHireForm = () => {
      setFormData(prev => ({
        ...prev,
        subject: prev.subject || 'Hiring Opportunity for React Developer'
      }));
      setFeedback({
        type: 'success',
        message: 'Thanks for your interest. Share the role details below, or email me directly from the contact card.'
      });
      setTimeout(() => nameInputRef.current?.focus(), 350);
    };

    window.addEventListener('hire-me-clicked', prepareHireForm);
    return () => window.removeEventListener('hire-me-clicked', prepareHireForm);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback(null);

    const result = await sendEmail(formData);
    
    if (result.success) {
      setFeedback({
        type: 'success',
        message: result.message
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setTimeout(() => setFeedback(null), 5000);
    } else {
      setFeedback({
        type: 'error',
        message: result.message
      });
    }
    
    setLoading(false);
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center py-20 px-4 scroll-smooth">
      <div className="max-w-4xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have an opportunity or just want to chat? Send me a message and I'll respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="rounded-xl p-8 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 animate-slideIn group hover:-translate-y-1">
            <h3 className="text-2xl font-bold mb-6 text-blue-400 group-hover:text-cyan-400 transition-colors">Send me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  ref={nameInputRef}
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
                  placeholder="John Doe"
                  required
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
                  placeholder="john@example.com"
                  required
                />
              </div>

              {/* Subject Input */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
                  placeholder="Job Opportunity / Question"
                />
              </div>

              {/* Message Input */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all resize-none"
                  placeholder="Tell me about your project or opportunity..."
                  required
                />
              </div>

              {/* Feedback Message */}
              {feedback && (
                <div className={`p-4 rounded-lg text-sm font-medium ${
                  feedback.type === 'success' 
                    ? 'bg-green-500/10 text-green-400 border border-green-500/30' 
                    : 'bg-red-500/10 text-red-400 border border-red-500/30'
                }`}>
                  {feedback.message}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] disabled:opacity-50 disabled:cursor-not-allowed hover:disabled:shadow-none"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>

              <p className="text-xs text-gray-500 text-center">
                * Required fields. I'll respond to your message as soon as possible.
              </p>
            </form>
          </div>

          {/* Contact Info Card */}
          <div className="space-y-6">
            {/* Direct Email Card */}
            <div className="rounded-xl p-8 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 animate-slideInRight group hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-6 text-blue-400 group-hover:text-cyan-400 transition-colors">Direct Contact</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400 text-sm mb-2">Email Address</p>
                  <a
                    href={`mailto:${email}`}
                    className="inline-block bg-blue-500/10 text-blue-400 border border-blue-500/30 hover:bg-blue-500/20 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 transition duration-200 font-semibold py-3 px-4 rounded-lg break-all"
                  >
                    {email}
                  </a>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-gray-400 text-sm mb-4">
                    Response time: <span className="text-blue-400 font-semibold">24-48 hours</span>
                  </p>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    I'm actively looking for exciting opportunities. Whether it's a job offer, collaboration, or just a technical question, I'd love to hear from you!
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links Card */}
            <div className="rounded-xl p-8 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 animate-slideInRight group hover:-translate-y-1" style={{ transitionDelay: "100ms" }}>
              <h3 className="text-2xl font-bold mb-6 text-blue-400 group-hover:text-cyan-400 transition-colors">Social Links</h3>
              
              <div className="space-y-3">
                <a
                  href="https://github.com/vraj89"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all group"
                >
                  <span className="text-lg">-&gt;</span>
                  <div>
                    <p className="font-semibold text-white group-hover:text-blue-400 transition-colors">GitHub</p>
                    <p className="text-xs text-gray-500">View my projects</p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/vraj-vaghela"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all group"
                >
                  <span className="text-lg">-&gt;</span>
                  <div>
                    <p className="font-semibold text-white group-hover:text-blue-400 transition-colors">LinkedIn</p>
                    <p className="text-xs text-gray-500">Connect professionally</p>
                  </div>
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all group"
                >
                  <span className="text-lg">-&gt;</span>
                  <div>
                    <p className="font-semibold text-white group-hover:text-blue-400 transition-colors">Twitter</p>
                    <p className="text-xs text-gray-500">Follow updates</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
