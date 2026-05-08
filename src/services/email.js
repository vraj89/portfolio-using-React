// Email Service - Using EmailJS for serverless email sending
// Install EmailJS: npm install @emailjs/browser

import emailjs from '@emailjs/browser';

// Initialize EmailJS
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY_HERE';
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_xxxxxxx';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_xxxxxxx';

// Initialize on module load
if (EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY_HERE') {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

/**
 * Send email via EmailJS
 * @param {Object} formData - Form data object
 * @param {string} formData.name - Sender's name
 * @param {string} formData.email - Sender's email
 * @param {string} formData.subject - Email subject
 * @param {string} formData.message - Email message
 * @returns {Promise<Object>} Response from EmailJS
 */
export const sendEmail = async (formData) => {
  try {
    // Validate form data
    if (!formData.name || !formData.email || !formData.message) {
      throw new Error('Please fill in all required fields');
    }

    // Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      throw new Error('Please enter a valid email address');
    }

    // Prepare template parameters
    const templateParams = {
      to_email: 'vrajvaghela89@gmail.com', // Your email
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject || 'New Portfolio Contact',
      message: formData.message,
      reply_to: formData.email
    };

    // Send email
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    return {
      success: true,
      message: 'Email sent successfully! I will get back to you soon.',
      response
    };
  } catch (error) {
    console.error('Email sending error:', error);
    return {
      success: false,
      message: error.message || 'Failed to send email. Please try again or reach out directly.',
      error
    };
  }
};

/**
 * Alternative: Send email via fetch (if using a backend service)
 * This is a fallback method
 */
export const sendEmailViaBackend = async (formData) => {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    const data = await response.json();
    return {
      success: true,
      message: 'Email sent successfully!',
      data
    };
  } catch (error) {
    console.error('Backend email error:', error);
    return {
      success: false,
      message: 'Failed to send email. Please contact directly via mailto link.',
      error
    };
  }
};

export default { sendEmail, sendEmailViaBackend };
