import React from 'react';
import { Heart, Code, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center scroll-animate">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  DevPortfolio
                </span>
              </div>
              <p className="text-slate-400 max-w-md">
                Creating digital experiences that inspire and innovate. 
                Let's build something amazing together.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end">
              <button
                onClick={scrollToTop}
                className="group w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-110 mb-4"
              >
                <ArrowUp className="w-6 h-6 text-white group-hover:-translate-y-1 transition-transform" />
              </button>
              <div className="flex items-center space-x-2 text-slate-400">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-400 animate-pulse" />
                <span>by John Developer</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-800 text-center scroll-animate">
            <p className="text-slate-500 text-sm">
              © 2024 John Developer. All rights reserved. | 
              <span className="ml-1">
                Built with React, TypeScript, and Tailwind CSS
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;