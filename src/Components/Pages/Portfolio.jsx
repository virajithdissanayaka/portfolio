// import React, { useState, useEffect } from 'react';

// const DevOpsPortfolio = () => {
//   const [activeSection, setActiveSection] = useState('home');
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrollY, setScrollY] = useState(0);

//   // Handle scroll effects
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };
    
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Example data
//   const personalInfo = {
//     name: "Alex Morgan",
//     title: "Senior DevOps Engineer",
//     location: "San Francisco, CA",
//     email: "alex.morgan@example.com",
//     github: "github.com/alexmorgan",
//     linkedin: "linkedin.com/in/alexmorgan",
//     bio: "DevOps professional with 8+ years of experience building resilient infrastructure and streamlining deployment processes. Passionate about automation, cloud architecture, and building scalable systems."
//   };

//   const projects = [
//     {
//       id: 1,
//       title: "Cloud Migration Framework",
//       description: "Designed and implemented a framework for migrating legacy applications to AWS, reducing deployment time by 70% and operational costs by 40%.",
//       technologies: ["Terraform", "AWS", "Docker", "CI/CD", "Python"],
//       link: "#"
//     },
//     {
//       id: 2,
//       title: "Kubernetes Monitoring System",
//       description: "Built a comprehensive monitoring solution for Kubernetes clusters using Prometheus, Grafana, and custom alerting mechanisms.",
//       technologies: ["Kubernetes", "Prometheus", "Grafana", "Go", "Helm"],
//       link: "#"
//     },
//     {
//       id: 3,
//       title: "Automated Compliance Pipeline",
//       description: "Developed an automated pipeline for continuous compliance checking against industry standards (HIPAA, SOC2, ISO27001).",
//       technologies: ["Jenkins", "Python", "Bash", "AWS Config", "Chef"],
//       link: "#"
//     }
//   ];

//   const certifications = [
//     {
//       id: 1,
//       name: "AWS Certified DevOps Engineer - Professional",
//       issuer: "Amazon Web Services",
//       date: "2023",
//       link: "#"
//     },
//     {
//       id: 2,
//       name: "Certified Kubernetes Administrator (CKA)",
//       issuer: "Cloud Native Computing Foundation",
//       date: "2022",
//       link: "#"
//     },
//     {
//       id: 3,
//       name: "HashiCorp Certified Terraform Associate",
//       issuer: "HashiCorp",
//       date: "2021",
//       link: "#"
//     }
//   ];

//   const education = [
//     {
//       id: 1,
//       degree: "M.S. in Computer Science",
//       institution: "Stanford University",
//       year: "2015-2017",
//       description: "Specialized in Distributed Systems and Cloud Computing"
//     },
//     {
//       id: 2,
//       degree: "B.S. in Computer Engineering",
//       institution: "University of California, Berkeley",
//       year: "2011-2015",
//       description: "Minor in Mathematics"
//     }
//   ];

//   const skills = [
//     { category: "Infrastructure as Code", items: ["Terraform", "CloudFormation", "Pulumi", "Ansible"] },
//     { category: "Containerization", items: ["Docker", "Kubernetes", "Helm", "Istio"] },
//     { category: "CI/CD", items: ["Jenkins", "GitHub Actions", "GitLab CI", "CircleCI", "ArgoCD"] },
//     { category: "Cloud Platforms", items: ["AWS", "Azure", "GCP", "DigitalOcean"] },
//     { category: "Monitoring", items: ["Prometheus", "Grafana", "ELK Stack", "Datadog", "New Relic"] },
//     { category: "Programming", items: ["Python", "Go", "Bash", "JavaScript", "Ruby"] }
//   ];

//   const renderNavbar = () => (
//     <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 20 ? 'bg-gray-900 shadow-lg py-2' : 'bg-transparent py-4'}`}>
//       <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
//         <div className="text-blue-500 font-bold text-2xl">
//           AM<span className="text-gray-400">.devops</span>
//         </div>
        
//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-8">
//           {["home", "projects", "skills", "certifications", "education", "contact"].map((section) => (
//             <button
//               key={section}
//               onClick={() => setActiveSection(section)}
//               className={`text-sm uppercase tracking-wide hover:text-blue-400 transition-colors ${activeSection === section ? 'text-blue-500 font-semibold' : 'text-gray-300'}`}
//             >
//               {section}
//             </button>
//           ))}
//         </div>
        
//         {/* Mobile Menu Button */}
//         <button 
//           className="md:hidden text-gray-300 focus:outline-none"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             {isMenuOpen ? (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             ) : (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             )}
//           </svg>
//         </button>
//       </div>
      
//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-gray-800 p-4 animate-fadeIn">
//           <div className="flex flex-col space-y-4">
//             {["home", "projects", "skills", "certifications", "education", "contact"].map((section) => (
//               <button
//                 key={section}
//                 onClick={() => {
//                   setActiveSection(section);
//                   setIsMenuOpen(false);
//                 }}
//                 className={`text-sm uppercase tracking-wide hover:text-blue-400 transition-colors ${activeSection === section ? 'text-blue-500 font-semibold' : 'text-gray-300'}`}
//               >
//                 {section}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );

//   const Hero = () => (
//     <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20">
//       <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
//         <div className="order-2 md:order-1 animate-fadeInUp">
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
//             {personalInfo.name}
//           </h1>
//           <h2 className="text-xl md:text-2xl text-blue-400 mb-6">{personalInfo.title}</h2>
//           <p className="text-gray-300 mb-8 text-lg leading-relaxed max-w-lg">
//             {personalInfo.bio}
//           </p>
//           <div className="flex flex-wrap gap-4">
//             <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full transition-all transform hover:-translate-y-1 flex items-center">
//               <span>View Projects</span>
//               <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//               </svg>
//             </button>
//             <button className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white py-2 px-6 rounded-full transition-all transform hover:-translate-y-1">
//               Download Resume
//             </button>
//           </div>
//         </div>
//         <div className="order-1 md:order-2 flex justify-center animate-fadeInRight">
//           <div className="relative w-64 h-64 md:w-80 md:h-80">
//             <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-70 blur-xl animate-pulse"></div>
//             <div className="absolute inset-2 rounded-full bg-gray-800 flex items-center justify-center">
//               <div className="text-9xl text-blue-500 font-bold opacity-30">AM</div>
//                 {/* <div className="relative w-48 h-48 md:w-64 md:h-64 overflow-hidden rounded-full border-4 border-indigo-500 shadow-lg animate-on-scroll" id="profile-image">
//                   <img src="data:image/jpeg;base64,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" alt="Alex Morgan" className="object-cover w-full h-full" />
//                   <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-30"></div>
//                  </div> */}
//              </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );

