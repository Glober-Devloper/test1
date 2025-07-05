import React, { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Download, Play, Code2, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['Full Stack Developer', 'UI/UX Designer', 'Software Engineer', 'Tech Innovator'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 pb-20 md:pt-20 md:pb-0">
      {/* Simplified Background for Mobile */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Background Effects */}
        <div className="hidden md:block">
          {/* Floating Orbs */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur-xl opacity-30 animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full blur-xl opacity-30 animate-pulse delay-2000"></div>
          <div className="absolute top-1/2 right-10 w-18 h-18 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full blur-xl opacity-20 animate-pulse delay-3000"></div>
          
          {/* Geometric Shapes */}
          <div className="absolute top-32 left-1/4 w-16 h-16 border-2 border-purple-500/30 rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-40 right-1/4 w-20 h-20 border-2 border-cyan-500/30 rotate-12 animate-float"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-slate-700/30 rounded-full animate-spin-slower"></div>
          
          {/* Code Symbols */}
          <div className="absolute top-1/4 left-1/3 text-purple-500/20 text-6xl animate-float delay-1000">{"</>"}</div>
          <div className="absolute bottom-1/3 right-1/3 text-cyan-500/20 text-5xl animate-pulse delay-2000">{ }</div>
          <div className="absolute top-2/3 left-1/5 text-emerald-500/20 text-4xl animate-bounce delay-3000">( )</div>
        </div>
        
        {/* Mobile Background - Simplified */}
        <div className="md:hidden">
          <div className="absolute top-20 left-5 w-12 h-12 bg-purple-500/20 rounded-full"></div>
          <div className="absolute top-40 right-5 w-16 h-16 bg-cyan-500/20 rounded-full"></div>
          <div className="absolute bottom-40 left-10 w-14 h-14 bg-emerald-500/20 rounded-full"></div>
          <div className="absolute top-1/3 right-1/4 text-purple-500/30 text-2xl">{"</>"}</div>
          <div className="absolute bottom-1/3 left-1/4 text-cyan-500/30 text-xl">{ }</div>
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-500/5 to-cyan-500/5"></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Content */}
          <div className="space-y-4 md:space-y-6">
            <div className="space-y-3 md:space-y-4">
              <p className="text-purple-400 dark:text-purple-300 font-futuristic font-medium text-sm md:text-base tracking-wider uppercase animate-fade-in scroll-animate">
                {"> Initializing Developer Mode..."}
              </p>
              
              {/* Enhanced Developer Name - Single Line on Mobile */}
              <h1 className="font-robotic text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 md:mb-4 animate-fade-in-delay scroll-animate">
                {/* Mobile Layout - Single Line */}
                <div className="flex md:hidden items-center justify-center space-x-2">
                  {/* JOHN with white color */}
                  <span className="relative inline-block">
                    <span className="text-white font-black tracking-wider" data-text="JOHN">
                      JOHN
                    </span>
                    {/* Sparkle effects - smaller on mobile */}
                    <Sparkles className="absolute -top-1 -right-1 w-2 h-2 text-cyan-400 animate-pulse" />
                    <Sparkles className="absolute -bottom-1 -left-1 w-2 h-2 text-purple-400 animate-pulse delay-500" />
                  </span>
                  
                  {/* DEVELOPER with white color */}
                  <span className="relative inline-block">
                    <span className="text-white font-black tracking-wider" data-text="DEVELOPER">
                      DEVELOPER
                    </span>
                    {/* Code brackets animation - smaller on mobile */}
                    <span className="absolute -left-1 top-0 text-emerald-400 animate-pulse text-xs">{"<"}</span>
                    <span className="absolute -right-1 top-0 text-blue-400 animate-pulse delay-300 text-xs">{">"}</span>
                  </span>
                </div>

                {/* Desktop Layout - Two Lines */}
                <div className="hidden md:flex flex-col items-center space-y-0 lg:flex-row lg:justify-center lg:items-center lg:space-y-0 lg:space-x-4">
                  {/* JOHN with white color */}
                  <span className="relative inline-block">
                    <span className="text-white font-black tracking-wider" data-text="JOHN">
                      JOHN
                    </span>
                    {/* Sparkle effects */}
                    <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-cyan-400 animate-pulse" />
                    <Sparkles className="absolute -bottom-1 -left-1 w-4 h-4 text-purple-400 animate-pulse delay-500" />
                  </span>
                  
                  {/* DEVELOPER with white color */}
                  <span className="relative inline-block">
                    <span className="text-white font-black tracking-wider" data-text="DEVELOPER">
                      DEVELOPER
                    </span>
                    {/* Code brackets animation */}
                    <span className="absolute -left-3 top-0 text-emerald-400 animate-pulse text-xl">{"<"}</span>
                    <span className="absolute -right-3 top-0 text-blue-400 animate-pulse delay-300 text-xl">{">"}</span>
                  </span>
                </div>
              </h1>
              
              {/* Subtitle with Mobile-Optimized Text */}
              <div className="font-futuristic text-sm md:text-lg lg:text-xl text-slate-300 dark:text-slate-200 mb-3 scroll-animate px-2">
                <div className="flex flex-col items-center space-y-1 md:flex-row md:justify-center md:items-center md:space-y-0">
                  <span className="text-purple-400 dark:text-purple-300 mr-1">{">"}</span>
                  <span className="break-words">System.out.println("</span>
                  <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-bold break-words">
                    {roles[currentRole]}
                  </span>
                  <span>");</span>
                </div>
              </div>
            </div>
            
            <div className="h-12 md:h-16 flex items-center justify-center animate-fade-in-delay-2 scroll-animate px-2">
              <p className="text-sm md:text-base lg:text-lg text-slate-400 dark:text-slate-300 font-futuristic text-center">
                <span className="text-green-400 dark:text-green-300 font-mono">[STATUS]</span> Ready to execute innovative solutions...
              </p>
            </div>
            
            <p className="text-sm md:text-base text-slate-400 dark:text-slate-300 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay-3 font-futuristic scroll-animate px-4">
              <span className="text-cyan-400 dark:text-cyan-300 font-mono">// </span>
              Crafting digital experiences that blend innovative design with robust functionality. 
              Passionate about creating solutions that make a real difference in people's lives.
            </p>

            {/* CTA Buttons - Mobile Optimized */}
            <div className="flex flex-col space-y-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4 sm:space-y-0 mb-8 md:mb-10 animate-fade-in-delay-4 scroll-animate px-4">
              <a
                href="https://drive.google.com/file/d/1example-resume-link/view"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 font-futuristic text-sm md:text-base"
              >
                <Download className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-y-1 transition-transform" />
                <span>DOWNLOAD.EXE</span>
              </a>
              
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group border border-slate-600 dark:border-slate-500 text-slate-300 dark:text-slate-200 hover:border-purple-500 hover:text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 font-futuristic text-sm md:text-base"
              >
                <Play className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                <span>RUN_PORTFOLIO.BAT</span>
              </button>
            </div>

            {/* Social Links - Mobile Optimized */}
            <div className="flex items-center justify-center space-x-4 md:space-x-6 animate-fade-in-delay-5 scroll-animate mb-8 md:mb-0">
              <a
                href="https://github.com/johndeveloper"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 md:w-14 md:h-14 bg-slate-800/50 dark:bg-slate-700/50 backdrop-blur-sm border border-slate-700 dark:border-slate-600 hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 hover:border-transparent rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg group"
              >
                <Github className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-12 transition-transform text-white" />
              </a>
              <a
                href="https://linkedin.com/in/johndeveloper"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 md:w-14 md:h-14 bg-slate-800/50 dark:bg-slate-700/50 backdrop-blur-sm border border-slate-700 dark:border-slate-600 hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 hover:border-transparent rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg group"
              >
                <Linkedin className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-12 transition-transform text-white" />
              </a>
              <a
                href="mailto:hello@johndeveloper.com"
                className="w-12 h-12 md:w-14 md:h-14 bg-slate-800/50 dark:bg-slate-700/50 backdrop-blur-sm border border-slate-700 dark:border-slate-600 hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 hover:border-transparent rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg group"
              >
                <Mail className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-12 transition-transform text-white" />
              </a>
              <a
                href="https://codepen.io/johndeveloper"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 md:w-14 md:h-14 bg-slate-800/50 dark:bg-slate-700/50 backdrop-blur-sm border border-slate-700 dark:border-slate-600 hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 hover:border-transparent rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg group"
              >
                <Code2 className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-12 transition-transform text-white" />
              </a>
            </div>

            {/* Stats - Mobile Optimized Grid */}
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-6 mt-8 md:mt-12 animate-fade-in-delay-6 scroll-animate px-2">
              {[
                { number: '5+', label: 'Years Experience', code: 'YEARS_EXP' },
                { number: '50+', label: 'Projects Completed', code: 'PROJ_COUNT' },
                { number: '30+', label: 'Happy Clients', code: 'CLIENT_SAT' },
                { number: '15+', label: 'Technologies', code: 'TECH_STACK' }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-slate-800/30 dark:bg-slate-700/30 backdrop-blur-sm border border-slate-700/50 dark:border-slate-600/50 rounded-lg p-3 md:p-4 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="text-xs text-green-400 dark:text-green-300 font-mono mb-1 opacity-70">
                      {stat.code}
                    </div>
                    <div className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-1 font-robotic">
                      {stat.number}
                    </div>
                    <div className="text-xs md:text-sm text-slate-400 dark:text-slate-300 font-medium font-futuristic leading-tight">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on Mobile */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block scroll-animate">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-slate-400 dark:text-slate-300 text-sm font-futuristic">{"> scroll_down()"}</span>
          <ArrowDown className="w-5 h-5 text-slate-400 dark:text-slate-300" />
        </div>
      </div>
    </section>
  );
};

export default Hero;