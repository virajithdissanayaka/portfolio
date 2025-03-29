// import React, { useState, useEffect } from 'react';
// import { Menu, X, Mail, Download, ChevronRight, User, Code, Award, Book } from 'lucide-react';

// const DevOpsPortfolio5 = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState('hero');
//   const [animatedItems, setAnimatedItems] = useState([]);

//   // Technologies data with placeholder images
//   const technologies = [
//     { name: 'Docker', category: 'DevOps' },
//     { name: 'Kubernetes', category: 'DevOps' },
//     { name: 'AWS', category: 'Cloud' },
//     { name: 'Jenkins', category: 'CI/CD' },
//     { name: 'Terraform', category: 'IaC' },
//     { name: 'Ansible', category: 'Automation' },
//     { name: 'React', category: 'Frontend' },
//     { name: 'Spring Boot', category: 'Backend' },
//     { name: 'Git', category: 'Version Control' },
//     { name: 'Prometheus', category: 'Monitoring' },
//     { name: 'Grafana', category: 'Monitoring' },
//     { name: 'Python', category: 'Scripting' }
//   ];

//   // Project data
//   const projects = [
//     {
//       title: 'Cloud Migration Framework',
//       description: 'Automated migration of on-premise applications to AWS with zero downtime using Terraform and Ansible',
//       technologies: ['AWS', 'Terraform', 'Ansible', 'Python'],
//       link: '#'
//     },
//     {
//       title: 'Microservices CI/CD Pipeline',
//       description: 'Built scalable pipeline for 20+ microservices with automated testing, canary deployments and monitoring',
//       technologies: ['Jenkins', 'Docker', 'Kubernetes', 'Prometheus'],
//       link: '#'
//     },
//     {
//       title: 'Infrastructure as Code Platform',
//       description: 'Developed reusable IaC modules for standardized infrastructure provisioning across multiple environments',
//       technologies: ['Terraform', 'AWS', 'Python', 'GitHub Actions'],
//       link: '#'
//     }
//   ];

//   // Certifications data
//   const certifications = [
//     { name: 'AWS Certified DevOps Engineer - Professional', issuer: 'Amazon Web Services', year: '2024' },
//     { name: 'Certified Kubernetes Administrator (CKA)', issuer: 'Cloud Native Computing Foundation', year: '2023' },
//     { name: 'HashiCorp Certified: Terraform Associate', issuer: 'HashiCorp', year: '2023' },
//     { name: 'Docker Certified Associate', issuer: 'Docker', year: '2022' }
//   ];

//   // Education data
//   const education = [
//     {
//         degree: "Master of Computer Science",
//         institution: "Stanford University",
//         year: "2018 - 2020",
//         description: "Specialized in Artificial Intelligence and Machine Learning. Completed thesis on neural network optimization techniques.",
//         logo: "https://avatars.githubusercontent.com/u/6937151?s=200&v=4", // Replace with your actual logo path
//       },
//       {
//         degree: "Bachelor of Engineering",
//         institution: "MIT",
//         year: "2014 - 2018",
//         description: "Major in Computer Science with minor in Mathematics. Graduated with honors.",
//         logo: "https://www.sundaytimes.lk/120617/images/R.V.jpg", // Replace with your actual logo path
//       },
//       {
//         degree: "High School Diploma",
//         institution: "Phillips Academy",
//         year: "2010 - 2014",
//         description: "Focused on STEM subjects. Participated in national science competitions.",
//         logo: "/images/phillips-logo.png", // Replace with your actual logo path
//       }
//   ];

//   // Handle scroll and animations
//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = ['hero', 'projects', 'technologies', 'certifications', 'education'];
      
//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
//             setActiveSection(section);
//             break;
//           }
//         }
//       }

//       // Animation for items as they come into view
//       document.querySelectorAll('.animate-on-scroll').forEach(item => {
//         const rect = item.getBoundingClientRect();
//         if (rect.top <= window.innerHeight * 0.85 && !animatedItems.includes(item.id)) {
//           setAnimatedItems(prev => [...prev, item.id]);
//         }
//       });
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll(); // Initial check

//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [animatedItems]);

