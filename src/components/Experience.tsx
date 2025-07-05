import React from 'react';
import { Building, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      id: 1,
      company: 'TechCorp Solutions',
      position: 'Senior Full Stack Developer',
      duration: '2022 - Present',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Leading development of scalable web applications using React, Node.js, and AWS. Mentoring junior developers and implementing best practices for code quality and performance.',
      achievements: [
        'Increased application performance by 40% through optimization',
        'Led a team of 5 developers on major product releases',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Architected microservices handling 1M+ daily requests'
      ],
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'PostgreSQL'],
      color: 'from-purple-500 to-pink-500',
      website: 'https://techcorp-solutions.com'
    },
    {
      id: 2,
      company: 'StartupXYZ',
      position: 'Frontend Developer',
      duration: '2020 - 2022',
      location: 'Remote',
      type: 'Full-time',
      description: 'Developed responsive web applications and mobile apps using React and React Native. Collaborated with design team to create intuitive user interfaces.',
      achievements: [
        'Built 3 major product features from concept to launch',
        'Improved user engagement by 35% through UX improvements',
        'Reduced bundle size by 50% through code optimization',
        'Mentored 2 junior developers'
      ],
      technologies: ['React', 'React Native', 'JavaScript', 'Redux', 'Styled Components'],
      color: 'from-cyan-500 to-blue-500',
      website: 'https://startupxyz.com'
    },
    {
      id: 3,
      company: 'Digital Agency Pro',
      position: 'Web Developer',
      duration: '2019 - 2020',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'Created custom websites and web applications for clients across various industries. Focused on responsive design and performance optimization.',
      achievements: [
        'Delivered 20+ client projects on time and within budget',
        'Achieved 98% client satisfaction rate',
        'Implemented SEO best practices improving rankings by 200%',
        'Reduced page load times by 45% across all projects'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'WordPress', 'MySQL'],
      color: 'from-emerald-500 to-teal-500',
      website: 'https://digitalagencypro.com'
    },
    {
      id: 4,
      company: 'Freelance',
      position: 'Web Developer & Designer',
      duration: '2018 - 2019',
      location: 'Remote',
      type: 'Freelance',
      description: 'Provided web development and design services to small businesses and startups. Specialized in creating modern, responsive websites.',
      achievements: [
        'Completed 15+ freelance projects',
        'Built long-term relationships with 8 recurring clients',
        'Increased client revenue by average of 25% through web solutions',
        'Developed expertise in multiple CMS platforms'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'jQuery', 'Photoshop'],
      color: 'from-orange-500 to-red-500',
      website: 'https://johndeveloper.com/freelance'
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16 scroll-animate">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
              A journey through my professional career, showcasing growth, achievements, 
              and the impact I've made across different organizations.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full"></div>

            <div className="space-y-8 md:space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`relative flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full border-4 border-slate-900 z-10"></div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className={`group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 md:p-8 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 ${
                      index % 2 === 0 ? 'scroll-animate-left' : 'scroll-animate-right'
                    }`}>
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div className="flex items-center space-x-3 mb-2 sm:mb-0">
                          <div className={`w-12 h-12 bg-gradient-to-br ${exp.color} rounded-lg flex items-center justify-center group-hover:animate-pulse`}>
                            <Building className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg md:text-xl font-bold text-white">{exp.company}</h3>
                            <p className="text-purple-400 font-medium">{exp.position}</p>
                          </div>
                        </div>
                        <span className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${exp.color} text-white`}>
                          {exp.type}
                        </span>
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 mb-4 text-sm text-slate-400">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-slate-300 mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start space-x-2 text-sm text-slate-300">
                              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-xs font-medium hover:bg-slate-600/50 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Company Link */}
                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        <span>Visit Company</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 md:mt-16 scroll-animate">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 md:p-8 max-w-2xl mx-auto">
              <h3 className="text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Ready for New Challenges
              </h3>
              <p className="text-slate-300 mb-6">
                I'm always excited to take on new projects and collaborate with innovative teams. 
                Let's discuss how I can contribute to your next big idea.
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-6 md:px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 mx-auto"
              >
                <span>Let's Work Together</span>
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;