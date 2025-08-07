import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const handleScrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Lesly V J
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 font-light">
            Aspiring Machine Learning Engineer
          </p>
          
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12 leading-relaxed">
            Aspiring Machine Learning Engineer with solid grounding in mathematics, statistics, 
            and Python programming. Passionate about applying AI to solve complex challenges 
            through data-driven insights and innovative model development.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={handleContactClick}
              className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg"
            >
              Get In Touch
            </button>
            
            <div className="flex space-x-6">
              <a
                href="https://github.com/leslyvj"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-colors duration-200"
                aria-label="GitHub Profile"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/lesly-v-j-061340288"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:lesly.ds24@duk.ac.in"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                aria-label="Email Contact"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <button
            onClick={handleScrollToAbout}
            className="inline-flex items-center text-gray-600 hover:text-black transition-colors duration-200 group"
            aria-label="Scroll to About section"
          >
            <ArrowDown 
              size={24} 
              className="animate-bounce group-hover:transform group-hover:translate-y-1 transition-transform duration-200" 
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;