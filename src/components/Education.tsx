import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, Star } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      id: 1,
      institution: 'Stanford University',
      degree: 'Master of Science in Computer Science',
      field: 'Artificial Intelligence & Machine Learning',
      duration: '2017 - 2019',
      location: 'Stanford, CA',
      gpa: '3.9/4.0',
      description: 'Specialized in AI/ML with focus on deep learning, natural language processing, and computer vision. Completed thesis on neural network optimization.',
      achievements: [
        'Graduated Summa Cum Laude',
        'Research Assistant in AI Lab',
        'Published 2 papers in peer-reviewed journals',
        'Winner of Best Student Project Award'
      ],
      coursework: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP', 'Algorithms', 'Data Structures'],
      color: 'from-purple-500 to-pink-500',
      icon: GraduationCap
    },
    {
      id: 2,
      institution: 'University of California, Berkeley',
      degree: 'Bachelor of Science in Computer Science',
      field: 'Software Engineering',
      duration: '2013 - 2017',
      location: 'Berkeley, CA',
      gpa: '3.8/4.0',
      description: 'Comprehensive computer science education with emphasis on software engineering principles, algorithms, and system design.',
      achievements: [
        'Dean\'s List for 6 semesters',
        'President of Computer Science Club',
        'Hackathon Winner (3 times)',
        'Teaching Assistant for Data Structures'
      ],
      coursework: ['Software Engineering', 'Database Systems', 'Operating Systems', 'Networks', 'Web Development'],
      color: 'from-cyan-500 to-blue-500',
      icon: BookOpen
    },
    {
      id: 3,
      institution: 'Online Certifications',
      degree: 'Continuous Learning',
      field: 'Various Technologies',
      duration: '2017 - Present',
      location: 'Online',
      gpa: '',
      description: 'Committed to lifelong learning through various online platforms and certification programs to stay current with technology trends.',
      achievements: [
        '50+ Completed Courses',
        'AWS Certified Solutions Architect',
        'Google Cloud Professional',
        'Multiple Udemy & Coursera Certificates'
      ],
      coursework: ['Cloud Computing', 'DevOps', 'React Advanced', 'Node.js', 'Docker & Kubernetes'],
      color: 'from-emerald-500 to-teal-500',
      icon: Award
    }
  ];

  const skills = [
    { category: 'Academic Excellence', items: ['Research', 'Technical Writing', 'Problem Solving', 'Critical Thinking'] },
    { category: 'Leadership', items: ['Team Management', 'Project Leadership', 'Mentoring', 'Public Speaking'] },
    { category: 'Technical Skills', items: ['Algorithm Design', 'System Architecture', 'Code Review', 'Testing'] }
  ];

  return (
    <section id="education" className="py-16 md:py-20 bg-slate-800/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16 scroll-animate">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Education & Learning
            </h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
              My academic journey and commitment to continuous learning, building the foundation 
              for innovation and technical excellence.
            </p>
          </div>

          {/* Education Timeline */}
          <div className="space-y-8 md:space-y-12 mb-16">
            {education.map((edu, index) => (
              <div
                key={edu.id}
                className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 md:p-8 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 scroll-animate-left"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
                  {/* Main Info */}
                  <div className="lg:col-span-2">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div className="flex items-start space-x-4 mb-4 sm:mb-0">
                        <div className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br ${edu.color} rounded-lg flex items-center justify-center group-hover:animate-pulse flex-shrink-0`}>
                          <edu.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{edu.institution}</h3>
                          <p className="text-purple-400 font-semibold text-lg">{edu.degree}</p>
                          <p className="text-slate-400">{edu.field}</p>
                        </div>
                      </div>
                      {edu.gpa && (
                        <div className="flex items-center space-x-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-full px-3 py-1">
                          <Star className="w-4 h-4 text-yellow-400" />
                          <span className="text-yellow-400 font-semibold text-sm">GPA: {edu.gpa}</span>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 mb-4 text-sm text-slate-400">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                    </div>

                    <p className="text-slate-300 mb-6 leading-relaxed">
                      {edu.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Key Achievements:</h4>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {edu.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-start space-x-2 text-sm text-slate-300">
                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Coursework */}
                  <div className="lg:col-span-1">
                    <h4 className="text-white font-semibold mb-4">Relevant Coursework:</h4>
                    <div className="space-y-2">
                      {edu.coursework.map((course) => (
                        <div
                          key={course}
                          className="px-3 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-sm text-slate-300 hover:bg-slate-600/50 transition-colors"
                        >
                          {course}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Skills Developed */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 scroll-animate-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-bold text-white mb-4">{skillGroup.category}</h3>
                <div className="space-y-3">
                  {skillGroup.items.map((item) => (
                    <div key={item} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"></div>
                      <span className="text-slate-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;