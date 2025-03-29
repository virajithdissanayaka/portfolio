import React, { useState, useEffect } from 'react';

const DevOpsPortfolio3 = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolling, setIsScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(window.scrollTimeout);
      window.scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionClick = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
  };

  const technologies = [
    { name: 'Docker', level: 90 },
    { name: 'Kubernetes', level: 85 },
    { name: 'AWS', level: 88 },
    { name: 'Terraform', level: 80 },
    { name: 'Jenkins', level: 85 },
    { name: 'Git', level: 95 },
    { name: 'React', level: 85 },
    { name: 'Spring Boot', level: 75 },
    { name: 'MongoDB', level: 70 },
    { name: 'Prometheus', level: 80 },
    { name: 'Grafana', level: 85 },
  ];

  const projects = [
    {
      title: 'Cloud Migration Framework',
      description: 'Developed a comprehensive framework for migrating legacy applications to AWS cloud infrastructure, reducing deployment time by 60%.',
      tech: ['AWS', 'Terraform', 'Docker', 'Jenkins'],
      link: '#'
    },
    {
      title: 'Kubernetes Monitoring Solution',
      description: 'Built a custom monitoring solution for Kubernetes clusters using Prometheus, Grafana, and alerting tools.',
      tech: ['Kubernetes', 'Prometheus', 'Grafana', 'Python'],
      link: '#'
    },
    {
      title: 'CI/CD Pipeline Automation',
      description: 'Automated the entire software delivery pipeline, enabling continuous deployment with zero-downtime updates.',
      tech: ['Jenkins', 'Docker', 'Kubernetes', 'GitOps'],
      link: '#'
    },
    {
      title: 'Infrastructure as Code Platform',
      description: 'Created a scalable IaC platform for managing multi-cloud infrastructure across development, staging, and production environments.',
      tech: ['Terraform', 'AWS', 'Azure', 'Ansible'],
      link: '#'
    }
  ];

  const certifications = [
    { name: 'AWS Certified DevOps Engineer - Professional', issuer: 'Amazon Web Services', date: '2024' },
    { name: 'Certified Kubernetes Administrator (CKA)', issuer: 'Cloud Native Computing Foundation', date: '2023' },
    { name: 'Terraform Certified Associate', issuer: 'HashiCorp', date: '2023' },
    { name: 'Docker Certified Associate', issuer: 'Docker', date: '2022' }
  ];

  const education = [
    { degree: 'Master of Science in Cloud Computing', institution: 'University of Technology', year: '2020-2022' },
    { degree: 'Bachelor of Engineering in Computer Science', institution: 'State University', year: '2016-2020' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolling ? 'bg-gray-900 shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              DevOps Engineer
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-gray-200 hover:text-white focus:outline-none"
              >
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  {menuOpen ? (
                    <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                  ) : (
                    <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                  )}
                </svg>
              </button>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => handleSectionClick('home')}
                className={`text-lg transition-colors duration-300 ${activeSection === 'home' ? 'text-blue-400' : 'text-gray-400 hover:text-white'}`}
              >
                Home
              </button>
              <button 
                onClick={() => handleSectionClick('projects')}
                className={`text-lg transition-colors duration-300 ${activeSection === 'projects' ? 'text-blue-400' : 'text-gray-400 hover:text-white'}`}
              >
                Projects
              </button>
              <button 
                onClick={() => handleSectionClick('tech')}
                className={`text-lg transition-colors duration-300 ${activeSection === 'tech' ? 'text-blue-400' : 'text-gray-400 hover:text-white'}`}
              >
                Technologies
              </button>
              <button 
                onClick={() => handleSectionClick('certifications')}
                className={`text-lg transition-colors duration-300 ${activeSection === 'certifications' ? 'text-blue-400' : 'text-gray-400 hover:text-white'}`}
              >
                Certifications
              </button>
              <button 
                onClick={() => handleSectionClick('education')}
                className={`text-lg transition-colors duration-300 ${activeSection === 'education' ? 'text-blue-400' : 'text-gray-400 hover:text-white'}`}
              >
                Education
              </button>
              <button 
                onClick={() => handleSectionClick('contact')}
                className={`text-lg transition-colors duration-300 ${activeSection === 'contact' ? 'text-blue-400' : 'text-gray-400 hover:text-white'}`}
              >
                Contact
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'} bg-gray-800 shadow-xl`}>
          <div className="px-6 pt-2 pb-4 space-y-2">
            <button 
              onClick={() => handleSectionClick('home')}
              className={`block py-2 w-full text-left ${activeSection === 'home' ? 'text-blue-400' : 'text-gray-300 hover:text-white'}`}
            >
              Home
            </button>
            <button 
              onClick={() => handleSectionClick('projects')}
              className={`block py-2 w-full text-left ${activeSection === 'projects' ? 'text-blue-400' : 'text-gray-300 hover:text-white'}`}
            >
              Projects
            </button>
            <button 
              onClick={() => handleSectionClick('tech')}
              className={`block py-2 w-full text-left ${activeSection === 'tech' ? 'text-blue-400' : 'text-gray-300 hover:text-white'}`}
            >
              Technologies
            </button>
            <button 
              onClick={() => handleSectionClick('certifications')}
              className={`block py-2 w-full text-left ${activeSection === 'certifications' ? 'text-blue-400' : 'text-gray-300 hover:text-white'}`}
            >
              Certifications
            </button>
            <button 
              onClick={() => handleSectionClick('education')}
              className={`block py-2 w-full text-left ${activeSection === 'education' ? 'text-blue-400' : 'text-gray-300 hover:text-white'}`}
            >
              Education
            </button>
            <button 
              onClick={() => handleSectionClick('contact')}
              className={`block py-2 w-full text-left ${activeSection === 'contact' ? 'text-blue-400' : 'text-gray-300 hover:text-white'}`}
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Hero section */}
      {activeSection === 'home' && (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black"></div>
          <div className="absolute inset-0 z-10 bg-[url('/api/placeholder/400/400')] bg-repeat opacity-5"></div>
          
          <div className="container mx-auto px-6 z-20">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  <span className="text-white">Transforming </span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                    DevOps
                  </span>
                  <span className="text-white"> into</span>
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-400">
                    Excellence
                  </span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Specializing in cloud infrastructure, CI/CD pipelines, and automated deployment solutions that scale with your business needs.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => handleSectionClick('projects')}
                    className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    View Projects
                  </button>
                  <button
                    onClick={() => handleSectionClick('contact')}
                    className="px-8 py-3 bg-gray-800 text-white font-medium rounded-lg border border-gray-700 hover:bg-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Contact Me
                  </button>
                </div>
              </div>
              
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl shadow-blue-500/20 animate-pulse">
                  <img 
                    src="/api/placeholder/400/400" 
                    alt="DevOps Engineer" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
            <button
              onClick={() => handleSectionClick('projects')}
              className="text-gray-400 hover:text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </button>
          </div>
        </section>
      )}

      {/* Projects Section */}
      {activeSection === 'projects' && (
        <section className="min-h-screen pt-24 pb-16 px-6">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-3xl">
              A showcase of my key projects demonstrating expertise in DevOps, infrastructure automation, and cloud technologies.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-700"
                >
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 text-sm bg-gray-700 text-blue-300 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a 
                      href={project.link}
                      className="inline-block px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Technologies Section */}
      {activeSection === 'tech' && (
        <section className="min-h-screen pt-24 pb-16 px-6 bg-gray-900">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Technologies & Tools
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-3xl">
              The stack I use to build robust, scalable, and efficient infrastructure and deployment pipelines.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {technologies.map((tech, index) => (
                <div 
                  key={index}
                  className="relative group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-pulse"></div>
                  <div className="relative flex flex-col items-center p-6 bg-gray-800 rounded-2xl overflow-hidden hover:bg-gray-700 transition-all duration-300">
                    <div className="w-20 h-20 mb-4 rounded-full bg-gray-700 flex items-center justify-center shadow-lg group-hover:shadow-blue-500/20 transition-all duration-300">
                      <span className="text-2xl text-blue-400 group-hover:text-blue-300">{tech.name.charAt(0)}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-300 transition-colors duration-300">{tech.name}</h3>
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                        style={{ width: `${tech.level}%`, transition: 'width 1s ease-in-out' }}
                      ></div>
                    </div>
                    <span className="mt-2 text-sm text-gray-400">{tech.level}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Certifications Section */}
      {activeSection === 'certifications' && (
        <section className="min-h-screen pt-24 pb-16 px-6">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Certifications
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-3xl">
              Professional certifications that validate my expertise in DevOps and cloud technologies.
            </p>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 hover:border-blue-500 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">{cert.name}</h3>
                      <p className="text-gray-400">{cert.issuer}</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <span className="px-4 py-2 bg-blue-900/40 text-blue-300 rounded-full text-sm font-medium">
                        {cert.date}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Education Section */}
      {activeSection === 'education' && (
        <section className="min-h-screen pt-24 pb-16 px-6">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Education
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-3xl">
              Academic background that has shaped my technical foundation and problem-solving approach.
            </p>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div 
                  key={index}
                  className="relative pl-8 md:pl-0"
                >
                  <div className="hidden md:block absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded"></div>
                  
                  <div className="md:ml-12 relative">
                    <div className="hidden md:block absolute -left-16 top-0 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
                    
                    <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700">
                      <span className="inline-block px-4 py-2 bg-blue-900/40 text-blue-300 rounded-full text-sm font-medium mb-4">
                        {edu.year}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">{edu.degree}</h3>
                      <p className="text-gray-400">{edu.institution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Section
      {activeSection === 'contact' && (
        <section className="min-h-screen pt-24 pb-16 px-6">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-3xl">
              Have a project in mind or want to discuss how I can help optimize your infrastructure? Reach out to me.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-700">
                <form className="space-y-6">
                  <div>
                    <label className="block text-gray-300 mb-2">Your Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-600"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-600"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2">Message</label>
                    <textarea 
                      className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-600 min-h-32"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              
              <div className="flex flex-col space-y-8">
                <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 hover:border-blue-500 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-4 text-white">Connect with Me</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109.608 0 1.1.497 1.1 1.109 0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/> */}
</div>
)
}
export default DevOpsPortfolio3;