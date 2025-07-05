import React from 'react';
import { Code, Smartphone, Database, Cloud, Palette, Zap } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Vue.js', level: 85 },
        { name: 'Next.js', level: 88 }
      ]
    },
    {
      icon: Database,
      title: 'Backend Development',
      color: 'from-cyan-500 to-blue-500',
      skills: [
        { name: 'Node.js', level: 92 },
        { name: 'Python', level: 85 },
        { name: 'PostgreSQL', level: 88 },
        { name: 'MongoDB', level: 80 }
      ]
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      color: 'from-emerald-500 to-teal-500',
      skills: [
        { name: 'React Native', level: 85 },
        { name: 'Flutter', level: 75 },
        { name: 'iOS', level: 70 },
        { name: 'Android', level: 72 }
      ]
    },
    {
      icon: Cloud,
      title: 'DevOps & Cloud',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'AWS', level: 82 },
        { name: 'Docker', level: 88 },
        { name: 'Kubernetes', level: 75 },
        { name: 'CI/CD', level: 85 }
      ]
    },
    {
      icon: Palette,
      title: 'Design & UX',
      color: 'from-purple-500 to-cyan-500',
      skills: [
        { name: 'Figma', level: 90 },
        { name: 'Adobe XD', level: 85 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'CSS3', level: 92 }
      ]
    },
    {
      icon: Zap,
      title: 'Tools & Others',
      color: 'from-yellow-500 to-orange-500',
      skills: [
        { name: 'Git', level: 95 },
        { name: 'Webpack', level: 80 },
        { name: 'Jest', level: 85 },
        { name: 'GraphQL', level: 78 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              A comprehensive toolkit of modern technologies and frameworks that I use to build 
              exceptional digital experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="skill-card group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-purple-500/50 card-interactive scroll-animate-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mr-4`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                        <span className="text-sm text-slate-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center scroll-animate">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Always Learning
              </h3>
              <p className="text-slate-300 mb-6">
                The tech world never stops evolving, and neither do I. I'm constantly exploring new technologies, 
                frameworks, and best practices to stay at the forefront of development.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {['Machine Learning', 'Web3', 'AR/VR', 'IoT', 'Blockchain', 'AI/ML'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full text-sm font-medium hover:scale-105 transition-transform cursor-pointer touch-manipulation"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;