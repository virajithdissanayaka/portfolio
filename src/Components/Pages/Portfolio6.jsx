import React from 'react';
import { Code, Database, Server, Award, Book, Linkedin, Mail, ExternalLink, ChevronRight, User } from 'lucide-react';

const PortfolioSinglePage = () => {
  // Technology cards with 3D effect
  const technologies = [
    { name: 'React', icon: <Code />, color: 'bg-blue-500' },
    { name: 'Docker', icon: <Server />, color: 'bg-blue-600' },
    { name: 'Kubernetes', icon: <Server />, color: 'bg-blue-700' },
    { name: 'AWS', icon: <Database />, color: 'bg-orange-500' },
    { name: 'Jenkins', icon: <Server />, color: 'bg-red-500' },
    { name: 'Terraform', icon: <Code />, color: 'bg-purple-600' },
    { name: 'Spring Boot', icon: <Code />, color: 'bg-green-500' },
    { name: 'Git', icon: <Code />, color: 'bg-orange-600' },
  ];

  const projects = [
    {
      title: 'Cloud Infrastructure Automation',
      description: 'Designed and implemented automated CI/CD pipelines using Jenkins, Docker, and Kubernetes, reducing deployment time by 70%.',
      technologies: ['Jenkins', 'Docker', 'Kubernetes', 'Terraform'],
      link: '#'
    },
    {
      title: 'Microservices Migration',
      description: 'Led the migration from monolithic architecture to microservices, improving system scalability and reducing maintenance costs.',
      technologies: ['Spring Boot', 'Docker', 'AWS', 'Kubernetes'],
      link: '#'
    },
    {
      title: 'Infrastructure as Code Implementation',
      description: 'Developed IaC solutions using Terraform and AWS CloudFormation, enabling consistent and repeatable infrastructure deployments.',
      technologies: ['Terraform', 'AWS', 'Git', 'Jenkins'],
      link: '#'
    }
  ];

  const certifications = [
    { name: 'AWS Certified DevOps Engineer - Professional', issuer: 'Amazon Web Services', year: '2024' },
    { name: 'Certified Kubernetes Administrator (CKA)', issuer: 'Cloud Native Computing Foundation', year: '2023' },
    { name: 'HashiCorp Certified: Terraform Associate', issuer: 'HashiCorp', year: '2023' }
  ];

  const education = [
    { degree: 'Master of Science in Computer Science', institution: 'University of Technology', year: '2020-2022' },
    { degree: 'Bachelor of Engineering in Software Engineering', institution: 'National Institute of Technology', year: '2016-2020' }
  ];
  
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen font-sans">
      {/* Header */}
      <header className="bg-gray-900 bg-opacity-90 border-b border-gray-800 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-blue-400">Dev<span className="text-white">Ops</span></div>
          
          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['home', 'projects', 'technologies', 'certifications', 'education', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-gray-400 hover:text-white transition-all duration-300 capitalize"
              >
                {item}
              </a>
            ))}
          </nav>
          
          {/* Mobile Navigation Button - simplified for single page */}
          <button className="md:hidden text-gray-400 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 pb-20">
        {/* Hero Section */}
        <section id="home" className="py-20">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
                <div className="relative rounded-full overflow-hidden w-64 h-64 border-4 border-gray-800">
                  <img 
                    src="/api/placeholder/400/400" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-white">John Doe</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-blue-400 mb-6">DevOps Engineer</h2>
              <p className="text-gray-400 mb-8 max-w-lg">
                Experienced DevOps Engineer with a proven track record of implementing efficient CI/CD pipelines, infrastructure automation, and cloud solutions to accelerate development workflows and enhance system reliability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a 
                  href="#projects"
                  className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  View Projects
                  <ChevronRight size={18} />
                </a>
                <a 
                  href="#contact"
                  className="bg-transparent border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  Contact Me
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16">
          <h2 className="text-3xl font-bold mb-2 text-center text-white">Projects</h2>
          <p className="text-gray-400 mb-10 text-center max-w-2xl mx-auto">
            Here are some of the key projects I've worked on throughout my career.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-3 py-1 bg-gray-700 text-blue-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link} 
                    className="text-blue-400 flex items-center hover:text-blue-300 transition-colors"
                  >
                    View Project <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies & Tools Section */}
        <section id="technologies" className="py-16 bg-gray-800 bg-opacity-50 rounded-2xl my-16 p-8">
          <h2 className="text-3xl font-bold mb-2 text-center text-white">Technologies & Tools</h2>
          <p className="text-gray-400 mb-10 text-center max-w-2xl mx-auto">
            My expertise spans a wide range of technologies, frameworks, and tools.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div 
                key={index} 
                className="group perspective"
              >
                <div className="relative h-40 preserve-3d transform transition-all duration-500 group-hover:rotate-y-180">
                  <div className="absolute backface-hidden w-full h-full bg-gray-800 rounded-xl overflow-hidden flex flex-col items-center justify-center p-4 border border-gray-700 group-hover:border-blue-500 transition-colors duration-300">
                    <div className={`w-16 h-16 ${tech.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {tech.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white">{tech.name}</h3>
                  </div>
                  <div className="absolute backface-hidden rotate-y-180 w-full h-full bg-gradient-to-br from-blue-900 to-purple-900 rounded-xl overflow-hidden flex items-center justify-center p-4 border border-blue-500">
                    <div className="text-center">
                      <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                      <p className="text-blue-200 text-sm">Advanced Proficiency</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Two Column Layout for Certifications and Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-16">
          {/* Certifications Section */}
          <section id="certifications" className="py-8">
            <h2 className="text-3xl font-bold mb-2 text-white">Certifications</h2>
            <p className="text-gray-400 mb-6">
              Professional certifications that validate my expertise in DevOps practices and technologies.
            </p>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/20 flex items-start"
                >
                  <div className="mr-4 mt-1">
                    <Award className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{cert.name}</h3>
                    <p className="text-gray-400">{cert.issuer}</p>
                    <p className="text-gray-500 text-sm">{cert.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section id="education" className="py-8">
            <h2 className="text-3xl font-bold mb-2 text-white">Education</h2>
            <p className="text-gray-400 mb-6">
              My academic background that forms the foundation of my technical expertise.
            </p>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div 
                  key={index} 
                  className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/20 flex items-start"
                >
                  <div className="mr-4 mt-1">
                    <Book className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{edu.degree}</h3>
                    <p className="text-gray-400">{edu.institution}</p>
                    <p className="text-gray-500 text-sm">{edu.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-gray-800 bg-opacity-50 rounded-2xl my-16 p-8">
          <h2 className="text-3xl font-bold mb-2 text-center text-white">Contact Me</h2>
          <p className="text-gray-400 mb-10 text-center max-w-2xl mx-auto">
            Feel free to reach out if you're interested in working together.
          </p>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 flex items-center">
                <Mail className="text-blue-400 mr-4" size={24} />
                <div>
                  <h3 className="text-sm text-gray-400 mb-1">Email</h3>
                  <p className="text-white">johndoe@example.com</p>
                </div>
              </div>
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 flex items-center">
                <Linkedin className="text-blue-400 mr-4" size={24} />
                <div>
                  <h3 className="text-sm text-gray-400 mb-1">LinkedIn</h3>
                  <p className="text-white">linkedin.com/in/johndoe</p>
                </div>
              </div>
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 flex items-center">
                {/* <GitHub className="text-blue-400 mr-4" size={24} /> */}
                <div>
                  <h3 className="text-sm text-gray-400 mb-1">GitHub</h3>
                  <p className="text-white">github.com/johndoe</p>
                </div>
              </div>
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 flex items-center">
                <User className="text-blue-400 mr-4" size={24} />
                <div>
                  <h3 className="text-sm text-gray-400 mb-1">Location</h3>
                  <p className="text-white">San Francisco, CA</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Send a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-400 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-400 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 w-full md:w-auto"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 py-8 border-t border-gray-700">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-xl font-bold text-blue-400 mb-4 md:mb-0">Dev<span className="text-white">Ops</span></div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                {/* <GitHub size={20} /> */}
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div className="mt-6 text-center text-gray-500 text-sm">
            © 2025 John Doe. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Custom styles for 3D effects */}
      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        
        .preserve-3d {
          transform-style: preserve-3d;
        }
        
        .backface-hidden {
          backface-visibility: hidden;
        }
        
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default PortfolioSinglePage;