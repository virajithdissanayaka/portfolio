import React, { useState, useEffect } from 'react';

const DevOpsPortfolio4 = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animatedItems, setAnimatedItems] = useState([]);

  useEffect(() => {
    // Animate elements when they come into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setAnimatedItems(prev => [...prev, entry.target.id]);
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('.animate-on-scroll').forEach(item => {
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  const isAnimated = (id) => animatedItems.includes(id);

  // Personal information
  const personalInfo = {
    name: "Alex Morgan",
    title: "Senior DevOps Engineer",
    location: "San Francisco, CA",
    email: "alex.morgan@example.com",
    github: "github.com/alexmorgandevops",
    linkedin: "linkedin.com/in/alexmorgandevops",
    about: "DevOps engineer with 6+ years of experience specializing in AWS, Kubernetes, and CI/CD pipeline optimization. Passionate about infrastructure automation, containerization, and creating scalable cloud solutions."
  };

  // Experience data
  const experiences = [
    {
      id: "exp1",
      company: "TechCloud Solutions",
      position: "Senior DevOps Engineer",
      period: "2021 - Present",
      description: "Lead a team of 5 DevOps engineers to implement and maintain CI/CD pipelines for 20+ microservices. Reduced deployment time by 70% and infrastructure costs by 35%.",
      technologies: ["Kubernetes", "Terraform", "AWS", "GitHub Actions", "Prometheus"]
    },
    {
      id: "exp2",
      company: "DataSphere Inc.",
      position: "DevOps Engineer",
      period: "2018 - 2021",
      description: "Designed and implemented container orchestration solutions using Kubernetes. Automated infrastructure provisioning with Terraform and AWS CloudFormation.",
      technologies: ["Docker", "Jenkins", "AWS", "Terraform", "Ansible"]
    },
    {
      id: "exp3",
      company: "Innovate Systems",
      position: "Systems Administrator",
      period: "2016 - 2018",
      description: "Managed on-premises infrastructure and initiated cloud migration projects. Implemented monitoring solutions and automated routine maintenance tasks.",
      technologies: ["Linux", "Bash", "Python", "Nagios", "VMware"]
    }
  ];

  // Projects data
  const projects = [
    {
      id: "proj1",
      title: "Kubernetes Cluster Autoscaler",
      description: "Implemented a custom Kubernetes autoscaling solution that reduced cloud costs by 40% while maintaining performance SLAs.",
      link: "https://github.com/alexmorgandevops/k8s-autoscaler",
      image: "/api/placeholder/500/300",
      technologies: ["Kubernetes", "Go", "Prometheus", "Grafana"]
    },
    {
      id: "proj2",
      title: "Infrastructure as Code Framework",
      description: "Developed a comprehensive IaC framework using Terraform modules and AWS CDK that enabled teams to deploy standardized infrastructure in minutes.",
      link: "https://github.com/alexmorgandevops/terraform-modules",
      image: "/api/placeholder/500/300",
      technologies: ["Terraform", "AWS CDK", "Python", "Git"]
    },
    {
      id: "proj3",
      title: "CI/CD Pipeline Optimizer",
      description: "Created a pipeline optimization tool that analyzes build patterns and suggests improvements, reducing average build times by 65%.",
      link: "https://github.com/alexmorgandevops/pipeline-optimizer",
      image: "/api/placeholder/500/300",
      technologies: ["GitHub Actions", "Node.js", "Docker", "PostgreSQL"]
    }
  ];

  // Certifications data
  const certifications = [
    {
      id: "cert1",
      name: "AWS Certified DevOps Engineer - Professional",
      issuer: "Amazon Web Services",
      date: "2022",
      image: "/api/placeholder/80/80"
    },
    {
      id: "cert2",
      name: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      date: "2021",
      image: "/api/placeholder/80/80"
    },
    {
      id: "cert3",
      name: "HashiCorp Certified Terraform Associate",
      issuer: "HashiCorp",
      date: "2020",
      image: "/api/placeholder/80/80"
    },
    {
      id: "cert4",
      name: "Red Hat Certified System Administrator",
      issuer: "Red Hat",
      date: "2018",
      image: "/api/placeholder/80/80"
    }
  ];

  // Skills data
  const skills = [
    { category: "Cloud Platforms", items: ["AWS", "GCP", "Azure"] },
    { category: "Container Orchestration", items: ["Kubernetes", "Docker Swarm", "ECS"] },
    { category: "CI/CD", items: ["Jenkins", "GitHub Actions", "CircleCI", "GitLab CI"] },
    { category: "IaC", items: ["Terraform", "CloudFormation", "Pulumi", "Ansible"] },
    { category: "Monitoring", items: ["Prometheus", "Grafana", "ELK Stack", "Datadog"] },
    { category: "Programming", items: ["Python", "Go", "Bash", "JavaScript", "HCL"] }
  ];

  // Education data
  const education = [
    {
      id: "edu1",
      degree: "MS in Computer Science",
      institution: "Stanford University",
      period: "2014 - 2016",
      description: "Specialized in Distributed Systems and Cloud Computing"
    },
    {
      id: "edu2",
      degree: "BS in Computer Engineering",
      institution: "University of California, Berkeley",
      period: "2010 - 2014",
      description: "Minor in Mathematics"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans">
      {/* Navigation */}
      <nav className="bg-gray-800 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-xl font-bold text-indigo-400">AM</span>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {['about', 'experience', 'projects', 'skills', 'certifications', 'education', 'contact'].map((item) => (
                    <button
                      key={item}
                      onClick={() => setActiveSection(item)}
                      className={`${
                        activeSection === item
                          ? 'bg-gray-700 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                      } px-3 py-2 rounded-md text-sm font-medium transition-all duration-200`}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a href="#" className="text-gray-300 hover:text-white p-1 rounded-full hover:bg-gray-700 transition-all">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white p-1 rounded-full hover:bg-gray-700 transition-all">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <div className="md:hidden">
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="bg-gray-700 p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 pb-3 px-2">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['about', 'experience', 'projects', 'skills', 'certifications', 'education', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setActiveSection(item);
                    setIsMenuOpen(false);
                  }}
                  className={`${
                    activeSection === item
                      ? 'bg-gray-700 text-white'
                      : 'text-gray-300 hover:bg-gray-600 hover:text-white'
                  } block px-3 py-2 rounded-md text-base font-medium w-full text-left`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      {activeSection === 'about' && (
        <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900">
          <div className="max-w-6xl mx-auto">
            <div className="md:flex md:items-center md:space-x-12">
              <div className="mb-8 md:mb-0 md:w-1/3 flex justify-center">
                <div className="relative w-48 h-48 md:w-64 md:h-64 overflow-hidden rounded-full border-4 border-indigo-500 shadow-lg animate-on-scroll" id="profile-image">
                  <img src="data:image/jpeg;base64,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" alt="Alex Morgan" className="object-cover w-full h-full" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-30"></div>
                </div>
              </div>
              <div className="md:w-2/3">
                <h1 className={`text-4xl md:text-5xl font-bold text-white mb-4 animate-on-scroll ${isAnimated('hero-title') ? 'animate-fade-in-right' : 'opacity-0'}`} id="hero-title">
                  {personalInfo.name}
                </h1>
                <h2 className={`text-2xl md:text-3xl font-medium text-indigo-400 mb-6 animate-on-scroll ${isAnimated('hero-subtitle') ? 'animate-fade-in-right delay-100' : 'opacity-0'}`} id="hero-subtitle">
                  {personalInfo.title}
                </h2>
                <p className={`text-lg text-gray-300 mb-8 max-w-2xl animate-on-scroll ${isAnimated('hero-description') ? 'animate-fade-in-up delay-200' : 'opacity-0'}`} id="hero-description">
                  {personalInfo.about}
                </p>
                <div className={`flex flex-wrap gap-4 animate-on-scroll ${isAnimated('hero-cta') ? 'animate-fade-in-up delay-300' : 'opacity-0'}`} id="hero-cta">
                  <button 
                    onClick={() => setActiveSection('contact')}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium shadow-lg transform transition hover:scale-105"
                  >
                    Contact Me
                  </button>
                  <button 
                    onClick={() => setActiveSection('projects')}
                    className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium shadow-lg transform transition hover:scale-105"
                  >
                    View Projects
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Experience Section */}
      {activeSection === 'experience' && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 border-b border-gray-700 pb-3">Professional Experience</h2>
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={exp.id} 
                  className={`bg-gray-800 rounded-lg p-6 shadow-lg relative overflow-hidden animate-on-scroll ${isAnimated(exp.id) ? 'animate-fade-in-up' : 'opacity-0'}`}
                  id={exp.id}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="absolute top-0 left-0 w-2 h-full bg-indigo-500"></div>
                  <div className="md:flex md:items-start">
                    <div className="md:w-1/4 mb-4 md:mb-0">
                      <h3 className="text-xl font-semibold text-indigo-400">{exp.company}</h3>
                      <p className="text-gray-400">{exp.period}</p>
                    </div>
                    <div className="md:w-3/4">
                      <h4 className="text-xl font-semibold text-white mb-3">{exp.position}</h4>
                      <p className="text-gray-300 mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span key={tech} className="bg-gray-700 text-indigo-300 px-3 py-1 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Projects Section */}
      {activeSection === 'projects' && (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 border-b border-gray-700 pb-3">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={project.id} 
                  className={`bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl animate-on-scroll ${isAnimated(project.id) ? 'animate-fade-in-up' : 'opacity-0'}`}
                  id={project.id}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="bg-gray-700 text-indigo-300 px-2 py-1 rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center text-indigo-400 hover:text-indigo-300"
                    >
                      View Project
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Skills Section */}
      {activeSection === 'skills' && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 border-b border-gray-700 pb-3">Skills & Technologies</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skillGroup, index) => (
                <div 
                  key={skillGroup.category} 
                  className={`bg-gray-800 rounded-lg p-6 shadow-lg animate-on-scroll ${isAnimated(`skill-${index}`) ? 'animate-fade-in-up' : 'opacity-0'}`}
                  id={`skill-${index}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-xl font-semibold text-indigo-400 mb-4">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span key={skill} className="bg-gray-700 text-white px-3 py-1 rounded-md text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Certifications Section */}
      {activeSection === 'certifications' && (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 border-b border-gray-700 pb-3">Certifications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div 
                  key={cert.id} 
                  className={`bg-gray-800 rounded-lg p-6 shadow-lg flex items-center animate-on-scroll ${isAnimated(cert.id) ? 'animate-fade-in-left' : 'opacity-0'}`}
                  id={cert.id}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <img src={cert.image} alt={cert.name} className="w-16 h-16 mr-4 object-contain" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{cert.name}</h3>
                    <p className="text-gray-400">{cert.issuer} - {cert.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Education Section */}
      {activeSection === 'education' && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 border-b border-gray-700 pb-3">Education</h2>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div 
                  key={edu.id} 
                  className={`bg-gray-800 rounded-lg p-6 shadow-lg animate-on-scroll ${isAnimated(edu.id) ? 'animate-fade-in-up' : 'opacity-0'}`}
                  id={edu.id}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="md:flex md:items-start">
                    <div className="md:w-1/4 mb-4 md:mb-0">
                      <h3 className="text-xl font-semibold text-indigo-400">{edu.institution}</h3>
                      <p className="text-gray-400">{edu.period}</p>
                    </div>
                    <div className="md:w-3/4">
                      <h4 className="text-xl font-semibold text-white mb-3">{edu.degree}</h4>
                      <p className="text-gray-300">{edu.description}</p>
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
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 border-b border-gray-700 pb-3">Get In Touch</h2>
            <div className="lg:flex lg:space-x-12">
              <div className="lg:w-1/2 mb-10 lg:mb-0">
                <div className={`mb-8 animate-on-scroll ${isAnimated('contact-info') ? 'animate-fade-in-left' : 'opacity-0'}`} id="contact-info">
                  <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="bg-gray-700 p-3 rounded-full mr-4">
                        <svg className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Email</p>
                        <p className="text-lg text-white">{personalInfo.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-gray-700 p-3 rounded-full mr-4">
                        <svg className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Location</p>
                        <p className="text-lg text-white">{personalInfo.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-gray-700 p-3 rounded-full mr-4">
                        <svg className="h-6 w-6 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921 */}
    </div>
  );
}
export default DevOpsPortfolio4;