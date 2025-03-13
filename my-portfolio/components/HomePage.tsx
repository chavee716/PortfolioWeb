import { useState, useEffect, useMemo } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { ChevronDown, ArrowRight, ExternalLink, Github, Linkedin } from 'lucide-react';
import About from '../pages/about';
import Projects from '../pages/projects';
import Contact from '../pages/contact';

export default function HomePage({ isDarkMode }) {
  const [isVisible, setIsVisible] = useState(false);
  const [text, setText] = useState('');
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  
  // Array of sentences for typing animation - wrapped in useMemo
  const sentences = useMemo(() => [
    "Passionate about DevOps and Machine Learning.",
    "AI Enthusiast.",
    "Learning and growing as a software engineer."
  ], []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const currentSentence = sentences[currentSentenceIndex];
    
    const typeWriter = () => {
      if (isDeleting) {
        setText(currentSentence.substring(0, text.length - 1));
        setTypingSpeed(50); // Faster when deleting
      } else {
        setText(currentSentence.substring(0, text.length + 1));
        setTypingSpeed(100); // Normal speed when typing
      }

      // Logic for moving to next sentence or continuing current one
      if (!isDeleting && text === currentSentence) {
        // Pause at end of sentence
        setTimeout(() => setIsDeleting(true), 1500);
        setTypingSpeed(100);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setCurrentSentenceIndex((prevIndex) => 
          (prevIndex + 1) % sentences.length
        );
        setTypingSpeed(200); // Slight pause before next sentence
      }
    };

    const timer = setTimeout(typeWriter, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, currentSentenceIndex, isDeleting, sentences, typingSpeed]);

  return (
    <>
      <Head>
        <title>Chaveen Dias | Computer Engineering Undergraduate</title>
        <meta name="description" content="Personal portfolio of Chaveen Dias, Computer Engineering Undergraduate" />
      </Head>
      
      {/* Hero Section */}
      <section id="home" className={`min-h-screen py-20 flex flex-col items-center justify-center px-4 ${
        isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
          <div className="relative w-40 h-40 md:w-48 md:h-48 mb-6">
    <Image
      src="/dp.jpg" // Image in public folder
      alt="Chaveen Dias"
      layout="fill"
      objectFit="cover"
      className="rounded-full border-4 border-blue-500 shadow-lg"
    />
  </div>
        <div className={`max-w-5xl mx-auto text-center transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="mb-8">
            <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${
              isDarkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
              BSc. Computer Engineering Undergraduate
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Hi, I&apos;m <span className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>Chaveen Dias</span>
            </h1>
            <div className={`max-w-2xl mx-auto text-lg md:text-xl mb-10 min-h-[60px] ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <span className="inline-block">{text}</span>
              <span className="inline-block ml-1 animate-pulse">|</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="#projects" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`flex items-center justify-center space-x-2 px-6 py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg ${
                isDarkMode 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
            >
              <span>View My Projects</span>
              <ArrowRight size={18} />
            </a>
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`flex items-center justify-center space-x-2 px-6 py-3 rounded-lg transition-all transform hover:scale-105 ${
                isDarkMode 
                  ? 'border border-blue-500 text-blue-400 hover:bg-blue-900/20' 
                  : 'border border-blue-500 text-blue-600 hover:bg-blue-50'}`}
            >
              <span>Contact Me</span>
              <ExternalLink size={18} />
            </a>
          </div>
          
          <div className="flex justify-center mt-16">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`animate-bounce p-2 rounded-full ${
                isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
            >
              <ChevronDown size={24} />
            </a>
          </div>
          
          {/* Social Links */}
          <div className={`fixed left-6 bottom-0 flex-col items-center hidden md:flex ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            <a href="https://github.com/chavee716" target="_blank" rel="noopener noreferrer" 
              className="p-2 hover:text-blue-500 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/chaveen-dias-8935b5288/" target="_blank" rel="noopener noreferrer" 
              className="p-2 hover:text-blue-500 transition-colors">
              <Linkedin size={20} />
            </a>
            <div className={`w-px h-24 mt-4 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className={`py-16 ${
        isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <About isDarkMode={isDarkMode} />
      </section>
      
      {/* Projects Section */}
      <section id="projects" className={`py-16 ${
        isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <Projects isDarkMode={isDarkMode} />
      </section>
      
      {/* Resume Section */}
      <section id="resume" className={`py-16 ${
        isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto p-6">
          <h2 className={`text-4xl font-semibold mb-10 text-center ${
            isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            My Resume
          </h2>
          <div className={`text-center p-10 rounded-xl ${
            isDarkMode ? 'bg-gray-800' : 'bg-white shadow-lg'}`}>
            <p className="mb-6">Resume content will go here</p>
            <a 
              href="/ChaveenDiasCVResume.pdf" 
              className={`inline-flex items-center px-5 py-3 rounded-lg ${
                isDarkMode 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
            >
              <span className="mr-2">Download Resume</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className={`py-16 ${
        isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <Contact isDarkMode={isDarkMode} />
      </section>
    </>
  );
}