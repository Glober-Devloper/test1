import React from 'react';
import { ExternalLink, Github, Smartphone, Globe, Database, Zap } from 'lucide-react';
import ImageLoader from './ImageLoader';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      category: 'Full Stack',
      icon: Globe,
      color: 'from-purple-500 to-pink-500',
      github: 'https://github.com/johndeveloper/ecommerce-platform',
      demo: 'https://ecommerce-demo.johndeveloper.com'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Firebase', 'Material-UI', 'WebSocket'],
      category: 'Frontend',
      icon: Zap,
      color: 'from-cyan-500 to-blue-500',
      github: 'https://github.com/johndeveloper/task-manager',
      demo: 'https://taskmanager.johndeveloper.com'
    },
    {
      id: 3,
      title: 'AI-Powered Analytics',
      description: 'Machine learning dashboard that provides insights and predictions for business metrics with interactive visualizations.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Python', 'TensorFlow', 'React', 'D3.js'],
      category: 'Data Science',
      icon: Database,
      color: 'from-emerald-500 to-teal-500',
      github: 'https://github.com/johndeveloper/ai-analytics',
      demo: 'https://analytics.johndeveloper.com'
    },
    {
      id: 4,
      title: 'Social Media Mobile App',
      description: 'Cross-platform mobile application for social networking with features like photo sharing, messaging, and live streaming.',
      image: 'https://images.pexels.com/photos/1482476/pexels-photo-1482476.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React Native', 'Firebase', 'WebRTC', 'Redux'],
      category: 'Mobile',
      icon: Smartphone,
      color: 'from-orange-500 to-red-500',
      github: 'https://github.com/johndeveloper/social-app',
      demo: 'https://play.google.com/store/apps/details?id=com.johndeveloper.social'
    },
    {
      id: 5,
      title: 'DevOps Pipeline',
      description: 'Automated CI/CD pipeline with Docker, Kubernetes, and AWS for seamless deployment and scaling of applications.',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Docker', 'Kubernetes', 'AWS', 'Jenkins'],
      category: 'DevOps',
      icon: Globe,
      color: 'from-purple-500 to-cyan-500',
      github: 'https://github.com/johndeveloper/devops-pipeline',
      demo: 'https://pipeline.johndeveloper.com'
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website with 3D animations, smooth transitions, and optimized performance.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
      category: 'Frontend',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      github: 'https://github.com/johndeveloper/portfolio',
      demo: 'https://johndeveloper.com'
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-20 bg-slate-800/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16 scroll-animate">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
              A showcase of my recent work, demonstrating expertise across different technologies 
              and domains. Each project represents a unique challenge and creative solution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="project-card group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-purple-500/50 card-interactive scroll-animate-rotate"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden h-48">
                  <ImageLoader
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300"
                    loadingClassName="h-48"
                  />
                  <div className="absolute top-4 right-4">
                    <div className={`w-10 h-10 bg-gradient-to-br ${project.color} rounded-full flex items-center justify-center opacity-90`}>
                      <project.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-4 md:p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg md:text-xl font-bold text-white">{project.title}</h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${project.color} text-white`}>
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="text-slate-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 md:px-3 md:py-1 bg-slate-700/50 text-slate-300 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-sm text-purple-400 hover:text-purple-300 transition-colors touch-manipulation"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors touch-manipulation"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 scroll-animate">
            <a
              href="https://github.com/johndeveloper?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2 touch-manipulation"
            >
              <span>View All Projects</span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;