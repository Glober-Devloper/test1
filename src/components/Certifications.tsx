import React from 'react';
import { Award, ExternalLink, Calendar, CheckCircle, Star, Trophy } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      id: 1,
      title: 'AWS Certified Solutions Architect - Professional',
      issuer: 'Amazon Web Services',
      date: '2023',
      validUntil: '2026',
      credentialId: 'AWS-PSA-2023-001',
      description: 'Advanced certification demonstrating expertise in designing distributed systems on AWS.',
      skills: ['Cloud Architecture', 'AWS Services', 'Security', 'Cost Optimization'],
      color: 'from-orange-500 to-red-500',
      logo: '☁️',
      level: 'Professional',
      status: 'Active',
      verifyUrl: 'https://aws.amazon.com/verification/AWS-PSA-2023-001'
    },
    {
      id: 2,
      title: 'Google Cloud Professional Cloud Architect',
      issuer: 'Google Cloud',
      date: '2023',
      validUntil: '2025',
      credentialId: 'GCP-PCA-2023-002',
      description: 'Professional-level certification for designing and managing Google Cloud solutions.',
      skills: ['GCP Services', 'Kubernetes', 'DevOps', 'Microservices'],
      color: 'from-blue-500 to-cyan-500',
      logo: '🌐',
      level: 'Professional',
      status: 'Active',
      verifyUrl: 'https://cloud.google.com/certification/verify/GCP-PCA-2023-002'
    },
    {
      id: 3,
      title: 'Certified Kubernetes Administrator (CKA)',
      issuer: 'Cloud Native Computing Foundation',
      date: '2022',
      validUntil: '2025',
      credentialId: 'CKA-2022-003',
      description: 'Hands-on certification demonstrating skills in Kubernetes administration.',
      skills: ['Kubernetes', 'Container Orchestration', 'DevOps', 'Linux'],
      color: 'from-purple-500 to-pink-500',
      logo: '⚙️',
      level: 'Professional',
      status: 'Active',
      verifyUrl: 'https://training.linuxfoundation.org/certification/verify/CKA-2022-003'
    },
    {
      id: 4,
      title: 'Meta React Developer Professional Certificate',
      issuer: 'Meta (Facebook)',
      date: '2022',
      validUntil: 'Lifetime',
      credentialId: 'META-RD-2022-004',
      description: 'Comprehensive program covering React development from basics to advanced concepts.',
      skills: ['React', 'JavaScript', 'Frontend Development', 'UI/UX'],
      color: 'from-cyan-500 to-blue-500',
      logo: '⚛️',
      level: 'Professional',
      status: 'Active',
      verifyUrl: 'https://coursera.org/verify/professional-cert/META-RD-2022-004'
    },
    {
      id: 5,
      title: 'MongoDB Certified Developer Associate',
      issuer: 'MongoDB University',
      date: '2021',
      validUntil: '2024',
      credentialId: 'MDB-DA-2021-005',
      description: 'Certification validating skills in MongoDB database development and administration.',
      skills: ['MongoDB', 'NoSQL', 'Database Design', 'Aggregation'],
      color: 'from-emerald-500 to-teal-500',
      logo: '🍃',
      level: 'Associate',
      status: 'Active',
      verifyUrl: 'https://university.mongodb.com/certification/verify/MDB-DA-2021-005'
    },
    {
      id: 6,
      title: 'Docker Certified Associate',
      issuer: 'Docker Inc.',
      date: '2021',
      validUntil: '2024',
      credentialId: 'DCA-2021-006',
      description: 'Certification demonstrating proficiency in Docker containerization technology.',
      skills: ['Docker', 'Containerization', 'DevOps', 'Microservices'],
      color: 'from-blue-600 to-indigo-600',
      logo: '🐳',
      level: 'Associate',
      status: 'Active',
      verifyUrl: 'https://credentials.docker.com/verify/DCA-2021-006'
    }
  ];

  const stats = [
    { label: 'Total Certifications', value: '15+', icon: Award },
    { label: 'Active Certifications', value: '12', icon: CheckCircle },
    { label: 'Professional Level', value: '8', icon: Star },
    { label: 'Years of Learning', value: '5+', icon: Trophy }
  ];

  return (
    <section id="certifications" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16 scroll-animate">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Certifications & Achievements
            </h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
              Professional certifications that validate my expertise and commitment to staying 
              current with industry standards and best practices.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 md:p-6 text-center hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 scroll-animate-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-slate-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {certifications.map((cert, index) => (
              <div
                key={cert.id}
                className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 scroll-animate-rotate"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 bg-gradient-to-br ${cert.color} rounded-lg flex items-center justify-center text-2xl group-hover:animate-pulse`}>
                      {cert.logo}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${cert.color} text-white`}>
                          {cert.level}
                        </span>
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
                          {cert.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Title and Issuer */}
                <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                  {cert.title}
                </h3>
                <p className="text-purple-400 font-medium mb-3">{cert.issuer}</p>

                {/* Description */}
                <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                  {cert.description}
                </p>

                {/* Date Info */}
                <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>Issued: {cert.date}</span>
                  </div>
                  <span>Valid until: {cert.validUntil}</span>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <h4 className="text-white font-medium text-sm mb-2">Skills Validated:</h4>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-slate-700/50 text-slate-300 rounded text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Credential ID */}
                <div className="text-xs text-slate-500 mb-4">
                  Credential ID: {cert.credentialId}
                </div>

                {/* Action Button */}
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 text-sm text-purple-400 hover:text-purple-300 transition-colors border border-slate-600 hover:border-purple-500 rounded-lg py-2"
                >
                  <span>Verify Credential</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 md:mt-16 scroll-animate">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 md:p-8 max-w-2xl mx-auto">
              <h3 className="text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Continuous Learning Journey
              </h3>
              <p className="text-slate-300 mb-6">
                I believe in lifelong learning and staying ahead of technology trends. 
                Currently pursuing additional certifications in AI/ML and advanced cloud architectures.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {['AI/ML Certification', 'Advanced DevOps', 'Cybersecurity', 'Blockchain'].map((upcoming) => (
                  <span
                    key={upcoming}
                    className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full text-sm font-medium hover:scale-105 transition-transform cursor-pointer"
                  >
                    {upcoming} (In Progress)
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

export default Certifications;