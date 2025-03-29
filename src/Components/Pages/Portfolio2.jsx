import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Mail, Download, ChevronRight, User, Code, Award, Book, MapPin, Link, ExternalLink, ArrowRight } from 'lucide-react';  

import Virajith1 from './src/assets/Virajith1.png';  

const DevOpsPortfolio2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [animatedItems, setAnimatedItems] = useState([]);


  // Personal data
  const personalInfo = {
    name: "Virajith Dissanayaka",
    title: "Trainee DevOps Engineer",
    location: "Colombo, Sri Lanka",
    email: "dissanayakavirajith@icloud.com",
    github: "github.com/virajithdissanayaka",
    linkedin: "linkedin.com/in/virajith-dissanayaka-739a49166/",
  };

  const socialMedia = [
    { 
      name: "LinkedIn", 
      url: "https://www.linkedin.com/in/virajith-dissanayaka-739a49166/", 
      iconClass: "bx bxl-linkedin", 
      color: "#0A66C2" 
    },
    { 
      name: "GitHub", 
      url: "https://github.com/virajithdissanayaka", 
      iconClass: "bx bxl-github", 
      color: "#181717" 
    },
    { 
      name: "Instagram", 
      url: "https://www.instagram.com/virajith_dissanayaka?igsh=MTd3Z3hmeHp4c2kyMw%3D%3D&utm_source=qr", 
      iconClass: "bx bxl-instagram", 
      color: "#E4405F" 
    },
    // { 
    //   name: "Medium", 
    //   url: "https://medium.com/@dissnayakavirajith11", 
    //   iconClass: "bx bxl-medium", 
    //   color: "#000000" 
    // },
  ];

  // const technologies = [
  const technologies = [
    { name: "AWS", category: "Cloud", iconClass: "bx bxl-aws", color: "#FF9900" },
    { name: "GCP", category: "Cloud", iconClass: "/src/assets/gcp-color.svg", color: "#4285F4" },
    { name: "Docker", category: "DevOps", iconClass: "bx bxl-docker", color: "#2496ED" },
    { name: "Kubernetes", category: "DevOps", iconClass: "bx bxl-kubernetes", color: "#326CE5" },
    { name: "Jenkins", category: "DevOps", iconClass: "/src/assets/file-type-jenkins.svg", color: "#D33833" },
    { name: "GitHub Actions", category: "DevOps", iconClass: "bx bxl-github", color: "#2088FF" },
    { name: "Ansible", category: "DevOps", iconClass: "/src/assets/ansible.svg", color: "#EE0000" },
    { name: "Terraform", category: "Infrastructure", iconClass: "/src/assets/file-type-terraform.svg", color: "#7B42BC" },
    { name: "Spring Boot", category: "Backend", iconClass: "bx bxl-spring-boot", color: "#6DB33F" },
    { name: "React", category: "Frontend", iconClass: "bx bxl-react", color: "#61DAFB" },
    { name: "Node.js", category: "Backend", iconClass: "bx bxl-nodejs", color: "#339933" },
    { name: "MongoDB", category: "Database", iconClass: "bx bxl-mongodb", color: "#47A248" },
    { name: "PostgreSQL", category: "Database", iconClass: "bx bxl-postgresql", color: "#0064a5" },
    { name: "MySQL", category: "Database", iconClass: "/src/assets/mysql-original-wordmark.svg", color: "#00758F" },
    { name: "Git", category: "DevOps", iconClass: "bx bxl-git", color: "#F05032" },
    { name: "Java", category: "Language", iconClass: "/src/assets/java-original-wordmark.svg", color: "#EA2D2E" },
    { name: "Python", category: "Language", iconClass: "/src/assets/python.svg", color: "#306998" },
    { name: "Bash Script", category: "Language", iconClass: "bx bx-terminal", color: "#4EAA25" }
  ];

  // Project data
  const projects = [
    {
      title: 'Cloud Migration Framework',
      description: 'Automated migration of on-premise applications to AWS with zero downtime using Terraform and Ansible',
      technologies: ['AWS', 'Terraform', 'Ansible', 'Python'],
      link: '#',
      uiImage: "/src/assets/Cloud.jpg",
    },
    {
      title: 'Vehicle Service Station Management System',
      github: "https://github.com/orgs/Driveaze-3-rd-year-group-project/repositories",
      demo: "samarasinghe-demo",
      description: 'Comprehensive web and mobile system for vehicle service management, streamlining bookings, inventory, staff coordination, and customer interactions',
      technologies: ['React.js', 'Flutter', 'Spring Boot', 'PostgreSQL', 'AWS'],
      link: '#',
      uiImage: "/src/assets/Driveaze2.png",
      icon: "/src/assets/Driveaze.png"
    },
    // {
    //   title: 'Infrastructure as Code Platform',
    //   description: 'Developed reusable IaC modules for standardized infrastructure provisioning across multiple environments',
    //   technologies: ['Terraform', 'AWS', 'Python', 'GitHub Actions'],
    //   link: '#',
    //   uiImage: "/src/assets/IAC.png",
    // },
    {
      title: 'ඇක Hub - Student Collaboration Platform',
      github: "https://github.com/SaliyaBandara/aka-hub/",
      // demo: "akahub-demo",
      description: 'Comprehensive platform enhancing UCSC student experience with study material sharing, counselor connections, academic updates, anonymous voting, and event organization',
      technologies: ['PHP', 'jQuery', 'Python', 'MySQL', 'Apache', 'Nginx'],
      link: 'https://lnkd.in/gZYyvmsQ',
      uiImage: "/src/assets/akahubhome.jpg",
      icon: "/src/assets/AkaHub.png"
    },
  ];

  // Certifications data
  const certifications = [
    {
      name: "AWS Cloud Practitioner (CLF-C02)",
      issuer: "KodeKloud",
      year: "2025",
      credentialUrl: "https://www.kodekloud.com/certificate-verification/7299cc7d-1ad3-45eb-8e04-5adf64b18837",
      skills: ["AWS", "Cloud Computing", "Cloud Services", "Cloud Architecture"]
    },
    {
      name: "Certified Kubernetes Administrator (CKA)",
      issuer: "KodeKloud", 
      year: "2025",
      credentialUrl: "https://learn.kodekloud.com/certificate/dfc48fd3-1b59-4345-b867-f8e6651bf3a9",
      skills: ["Kubernetes Administration", "Cluster Management", "Container Orchestration", "Kubernetes Security", "Troubleshooting"]
    },
    {
      name: "Kubernetes and Cloud-Native Associate (KCNA)",
      issuer: "KodeKloud",
      year: "2025",
      credentialUrl: "https://www.kodekloud.com/certificate-verification/f694954a-c5a0-442e-b466-038efae465b1",
      skills: ["Kubernetes", "Cloud-Native", "Container Orchestration", "Microservices"]
    },
  ];

  // Education data
  const education = [
    {
        degree: "Trainee DevOps Engineer",
        institution: "Omobio (Pvt) Ltd",
        year: "2024 - Present",
        description: "Gained hands-on experience in server monitoring, Linux Bash scripting, AWS cloud services, Docker, Jenkins, and Kubernetes",
        logo: "/src/assets/omobio_pvt_ltd_logo.jpg", 
      },
      {
        degree: "BSc in Computer Science",
        institution: "University of Colombo School of Computing",
        year: "2022 - 2025",
        description: "Studied Computer Networks, Operating Systems, System and Network Administration, Cloud Technologies, and Information System Security.",
        logo: "/src/assets/ucsc.jpg"
      },      
      {
        degree: "GCE Advance Level",
        institution: "Rajapaksha Central Collage Weeraketiya",
        year: "2012 - 2020",
        description: "Studied in the Physical Science stream and achieved ABB in the first attempt: A in Chemistry, B in Combined Mathematics, and B in Physics.",
        logo: "/src/assets/RCC.jpg", 
      }
  ];

  const renderIcon = (tech) => {
    // Check if the icon path starts with "/" which indicates it's an SVG file path
    if (tech.iconClass.startsWith('/')) {
      return (
        <img 
          src={tech.iconClass} 
          alt={`${tech.name} icon`} 
          className="w-8 h-8" 
          draggable="false"
        />
      );
    } else {
      // For BoxIcons
      return <i className={`${tech.iconClass} text-3xl`} style={{ color: tech.color }}></i>;
    }
  };

  // Handle scroll and animations
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'projects', 'technologies', 'certifications', 'education'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(section);
            break;
          }
        }
      }

      // Animation for items as they come into view
      document.querySelectorAll('.animate-on-scroll').forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.85 && !animatedItems.includes(item.id)) {
          setAnimatedItems(prev => [...prev, item.id]);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [animatedItems]);

  // Navigation links
  const navLinks = [
    { name: 'About', icon: <i class="bx bx-user text-[16px]"></i>, section: 'hero' },
    { name: 'Experience', icon: <i class='bx bx-briefcase text-[16px]'></i>, section: 'experience' },
    { name: 'Projects', icon: <i class='bx bx-code-block text-[16px]' ></i>, section: 'projects' },
    { name: 'Technologies', icon: <i class='bx bx-wrench text-[16px]'></i>, section: 'technologies' },
    { name: 'Certifications', icon: <i class='bx bx-certification text-[16px]' ></i>, section: 'certifications' },
    
  ];
  

  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: ''
  });
  const formRef = useRef(null);
  
  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Your email address where you want to receive messages
    const recipientEmail = 'dissanayakavirajith@icloud.com'; // Replace with your actual email
    
    // Create the mailto link with the form data
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name}\n\n${formData.message}`)}`;
    
    // Save the form data before clearing
    const emailData = { ...formData };
    
    // Reset the form immediately
    setFormData({
      name: '',
      subject: '',
      message: ''
    });
    
    // Reset the HTML form elements
    if (formRef.current) {
      formRef.current.reset();
    }
    
    // Open email client with a very short delay to ensure UI update
    setTimeout(() => {
      window.open(mailtoLink, '_blank');
    }, 10);
  };

  return (
    <div className="relative min-h-screen font-sans text-gray-100">
      {/* Global Background - Applied to entire page */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black"></div>
      <div className="fixed inset-0 z-0 bg-[url('/api/placeholder/400/400')] bg-repeat opacity-5"></div>
           
      {/* Navigation - Updated to blend with background */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800/40 bg-transparent backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <a href="#" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Virajith Dissanayaka
          </a>

          {/* Desktop Navigation */}
          <div className="hidden space-x-8 md:flex">
            {navLinks.map(link => (
              <a
                key={link.section}
                href={`#${link.section}`}
                className={`flex items-center space-x-1 text-sm transition-colors hover:text-blue-400 ${
                  activeSection === link.section ? 'text-blue-400' : 'text-gray-300'
                }`}
              >
                {link.icon}
                <span>{link.name}</span>
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 bg-opacity-95 backdrop-blur-sm">
            <div className="px-4 py-2 space-y-1">
              {navLinks.map(link => (
                <a
                  key={link.section}
                  href={`#${link.section}`}
                  className={`block px-3 py-3 rounded-md flex items-center space-x-2 ${
                    activeSection === link.section ? 'bg-gray-700 text-blue-400' : 'text-gray-300 hover:bg-gray-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Glowing Stars */}
      {/* <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(20)].map((_, i) => {
          // Size between 0.3px and 1px
          const size = 0.3 + Math.random() * 0.7;
          const isBlue = Math.random() > 0.5;
          
          // Make glow proportional to star size
          const glowSize = size * 10; // Proportional glow
          
          return (
            <div 
              key={i} 
              className={`absolute rounded-full ${isBlue ? 'bg-blue-500' : 'bg-white'} animate-pulse`}
              style={{ 
                top: `${Math.random() * 100}%`, 
                left: `${Math.random() * 100}%`,
                width: `${size}px`,
                height: `${size}px`,
                boxShadow: `0 0 ${glowSize}px ${glowSize/3}px ${isBlue ? 'rgba(59, 130, 246, 0.7)' : 'rgba(255, 255, 255, 0.7)'}`, 
                animationDuration: `${3 + Math.random() * 2}s`, 
                animationDelay: `${Math.random() * 2}s` 
              }}
            ></div>
          );
        })}
      </div> */}

      {/* Floating particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(20)].map((_, i) => {
          // Size between 0.3px and 1px
          const size = 0.3 + Math.random() * 0.7;
          const isBlue = Math.random() > 0.5;
          
          // Make glow proportional to star size
          const glowSize = size * 10; // Proportional glow
          
          return (
            <div 
              key={i} 
              className={`absolute rounded-full ${isBlue ? 'bg-blue-500' : 'bg-white'} animate-float`}
              style={{ 
                width: `${size}px`,
                height: `${size}px`,
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                boxShadow: `0 0 ${glowSize}px ${glowSize/3}px ${isBlue ? 'rgba(59, 130, 246, 0.7)' : 'rgba(255, 255, 255, 0.7)'}`, 
                animationDelay: Math.random() * 5 + 's',
                animationDuration: Math.random() * 10 + 10 + 's' 
              }}
            ></div>
          );
        })}
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-24 pb-12">
        
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex flex-col justify-center pt-16 pb-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll" id="hero-text">
              <h1 className={`text-4xl md:text-6xl font-bold mb-4 ${animatedItems.includes('hero-text') ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  DevOps Engineer
                </span> 
                {/* <br />& Cloud Architect */}
                <br />& Fullstack Developer
              </h1>
              <p className={`text-gray-400 text-lg md:text-xl max-w-xl mb-8 ${animatedItems.includes('hero-text') ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
                Specializing in automation, CI/CD pipelines, and cloud infrastructure. 
                Building scalable, reliable, and secure systems that empower development teams.
              </p>
              <div className={`space-x-4 ${animatedItems.includes('hero-text') ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
                <a href="#projects" className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors">
                  View Projects
                  <ChevronRight size={20} className="ml-1" />
                </a>
                <a href="/src/assets/Virajith_Dissanayaka.pdf" className="inline-flex items-center px-6 py-3 border border-gray-700 hover:border-blue-400 hover:text-blue-400 rounded-md font-medium transition-all">
                  <Download size={20} className="mr-2" />
                  Resume
                </a>
              </div>
              
              <div className="flex space-x-5 mt-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                {socialMedia.slice(0, 5).map((platform) => (
                  <a 
                    key={platform.name}
                    href={platform.url} 
                    className="text-gray-400 hover:text-white transition-colors" 
                    aria-label={platform.name}
                  >
                    <i className={`${platform.iconClass} text-2xl`}></i>
                  </a>
                ))}
              </div>
            </div>
            {/* Right side - Profile photo */}
            <div className="animate-on-scroll flex justify-center" id="hero-image">
                <div className={`relative ${animatedItems.includes('hero-image') ? 'animate-fade-in-right' : 'opacity-0'}`}>
                  <div className="relative h-64 w-64 md:h-80 md:w-80">
                    <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-70 blur-xl"></div>
                    <div className="absolute inset-2 flex items-center justify-center overflow-hidden rounded-full border-4 border-blue-500 bg-gray-800/40 backdrop-blur-sm shadow-2xl shadow-blue-500/20">
                      <img 
                        src={Virajith1} 
                        alt="Profile Picture" 
                        className="object-cover w-full h-full" 
                        draggable="false" 
                        onContextMenu={(e) => e.preventDefault()}  
                      />
                    </div>
                  </div>
                  <div className="absolute -left-6 -right-6 -top-6 -bottom-6 -z-10 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-xl"></div>
                </div>
              </div>
          </div>
        </section>


        {/* Education Section */}
        <section id="experience" className="py-24">
          <div className="mb-16 animate-on-scroll" id="edu-header">
            {/* <div className={`w-10 h-1 bg-blue-600 mr-4 ${animatedItems.includes('edu-header') ? 'animate-width' : 'w-0'}`}></div> */}
            <div className="flex items-center mb-4">
              <h2 className={`text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600 ${animatedItems.includes('edu-header') ? 'animate-fade-in-right1' : 'opacity-0'}`}>
                Education & Experience
              </h2>
            </div>
           
          </div>

          {/* Reddit-style timeline with middle dotted line */}
          <div className="relative">
            {/* Center dotted line that stops at the last dot */}
            <div 
              className="absolute left-1/2 top-0 w-0 border-dashed border-l-2 border-gray-600 -ml-px"
              style={{ 
                height: education.length > 0 ? 'calc(100% - 100px)' : '0', 
                // Line ends before the last item's bottom margin
              }}
            ></div>

            <div className="space-y-16">
              {education.map((edu, index) => (
                <div 
                  key={index}
                  className="animate-on-scroll relative"
                  id={`edu-${index}`}
                >
                  {/* Timeline node */}
                  <div className={`absolute left-1/2 top-0 -ml-2 w-4 h-4 rounded-full bg-blue-600 z-10 ${
                    animatedItems.includes(`edu-${index}`) ? 'animate-ping-once' : ''
                  }`}></div>

                  <div className="flex flex-col md:flex-row items-center">
                    {/* Left side (even index) or right side (odd index) */}
                    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 order-1 md:order-2'}`}>
                      <div 
                        className={`bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all ${
                          animatedItems.includes(`edu-${index}`) ? 'animate-fade-in-up' : 'opacity-0'
                        }`}
                        style={{ animationDelay: `${0.1 * index}s` }}
                      >
                        <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                        <p className="text-blue-400 mb-2">{edu.institution}</p>
                        <p className="text-gray-400 text-sm mb-4">{edu.year}</p>
                        <p className="text-gray-300">{edu.description}</p>
                      </div>
                    </div>

                    {/* Logo in the opposite side */}
                    <div className={`w-full md:w-1/2 flex ${index % 2 === 0 ? 'md:pl-12 md:justify-start order-2 md:order-1' : 'md:pr-12 md:justify-end'}`}>
                     
                      <div 
                        className={`w-24 h-24 rounded-full bg-gray-800 p-2 border border-gray-700 flex items-center justify-center overflow-hidden relative ${
                          animatedItems.includes(`edu-${index}`) ? 'animate-fade-in' : 'opacity-0'
                        }`}
                        style={{ animationDelay: `${0.2 * index}s` }}
                      >
                        <img 
                          src={edu.logo} 
                          alt={`${edu.institution} logo`} 
                          className="absolute inset-0 w-full h-full object-cover"
                          draggable="false"
                          onContextMenu={(e) => e.preventDefault()}
                        />
                      </div>
                    </div>
                  

                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 relative">
          <div className="container mx-auto px-4">
            <div className="mb-20 animate-on-scroll" id="projects-header">
              <div className="flex items-center mb-4">
                {/* <div className={`w-10 h-1 bg-blue-600 mr-4 ${animatedItems.includes('projects-header') ? 'animate-width' : 'w-0'}`}></div> */}
                <h2 className={`text-4xl md:text-5xl font-bold pb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600 ${animatedItems.includes('projects-header') ? 'animate-fade-in-right1' : 'opacity-0'}`}>
                  Featured Projects
                </h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className={`group rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500 transition-all duration-500 animate-on-scroll backdrop-blur-sm bg-gray-800/80 shadow-xl hover:shadow-blue-900/20 hover:shadow-2xl hover:-translate-y-2`}
                  id={`project-${index}`}
                >
                  <div 
                    className={`h-56 bg-gradient-to-br from-blue-900 via-indigo-900 to-gray-900 relative ${
                      animatedItems.includes(`project-${index}`) ? 'animate-fade-in' : 'opacity-0'
                    }`} 
                    style={{ animationDelay: `${0.1 * index}s` }}
                  >
                    {/* Project visual overlay */}
                    <div className="absolute inset-0 bg-gray-900 opacity-40 group-hover:opacity-10 transition-opacity duration-500"></div>
                    
                   

                    {/* Project icon or image placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center p-6 z-10 bg-gradient-to-b from-transparent via-transparent to-gray-900/80">
                      {/* Background UI image with blur effect if available */}
                      {project.uiImage && (
                        <div className="absolute inset-0 overflow-hidden">
                          <img 
                            src={project.uiImage} 
                            alt="" 
                            className="w-full h-full object-cover opacity-40 blur-[2px]"
                            aria-hidden="true"
                          />
                          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 via-gray-900/60 to-gray-900/80"></div>
                        </div>
                      )}
                      
                      <div className="w-20 h-20 rounded-full bg-blue-600/20 backdrop-blur-sm flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500 relative z-10">
                        {project.icon ? (
                          <img 
                            src={project.icon} 
                            alt={`${project.title} logo`} 
                            className="w-20 h-20 object-contain rounded-full p-2"
                          />
                        ) : (
                          <i class='bx bx-code-block text-[36px]'></i>
                        )}
                      </div>
                    </div>
                                        
                    {/* Project title overlay with GitHub icon */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10 flex justify-between items-center">
                      <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                        {project.title}
                      </h3>
                      
                      {project.github && (
                        <a 
                          href={project.github} 
                          className="text-gray-400 hover:text-white p-3 bg-gray-800/60 rounded-full hover:bg-blue-900/60 transition-all duration-300 transform hover:scale-110"
                          aria-label="View GitHub repository"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <div 
                    className={`p-8 ${
                      animatedItems.includes(`project-${index}`) ? 'animate-fade-in-up' : 'opacity-0'
                    }`} 
                    style={{ animationDelay: `${0.2 + 0.1 * index}s` }}
                  >
                    <p className="text-gray-300 mb-6 line-clamp-3">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 bg-gray-700/60 hover:bg-blue-800/40 rounded-full text-xs font-medium text-gray-300 hover:text-blue-200 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <a 
                        href={project.link} 
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium group/link"
                      >
                        View Details
                        <ChevronRight size={16} className="ml-1 transform group-hover/link:translate-x-1.5 transition-transform duration-300" />
                      </a>
                      
                      {/* Live Demo Link if available */}
                      {project.demo && (
                        <a 
                          href={project.demo} 
                          className="inline-flex items-center text-gray-300 hover:text-blue-300 transition-colors duration-300 text-sm"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={14} className="mr-1" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            
            <div className={`mt-20 text-center ${animatedItems.includes('projects-footer') ? 'animate-fade-in-up' : ''}`} id="projects-footer">
            <a 
                href="/projects" 
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full text-white font-medium hover:from-blue-500 hover:to-indigo-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 group"
              >
                View All Projects
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </a>
              
            </div>
          </div>
        </section>

        <section id="technologies" className="py-24 relative overflow-hidden">
            {/* Technologies heading with animation */}
            <div className="container mx-auto px-4">
              <div className="mb-20 animate-on-scroll relative z-10" id="tech-header">
                <div className="flex items-center mb-4">
                  {/* <div className={`w-10 h-1 bg-blue-600 mr-4 ${animatedItems.includes('projects-header') ? 'animate-width' : 'w-0'}`}></div> */}
                  <h2 className={`text-4xl md:text-5xl font-bold bg-clip-text pb-2 text-transparent bg-gradient-to-r from-blue-400 to-indigo-600 ${animatedItems.includes('projects-header') ? 'animate-fade-in-right1' : 'opacity-0'}`}>
                    Technologies & Tools
                  </h2>
                </div>
              </div>

              {/* 3D Tech Icons Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-10">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="animate-on-scroll group"
                    id={`tech-${index}`}
                  >
                    <div
                      className={`flex flex-col items-center ${
                        animatedItems.includes(`tech-${index}`) ? 'animate-float1' : 'opacity-0'
                      }`}
                      style={{ animationDelay: `${0.1 * index}s` }}
                    >
                      <div className="flex flex-col items-center">
                        {/* 3D Icon Container */}
                        <div className="relative w-24 h-24 flex items-center justify-center group-hover:transform group-hover:rotate-y-12 transition-all duration-700">
                          {/* Shadow beneath */}
                          <div className="absolute bottom-0 w-16 h-2 bg-blue-600/20 rounded-full blur-md transform translate-y-2 group-hover:bg-blue-600/40 group-hover:w-20 transition-all duration-500"></div>
                          
                          {/* Icon with 3D effect */}
                          <div className="relative w-16 h-16 flex items-center justify-center">
                            {/* 3D base with lighting effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 rounded-full border border-gray-700 group-hover:border-blue-500 shadow-xl transform perspective-800 group-hover:rotateY-12 transition-all duration-500"></div>
                            
                            {/* Icon wrapper with floating animation */}
                            <div className="relative z-10 animate-icon-float transition-transform duration-700 group-hover:scale-110">
                              {renderIcon(tech)}
                            </div>
                          </div>
                        </div>
                        
                        {/* Name and category with explicit opacity */}
                        <div className="text-center mt-2 opacity-100">
                          <h3 className="font-medium text-white text-lg group-hover:text-blue-400 transition-colors duration-300">{tech.name}</h3>
                          <p className="text-xs text-blue-300 mt-1">{tech.category}</p>
                        </div>
                      </div>
                    </div>  
                  </div>
                ))}
              </div>
            </div>
            {/* CSS Animations */}
            <style jsx>{`
              @keyframes fadeInUp {
                from {
                  opacity: 0;
                  transform: translateY(20px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
              
              @keyframes width {
                from { width: 0; }
                to { width: 80px; }
              }
              
              @keyframes float1 {
                0% {
                  opacity: 0;
                  transform: translateY(20px);
                }
                60% {
                  opacity: 1;
                  transform: translateY(-10px);
                }
                80% {
                  transform: translateY(5px);
                }
                100% {
                  transform: translateY(0);
                }
              }
              
              @keyframes iconFloat {
                0%, 100% {
                  transform: translateY(0);
                }
                50% {
                  transform: translateY(-4px);
                }
              }
              
              .animate-fade-in-up {
                animation: fadeInUp 0.8s ease forwards;
              }
              
              .animate-width {
                animation: width 0.8s ease forwards;
              }
              
              .animate-float1 {
                animation: float1 1s ease forwards;
              }
              
              .animate-icon-float {
                animation: iconFloat 3s ease-in-out infinite;
              }
              
              .delay-100 {
                animation-delay: 0.1s;
              }
              
              .perspective-800 {
                perspective: 800px;
              }
              
              .group-hover\\:rotateY-12:hover {
                transform: rotateY(12deg);
              }
              
              .group-hover\\:rotate-y-12:hover {
                transform: rotateY(12deg);
              }
            `}</style>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-24 bg-gradient-to-b from-gray-900 to-gray-950">
          <div className="container mx-auto px-6">
            <div className="mb-16 animate-on-scroll" id="cert-header">
              <div className="flex items-center mb-4">
                {/* <div className={`w-10 h-1 bg-blue-600 mr-4 ${animatedItems.includes('projects-header') ? 'animate-width' : 'w-0'}`}></div> */}
                <h2 className={`text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600 ${animatedItems.includes('cert-header') ? 'animate-fade-in-right1' : 'opacity-0'}`}>
                    Certifications & Credentials
                </h2>
              </div>
              <div className={`w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full ${animatedItems.includes('cert-header') ? 'animate-width' : 'w-0'}`}></div>
              {/* <p className={`mt-6 text-gray-400 max-w-2xl ${animatedItems.includes('cert-header') ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
                Professional certifications that validate my expertise and commitment to continuous learning.
              </p> */}
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="animate-on-scroll"
                  id={`cert-${index}`}
                >
                  <a 
                    href={cert.credentialUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    <div
                      className={`group h-full bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 ${
                        animatedItems.includes(`cert-${index}`) ? 'animate-fade-in-up' : 'opacity-0'
                      }`}
                      style={{ animationDelay: `${0.1 * index}s` }}
                    >
                      <div className="flex items-start">
                        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-3 mr-4 transform transition-transform group-hover:scale-110">
                          {cert.icon || <Award className="w-6 h-6" />}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{cert.name}</h3>
                          <p className="text-gray-400 text-sm mb-3">
                            {cert.issuer} · {cert.year}
                          </p>
                          {cert.skills && (
                            <div className="flex flex-wrap gap-2 mt-2">
                              {cert.skills.map((skill, skillIndex) => (
                                <span key={skillIndex} className="text-xs px-2 py-1 bg-gray-700 rounded-full text-gray-300">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          )}
                          <div className="mt-4 flex items-center text-blue-400 text-sm font-medium">
                            <span>View Credential</span>
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative border-t border-gray-800/40 bg-transparent backdrop-blur-sm py-12">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800/30 via-gray-900/30 to-black/30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="animate-on-scroll" id="contact-heading">
            <h2 className={`text-3xl md:text-5xl font-bold mb-8 ${animatedItems.includes('contact-heading') ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Let's Connect
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="animate-on-scroll" id="contact-info">
              <div className={`mb-12 ${animatedItems.includes('contact-info') ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
                <p className="text-gray-400 mb-8">
                  Looking for a DevOps engineer or Fullstack Developer for your next project? 
                  I'm currently available for freelance work and full-time positions.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-md bg-gray-800/60 text-blue-400">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Location</h4>
                      <p className="text-gray-400">{personalInfo.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-md bg-gray-800/60 text-blue-400">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Email</h4>
                      <a href={`mailto:${personalInfo.email}`} className="text-gray-400 hover:text-blue-400 transition-colors">
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-md bg-gray-800/60 text-blue-400">
                      <Link size={24} />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Profiles</h4>
                      <div className="flex space-x-3 mt-1">
                        <a href={`https://${personalInfo.github}`} className="text-gray-400 hover:text-blue-400 transition-colors">
                          GitHub
                        </a>
                        <span className="text-gray-600">•</span>
                        <a href={`https://${personalInfo.linkedin}`} className="text-gray-400 hover:text-blue-400 transition-colors">
                          LinkedIn
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-on-scroll" id="contact-form">
              <div className={`bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700 p-6 ${animatedItems.includes('contact-form') ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
                <h3 className="text-2xl font-semibold mb-4">Send Message</h3>
                
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Your Name</label>
                    <input
                      type="Name"
                      id="name"
                      className="w-full bg-gray-800/60 border border-gray-700 rounded-md px-4 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-1">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full bg-gray-800/60 border border-gray-700 rounded-md px-4 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Subject of your message"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                    <textarea
                      id="message"
                      rows="5"
                      className="w-full bg-gray-800/60 border border-gray-700 rounded-md px-4 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Your message..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-md font-medium transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
          
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Virajith Dissanayaka. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              {socialMedia.slice(0, 4).map((platform) => (
                <a 
                  key={platform.name}
                  href={platform.url} 
                  className="text-gray-400 hover:text-blue-400 transition-colors" 
                  aria-label={platform.name}
                >
                  <i className={`${platform.iconClass} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes animateWidth {
          from {
            width: 0;
          }
          to {
            width: 5rem;
          }
        }
        
        @keyframes pingOnce {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          70% {
            transform: scale(2);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

         @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-15px) translateX(10px); }
          50% { transform: translateY(-5px) translateX(-15px); }
          75% { transform: translateY(10px) translateX(5px); }
        }
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-fade-in-right {
          animation: fadeInRight 1.5s ease-out forwards;
        }

        .animate-fade-in-right1 {
          animation: fadeInRight 0.8s ease-out forwards;
        }
        
        .animate-width {
          animation: animateWidth 0.8s ease-out forwards;
        }
        
        .animate-ping-once {
          animation: pingOnce 1s ease-out forwards;
        }
        
        .bg-pattern {
          background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }


        
      `}</style>
      
    </div>
  );
};

export default DevOpsPortfolio2;


