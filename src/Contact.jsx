
import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  // Initialize EmailJS with environment variables
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const validateForm = (formData) => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if EmailJS credentials are configured
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setMessage('✗ Email service is not configured. Please contact the website owner.');
      console.error('Missing EmailJS configuration');
      return;
    }
    
    const formData = {
      name: form.current.name.value,
      email: form.current.email.value,
      subject: form.current.subject.value,
      message: form.current.message.value,
    };

    const newErrors = validateForm(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setMessage('');
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      // Initialize EmailJS
      emailjs.init(PUBLIC_KEY);

      // Send email
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }
      );

      if (response.status === 200) {
        setMessage('✓ Message sent successfully! I will get back to you soon.');
        form.current.reset();
        setErrors({});
        setTimeout(() => setMessage(''), 5000);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setMessage('✗ Failed to send message. Please try again later.');
      setTimeout(() => setMessage(''), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-20 px-4">
      <div className="max-w-3xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="rounded-xl p-8 border border-white/10 bg-white/5 backdrop-blur-sm">
          {message && (
            <div
              className={`mb-6 p-4 rounded-lg text-center font-semibold ${
                message.startsWith('✓')
                  ? 'bg-green-500/10 text-green-300 border border-green-500/30'
                  : 'bg-red-500/10 text-red-300 border border-red-500/30'
              }`}
            >
              {message}
            </div>
          )}

          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-200 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
                className={`w-full px-4 py-3 bg-white/5 text-gray-100 placeholder-gray-500 rounded-lg border transition focus:outline-none ${
                  errors.name
                    ? 'border-red-500/50 focus:border-red-500 focus:bg-red-500/5'
                    : 'border-white/10 focus:border-blue-500 focus:bg-blue-500/5'
                }`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-400">{errors.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-200 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="your.email@example.com"
                className={`w-full px-4 py-3 bg-white/5 text-gray-100 placeholder-gray-500 rounded-lg border transition focus:outline-none ${
                  errors.email
                    ? 'border-red-500/50 focus:border-red-500 focus:bg-red-500/5'
                    : 'border-white/10 focus:border-blue-500 focus:bg-blue-500/5'
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-400">{errors.email}</p>
              )}
            </div>

            {/* Subject Field */}
            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-gray-200 mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="What is this about?"
                className={`w-full px-4 py-3 bg-white/5 text-gray-100 placeholder-gray-500 rounded-lg border transition focus:outline-none ${
                  errors.subject
                    ? 'border-red-500/50 focus:border-red-500 focus:bg-red-500/5'
                    : 'border-white/10 focus:border-blue-500 focus:bg-blue-500/5'
                }`}
              />
              {errors.subject && (
                <p className="mt-1 text-sm text-red-400">{errors.subject}</p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-200 mb-2">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="6"
                placeholder="Your message here..."
                className={`w-full px-4 py-3 bg-white/5 text-gray-100 placeholder-gray-500 rounded-lg border transition focus:outline-none resize-none ${
                  errors.message
                    ? 'border-red-500/50 focus:border-red-500 focus:bg-red-500/5'
                    : 'border-white/10 focus:border-blue-500 focus:bg-blue-500/5'
                }`}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-400">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500/10 text-blue-400 border border-blue-500/30 hover:bg-blue-500/20 hover:border-blue-500/50 disabled:opacity-50 font-bold py-3 px-6 rounded-lg transition duration-200"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                'Send Message'
              )}
            </button>
          </form>

          <p className="text-center text-gray-400 text-sm mt-6">
            I typically respond within 24-48 hours. Looking forward to hearing from you!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