//   // Navigation links
//   const navLinks = [
//     { name: 'About', icon: <User size={16} />, section: 'hero' },
//     { name: 'Projects', icon: <Code size={16} />, section: 'projects' },
//     { name: 'Technologies', icon: <Code size={16} />, section: 'technologies' },
//     { name: 'Certifications', icon: <Award size={16} />, section: 'certifications' },
//     { name: 'Education', icon: <Book size={16} />, section: 'education' }
//   ];

//   return (
//     <div className="relative min-h-screen font-sans text-gray-100">
//       {/* Global Background - Applied to entire page */}
//       <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black"></div>
//       <div className="fixed inset-0 z-0 bg-[url('/api/placeholder/400/400')] bg-repeat opacity-5"></div>
      
//       {/* Navigation */}
//       <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800 bg-gray-900 bg-opacity-80 backdrop-blur-sm">
//         <div className="container mx-auto flex items-center justify-between px-4 py-4">
//           <a href="#" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
//             Virajith Dissanayaka
//           </a>

//           {/* Desktop Navigation */}
//           <div className="hidden space-x-8 md:flex">
//             {navLinks.map(link => (
//               <a
//                 key={link.section}
//                 href={`#${link.section}`}
//                 className={`flex items-center space-x-1 text-sm transition-colors hover:text-blue-400 ${
//                   activeSection === link.section ? 'text-blue-400' : 'text-gray-300'
//                 }`}
//               >
//                 {link.icon}
//                 <span>{link.name}</span>
//               </a>
//             ))}
//           </div>

//           {/* Mobile menu button */}
//           <button 
//             className="text-gray-300 hover:text-white md:hidden"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="bg-gray-800 bg-opacity-95 backdrop-blur-sm md:hidden">
//             <div className="space-y-1 px-4 py-2">
//               {navLinks.map(link => (
//                 <a
//                   key={link.section}
//                   href={`#${link.section}`}
//                   className={`flex items-center space-x-2 rounded-md px-3 py-3 ${
//                     activeSection === link.section ? 'bg-gray-700 text-blue-400' : 'text-gray-300 hover:bg-gray-700'
//                   }`}
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {link.icon}
//                   <span>{link.name}</span>
//                 </a>
//               ))}
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Main Content */}
//       <main className="container relative z-10 mx-auto px-4 pb-12 pt-24">
//         {/* Hero section */}
//         <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden pb-32 pt-16">
//           <div className="container z-20 mx-auto px-6">
//             <div className="grid items-center gap-12 md:grid-cols-2">
//               {/* Left side - Text content */}
//               <div className="animate-on-scroll" id="hero-text">
//                 <h1 className={`mb-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl ${animatedItems.includes('hero-text') ? 'animate-fade-in-up' : 'opacity-0'}`}>
//                   <span className="text-white">Transforming </span>
//                   <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
//                     DevOps
//                   </span>
//                   <span className="text-white"> into</span>
//                   <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-400">
//                     Excellence
//                   </span>
//                 </h1>
                
//                 <p className={`mb-8 max-w-xl text-lg leading-relaxed text-gray-300 md:text-xl ${animatedItems.includes('hero-text') ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
//                   Specializing in automation, CI/CD pipelines, and cloud infrastructure. 
//                   Building scalable, reliable, and secure systems that empower development teams.
//                 </p>
                
//                 <div className={`space-x-4 ${animatedItems.includes('hero-text') ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
//                   <a href="#projects" className="inline-flex transform items-center rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
//                     View Projects
//                     <ChevronRight size={20} className="ml-1" />
//                   </a>
//                   <a href="#" className="inline-flex transform items-center rounded-lg border border-gray-700 bg-gray-800 px-8 py-3 font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-gray-700 hover:shadow-xl">
//                     <Download size={20} className="mr-2" />
//                     Resume
//                   </a>
//                 </div>
                
//                 <div className={`mt-8 flex space-x-5 ${animatedItems.includes('hero-text') ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
//                   <a href="#" className="text-gray-400 transition-colors hover:text-white">
//                     <Code size={24} />
//                   </a>
//                   <a href="#" className="text-gray-400 transition-colors hover:text-white">
//                     <Award size={24} />
//                   </a>
//                   <a href="#" className="text-gray-400 transition-colors hover:text-white">
//                     <Mail size={24} />
//                   </a>
//                 </div>
//               </div>
              
