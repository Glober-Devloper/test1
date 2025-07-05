import React from 'react';
import { Code, Palette, Lightbulb, Target } from 'lucide-react';
import ImageLoader from './ImageLoader';

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
    <section id="about" className="py-16 md:py-20 bg-slate-800/50 dark:bg-slate-800/70">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16 scroll-animate">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-lg md:text-xl text-slate-300 dark:text-slate-200 max-w-3xl mx-auto">
              I'm a passionate developer with over 5 years of experience creating digital solutions 
              that make a real impact. My journey spans from elegant frontend designs to robust backend architectures.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
            <div className="order-2 md:order-1 scroll-animate">
              <div className="space-y-6">
                <p className="text-base md:text-lg text-slate-300 dark:text-slate-200 leading-relaxed">
                  My passion for development started during my computer science studies, where I discovered 
                  the perfect blend of logical problem-solving and creative expression. Since then, I've 
                  worked with startups and established companies, helping them transform ideas into 
                  successful digital products.
                </p>
                <p className="text-base md:text-lg text-slate-300 dark:text-slate-200 leading-relaxed">
                  I specialize in modern JavaScript frameworks, responsive design, and creating seamless 
                  user experiences. When I'm not coding, you'll find me exploring new technologies, 
                  contributing to open-source projects, or sharing knowledge with the developer community.
                </p>
                <div className="flex flex-wrap gap-3 md:gap-4 pt-4">
                  <span className="px-3 py-2 md:px-4 md:py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full text-xs md:text-sm font-medium text-white">
                    5+ Years Experience
                  </span>
                  <span className="px-3 py-2 md:px-4 md:py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full text-xs md:text-sm font-medium text-white">
                    50+ Projects Completed
                  </span>
                  <span className="px-3 py-2 md:px-4 md:py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full text-xs md:text-sm font-medium text-white">
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
                  <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 rounded-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-300" style={{ willChange: 'opacity' }}></div>
                  
                  {/* Inner Border */}
                  <div className="absolute -inset-1 md:-inset-2 bg-slate-900 dark:bg-slate-800 rounded-2xl"></div>
                  
                  {/* Profile Image - Responsive Square */}
                  <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-slate-800 dark:border-slate-700 group-hover:scale-105 transition-all duration-500" style={{ willChange: 'transform' }}>
                    <ImageLoader
                      src="/Pi7_image.jpg (4) copy.png"
                      alt="John Developer - Professional Profile"
                      className="w-full h-full object-cover object-center"
                      fallbackSrc="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400"
                      loadingClassName="rounded-2xl"
                    />
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Status Indicator */}
                  <div className="absolute bottom-3 md:bottom-6 right-3 md:right-6 flex items-center space-x-2 bg-slate-900/90 dark:bg-slate-800/90 backdrop-blur-sm border border-slate-700 dark:border-slate-600 rounded-full px-2 py-1 md:px-3 md:py-2">
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs md:text-sm text-green-400 font-medium">Available</span>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-12 h-12 md:w-20 md:h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
                  <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-10 h-10 md:w-16 md:h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur-xl opacity-30 animate-pulse delay-1000"></div>
                  
                  {/* Code Symbol */}
                  <div className="absolute top-2 left-2 md:top-4 md:left-4 text-purple-400/60 text-lg md:text-2xl font-bold animate-float">
                    {"</>"}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 scroll-animate">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="about-card group bg-slate-800/50 dark:bg-slate-700/50 backdrop-blur-sm border border-slate-700/50 dark:border-slate-600/50 rounded-xl p-4 md:p-6 hover:border-purple-500/50 card-interactive scroll-animate"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                  <highlight.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 text-white">{highlight.title}</h3>
                <p className="text-sm md:text-base text-slate-300 dark:text-slate-200">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;