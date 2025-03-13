// contact.js
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function Contact({ isDarkMode }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Prevent multiple submissions
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok && data.success) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.message || 'Failed to send message. Please try again later.');
        console.error('Form submission failed:', data);
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
      
      // Reset success status after 5 seconds
      if (submitStatus === 'success') {
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      }
    }
  };
  
  return (
    <div className={`min-h-screen ${
      isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      <Head>
        <title>Contact | Chaveen Dias</title>
        <meta name="description" content="Contact Chaveen Dias, Computer Engineering Undergraduate" />
      </Head>
      
      <main className="max-w-4xl mx-auto p-6">
        <h2 className="text-4xl font-semibold mb-10 text-center">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className={`${
            isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
          } p-6 rounded-lg shadow-lg`}>
            <h3 className={`text-2xl font-bold ${
              isDarkMode ? 'text-blue-400' : 'text-blue-600'
            } mb-6`}>Contact Information</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold mb-1">Email</h4>
                <p className={isDarkMode ? "text-blue-300" : "text-blue-600"}>chaveendias@gmail.com</p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-1">Phone</h4>
                <p>+94 77 1580 760</p>
              </div>
              
              <div className="pt-4">
                <h4 className="text-lg font-semibold mb-3">Connect</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/chavee716" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`${isDarkMode ? 'text-white' : 'text-gray-800'} hover:text-blue-400 transition-colors`}
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/chaveen-dias-8935b5288/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`${isDarkMode ? 'text-white' : 'text-gray-800'} hover:text-blue-400 transition-colors`}
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="pt-8">
                <h4 className="text-lg font-semibold mb-3">References</h4>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium">Dr. Iromi Ranaweera</p>
                    <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                      Senior Lecturer, Faculty of Engineering, University of Ruhuna
                    </p>
                    <p className={isDarkMode ? "text-sm text-blue-300" : "text-sm text-blue-600"}>
                      iromi@eie.ruh.ac.lk
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Dr. Prabath Weerasinghe</p>
                    <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                      Senior Lecturer, Faculty of Engineering, University of Ruhuna
                    </p>
                    <p className={isDarkMode ? "text-sm text-blue-300" : "text-sm text-blue-600"}>
                      weera@eie.ruh.ac.lk
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`${
            isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
          } p-6 rounded-lg shadow-lg`}>
            <h3 className={`text-2xl font-bold ${
              isDarkMode ? 'text-blue-400' : 'text-blue-600'
            } mb-6`}>Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDarkMode 
                      ? 'bg-gray-700 border border-gray-600' 
                      : 'bg-white border border-gray-300'
                  }`}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDarkMode 
                      ? 'bg-gray-700 border border-gray-600' 
                      : 'bg-white border border-gray-300'
                  }`}
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDarkMode 
                      ? 'bg-gray-700 border border-gray-600' 
                      : 'bg-white border border-gray-300'
                  }`}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className={`w-full px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDarkMode 
                      ? 'bg-gray-700 border border-gray-600' 
                      : 'bg-white border border-gray-300'
                  }`}
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-2 px-4 rounded font-medium transition-colors ${
                    isSubmitting 
                      ? 'bg-gray-600' 
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
              
              {submitStatus === 'success' && (
                <div className="p-3 bg-green-800 text-green-100 rounded">
                  Your message has been sent successfully. I'll get back to you soon!
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="p-3 bg-red-800 text-red-100 rounded">
                  {errorMessage || 'Something went wrong. Please try again later.'}
                </div>
              )}
</form>
          </div>
        </div>
      </main>
    </div>
  );
}