//               {/* Right side - Profile photo */}
//               <div className="animate-on-scroll flex justify-center" id="hero-image">
//                 <div className={`relative ${animatedItems.includes('hero-image') ? 'animate-fade-in-right' : 'opacity-0'}`}>
//                   <div className="relative h-64 w-64 md:h-80 md:w-80">
//                     <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-70 blur-xl"></div>
//                     <div className="absolute inset-2 flex items-center justify-center overflow-hidden rounded-full border-4 border-blue-500 bg-gray-800 shadow-2xl shadow-blue-500/20">
//                       {/* You can use either the initials or an actual image */}
//                       <div className="text-9xl font-bold text-blue-500 opacity-30">VD</div>
//                     </div>
//                   </div>
//                   <div className="absolute -left-6 -right-6 -top-6 -bottom-6 -z-10 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-xl"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           {/* Scroll down indicator */}
//           <div className="absolute bottom-10 left-0 right-0 z-20 flex animate-bounce justify-center">
//             <a href="#projects" className="text-gray-400 hover:text-white">
//               <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
//               </svg>
//             </a>
//           </div>
//         </section>
        
//         {/* Add your other sections here (projects, technologies, certifications, education) */}
//         {/* Each section would follow a similar pattern but with proper IDs and content */}
//         <section id="projects" className="py-20">
//           <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">
//             Featured <span className="text-blue-400">Projects</span>
//           </h2>
//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {projects.map((project, index) => (
//               <div 
//                 key={index} 
//                 className="animate-on-scroll rounded-xl bg-gray-800 bg-opacity-50 p-6 backdrop-blur-sm transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10"
//                 id={`project-${index}`}
//               >
//                 <h3 className="mb-3 text-xl font-semibold text-white">{project.title}</h3>
//                 <p className="mb-4 text-gray-300">{project.description}</p>
//                 <div className="mb-4 flex flex-wrap gap-2">
//                   {project.technologies.map((tech, techIndex) => (
//                     <span 
//                       key={techIndex} 
//                       className="inline-flex rounded-full bg-gray-700 px-3 py-1 text-xs font-medium text-blue-300"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//                 <a 
//                   href={project.link} 
//                   className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300"
//                 >
//                   View Project <ChevronRight size={16} className="ml-1" />
//                 </a>
//               </div>
//             ))}
//           </div>
//         </section>

//         <section id="technologies" className="py-20">
//           <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">
//             Technical <span className="text-blue-400">Skills</span>
//           </h2>
//           <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//             {technologies.map((tech, index) => (
//               <div 
//                 key={index}
//                 className="animate-on-scroll flex flex-col items-center rounded-lg bg-gray-800 bg-opacity-50 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:bg-gray-700"
//                 id={`tech-${index}`}
//               >
//                 <div className="mb-4 rounded-full bg-blue-500 bg-opacity-20 p-4">
//                   <Code size={28} className="text-blue-400" />
//                 </div>
//                 <h3 className="mb-2 text-lg font-medium text-white">{tech.name}</h3>
//                 <p className="text-sm text-gray-400">{tech.category}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         <section id="certifications" className="py-20">
//           <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">
//             Professional <span className="text-blue-400">Certifications</span>
//           </h2>
//           <div className="grid gap-6 md:grid-cols-2">
//             {certifications.map((cert, index) => (
//               <div 
//                 key={index}
//                 className="animate-on-scroll rounded-xl bg-gray-800 bg-opacity-50 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-gray-700"
//                 id={`cert-${index}`}
//               >
//                 <div className="flex items-start">
//                   <div className="mr-4 rounded-full bg-blue-500 bg-opacity-20 p-3">
//                     <Award size={24} className="text-blue-400" />
//                   </div>
//                   <div>
//                     <h3 className="mb-2 text-xl font-semibold text-white">{cert.name}</h3>
//                     <p className="mb-1 text-gray-300">{cert.issuer}</p>
//                     <p className="text-sm text-gray-400">Issued {cert.year}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         <section id="education" className="py-20">
//           <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">
//             <span className="text-blue-400">Education</span> & Training
//           </h2>
//           <div className="space-y-8">
//             {education.map((edu, index) => (
//               <div 
//                 key={index}
//                 className="animate-on-scroll rounded-xl bg-gray-800 bg-opacity-50 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-gray-700"
//                 id={`edu-${index}`}
//               >
//                 <div className="flex flex-col items-start md:flex-row md:items-center">
//                   <div className="mb-4 mr-6 flex-shrink-0 overflow-hidden rounded-md bg-gray-700 p-2 md:mb-0">
//                     <div className="h-16 w-16 bg-blue-500 bg-opacity-20 text-center flex items-center justify-center">
//                       <Book size={32} className="text-blue-400" />
//                     </div>
//                   </div>
//                   <div>
//                     <h3 className="mb-1 text-xl font-semibold text-white">{edu.degree}</h3>
//                     <p className="mb-2 text-lg text-blue-300">{edu.institution}</p>
//                     <p className="mb-3 text-sm text-gray-400">{edu.year}</p>
//                     <p className="text-gray-300">{edu.description}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>
//       </main>

