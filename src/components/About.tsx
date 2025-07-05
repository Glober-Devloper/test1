import React from 'react';
import { Code, Palette, Lightbulb, Target } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code that stands the test of time.'
    },
    {
      icon: Palette,
      title: 'Design Focus',
      description: 'Creating beautiful, intuitive interfaces that users love to interact with.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Always exploring new technologies and pushing creative boundaries.'
    },
    {
      icon: Target,
      title: 'Results Driven',
      description: 'Focused on delivering solutions that achieve real business outcomes.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/50 dark:bg-slate-800/70">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-slate-300 dark:text-slate-200 max-w-3xl mx-auto">
              I'm a passionate developer with over 5 years of experience creating digital solutions 
              that make a real impact. My journey spans from elegant frontend designs to robust backend architectures.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1 scroll-animate">
              <div className="space-y-6">
                <p className="text-lg text-slate-300 dark:text-slate-200 leading-relaxed">
                  My passion for development started during my computer science studies, where I discovered 
                  the perfect blend of logical problem-solving and creative expression. Since then, I've 
                  worked with startups and established companies, helping them transform ideas into 
                  successful digital products.
                </p>
                <p className="text-lg text-slate-300 dark:text-slate-200 leading-relaxed">
                  I specialize in modern JavaScript frameworks, responsive design, and creating seamless 
                  user experiences. When I'm not coding, you'll find me exploring new technologies, 
                  contributing to open-source projects, or sharing knowledge with the developer community.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full text-sm font-medium text-white">
                    5+ Years Experience
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full text-sm font-medium text-white">
                    50+ Projects Completed
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full text-sm font-medium text-white">
                    Remote Friendly
                  </span>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2 scroll-animate">
              <div className="relative flex justify-center">
                {/* Profile Image Container - Responsive Square Shape */}
                <div className="relative group">
                  {/* Animated Border */}
                  <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 rounded-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-300" style={{ willChange: 'opacity' }}></div>
                  
                  {/* Inner Border */}
                  <div className="absolute -inset-1 sm:-inset-2 bg-slate-900 dark:bg-slate-800 rounded-2xl"></div>
                  
                  {/* Profile Image - Responsive Square */}
                  <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-slate-800 dark:border-slate-700 group-hover:scale-105 transition-all duration-500" style={{ willChange: 'transform' }}>
                    <img
                      src="/Pi7_image.jpg (4) copy.png"
                      alt="John Developer - Professional Profile"
                      className="w-full h-full object-cover object-center animate-zoom-in-out"
                      style={{ 
                        objectPosition: 'center center',
                        imageRendering: 'crisp-edges'
                      }}
                      loading="eager"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.backgroundColor = '#1e293b';
                        target.alt = 'Profile image not available';
                      }}
                    />
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Status Indicator */}
                  <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 flex items-center space-x-2 bg-slate-900/90 dark:bg-slate-800/90 backdrop-blur-sm border border-slate-700 dark:border-slate-600 rounded-full px-3 py-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-green-400 font-medium">Available</span>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur-xl opacity-30 animate-pulse delay-1000"></div>
                  
                  {/* Code Symbol */}
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 text-purple-400/60 text-xl sm:text-2xl font-bold animate-float">
                    {"</>"}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 scroll-animate">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="about-card group bg-slate-800/50 dark:bg-slate-700/50 backdrop-blur-sm border border-slate-700/50 dark:border-slate-600/50 rounded-xl p-6 hover:border-purple-500/50 card-interactive scroll-animate"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <highlight.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{highlight.title}</h3>
                <p className="text-slate-300 dark:text-slate-200">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;