//   const Projects = () => (
//     <section id="projects" className="py-20 bg-gray-900">
//       <div className="container mx-auto px-4 md:px-6">
//         <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Projects</h2>
//         <div className="w-20 h-1 bg-blue-500 mb-12"></div>
        
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project) => (
//             <div 
//               key={project.id} 
//               className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-2"
//             >
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
//                 <p className="text-gray-300 mb-4">{project.description}</p>
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.technologies.map((tech, index) => (
//                     <span key={index} className="bg-gray-700 text-blue-400 px-2 py-1 rounded-md text-xs">
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//                 <a 
//                   href={project.link} 
//                   className="inline-block text-blue-400 hover:text-blue-300 transition-colors font-medium"
//                 >
//                   View Details →
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );

//   const Skills = () => (
//     <section id="skills" className="py-20 bg-gray-800">
//       <div className="container mx-auto px-4 md:px-6">
//         <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Technologies & Tools</h2>
//         <div className="w-20 h-1 bg-blue-500 mb-12"></div>
        
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {skills.map((skillGroup, index) => (
//             <div 
//               key={index} 
//               className="bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-blue-500/10 transition-duration-300"
//             >
//               <h3 className="text-xl font-semibold text-blue-400 mb-4">{skillGroup.category}</h3>
//               <div className="flex flex-wrap gap-2">
//                 {skillGroup.items.map((skill, skillIndex) => (
//                   <span 
//                     key={skillIndex} 
//                     className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm"
//                   >
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );

//   const Certifications = () => (
//     <section id="certifications" className="py-20 bg-gray-900">
//       <div className="container mx-auto px-4 md:px-6">
//         <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Certifications</h2>
//         <div className="w-20 h-1 bg-blue-500 mb-12"></div>
        
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {certifications.map((cert) => (
//             <div 
//               key={cert.id} 
//               className="bg-gray-800 rounded-lg p-6 shadow-lg border-l-4 border-blue-500 hover:shadow-blue-500/20 transition-all duration-300"
//             >
//               <h3 className="text-xl font-semibold text-white mb-2">{cert.name}</h3>
//               <p className="text-gray-400 mb-1">{cert.issuer}</p>
//               <p className="text-blue-400 text-sm mb-3">{cert.date}</p>
//               <a 
//                 href={cert.link} 
//                 className="inline-flex items-center text-gray-300 hover:text-blue-400 transition-colors text-sm"
//               >
//                 <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
//                 </svg>
//                 Verify Certificate
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );

//   const Education = () => (
//     <section id="education" className="py-20 bg-gray-800">
//       <div className="container mx-auto px-4 md:px-6">
//         <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Education</h2>
//         <div className="w-20 h-1 bg-blue-500 mb-12"></div>
        
//         <div className="space-y-8 max-w-3xl mx-auto">
//           {education.map((edu) => (
//             <div 
//               key={edu.id} 
//               className="bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
//             >
//               <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
//                 <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
//                 <span className="text-blue-400">{edu.year}</span>
//               </div>
//               <p className="text-gray-300 mb-2">{edu.institution}</p>
//               <p className="text-gray-400 text-sm">{edu.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );

//   const Contact = () => (
//     <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
//       <div className="container mx-auto px-4 md:px-6">
//         <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Get In Touch</h2>
//         <div className="w-20 h-1 bg-blue-500 mb-12"></div>
        
//         <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
//           <div>
//             <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
//             <div className="space-y-4">
//               <div className="flex items-start">
//                 <div className="bg-gray-700 p-2 rounded-lg mr-4">
//                   <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                   </svg>
//                 </div>
//                 <div>
//                   <p className="text-gray-400 text-sm">Email</p>
//                   <p className="text-white">{personalInfo.email}</p>
//                 </div>
//               </div>
//               <div className="flex items-start">
//                 <div className="bg-gray-700 p-2 rounded-lg mr-4">
//                   <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                   </svg>
//                 </div>
//                 <div>
//                   <p className="text-gray-400 text-sm">Location</p>
//                   <p className="text-white">{personalInfo.location}</p>
//                 </div>
//               </div>
//               <div className="flex items-start">
//                 <div className="bg-gray-700 p-2 rounded-lg mr-4">
//                   <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
//                   </svg>
//                 </div>
//                 <div>
//                   <p className="text-gray-400 text-sm">Social Links</p>
//                   <div className="flex space-x-4 mt-1">
//                     <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">GitHub</a>
//                     <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">LinkedIn</a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           <div>
//             <h3 className="text-xl font-semibold text-white mb-6">Send a Message</h3>
//             <form className="space-y-4">
//               <div>
//                 <label htmlFor="name" className="block text-gray-400 mb-1 text-sm">Name</label>
//                 <input
//                   type="text"
//                   id="name"
//                   className="w-full bg-gray-700 border-0 rounded-lg py-2 px-4 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                   placeholder="Your name"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="email" className="block text-gray-400 mb-1 text-sm">Email</label>
//                 <input
//                   type="email"
//                   id="email"
//                   className="w-full bg-gray-700 border-0 rounded-lg py-2 px-4 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                   placeholder="your.email@example.com"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="message" className="block text-gray-400 mb-1 text-sm">Message</label>
//                 <textarea
//                   id="message"
//                   rows={4}
//                   className="w-full bg-gray-700 border-0 rounded-lg py-2 px-4 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
//                   placeholder="Your message..."
//                 ></textarea>
//               </div>
//               <button
//                 type="submit"
//                 className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition-all transform hover:-translate-y-1 w-full md:w-auto"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );

//   const Footer = () => (
//     <footer className="bg-gray-900 py-8 border-t border-gray-800">
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="flex flex-col md:flex-row justify-between items-center">
//           <div className="text-gray-400 mb-4 md:mb-0">
//             © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
//           </div>
//           <div className="flex space-x-6">
//             <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
//               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
//               </svg>
//             </a>
//             <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
//               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
//               </svg>
//             </a>
//             <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
//               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
//               </svg>
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );

//   // Define animations for page load
//   const styles = `
//     @keyframes fadeInUp {
//       from {
//         opacity: 0;
//         transform: translateY(20px);
//       }
//       to {
//         opacity: 1;
//         transform: translateY(0);
//       }
//     }
    
//     @keyframes fadeInRight {
//       from {
//         opacity: 0;
//         transform: translateX(-20px);
//       }
//       to {
//         opacity: 1;
//         transform: translateX(0);
//       }
//     }
    
//     @keyframes fadeIn {
//       from {
//         opacity: 0;
//       }
//       to {
//         opacity: 1;
//       }
//     }
    
//     .animate-fadeInUp {
//       animation: fadeInUp 0.6s ease-out forwards;
//     }
    
//     .animate-fadeInRight {
//       animation: fadeInRight 0.6s ease-out forwards;
//     }
    
//     .animate-fadeIn {
//       animation: fadeIn 0.3s ease-out forwards;
//     }
    
//     .animate-pulse {
//       animation: pulse 3s infinite;
//     }
    
//     @keyframes pulse {
//       0%, 100% {
//         opacity: 0.7;
//       }
//       50% {
//         opacity: 0.5;
//       }
//     }
//   `;

//   return (
//     <div className="bg-gray-900 text-gray-200 min-h-screen">
//       <style>{styles}</style>
//       {renderNavbar()}
//       <Hero />
//       <Projects />
//       <Skills />
//       <Certifications />
//       <Education />
//       <Contact />
//       <Footer />
//     </div>
//   );
// };

// export default DevOpsPortfolio;

// import React, { useState, useEffect } from 'react';

// // Sample technology data
// const technologiesData = [
//   { name: "React", category: "Frontend", color: "#61DAFB" },
//   { name: "Node.js", category: "Backend", color: "#339933" },
//   { name: "TypeScript", category: "Language", color: "#3178C6" },
//   { name: "MongoDB", category: "Database", color: "#47A248" },
//   { name: "Next.js", category: "Framework", color: "#000000" },
//   { name: "Python", category: "Language", color: "#3776AB" },
//   { name: "Docker", category: "DevOps", color: "#2496ED" },
//   { name: "AWS", category: "Cloud", color: "#FF9900" },
//   { name: "Firebase", category: "Backend", color: "#FFCA28" },
//   { name: "Tailwind CSS", category: "CSS", color: "#06B6D4" },
//   { name: "GraphQL", category: "API", color: "#E10098" },
//   { name: "Figma", category: "Design", color: "#F24E1E" }
// ];

// const DevOpsPortfolio = () => {
//   const [animatedItems, setAnimatedItems] = useState([]);
//   const [activeCategory, setActiveCategory] = useState('All');
  
//   // Extract unique categories
//   const categories = ['All', ...new Set(technologiesData.map(tech => tech.category))];
  
//   // Filter technologies based on active category
//   const filteredTechnologies = activeCategory === 'All' 
//     ? technologiesData 
//     : technologiesData.filter(tech => tech.category === activeCategory);

//   useEffect(() => {
//     const handleScroll = () => {
//       const elements = document.querySelectorAll('.animate-on-scroll');
      
//       elements.forEach(element => {
//         const position = element.getBoundingClientRect();
        
//         // If element is in viewport
//         if(position.top < window.innerHeight * 0.85) {
//           setAnimatedItems(prev => {
//             if (!prev.includes(element.id)) {
//               return [...prev, element.id];
//             }
//             return prev;
//           });
//         }
//       });
//     };

//     window.addEventListener('scroll', handleScroll);
//     // Check on initial load
//     setTimeout(handleScroll, 100);
    
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <section id="technologies" className="py-24 bg-gray-950 relative overflow-hidden">
//       {/* Background elements */}
//       <div className="absolute inset-0 opacity-20">
//         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-700/20 via-transparent to-transparent"></div>
//         <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-indigo-700/20 via-transparent to-transparent"></div>
//       </div>
      
//       <div className="container mx-auto px-4 relative z-10">
//         {/* Section header with animations */}
//         <div className="text-center mb-16 animate-on-scroll" id="tech-header">
//           <h2 className={`text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 ${animatedItems.includes('tech-header') ? 'opacity-100 translate-y-0 transition-all duration-700' : 'opacity-0 translate-y-10'}`}>
//             Technologies & Tools
//           </h2>
          
//           <div className={`h-1 bg-blue-600 mx-auto transition-all duration-1000 ${animatedItems.includes('tech-header') ? 'w-24' : 'w-0'}`} />
          
//           <p className={`mt-6 text-gray-400 max-w-2xl mx-auto ${animatedItems.includes('tech-header') ? 'opacity-100 transition-opacity delay-300 duration-700' : 'opacity-0'}`}>
//             Leveraging cutting-edge technologies to build powerful, 
//             scalable, and user-friendly digital solutions.
//           </p>
//         </div>
        
//         {/* Categories filter */}
//         <div className="flex flex-wrap gap-3 mb-10 justify-center animate-on-scroll" id="tech-categories">
//           {categories.map((category, index) => (
//             <button
//               key={category}
//               className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
//                 animatedItems.includes('tech-categories') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//               } ${
//                 activeCategory === category 
//                   ? 'bg-blue-600 text-white' 
//                   : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
//               }`}
//               onClick={() => setActiveCategory(category)}
//               style={{ transitionDelay: `${index * 50}ms` }}
//             >
//               {category}
//             </button>
//           ))}
//         </div>
        
//         {/* Technologies grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
//           {filteredTechnologies.map((tech, index) => (
//             <div 
//               key={index} 
//               className="animate-on-scroll"
//               id={`tech-${index}`}
//             >
//               <div 
//                 className={`group bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden p-6 flex flex-col items-center transition-all duration-500 hover:shadow-lg hover:shadow-${tech.color.replace('#', '')}/10 hover:border-${tech.color.replace('#', '')}/30 ${
//                   animatedItems.includes(`tech-${index}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//                 }`}
//                 style={{ 
//                   transitionDelay: `${index * 50}ms`,
//                 }}
//               >
//                 {/* 3D Icon with shadow */}
//                 <div className="relative w-20 h-20 mb-4">
//                   {/* Icon shadow */}
//                   <div 
//                     className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-2 rounded-full opacity-30 blur-sm"
//                     style={{ backgroundColor: tech.color }}
//                   ></div>
                  
//                   {/* 3D Icon */}
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <div 
//                       className="w-16 h-16 rounded-full flex items-center justify-center transform group-hover:-translate-y-2 transition-transform duration-300"
//                       style={{ 
//                         background: `linear-gradient(135deg, ${tech.color}, ${tech.color}90)`,
//                         boxShadow: `0 8px 16px -4px ${tech.color}40`
//                       }}
//                     >
//                       <span className="text-2xl font-bold text-white">{tech.name.charAt(0)}</span>
//                     </div>
//                   </div>
//                 </div>
                
//                 {/* Text content */}
//                 <h3 className="text-lg font-bold mb-1 text-white group-hover:text-blue-400 transition-colors duration-300">
//                   {tech.name}
//                 </h3>
                
//                 <span 
//                   className="text-sm px-3 py-1 rounded-full"
//                   style={{ 
//                     backgroundColor: `${tech.color}20`,
//                     color: tech.color,
//                     border: `1px solid ${tech.color}40`
//                   }}
//                 >
//                   {tech.category}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DevOpsPortfolio;



// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';

// // Sample technologies data
// const technologiesData = [
//   {
//     name: "React",
//     category: "Frontend",
//     icon: "/icons/react.svg", // Replace with your actual icon paths
//     color: "#61DAFB"
//   },
//   {
//     name: "TypeScript",
//     category: "Language",
//     icon: "/icons/typescript.svg",
//     color: "#3178C6"
//   },
//   {
//     name: "Node.js",
//     category: "Backend",
//     icon: "/icons/nodejs.svg",
//     color: "#339933"
//   },
//   {
//     name: "Next.js",
//     category: "Framework",
//     icon: "/icons/nextjs.svg",
//     color: "#000000"
//   },
//   {
//     name: "Tailwind CSS",
//     category: "Styling",
//     icon: "/icons/tailwind.svg",
//     color: "#06B6D4"
//   },
//   {
//     name: "MongoDB",
//     category: "Database",
//     icon: "/icons/mongodb.svg",
//     color: "#47A248"
//   },
//   {
//     name: "Docker",
//     category: "DevOps",
//     icon: "/icons/docker.svg",
//     color: "#2496ED"
//   },
//   {
//     name: "GraphQL",
//     category: "API",
//     icon: "/icons/graphql.svg",
//     color: "#E10098"
//   },
//   {
//     name: "AWS",
//     category: "Cloud",
//     icon: "/icons/aws.svg",
//     color: "#FF9900"
//   },
//   {
//     name: "GitHub",
//     category: "Version Control",
//     icon: "/icons/github.svg",
//     color: "#181717"
//   },
//   {
//     name: "Figma",
//     category: "Design",
//     icon: "/icons/figma.svg",
//     color: "#F24E1E"
//   },
//   {
//     name: "Jest",
//     category: "Testing",
//     icon: "/icons/jest.svg",
//     color: "#C21325"
//   }
// ];

// const DevOpsPortfolio = () => {
//   const [inView, setInView] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setInView(true);
//         }
//       },
//       { threshold: 0.2 }
//     );

//     const section = document.getElementById('technologies');
//     if (section) observer.observe(section);

//     return () => {
//       if (section) observer.unobserve(section);
//     };
//   }, []);

//   // Card variants for animation
//   const cardVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: i * 0.1,
//         duration: 0.5,
//         ease: "easeOut"
//       }
//     })
//   };

//   // Header variants
//   const headerVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   };

//   // Line variants
//   const lineVariants = {
//     hidden: { width: 0 },
//     visible: {
//       width: "5rem",
//       transition: {
//         delay: 0.3,
//         duration: 0.8,
//         ease: "easeOut"
//       }
//     }
//   };

//   // 3D card hover effect
//   const perspective = {
//     whileHover: {
//       rotateX: 10,
//       rotateY: 15,
//       scale: 1.05,
//       transition: {
//         duration: 0.4
//       }
//     }
//   };

//   // Icon animation
//   const iconVariants = {
//     initial: { rotate: 0 },
//     hover: { 
//       rotate: 15, 
//       scale: 1.1,
//       transition: {
//         type: "spring",
//         stiffness: 300
//       }
//     }
//   };

//   return (
//     <section id="technologies" className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-950">
//       {/* Background elements */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
//         <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500 opacity-10 rounded-full blur-3xl"></div>
//         <div className="absolute top-1/3 -right-20 w-60 h-60 bg-purple-600 opacity-10 rounded-full blur-3xl"></div>
//         <div className="absolute -bottom-10 left-1/4 w-40 h-40 bg-cyan-400 opacity-10 rounded-full blur-3xl"></div>
//       </div>
      
//       <div className="container mx-auto px-4 relative z-10">
//         <motion.div 
//           className="mb-16 text-center"
//           initial="hidden"
//           animate={inView ? "visible" : "hidden"}
//           variants={headerVariants}
//         >
//           <motion.h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
//             Technologies & Tools
//           </motion.h2>
//           <motion.div 
//             className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"
//             variants={lineVariants}
//           ></motion.div>
//           <motion.p 
//             className="text-gray-300 mt-6 max-w-2xl mx-auto"
//             initial={{ opacity: 0 }}
//             animate={inView ? { opacity: 1 } : { opacity: 0 }}
//             transition={{ delay: 0.4, duration: 0.6 }}
//           >
//             Leveraging cutting-edge technologies to build powerful, scalable, and beautiful digital experiences
//           </motion.p>
//         </motion.div>
        
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
//           {technologiesData.map((tech, index) => (
//             <motion.div
//               key={index}
//               custom={index}
//               variants={cardVariants}
//               initial="hidden"
//               animate={inView ? "visible" : "hidden"}
//               whileHover="whileHover"
//               className="flex justify-center"
//             >
//               <motion.div 
//                 className="w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-sm rounded-2xl p-6 border border-gray-700 shadow-xl"
//                 variants={perspective}
//                 style={{
//                   background: `radial-gradient(circle at center, rgba(23, 25, 35, 0.9), rgba(15, 17, 25, 0.9))`,
//                   boxShadow: `0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(${parseInt(tech.color.slice(1, 3), 16)}, ${parseInt(tech.color.slice(3, 5), 16)}, ${parseInt(tech.color.slice(5, 7), 16)}, 0.1)`
//                 }}
//               >
//                 <div className="flex flex-col items-center">
//                   <motion.div 
//                     className="w-16 h-16 mb-4 flex items-center justify-center"
//                     variants={iconVariants}
//                     whileHover="hover"
//                   >
//                     <div 
//                       className="w-14 h-14 rounded-xl flex items-center justify-center relative"
//                       style={{
//                         background: `linear-gradient(135deg, ${tech.color}20, ${tech.color}50)`,
//                         boxShadow: `0 10px 20px -10px ${tech.color}80`
//                       }}
//                     >
//                       {/* 3D effect elements */}
//                       <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white to-transparent opacity-10"></div>
//                       <div className="absolute bottom-0 left-0 right-0 h-1/2 rounded-b-xl bg-black opacity-20"></div>
                      
//                       {/* Icon */}
//                       <div className="relative z-10">
//                         <img src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain" />
//                       </div>
//                     </div>
//                   </motion.div>
                  
//                   <h3 className="font-semibold text-center text-white">{tech.name}</h3>
//                   <p className="text-xs text-gray-400 mt-1 text-center">{tech.category}</p>
                  
//                   {/* Bottom glow effect */}
//                   <div 
//                     className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/3 h-1 rounded-t-lg opacity-60"
//                     style={{ background: tech.color }}
//                   ></div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DevOpsPortfolio;

// import React, { useState, useEffect } from 'react';
// import { motion } from 'react-motion';

// const DevOpsPortfolio = () => {
//   const [animatedItems, setAnimatedItems] = useState([]);
  
//   // Sample data for technologies
//   const technologies = [
//     { name: "React", category: "Frontend", icon: "https://www.svgrepo.com/show/512317/github-142.svg", color: "from-blue-500 to-cyan-400" },
//     { name: "Vue", category: "Frontend", icon: "/icons/vue.svg", color: "from-green-500 to-emerald-400" },
//     { name: "Angular", category: "Frontend", icon: "/icons/angular.svg", color: "from-red-500 to-rose-400" },
//     { name: "Node.js", category: "Backend", icon: "/icons/nodejs.svg", color: "from-green-600 to-lime-500" },
//     { name: "Python", category: "Backend", icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/python-programming-language-icon.png", color: "from-blue-600 to-indigo-500" },
//     { name: "MongoDB", category: "Database", icon: "/icons/mongodb.svg", color: "from-green-500 to-green-400" },
//     { name: "PostgreSQL", category: "Database", icon: "/icons/postgresql.svg", color: "from-blue-600 to-indigo-600" },
//     { name: "Docker", category: "DevOps", icon: "/icons/docker.svg", color: "from-blue-500 to-cyan-500" },
//     { name: "AWS", category: "Cloud", icon: "/icons/aws.svg", color: "from-orange-500 to-yellow-400" },
//     { name: "Firebase", category: "Backend", icon: "/icons/firebase.svg", color: "from-yellow-500 to-orange-400" },
//     { name: "TypeScript", category: "Language", icon: "/icons/typescript.svg", color: "from-blue-600 to-blue-400" },
//     { name: "Figma", category: "Design", icon: "/icons/figma.svg", color: "from-purple-500 to-fuchsia-400" },
//   ];

//   useEffect(() => {
//     // Intersection Observer for scroll animations
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           setAnimatedItems(prev => [...prev, entry.target.id]);
//         }
//       });
//     }, { threshold: 0.1 });

//     // Observe all elements with animate-on-scroll class
//     document.querySelectorAll('.animate-on-scroll').forEach(element => {
//       observer.observe(element);
//     });

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section id="technologies" className="py-24 bg-gray-900 relative overflow-hidden">
//       {/* Background grid pattern */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
//       {/* Floating orbs background */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
//         {[...Array(6)].map((_, i) => (
//           <div 
//             key={i}
//             className={`absolute w-64 h-64 rounded-full filter blur-3xl opacity-20 bg-gradient-to-r ${i % 2 === 0 ? 'from-blue-500 to-purple-500' : 'from-pink-500 to-indigo-500'}`}
//             style={{
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//               animation: `float ${10 + i * 5}s linear infinite ${i * 1.5}s`
//             }}
//           ></div>
//         ))}
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         <div className="mb-16 animate-on-scroll" id="tech-header">
//           <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 ${animatedItems.includes('tech-header') ? 'animate-fade-in-up' : 'opacity-0'}`}>
//             Technologies & Tools
//           </h2>
//           <p className={`text-lg text-gray-300 max-w-2xl ${animatedItems.includes('tech-header') ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
//             Our expertise spans across multiple technologies that power modern web development.
//           </p>
//           <div className={`w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-6 ${animatedItems.includes('tech-header') ? 'animate-width' : 'w-0'}`}></div>
//         </div>

//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
//           {technologies.map((tech, index) => (
//             <div key={index} className="animate-on-scroll group" id={`tech-${index}`}>
//               <div 
//                 className={`relative bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 flex flex-col items-center justify-center border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500
//                 ${animatedItems.includes(`tech-${index}`) ? 'animate-fade-in-up' : 'opacity-0'}`}
//                 style={{ 
//                   animationDelay: `${0.05 * index}s`,
//                   transform: `perspective(1000px) rotateX(0deg) rotateY(0deg)`,
//                   transformStyle: 'preserve-3d'
//                 }}
//                 onMouseMove={(e) => {
//                   const card = e.currentTarget;
//                   const rect = card.getBoundingClientRect();
//                   const x = e.clientX - rect.left;
//                   const y = e.clientY - rect.top;
//                   const centerX = rect.width / 2;
//                   const centerY = rect.height / 2;
//                   const rotateX = (y - centerY) / 10;
//                   const rotateY = (centerX - x) / 10;
                  
//                   card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
//                 }}
//               >
//                 <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${tech.color} flex items-center justify-center mb-4 shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 relative`}>
//                   {/* 3D effect for icon */}
//                   <div className="absolute inset-0 rounded-full blur-sm bg-white opacity-30 scale-75 transform -translate-y-1 -translate-x-1"></div>
//                   <div className="relative z-10 w-10 h-10 filter drop-shadow-lg transform group-hover:scale-110 transition-transform">
//                     {/* Placeholder icon */}
//                     <div className="w-full h-full bg-white/90 rounded-md flex items-center justify-center text-lg font-bold">
//                       {/* {tech.name.charAt(0)} */}
//                       {/* <img src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain" /> */}
                      
//                     </div>
//                   </div>
//                 </div>
                
//                 <h3 className="text-center font-medium text-white group-hover:text-blue-400 transition-colors duration-300">{tech.name}</h3>
//                 <p className="text-center text-xs text-gray-400 mt-1">{tech.category}</p>
                
//                 {/* Highlight effect on hover */}
//                 <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-600/0 via-blue-600/5 to-purple-600/0 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* CSS animations */}
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% {
//             transform: translateY(0) translateX(0);
//           }
//           25% {
//             transform: translateY(-20px) translateX(10px);
//           }
//           50% {
//             transform: translateY(0) translateX(20px);
//           }
//           75% {
//             transform: translateY(20px) translateX(10px);
//           }
//         }
        
//         .animate-fade-in-up {
//           animation: fadeInUp 0.6s ease forwards;
//         }
        
//         .animate-width {
//           animation: widthAnimate 0.8s ease forwards;
//         }
        
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         @keyframes widthAnimate {
//           from {
//             width: 0;
//           }
//           to {
//             width: 6rem;
//           }
//         }
        
//         .delay-200 {
//           animation-delay: 0.2s;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default DevOpsPortfolio;

// import React, { useState, useEffect } from 'react';

// const DevOpsPortfolio = () => {
//   const [animatedItems, setAnimatedItems] = useState([]);
  
//   // Sample data for technologies
//   const technologies = [
//     { name: "React", category: "Frontend", color: "from-blue-600 to-cyan-500" },
//     { name: "Vue", category: "Frontend", color: "from-green-600 to-emerald-500" },
//     { name: "Angular", category: "Frontend", color: "from-red-600 to-rose-500" },
//     { name: "Node.js", category: "Backend", color: "from-green-700 to-lime-600" },
//     { name: "Python", category: "Backend", color: "from-blue-700 to-indigo-600" },
//     { name: "MongoDB", category: "Database", color: "from-green-600 to-green-500" },
//     { name: "PostgreSQL", category: "Database", color: "from-blue-700 to-indigo-700" },
//     { name: "Docker", category: "DevOps", color: "from-blue-600 to-cyan-600" },
//     { name: "AWS", category: "Cloud", color: "from-orange-600 to-yellow-500" },
//     { name: "Firebase", category: "Backend", color: "from-yellow-600 to-orange-500" },
//     { name: "TypeScript", category: "Language", color: "from-blue-700 to-blue-500" },
//     { name: "Figma", category: "Design", color: "from-purple-600 to-fuchsia-500" },
//   ];

//   useEffect(() => {
//     // Intersection Observer for scroll animations
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           setAnimatedItems(prev => [...prev, entry.target.id]);
//         }
//       });
//     }, { threshold: 0.1 });

//     // Observe all elements with animate-on-scroll class
//     document.querySelectorAll('.animate-on-scroll').forEach(element => {
//       observer.observe(element);
//     });

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section id="technologies" className="py-24 bg-gray-950 relative overflow-hidden">
//       {/* Dark radial gradient background with depth */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#111927_0%,#0c111b_100%)]"></div>
      
//       {/* Subtle grid lines */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
//       {/* Glowing accent points */}
//       <div className="absolute inset-0 overflow-hidden">
//         {[...Array(8)].map((_, i) => (
//           <div 
//             key={i}
//             className="absolute w-1 h-1 rounded-full bg-blue-500 animate-pulse"
//             style={{
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//               boxShadow: '0 0 20px 5px rgba(59, 130, 246, 0.5)',
//               animationDuration: `${3 + Math.random() * 2}s`,
//               animationDelay: `${Math.random() * 2}s`
//             }}
//           ></div>
//         ))}
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         <div className="mb-16 animate-on-scroll" id="tech-header">
//           <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 ${animatedItems.includes('tech-header') ? 'animate-fade-in-up' : 'opacity-0'}`}>
//             Technologies & Tools
//           </h2>
//           <div className={`w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mt-4 ${animatedItems.includes('tech-header') ? 'animate-width' : 'w-0'}`}></div>
//         </div>

//         <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8">
//           {technologies.map((tech, index) => (
//             <div key={index} className="animate-on-scroll" id={`tech-${index}`}>
//               <div 
//                 className={`flex flex-col items-center group
//                 ${animatedItems.includes(`tech-${index}`) ? 'animate-fade-in-up' : 'opacity-0'}`}
//                 style={{ 
//                   animationDelay: `${0.05 * index}s`,
//                 }}
//               >
//                 {/* 3D Icon Container */}
//                 <div className="relative mb-3 w-16 h-16 md:w-20 md:h-20">
//                   {/* Base layer - dark gradient */}
//                   <div className="absolute inset-0 rounded-full bg-gray-800 transform translate-y-1"></div>
                  
//                   {/* Middle layer - accent color */}
//                   <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${tech.color} opacity-60 blur-sm transform -translate-y-1 group-hover:opacity-80 transition-all duration-300`}></div>
                  
//                   {/* Top layer - icon container with 3D effect */}
//                   <div className="absolute inset-0 rounded-full bg-gray-900 flex items-center justify-center transform transition-transform duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_10px_25px_-5px_rgba(59,130,246,0.4)]">
//                     {/* White Icon (Placeholder) */}
//                     <div className="w-8 h-8 md:w-10 md:h-10 text-white transform transition-transform duration-300 group-hover:scale-110">
//                       {/* Icon placeholder - replace with your actual white icons */}
//                       <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
//                         {tech.name === "React" && (
//                           <path 
//                             d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z" 
//                             fill="currentColor"
//                           />
//                         )}
//                         <path 
//                           fillRule="evenodd" 
//                           clipRule="evenodd" 
//                           d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM12 20C7.582 20 4 16.418 4 12C4 7.582 7.582 4 12 4C16.418 4 20 7.582 20 12C20 16.418 16.418 20 12 20Z" 
//                           fill="currentColor" 
//                         />
//                       </svg>
//                     </div>
//                   </div>
                  
//                   {/* Glow effect on hover */}
//                   <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-70 transition-opacity duration-300" 
//                     style={{
//                       background: `radial-gradient(circle at center, ${tech.name === "React" ? "rgba(59, 130, 246, 0.3)" : "rgba(139, 92, 246, 0.3)"} 0%, transparent 70%)`,
//                       transform: "scale(1.5)"
//                     }}>
//                   </div>
//                 </div>
                
//                 {/* Technology Name */}
//                 <span className="text-gray-300 text-center font-medium text-sm group-hover:text-white transition-colors duration-300">{tech.name}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* CSS animations */}
//       <style jsx>{`
//         .animate-fade-in-up {
//           animation: fadeInUp 0.6s ease forwards;
//         }
        
//         .animate-width {
//           animation: widthAnimate 0.8s ease forwards;
//         }
        
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         @keyframes widthAnimate {
//           from {
//             width: 0;
//           }
//           to {
//             width: 6rem;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default DevOpsPortfolio;



// import React, { useState, useEffect, useRef } from 'react';
// import { motion } from 'framer-motion';

// const DevOpsPortfolio = () => {
//   const [animatedItems, setAnimatedItems] = useState([]);
//   const globeRef = useRef(null);

//   // Sample data for technologies
//   const technologies = [
//     { name: "React", color: "#61DAFB" },
//     { name: "Node.js", color: "#68A063" },
//     { name: "Python", color: "#3776AB" },
//     { name: "MongoDB", color: "#47A248" },
//     { name: "AWS", color: "#FF9900" },
//     { name: "Docker", color: "#2496ED" },
//     { name: "TypeScript", color: "#3178C6" },
//     { name: "GraphQL", color: "#E535AB" },
//     { name: "Next.js", color: "#000000" },
//     { name: "Tailwind CSS", color: "#38B2AC" },
//     { name: "Kubernetes", color: "#326CE5" },
//     { name: "Figma", color: "#F24E1E" }
//   ];

//   useEffect(() => {
//     // Observer for scroll animations
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           setAnimatedItems(prev => [...prev, entry.target.id]);
//         }
//       });
//     }, { threshold: 0.1 });

//     // Observe all elements with the animate-on-scroll class
//     document.querySelectorAll('.animate-on-scroll').forEach(item => {
//       observer.observe(item);
//     });

//     // Animation for the globe
//     if (globeRef.current) {
//       const rotateGlobe = () => {
//         const globe = globeRef.current;
//         if (!globe) return;
        
//         requestAnimationFrame(rotateGlobe);
//       };
      
//       rotateGlobe();
//     }

//     return () => {
//       document.querySelectorAll('.animate-on-scroll').forEach(item => {
//         observer.unobserve(item);
//       });
//     };
//   }, []);

//   return (
//     <section id="technologies" className="py-24 bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden relative">
//       {/* Background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-0 left-0 w-full h-full">
//           {/* Animated grid */}
//           <div className="absolute inset-0 opacity-10">
//             <div className="h-full w-full bg-black">
//               {Array.from({ length: 10 }).map((_, i) => (
//                 <div key={i} className="absolute h-px bg-blue-500 opacity-20 w-full" style={{ top: `${i * 10}%` }}></div>
//               ))}
//               {Array.from({ length: 10 }).map((_, i) => (
//                 <div key={i} className="absolute w-px bg-blue-500 opacity-20 h-full" style={{ left: `${i * 10}%` }}></div>
//               ))}
//             </div>
//           </div>
          
//           {/* Floating particles */}
//           {Array.from({ length: 20 }).map((_, i) => (
//             <div 
//               key={i}
//               className="absolute rounded-full bg-blue-500 opacity-20 animate-float"
//               style={{
//                 width: Math.random() * 10 + 2 + 'px',
//                 height: Math.random() * 10 + 2 + 'px',
//                 top: Math.random() * 100 + '%',
//                 left: Math.random() * 100 + '%',
//                 animationDelay: Math.random() * 5 + 's',
//                 animationDuration: Math.random() * 10 + 10 + 's'
//               }}
//             ></div>
//           ))}
//         </div>
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         <motion.div 
//           className="mb-24 flex flex-col items-center animate-on-scroll" 
//           id="tech-header"
//           initial={{ opacity: 0, y: 50 }}
//           animate={animatedItems.includes('tech-header') ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.5 }}
//         >
//           <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
//             Technologies & Tools
//           </h2>
//           <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mb-8"></div>
//           <p className="text-xl text-gray-300 text-center max-w-2xl">
//             Our tech stack powers innovative solutions with cutting-edge capabilities
//           </p>
//         </motion.div>

//         {/* 3D Globe with orbiting technologies */}
//         <div className="relative w-full h-96 md:h-screen max-h-[600px] flex items-center justify-center mb-16">
//           {/* The central globe */}
//           <motion.div 
//             ref={globeRef}
//             className="relative w-40 h-40 md:w-64 md:h-64"
//             initial={{ opacity: 0, scale: 0.5 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1, delay: 0.2 }}
//           >
//             {/* Globe layers */}
//             <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-900 to-indigo-900 opacity-30"></div>
//             <div className="absolute inset-0 rounded-full border-2 border-blue-500 opacity-50 animate-pulse"></div>
//             <div className="absolute inset-0 rounded-full border-t-2 border-indigo-400 animate-spin" style={{ animationDuration: '15s' }}></div>
//             <div className="absolute inset-0 rounded-full border-l-2 border-purple-400 animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }}></div>
            
//             {/* Latitude lines */}
//             {Array.from({ length: 5 }).map((_, i) => (
//               <div 
//                 key={i} 
//                 className="absolute w-full border-t border-blue-500 opacity-30"
//                 style={{ top: `${20 + i * 15}%`, left: 0, transform: `scaleX(${Math.cos((i - 2) * 0.3)})`}}
//               ></div>
//             ))}
            
//             {/* Longitude lines */}
//             <div className="absolute h-full w-full">
//               {Array.from({ length: 6 }).map((_, i) => (
//                 <div 
//                   key={i} 
//                   className="absolute h-full border-l border-blue-500 opacity-30 top-0"
//                   style={{ left: `${i * 20}%`, transform: `rotateZ(${i * 30}deg)`}}
//                 ></div>
//               ))}
//             </div>
            
//             {/* Glowing core */}
//             <div className="absolute inset-6 md:inset-12 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 opacity-40 blur-sm animate-pulse"></div>
//             <div className="absolute inset-10 md:inset-16 rounded-full bg-gradient-to-br from-blue-300 to-indigo-500 opacity-50 blur-sm animate-pulse" style={{ animationDelay: '0.5s' }}></div>
//             <div className="absolute inset-14 md:inset-20 rounded-full bg-gradient-to-br from-blue-200 to-indigo-400 opacity-60 blur-sm animate-pulse" style={{ animationDelay: '1s' }}></div>
//           </motion.div>
          
//           {/* Orbiting technology items */}
//           {technologies.map((tech, index) => {
//             // Calculate position on different orbit rings
//             const orbitSize = index % 3 === 0 ? 1.2 : (index % 3 === 1 ? 1.5 : 1.8);
//             const angle = (index / technologies.length) * Math.PI * 2;
//             const delay = index * 0.2;
//             const duration = 120 + index * 10;
//             const reversed = index % 2 === 0;
            
//             return (
//               <motion.div
//                 key={index}
//                 className="absolute"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 1, delay: 0.5 + delay }}
//                 style={{
//                   left: '50%',
//                   top: '50%',
//                 }}
//               >
//                 <motion.div
//                   className="relative flex flex-col items-center justify-center"
//                   style={{
//                     x: -20, // Center the item
//                     y: -20, // Center the item
//                   }}
//                   animate={{
//                     rotate: reversed ? 360 : -360,
//                   }}
//                   transition={{
//                     duration: duration,
//                     repeat: Infinity,
//                     ease: "linear"
//                   }}
//                 >
//                   <motion.div
//                     style={{
//                       x: `calc(${orbitSize * 120}px * cos(${angle}rad))`,
//                       y: `calc(${orbitSize * 120}px * sin(${angle}rad))`,
//                     }}
//                     animate={{
//                       rotate: reversed ? -360 : 360, // Counter-rotate to keep text upright
//                     }}
//                     transition={{
//                       duration: duration,
//                       repeat: Infinity,
//                       ease: "linear"
//                     }}
//                   >
//                     <div className="relative group">
//                       {/* Technology dot */}
//                       <div 
//                         className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-r shadow-lg flex items-center justify-center group-hover:scale-125 transition-transform duration-300"
//                         style={{ backgroundImage: `linear-gradient(to right, ${tech.color}88, ${tech.color}55)` }}
//                       >
//                         <div className="w-4 h-4 md:w-6 md:h-6 rounded-full animate-pulse" style={{ backgroundColor: tech.color, opacity: 0.7 }}></div>
//                       </div>
                      
//                       {/* Technology name */}
//                       <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                         <div className="whitespace-nowrap text-center">
//                           <span className="text-xs md:text-sm font-medium px-2 py-1 rounded-full bg-gray-800 bg-opacity-80 text-white">
//                             {tech.name}
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </motion.div>
//                 </motion.div>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* Technology tags below */}
//         <motion.div 
//           className="flex flex-wrap justify-center gap-4 mt-8"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 1.5 }}
//         >
//           {technologies.map((tech, index) => (
//             <motion.div
//               key={index}
//               className="px-4 py-2 rounded-full bg-gray-800 bg-opacity-60 backdrop-blur-sm border border-gray-700 hover:border-blue-500 transition-colors duration-300 cursor-pointer group"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <span className="text-sm md:text-base font-medium group-hover:text-blue-400 transition-colors duration-300" style={{ color: tech.color }}>
//                 {tech.name}
//               </span>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>

//       {/* Add these keyframes to your CSS or styled-components */}
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0) translateX(0); }
//           25% { transform: translateY(-15px) translateX(10px); }
//           50% { transform: translateY(-5px) translateX(-15px); }
//           75% { transform: translateY(10px) translateX(5px); }
//         }
//         .animate-float {
//           animation: float 20s ease-in-out infinite;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default DevOpsPortfolio;

// import React, { useState, useEffect } from 'react';
// import { Globe, Code, Database, Server, Cloud, ShieldCheck } from 'lucide-react';

// const DevOpsPortfolio = () => {
//   const [animatedItems, setAnimatedItems] = useState([]);
  
//   // Sample data for technologies
//   const technologies = [
//     { name: "React", category: "Frontend", icon: <Code className="text-blue-500" /> },
//     { name: "Node.js", category: "Backend", icon: <Server className="text-green-500" /> },
//     { name: "MongoDB", category: "Database", icon: <Database className="text-green-300" /> },
//     { name: "AWS", category: "Cloud", icon: <Cloud className="text-orange-400" /> },
//     { name: "Docker", category: "DevOps", icon: <ShieldCheck className="text-blue-400" /> },
//     { name: "Global API", category: "Integration", icon: <Globe className="text-indigo-500" /> },
//   ];

//   useEffect(() => {
//     // Observer for scroll animations
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           setAnimatedItems(prev => [...prev, entry.target.id]);
//         }
//       });
//     }, { threshold: 0.1 });

//     // Observe all elements with animate-on-scroll class
//     document.querySelectorAll('.animate-on-scroll').forEach(element => {
//       observer.observe(element);
//     });

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section id="technologies" className="py-24 bg-gray-900 relative overflow-hidden">
//       {/* Background animated dots */}
//       <div className="absolute inset-0 bg-[radial-gradient(#1a237e_1px,transparent_1px)] bg-[length:20px_20px] opacity-10"></div>
      
//       {/* Technologies heading with animation */}
//       <div className="container mx-auto px-4">
//         <div className="mb-16 animate-on-scroll relative z-10" id="tech-header">
//           <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600 ${
//             animatedItems.includes('tech-header') ? 'animate-fade-in-up' : 'opacity-0'
//           }`}>
//             Technologies & Tools
//           </h2>
//           <div className={`w-20 h-1 bg-blue-600 ${
//             animatedItems.includes('tech-header') ? 'animate-width' : 'w-0'
//           }`}></div>
//           <p className={`text-gray-300 max-w-2xl mt-4 ${
//             animatedItems.includes('tech-header') ? 'animate-fade-in-up delay-100' : 'opacity-0'
//           }`}>
//             Leveraging cutting-edge tools to build powerful solutions
//           </p>
//         </div>

//         {/* 3D Tech Icons Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-10">
//           {technologies.map((tech, index) => (
//             <div
//               key={index}
//               className="animate-on-scroll group flex flex-col items-center"
//               id={`tech-${index}`}
//             >
//               <div
//                 className={`relative flex items-center justify-center ${
//                   animatedItems.includes(`tech-${index}`) ? 'animate-float' : 'opacity-0'
//                 }`}
//                 style={{ animationDelay: `${0.1 * index}s` }}
//               >
//                 {/* 3D Icon with glow effect */}
//                 <div className="w-20 h-20 relative">
//                   {/* Glow effect */}
//                   <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/30 to-indigo-600/30 blur-xl transform -translate-y-2 group-hover:blur-2xl transition-all duration-500"></div>
                  
//                   {/* 3D Icon Container */}
//                   <div className="w-full h-full rounded-full bg-gray-800 border border-gray-700 group-hover:border-blue-500 flex items-center justify-center shadow-lg relative z-10 transform group-hover:rotate-12 transition-all duration-300 p-4">
//                     <div className="text-3xl">
//                       {tech.icon}
//                     </div>
//                   </div>
                  
//                   {/* Reflection */}
//                   <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4/5 h-1 bg-blue-500/30 rounded-full blur-sm"></div>
//                 </div>
                
//                 {/* Name and category with hover effects */}
//                 <div className="mt-4 text-center transform group-hover:translate-y-1 transition-transform">
//                   <h3 className="font-medium text-white text-lg">{tech.name}</h3>
//                   <p className="text-xs text-blue-300/80 mt-1">{tech.category}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* CSS Animations */}
//       <style jsx>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         @keyframes width {
//           from { width: 0; }
//           to { width: 80px; }
//         }
        
//         @keyframes float {
//           0% {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           60% {
//             opacity: 1;
//             transform: translateY(-10px);
//           }
//           80% {
//             transform: translateY(5px);
//           }
//           100% {
//             transform: translateY(0);
//           }
//         }
        
//         .animate-fade-in-up {
//           animation: fadeInUp 0.8s ease forwards;
//         }
        
//         .animate-width {
//           animation: width 0.8s ease forwards;
//         }
        
//         .animate-float {
//           animation: float 1s ease forwards;
//         }
        
//         .delay-100 {
//           animation-delay: 0.1s;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default DevOpsPortfolio;

import React, { useState, useEffect } from 'react';

const DevOpsPortfolio = () => {
  const [animatedItems, setAnimatedItems] = useState([]);
  
  // Sample data for technologies with Boxicons classes
  const technologies = [
    { name: "React", category: "Frontend", iconClass: "bx bxl-react", color: "#61DAFB" },
    { name: "Node.js", category: "Backend", iconClass: "bx bxl-nodejs", color: "#339933" },
    { name: "MongoDB", category: "Database", iconClass: "bx bxl-mongodb", color: "#47A248" },
    { name: "AWS", category: "Cloud", iconClass: "bx bxl-aws", color: "#FF9900" },
    { name: "Docker", category: "DevOps", iconClass: "bx bxl-docker", color: "#2496ED" },
    { name: "Global API", category: "Integration", icon: "custom-globe" },
    { name: "React", category: "Frontend", iconClass: "bx bxl-react", color: "#61DAFB" },
    { name: "Node.js", category: "Backend", iconClass: "bx bxl-nodejs", color: "#339933" },
    { name: "MongoDB", category: "Database", iconClass: "bx bxl-mongodb", color: "#47A248" },
    { name: "AWS", category: "Cloud", iconClass: "bx bxl-aws", color: "#FF9900" },
    { name: "Docker", category: "DevOps", iconClass: "bx bxl-docker", color: "#2496ED" },
    { name: "Global API", category: "Integration", icon: "custom-globe" },
  ];

  useEffect(() => {
    // Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setAnimatedItems(prev => [...prev, entry.target.id]);
        }
      });
    }, { threshold: 0.1 });

    // Observe all elements with animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Function to render the appropriate icon
const renderIcon = (tech) => {
  return <i className={`${tech.iconClass} text-3xl`} style={{ color: tech.color }}></i>;
};

return (
  <div className="relative min-h-screen font-sans text-gray-100">
  <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black"></div>
      <div className="fixed inset-0 z-0 bg-[url('/api/placeholder/400/400')] bg-repeat opacity-5"></div>
		<main className="container mx-auto px-4 pt-24 pb-12">
  <section id="technologies" className="py-24 relative overflow-hidden">
    
    {/* Technologies heading with animation */}
    <div className="container mx-auto px-4">
      <div className="mb-16 animate-on-scroll relative z-10" id="tech-header">
        <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600 ${
          animatedItems.includes('tech-header') ? 'animate-fade-in-up' : 'opacity-0'
        }`}>
          Technologies & Tools
        </h2>
        <div className={`w-20 h-1 bg-blue-600 ${
          animatedItems.includes('tech-header') ? 'animate-width' : 'w-0'
        }`}></div>
        <p className={`text-gray-300 max-w-2xl mt-4 ${
          animatedItems.includes('tech-header') ? 'animate-fade-in-up delay-100' : 'opacity-0'
        }`}>
          Leveraging cutting-edge tools to build powerful solutions
        </p>
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
                animatedItems.includes(`tech-${index}`) ? 'animate-float' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {/* 3D Icon Container */}
              <div className="relative w-24 h-24 flex items-center justify-center group-hover:transform group-hover:rotate-y-12 transition-all duration-700">
                {/* Shadow beneath */}
                <div className="absolute bottom-0 w-16 h-2 bg-blue-600/20 rounded-full blur-md transform translate-y-2 group-hover:bg-blue-600/40 group-hover:w-20 transition-all duration-500"></div>
                
                {/* 3D Platform */}
                {/* <div className="absolute bottom-0 w-20 h-1 bg-gradient-to-r from-blue-600/40 to-indigo-600/40 rounded-full"></div> */}
                
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
              
              {/* Name and category with no separation line */}
              <div className="text-center mt-2">
                <h3 className="font-medium text-white text-lg group-hover:text-blue-400 transition-colors duration-300">{tech.name}</h3>
                <p className="text-xs text-blue-300/80 mt-1">{tech.category}</p>
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
      
      @keyframes float {
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
      
      .animate-float {
        animation: float 1s ease forwards;
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
  </main>
  </div>
  );
};

export default DevOpsPortfolio;