//       {/* Footer could go here */}
//       <footer className="relative z-10 border-t border-gray-800 bg-gray-900 bg-opacity-60 py-8 backdrop-blur-sm">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col items-center justify-between md:flex-row">
//             <p className="mb-4 text-gray-400 md:mb-0">
//               © 2025 Virajith Dissanayaka. All rights reserved.
//             </p>
//             <div className="flex space-x-4">
//               <a href="#" className="text-gray-400 transition-colors hover:text-white">
//                 <Mail size={20} />
//               </a>
//               <a href="#" className="text-gray-400 transition-colors hover:text-white">
//                 <Code size={20} />
//               </a>
//               <a href="#" className="text-gray-400 transition-colors hover:text-white">
//                 <Award size={20} />
//               </a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default DevOpsPortfolio5;

import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Download, ChevronRight, User, Code, Award, Book } from 'lucide-react';

const DevOpsPortfolio5 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [animatedItems, setAnimatedItems] = useState([]);

  // Technologies data with placeholder images
  const technologies = [
    { name: 'Docker', category: 'DevOps' },
    { name: 'Kubernetes', category: 'DevOps' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Jenkins', category: 'CI/CD' },
    { name: 'Terraform', category: 'IaC' },
    { name: 'Ansible', category: 'Automation' },
    { name: 'React', category: 'Frontend' },
    { name: 'Spring Boot', category: 'Backend' },
    { name: 'Git', category: 'Version Control' },
    { name: 'Prometheus', category: 'Monitoring' },
    { name: 'Grafana', category: 'Monitoring' },
    { name: 'Python', category: 'Scripting' }
  ];

  // Project data
  const projects = [
    {
      title: 'Cloud Migration Framework',
      description: 'Automated migration of on-premise applications to AWS with zero downtime using Terraform and Ansible',
      technologies: ['AWS', 'Terraform', 'Ansible', 'Python'],
      link: '#'
    },
    {
      title: 'Microservices CI/CD Pipeline',
      description: 'Built scalable pipeline for 20+ microservices with automated testing, canary deployments and monitoring',
      technologies: ['Jenkins', 'Docker', 'Kubernetes', 'Prometheus'],
      link: '#'
    },
    {
      title: 'Infrastructure as Code Platform',
      description: 'Developed reusable IaC modules for standardized infrastructure provisioning across multiple environments',
      technologies: ['Terraform', 'AWS', 'Python', 'GitHub Actions'],
      link: '#'
    }
  ];

  // Certifications data
  const certifications = [
    { name: 'AWS Certified DevOps Engineer - Professional', issuer: 'Amazon Web Services', year: '2024' },
    { name: 'Certified Kubernetes Administrator (CKA)', issuer: 'Cloud Native Computing Foundation', year: '2023' },
    { name: 'HashiCorp Certified: Terraform Associate', issuer: 'HashiCorp', year: '2023' },
    { name: 'Docker Certified Associate', issuer: 'Docker', year: '2022' }
  ];

  // Education data
  const education = [
    {
        degree: "Master of Computer Science",
        institution: "Stanford University",
        year: "2018 - 2020",
        description: "Specialized in Artificial Intelligence and Machine Learning. Completed thesis on neural network optimization techniques.",
        logo: "https://avatars.githubusercontent.com/u/6937151?s=200&v=4", // Replace with your actual logo path
      },
      {
        degree: "Bachelor of Engineering",
        institution: "MIT",
        year: "2014 - 2018",
        description: "Major in Computer Science with minor in Mathematics. Graduated with honors.",
        logo: "https://www.sundaytimes.lk/120617/images/R.V.jpg", // Replace with your actual logo path
      },
      {
        degree: "High School Diploma",
        institution: "Phillips Academy",
        year: "2010 - 2014",
        description: "Focused on STEM subjects. Participated in national science competitions.",
        logo: "/images/phillips-logo.png", // Replace with your actual logo path
      }
  ];

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
    { name: 'About', icon: <User size={16} />, section: 'hero' },
    { name: 'Projects', icon: <Code size={16} />, section: 'projects' },
    { name: 'Technologies', icon: <Code size={16} />, section: 'technologies' },
    { name: 'Certifications', icon: <Award size={16} />, section: 'certifications' },
    { name: 'Education', icon: <Book size={16} />, section: 'education' }
  ];

  return (
    <div className="relative min-h-screen font-sans text-gray-100">
      {/* Global Background - Applied to entire page */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black"></div>
      <div className="fixed inset-0 z-0 bg-[url('/api/placeholder/400/400')] bg-repeat opacity-5"></div>
      
      {/* Navigation - Updated to blend with background */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800/40 bg-transparent backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <a href="#" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
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
            className="text-gray-300 hover:text-white md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="bg-gray-900/60 backdrop-blur-md md:hidden">
            <div className="space-y-1 px-4 py-2">
              {navLinks.map(link => (
                <a
                  key={link.section}
                  href={`#${link.section}`}
                  className={`flex items-center space-x-2 rounded-md px-3 py-3 ${
                    activeSection === link.section ? 'bg-gray-800/60 text-blue-400' : 'text-gray-300 hover:bg-gray-800/40'
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

      {/* Main Content */}
      <main className="container relative z-10 mx-auto px-4 pb-12 pt-24">
        {/* Hero section */}
        <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden pb-32 pt-16">
          <div className="container z-20 mx-auto px-6">
            <div className="grid items-center gap-12 md:grid-cols-2">
              {/* Left side - Text content */}
              <div className="animate-on-scroll" id="hero-text">
                <h1 className={`mb-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl ${animatedItems.includes('hero-text') ? 'animate-fade-in-up' : 'opacity-0'}`}>
                  <span className="text-white">Transforming </span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                    DevOps
                  </span>
                  <span className="text-white"> into</span>
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-400">
                    Excellence
                  </span>
                </h1>
                
                <p className={`mb-8 max-w-xl text-lg leading-relaxed text-gray-300 md:text-xl ${animatedItems.includes('hero-text') ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
                  Specializing in automation, CI/CD pipelines, and cloud infrastructure. 
                  Building scalable, reliable, and secure systems that empower development teams.
                </p>
                
                <div className={`space-x-4 ${animatedItems.includes('hero-text') ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
                  <a href="#projects" className="inline-flex transform items-center rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    View Projects
                    <ChevronRight size={20} className="ml-1" />
                  </a>
                  <a href="#" className="inline-flex transform items-center rounded-lg border border-gray-700/60 bg-gray-800/40 px-8 py-3 font-medium text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-gray-700/60 hover:shadow-xl">
                    <Download size={20} className="mr-2" />
                    Resume
                  </a>
                </div>
                
                <div className={`mt-8 flex space-x-5 ${animatedItems.includes('hero-text') ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
                  <a href="#" className="text-gray-400 transition-colors hover:text-white">
                    <Code size={24} />
                  </a>
                  <a href="#" className="text-gray-400 transition-colors hover:text-white">
                    <Award size={24} />
                  </a>
                  <a href="#" className="text-gray-400 transition-colors hover:text-white">
                    <Mail size={24} />
                  </a>
                </div>
              </div>
              
              {/* Right side - Profile photo */}
              <div className="animate-on-scroll flex justify-center" id="hero-image">
                <div className={`relative ${animatedItems.includes('hero-image') ? 'animate-fade-in-right' : 'opacity-0'}`}>
                  <div className="relative h-64 w-64 md:h-80 md:w-80">
                    <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-70 blur-xl"></div>
                    <div className="absolute inset-2 flex items-center justify-center overflow-hidden rounded-full border-4 border-blue-500 bg-gray-800/40 backdrop-blur-sm shadow-2xl shadow-blue-500/20">
                      {/* You can use either the initials or an actual image */}
                      <div className="text-9xl font-bold text-blue-500 opacity-30">VD</div>
                    </div>
                  </div>
                  <div className="absolute -left-6 -right-6 -top-6 -bottom-6 -z-10 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-xl"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Scroll down indicator */}
          <div className="absolute bottom-10 left-0 right-0 z-20 flex animate-bounce justify-center">
            <a href="#projects" className="text-gray-400 hover:text-white">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </a>
          </div>
        </section>
        
        {/* Projects section */}
        <section id="projects" className="py-20">
          <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="animate-on-scroll rounded-xl bg-gray-800/30 p-6 backdrop-blur-sm border border-gray-700/20 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 hover:bg-gray-800/40"
                id={`project-${index}`}
              >
                <h3 className="mb-3 text-xl font-semibold text-white">{project.title}</h3>
                <p className="mb-4 text-gray-300">{project.description}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="inline-flex rounded-full bg-gray-700/50 px-3 py-1 text-xs font-medium text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300"
                >
                  View Project <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies section */}
        <section id="technologies" className="py-20">
          <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">
            Technical <span className="text-blue-400">Skills</span>
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="animate-on-scroll flex flex-col items-center rounded-lg bg-gray-800/30 p-6 text-center backdrop-blur-sm border border-gray-700/20 transition-all duration-300 hover:bg-gray-700/40"
                id={`tech-${index}`}
              >
                <div className="mb-4 rounded-full bg-blue-500/20 p-4">
                  <Code size={28} className="text-blue-400" />
                </div>
                <h3 className="mb-2 text-lg font-medium text-white">{tech.name}</h3>
                <p className="text-sm text-gray-400">{tech.category}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications section */}
        <section id="certifications" className="py-20">
          <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">
            Professional <span className="text-blue-400">Certifications</span>
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="animate-on-scroll rounded-xl bg-gray-800/30 p-6 backdrop-blur-sm border border-gray-700/20 transition-all duration-300 hover:bg-gray-700/40"
                id={`cert-${index}`}
              >
                <div className="flex items-start">
                  <div className="mr-4 rounded-full bg-blue-500/20 p-3">
                    <Award size={24} className="text-blue-400" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-white">{cert.name}</h3>
                    <p className="mb-1 text-gray-300">{cert.issuer}</p>
                    <p className="text-sm text-gray-400">Issued {cert.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education section */}
        <section id="education" className="py-20">
          <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">
            <span className="text-blue-400">Education</span> & Training
          </h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div 
                key={index}
                className="animate-on-scroll rounded-xl bg-gray-800/30 p-6 backdrop-blur-sm border border-gray-700/20 transition-all duration-300 hover:bg-gray-700/40"
                id={`edu-${index}`}
              >
                <div className="flex flex-col items-start md:flex-row md:items-center">
                  <div className="mb-4 mr-6 flex-shrink-0 overflow-hidden rounded-md bg-gray-700/40 p-2 md:mb-0">
                    <div className="h-16 w-16 bg-blue-500/20 text-center flex items-center justify-center">
                      <Book size={32} className="text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-1 text-xl font-semibold text-white">{edu.degree}</h3>
                    <p className="mb-2 text-lg text-blue-300">{edu.institution}</p>
                    <p className="mb-3 text-sm text-gray-400">{edu.year}</p>
                    <p className="text-gray-300">{edu.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800/40 bg-transparent backdrop-blur-sm py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="mb-4 text-gray-400 md:mb-0">
              © 2025 Virajith Dissanayaka. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 transition-colors hover:text-white">
                <Mail size={20} />
              </a>
              <a href="#" className="text-gray-400 transition-colors hover:text-white">
                <Code size={20} />
              </a>
              <a href="#" className="text-gray-400 transition-colors hover:text-white">
                <Award size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DevOpsPortfolio5;