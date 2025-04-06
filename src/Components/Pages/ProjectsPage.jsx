// import React, { useState, useEffect } from 'react';
// import { ArrowLeft, ChevronRight, ExternalLink, Github, Menu, X, Home, User, Code, FolderGit2, Mail } from 'lucide-react';


// import Cloud from '/src/assets/Cloud.jpg';
// import Driveaze2 from '/src/assets/Driveaze2.png';
// import Driveaze from '/src/assets/Driveaze.png';
// import akahubhome from '/src/assets/akahubhome.jpg';
// import AkaHub from '/src/assets/AkaHub.png';



// const ProjectsPage = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState('');
//   const [animatedItems, setAnimatedItems] = useState([]);

//   // Navigation links - same as your landing page
//   const navLinks = [
//     { name: "Home", section: "home", icon: <Home size={16} /> },
//     { name: "About", section: "about", icon: <User size={16} /> },
//     { name: "Skills", section: "skills", icon: <Code size={16} /> },
//     { name: "Projects", section: "projects", icon: <FolderGit2 size={16} /> },
//     { name: "Contact", section: "contact", icon: <Mail size={16} /> }
//   ];

//   // Scroll to section function
//   const scrollToSection = (sectionId) => {
//     setIsMenuOpen(false);
//     // Logic to scroll to section or navigate back to landing page with section hash
//     if (sectionId !== 'projects') {
//       window.location.href = `/#${sectionId}`;
//     }
//   };

//   // Animation logic for page elements
//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           setAnimatedItems(prev => [...prev, entry.target.id]);
//         }
//       });
//     }, { threshold: 0.1 });

//     document.querySelectorAll('.animate-on-scroll').forEach(item => {
//       observer.observe(item);
//     });

//     return () => {
//       document.querySelectorAll('.animate-on-scroll').forEach(item => {
//         observer.unobserve(item);
//       });
//     };
//   }, []);

//   // Expanded project data with more details
//   const allProjects = [
//     // Your existing projects from landing page
//     // Example:
//     {
//       title: "Project 1",
//       description: "This is a sample project description that showcases the functionality and purpose of the project. It explains what problems it solves and its main features.",
//       longDescription: "This is a more detailed description of the project that explains the architecture, design decisions, challenges faced during development, and how they were overcome. It also highlights the unique aspects of the project and what was learned during its creation.",
//       technologies: ["React", "Node.js", "MongoDB", "Express"],
//       features: [
//         "Feature 1: User authentication with JWT",
//         "Feature 2: Real-time data updates with WebSockets",
//         "Feature 3: Responsive design for all devices",
//         "Feature 4: Data visualization with D3.js"
//       ],
//       challenges: "The main challenge was implementing real-time collaboration features while maintaining performance. This was solved by optimizing the WebSocket connections and implementing efficient data caching.",
//       link: "/project1",
//       github: "https://github.com/yourusername/project1",
//       demo: "https://demo-project1.com",
//       icon: Driveaze, // Project logo
//       uiImage: Driveaze2, // Project screenshot
//       timeline: "Jan 2024 - Mar 2024",
//       role: "Lead Developer"
//     },
//     // Add 8 more projects here with similar structure
//     {
//       title: "Project 2",
//       description: "An AI-powered analytics dashboard that helps businesses track customer engagement and optimize marketing strategies.",
//       longDescription: "This comprehensive analytics dashboard uses machine learning algorithms to process customer data and provide actionable insights. The dashboard features customizable widgets, automated reporting, and predictive analytics to help businesses make data-driven decisions.",
//       technologies: ["React", "Python", "TensorFlow", "AWS", "PostgreSQL"],
//       features: [
//         "Feature 1: Predictive customer behavior analysis",
//         "Feature 2: Customizable dashboard widgets",
//         "Feature 3: Automated weekly/monthly reports",
//         "Feature 4: Integration with CRM platforms"
//       ],
//       challenges: "Implementing efficient data processing pipelines for large datasets while maintaining real-time dashboard updates was challenging. Solved by using AWS Lambda for serverless computing and optimized database queries.",
//       link: "/project2",
//       github: "https://github.com/yourusername/project2",
//       demo: "https://demo-project2.com",
//       icon: "/api/placeholder/80/80",
//       uiImage: "/api/placeholder/400/400",
//       timeline: "Apr 2024 - Jun 2024",
//       role: "Full Stack Developer"
//     },
//     {
//       title: "Project 3",
//       description: "A blockchain-based supply chain management system that ensures transparency and traceability for products.",
//       longDescription: "This supply chain management system leverages blockchain technology to create an immutable record of product journeys from manufacturer to consumer. It includes QR code scanning for instant verification, smart contracts for automated processes, and a consumer-facing mobile app for product authentication.",
//       technologies: ["Solidity", "Ethereum", "React Native", "Node.js", "IPFS"],
//       features: [
//         "Feature 1: Immutable product history tracking",
//         "Feature 2: QR code generation and scanning",
//         "Feature 3: Smart contracts for automated payments",
//         "Feature 4: Consumer verification mobile app"
//       ],
//       challenges: "Balancing on-chain and off-chain data storage while maintaining system performance and minimizing gas costs. Implemented a hybrid solution using IPFS for document storage and Ethereum for verification proofs.",
//       link: "/project3",
//       github: "https://github.com/yourusername/project3",
//       demo: "https://demo-project3.com",
//       icon: "/api/placeholder/80/80",
//       uiImage: "/api/placeholder/400/400",
//       timeline: "Jul 2024 - Sep 2024",
//       role: "Blockchain Developer"
//     },
//     // Continue with 6 more projects...
//     {
//       title: "Project 4",
//       description: "An e-learning platform with interactive coding exercises, video tutorials, and personalized learning paths.",
//       longDescription: "This e-learning platform transforms how programming is taught through interactive exercises and real-time feedback. It features an in-browser code editor with syntax highlighting, integrated testing, and AI-powered code reviews to help students master programming concepts at their own pace.",
//       technologies: ["Vue.js", "Firebase", "Monaco Editor", "Python", "Docker"],
//       features: [
//         "Feature 1: Interactive in-browser code editor",
//         "Feature 2: Automated code testing and feedback",
//         "Feature 3: Progress tracking and learning paths",
//         "Feature 4: Video tutorials with timestamped notes"
//       ],
//       challenges: "Creating a secure environment for executing user code while preventing malicious inputs. Solved using containerized execution environments with Docker and implementing strict resource limitations.",
//       link: "/project4",
//       github: "https://github.com/yourusername/project4",
//       demo: "https://demo-project4.com",
//       icon: "/api/placeholder/80/80",
//       uiImage: "/api/placeholder/400/400",
//       timeline: "Oct 2024 - Dec 2024",
//       role: "Frontend Developer & UX Designer"
//     },
//     {
//       title: "Project 5",
//       description: "A sustainable smart home automation system that reduces energy consumption while maintaining comfort.",
//       longDescription: "This smart home system uses IoT sensors and machine learning to optimize energy usage based on occupant behavior patterns. It includes temperature control, lighting automation, and appliance management with a focus on reducing carbon footprint without sacrificing comfort or convenience.",
//       technologies: ["IoT", "Raspberry Pi", "TensorFlow Lite", "Flutter", "MQTT"],
//       features: [
//         "Feature 1: AI-powered energy optimization",
//         "Feature 2: Cross-platform mobile/web dashboard",
//         "Feature 3: Voice control integration",
//         "Feature 4: Energy usage analytics and suggestions"
//       ],
//       challenges: "Integrating with various third-party smart home devices while maintaining a unified user experience. Created a middleware layer with standardized APIs and device-specific adapters.",
//       link: "/project5",
//       github: "https://github.com/yourusername/project5",
//       demo: "https://demo-project5.com",
//       icon: "/api/placeholder/80/80",
//       uiImage: "/api/placeholder/400/400",
//       timeline: "Jan 2023 - Mar 2023",
//       role: "IoT Developer"
//     },
//     {
//       title: "Project 6",
//       description: "A privacy-focused social media platform that gives users complete control over their data.",
//       longDescription: "This social media platform reimagines online social interaction with a focus on user privacy and data ownership. It features end-to-end encryption for messages, decentralized content storage, and granular privacy controls that allow users to specify exactly who can see each piece of content and for how long.",
//       technologies: ["React", "GraphQL", "PostgreSQL", "Redis", "WebRTC"],
//       features: [
//         "Feature 1: End-to-end encrypted messaging",
//         "Feature 2: Self-destructing content options",
//         "Feature 3: Decentralized content storage",
//         "Feature 4: Offline-first functionality"
//       ],
//       challenges: "Balancing privacy features with user experience and performance. Implemented efficient client-side encryption while maintaining responsive UI and developing a hybrid storage approach for seamless offline usage.",
//       link: "/project6",
//       github: "https://github.com/yourusername/project6",
//       demo: "https://demo-project6.com",
//       icon: "/api/placeholder/80/80",
//       uiImage: "/api/placeholder/400/400",
//       timeline: "Apr 2023 - Jul 2023",
//       role: "Lead Developer"
//     },
//     {
//       title: "Project 7",
//       description: "An augmented reality museum guide that enhances visitor experiences with interactive exhibits.",
//       longDescription: "This AR museum application transforms the traditional museum experience by overlaying digital information on physical exhibits. Visitors can use their smartphones to scan artifacts and immediately access detailed information, historical context, 3D reconstructions, and interactive storytelling elements.",
//       technologies: ["Unity", "ARCore", "ARKit", "C#", "Blender"],
//       features: [
//         "Feature 1: Exhibit recognition and information overlay",
//         "Feature 2: 3D artifact reconstructions",
//         "Feature 3: Interactive historical timelines",
//         "Feature 4: Guided tours with virtual narrators"
//       ],
//       challenges: "Achieving reliable object recognition across various lighting conditions and perspectives. Implemented a hybrid approach using both marker-based and markerless AR technology with machine learning for object identification.",
//       link: "/project7",
//       github: "https://github.com/yourusername/project7",
//       demo: "https://demo-project7.com",
//       icon: "/api/placeholder/80/80",
//       uiImage: "/api/placeholder/400/400",
//       timeline: "Aug 2023 - Oct 2023",
//       role: "AR Developer"
//     },
//     {
//       title: "Project 8",
//       description: "A financial management application for freelancers that simplifies invoicing, expense tracking, and tax preparation.",
//       longDescription: "This comprehensive financial tool helps freelancers manage their business finances with minimal effort. It features automated invoice generation, receipt scanning with OCR, expense categorization, tax estimation, and financial reporting designed specifically for independent contractors and small business owners.",
//       technologies: ["React Native", "Node.js", "MongoDB", "Tesseract OCR", "Stripe"],
//       features: [
//         "Feature 1: Automated invoice generation and tracking",
//         "Feature 2: Receipt scanning with expense categorization",
//         "Feature 3: Tax liability estimation and reporting",
//         "Feature 4: Multi-currency support and exchange rate tracking"
//       ],
//       challenges: "Creating accurate OCR for receipt scanning across various formats and qualities. Developed a machine learning model trained specifically on receipt data combined with manual correction options for optimal accuracy.",
//       link: "/project8",
//       github: "https://github.com/yourusername/project8",
//       demo: "https://demo-project8.com",
//       icon: "/api/placeholder/80/80",
//       uiImage: "/api/placeholder/400/400",
//       timeline: "Nov 2023 - Jan 2024",
//       role: "Mobile Developer"
//     },
//     {
//       title: "Project 9",
//       description: "A collaborative music production platform that allows musicians to work together remotely in real-time.",
//       longDescription: "This web-based digital audio workstation enables musicians from around the world to collaborate on music projects in real-time. It features synchronized playback, multi-track recording, virtual instruments, audio effects processing, and version control specifically designed for music production.",
//       technologies: ["Web Audio API", "WebRTC", "React", "Node.js", "Redis", "WebSockets"],
//       features: [
//         "Feature 1: Real-time collaborative editing",
//         "Feature 2: Virtual instrument library",
//         "Feature 3: Audio processing with customizable effects",
//         "Feature 4: Project versioning and branching"
//       ],
//       challenges: "Synchronizing audio playback across different devices and network conditions while minimizing latency. Implemented a sophisticated timing system with adaptive buffering and client-side prediction algorithms.",
//       link: "/project9",
//       github: "https://github.com/yourusername/project9",
//       demo: "https://demo-project9.com",
//       icon: "/api/placeholder/80/80",
//       uiImage: "/api/placeholder/400/400",
//       timeline: "Feb 2024 - Present",
//       role: "Audio Software Engineer"
//     }
//   ];

//   return (
//     <div className="relative min-h-screen font-sans text-gray-100">
//       {/* Global Background - Same as landing page */}
//       <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black"></div>
//       <div className="fixed inset-0 z-0 bg-[url('/api/placeholder/400/400')] bg-repeat opacity-5"></div>
           
//       {/* Navigation - Same as landing page */}
//       <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800/40 bg-transparent backdrop-blur-sm">
//         <div className="container mx-auto flex items-center justify-between px-4 py-4">
//           <a href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
//             Virajith Dissanayaka
//           </a>

//           {/* Desktop Navigation */}
//           <div className="hidden space-x-8 md:flex">
//             {navLinks.map(link => (
//               <a
//                 key={link.section}
//                 href={`/#${link.section}`}
//                 onClick={(e) => {
//                   e.preventDefault();
//                   scrollToSection(link.section);
//                 }}
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
//             className="md:hidden text-gray-300 hover:text-white"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="md:hidden bg-gray-800 bg-opacity-95 backdrop-blur-sm">
//             <div className="px-4 py-2 space-y-1">
//               {navLinks.map(link => (
//                 <a
//                   key={link.section}
//                   href={`/#${link.section}`}
//                   onClick={(e) => {
//                     e.preventDefault();
//                     scrollToSection(link.section);
//                   }}
//                   className={`block px-3 py-3 rounded-md flex items-center space-x-2 ${
//                     activeSection === link.section ? 'bg-gray-700 text-blue-400' : 'text-gray-300 hover:bg-gray-700'
//                   }`}
//                 >
//                   {link.icon}
//                   <span>{link.name}</span>
//                 </a>
//               ))}
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Floating particles - Same as landing page */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
//         {[...Array(20)].map((_, i) => {
//           const size = 0.3 + Math.random() * 0.7;
//           const isBlue = Math.random() > 0.5;
//           const glowSize = size * 10;
          
//           return (
//             <div 
//               key={i} 
//               className={`absolute rounded-full ${isBlue ? 'bg-blue-500' : 'bg-white'} animate-float`}
//               style={{ 
//                 width: `${size}px`,
//                 height: `${size}px`,
//                 top: Math.random() * 100 + '%',
//                 left: Math.random() * 100 + '%',
//                 boxShadow: `0 0 ${glowSize}px ${glowSize/3}px ${isBlue ? 'rgba(59, 130, 246, 0.7)' : 'rgba(255, 255, 255, 0.7)'}`, 
//                 animationDelay: Math.random() * 5 + 's',
//                 animationDuration: Math.random() * 10 + 10 + 's' 
//               }}
//             ></div>
//           );
//         })}
//       </div>

//       {/* Main Content */}
//       <main className="container mx-auto px-4 pt-24 pb-12">
//         {/* Back to Home Button */}
//         <div className="py-4 flex items-center">
//           <a 
//             href="/" 
//             className="inline-flex items-center px-4 py-2 bg-gray-800/80 hover:bg-blue-800/40 rounded-full text-white font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/20 group/back backdrop-blur-sm border border-gray-700/50 hover:border-blue-500"
//           >
//             <ArrowLeft className="mr-2 group-hover/back:-translate-x-1 transition-transform" size={18} />
//             Back to Home
//           </a>
//         </div>
        
//         {/* Projects Header */}
//         <section className="py-12 relative">
//           <div className="container mx-auto px-4">
//             <div className="mb-16 animate-on-scroll" id="all-projects-header">
//               <div className="flex items-center mb-4">
//                 <h1 className={`text-5xl md:text-6xl font-bold pb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600 ${animatedItems.includes('all-projects-header') ? 'animate-fade-in-right1' : 'opacity-0'}`}>
//                   All Projects
//                 </h1>
//               </div>
//               <p className={`text-xl text-gray-300 max-w-3xl ${animatedItems.includes('all-projects-header') ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
//                 Explore my portfolio of projects spanning web development, mobile applications, and emerging technologies
//               </p>
//             </div>

//             {/* Expanded Project Cards */}
//             <div className="space-y-16">
//               {allProjects.map((project, index) => (
//                 <div 
//                   key={index} 
//                   className={`group rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500 transition-all duration-500 animate-on-scroll backdrop-blur-sm bg-gray-800/80 shadow-xl hover:shadow-blue-900/20 hover:shadow-2xl`}
//                   id={`all-project-${index}`}
//                 >
//                   <div className="md:flex">
//                     {/* Project Visual Section */}
//                     <div 
//                       className={`md:w-2/5 h-64 md:h-auto bg-gradient-to-br from-blue-900 via-indigo-900 to-gray-900 relative ${
//                         animatedItems.includes(`all-project-${index}`) ? 'animate-fade-in' : 'opacity-0'
//                       }`} 
//                       style={{ animationDelay: `${0.1 * index}s` }}
//                     >
//                       {/* Background overlay */}
//                       <div className="absolute inset-0 bg-gray-900 opacity-40 group-hover:opacity-10 transition-opacity duration-500"></div>
                      
//                       {/* Project UI image with blur effect if available */}
//                       {project.uiImage && (
//                         <div className="absolute inset-0 overflow-hidden">
//                           <img 
//                             src={project.uiImage} 
//                             alt="" 
//                             className="w-full h-full object-cover opacity-40 blur-[2px]"
//                             aria-hidden="true"
//                           />
//                           <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 via-gray-900/60 to-gray-900/80"></div>
//                         </div>
//                       )}
                      
//                       {/* Project icon/logo */}
//                       <div className="absolute inset-0 flex flex-col items-center justify-center p-6 z-10">
//                         <div className="w-24 h-24 rounded-full bg-blue-600/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500 mb-6">
//                           {project.icon ? (
//                             <img 
//                               src={project.icon} 
//                               alt={`${project.title} logo`} 
//                               className="w-24 h-24 object-contain rounded-full p-2"
//                             />
//                           ) : (
//                             <i className='bx bx-code-block text-[48px]'></i>
//                           )}
//                         </div>
                        
//                         <h2 className="text-3xl font-bold text-white text-center group-hover:text-blue-300 transition-colors duration-300">
//                           {project.title}
//                         </h2>
                        
//                         <div className="flex gap-3 mt-4">
//                           {project.github && (
//                             <a 
//                               href={project.github} 
//                               className="text-gray-400 hover:text-white p-3 bg-gray-800/60 rounded-full hover:bg-blue-900/60 transition-all duration-300 transform hover:scale-110"
//                               aria-label="View GitHub repository"
//                               target="_blank"
//                               rel="noopener noreferrer"
//                             >
//                               <Github size={20} />
//                             </a>
//                           )}
                          
//                           {project.demo && (
//                             <a 
//                               href={project.demo} 
//                               className="text-gray-400 hover:text-white p-3 bg-gray-800/60 rounded-full hover:bg-blue-900/60 transition-all duration-300 transform hover:scale-110"
//                               aria-label="View live demo"
//                               target="_blank"
//                               rel="noopener noreferrer"
//                             >
//                               <ExternalLink size={20} />
//                             </a>
//                           )}
//                         </div>
//                       </div>
//                     </div>
                    
//                     {/* Project Details Section */}
//                     <div 
//                       className={`md:w-3/5 p-8 ${
//                         animatedItems.includes(`all-project-${index}`) ? 'animate-fade-in-up' : 'opacity-0'
//                       }`} 
//                       style={{ animationDelay: `${0.2 + 0.1 * index}s` }}
//                     >
//                       {/* Project metadata */}
//                       <div className="flex flex-wrap justify-between items-center mb-4 text-sm">
//                         <div className="bg-blue-900/30 px-3 py-1 rounded-full text-blue-300 mb-2 md:mb-0">
//                           {project.timeline}
//                         </div>
//                         <div className="bg-indigo-900/30 px-3 py-1 rounded-full text-indigo-300">
//                           {project.role}
//                         </div>
//                       </div>
                      
//                       {/* Project long description */}
//                       <p className="text-gray-300 mb-6">
//                         {project.longDescription}
//                       </p>
                      
//                       {/* Project features */}
//                       <div className="mb-6">
//                         <h3 className="text-lg font-semibold text-blue-400 mb-2">Key Features</h3>
//                         <ul className="space-y-1 text-gray-300">
//                           {project.features.map((feature, i) => (
//                             <li key={i} className="flex items-start">
//                               <span className="text-blue-500 mr-2">•</span>
//                               <span>{feature}</span>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
                      
//                       {/* Project challenges */}
//                       <div className="mb-6">
//                         <h3 className="text-lg font-semibold text-blue-400 mb-2">Challenges & Solutions</h3>
//                         <p className="text-gray-300">
//                           {project.challenges}
//                         </p>
//                       </div>
                      
//                       {/* Project technologies */}
//                       <div className="mb-8">
//                         <h3 className="text-lg font-semibold text-blue-400 mb-2">Technologies Used</h3>
//                         <div className="flex flex-wrap gap-2">
//                           {project.technologies.map((tech, i) => (
//                             <span 
//                               key={i} 
//                               className="px-3 py-1 bg-gray-700/60 hover:bg-blue-800/40 rounded-full text-sm font-medium text-gray-300 hover:text-blue-200 transition-colors duration-300"
//                             >
//                               {tech}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
                      
//                       {/* Project links */}
//                       <div className="flex items-center justify-between">
//                         <a 
//                           href={project.link} 
//                           className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full text-white font-medium hover:from-blue-500 hover:to-indigo-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 group/btn"
//                         >
//                           View Details
//                           <ChevronRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
//                         </a>
                        
//                         {project.demo && (
//                           <a 
//                             href={project.demo} 
//                             className="inline-flex items-center text-gray-300 hover:text-blue-300 transition-colors duration-300"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                           >
//                             <ExternalLink size={16} className="mr-1" />
//                             Live Demo
//                           </a>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
            
//             {/* Back to Top Button */}
//             <div className="mt-16 text-center">
//               <button 
//                 onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//                 className="inline-flex items-center px-6 py-3 bg-gray-800/80 hover:bg-blue-800/40 rounded-full text-white font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/20 group backdrop-blur-sm border border-gray-700/50 hover:border-blue-500"
//               >
//                 Back to Top
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default ProjectsPage;



//2
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { ArrowLeft, Github, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

// const ProjectsPage = () => {
//   const [expandedProject, setExpandedProject] = useState(null);
//   const [visibleProjects, setVisibleProjects] = useState([]);

//   // Sample projects data - replace with your actual projects
//   const allProjects = [
//     {
//       id: 1,
//       title: "AI Chatbot Platform",
//       description: "A conversational AI platform built with React and Node.js that leverages OpenAI's GPT-4 to provide intelligent responses to user queries.",
//       longDescription: "This AI chatbot platform offers a sophisticated interface for natural language interactions. Built with React on the frontend and Node.js on the backend, it integrates OpenAI's GPT-4 API to deliver context-aware responses. Features include conversation history, customizable UI themes, and response optimization for various use cases. The platform also implements user authentication, conversation saving, and export functionality.",
//       technologies: ["React", "Node.js", "Express", "MongoDB", "OpenAI API", "JWT", "Socket.io"],
//       image: "/api/placeholder/600/400", // Replace with your actual image
//       icon: "/api/placeholder/100/100", // Replace with your project icon
//       github: "https://github.com/yourusername/project-name",
//       demo: "https://project-demo-link.com",
//       featured: true
//     },
//     {
//       id: 2,
//       title: "E-commerce Dashboard",
//       description: "A comprehensive dashboard for e-commerce store owners to track sales, inventory, and customer data with real-time analytics.",
//       longDescription: "This e-commerce dashboard provides store owners with a complete overview of their business performance. Built with React and Redux, it features interactive charts and graphs showing sales trends, inventory levels, and customer behavior. The dashboard includes a real-time notification system, automated inventory alerts, and customizable reports. Backend implementation uses Node.js with Express and connects to a PostgreSQL database.",
//       technologies: ["React", "Redux", "Node.js", "Express", "PostgreSQL", "Chart.js", "Tailwind CSS"],
//       image: "/api/placeholder/600/400",
//       icon: "/api/placeholder/100/100",
//       github: "https://github.com/yourusername/ecommerce-dashboard",
//       demo: "https://ecommerce-dashboard-demo.com",
//       featured: true
//     },
//     {
//       id: 3,
//       title: "Portfolio Website",
//       description: "A responsive portfolio website built with React and Tailwind CSS to showcase my projects and skills.",
//       longDescription: "This portfolio website serves as a digital resume and project showcase. Designed with a focus on performance and aesthetics, it features smooth animations, responsive design, and accessibility considerations. The site implements dynamic content loading, theme switching capabilities, and contact form functionality. Built with React and styled using Tailwind CSS, it demonstrates modern front-end development practices.",
//       technologies: ["React", "Tailwind CSS", "Vite", "Framer Motion", "EmailJS"],
//       image: "/api/placeholder/600/400",
//       icon: "/api/placeholder/100/100",
//       github: "https://github.com/yourusername/portfolio",
//       demo: "https://your-portfolio.com",
//       featured: true
//     },
//     {
//       id: 4,
//       title: "Task Management App",
//       description: "A kanban-style task management application with drag-and-drop functionality for efficient project organization.",
//       longDescription: "This task management application uses a kanban board interface to help users visualize workflow and manage projects efficiently. It features drag-and-drop card movement across customizable board columns, task filtering and sorting, deadline tracking, and team collaboration tools. The frontend is built with React and uses React Beautiful DND for smooth drag interactions. The backend uses Firebase for real-time updates and user authentication.",
//       technologies: ["React", "Firebase", "React Beautiful DND", "Tailwind CSS", "Context API"],
//       image: "/api/placeholder/600/400",
//       icon: "/api/placeholder/100/100",
//       github: "https://github.com/yourusername/task-manager",
//       demo: "https://task-manager-demo.com"
//     },
//     {
//       id: 5,
//       title: "Weather Forecast App",
//       description: "A weather application that provides detailed forecasts, radar imagery, and alerts based on user location.",
//       longDescription: "This weather forecast application delivers accurate weather information using the OpenWeatherMap API. Users can view current conditions, hourly forecasts, and 7-day predictions. The app features location-based weather detection, interactive radar maps, severe weather alerts, and customizable units. Built with React and styled with Tailwind CSS, it demonstrates effective API integration and responsive design principles.",
//       technologies: ["React", "Tailwind CSS", "OpenWeatherMap API", "Geolocation API", "Leaflet.js"],
//       image: "/api/placeholder/600/400",
//       icon: "/api/placeholder/100/100",
//       github: "https://github.com/yourusername/weather-app",
//       demo: "https://weather-app-demo.com"
//     },
//     {
//       id: 6,
//       title: "Recipe Finder",
//       description: "A recipe search application that helps users discover meals based on available ingredients and dietary preferences.",
//       longDescription: "This recipe finder application allows users to search for recipes based on ingredients they have on hand, dietary restrictions, and meal types. It features advanced filtering options, nutritional information display, recipe saving, and meal planning tools. The frontend is built with React and styled using Tailwind CSS, while the backend leverages the Edamam Recipe API for comprehensive food data.",
//       technologies: ["React", "Tailwind CSS", "Edamam API", "LocalStorage", "React Router"],
//       image: "/api/placeholder/600/400",
//       icon: "/api/placeholder/100/100",
//       github: "https://github.com/yourusername/recipe-finder",
//       demo: "https://recipe-finder-demo.com"
//     }
//   ];

//   useEffect(() => {
//     // Animation effect for projects appearing sequentially
//     const timer = setTimeout(() => {
//       setVisibleProjects(allProjects.map(project => project.id));
//     }, 100);
    
//     return () => clearTimeout(timer);
//   }, []);

//   const toggleProjectDetails = (projectId) => {
//     setExpandedProject(expandedProject === projectId ? null : projectId);
//   };

//   const isProjectVisible = (projectId) => {
//     return visibleProjects.includes(projectId);
//   };

//   return (
//     <div className="relative min-h-screen font-sans text-gray-100">
//       {/* Global Background - Same as landing page */}
//       <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black"></div>
//       <div className="fixed inset-0 z-0 bg-[url('/api/placeholder/400/400')] bg-repeat opacity-5"></div>
      
//       {/* Floating particles - Same as landing page */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
//         {[...Array(20)].map((_, i) => {
//           const size = 0.3 + Math.random() * 0.7;
//           const isBlue = Math.random() > 0.5;
//           const glowSize = size * 10;
          
//           return (
//             <div 
//               key={i} 
//               className={`absolute rounded-full ${isBlue ? 'bg-blue-500' : 'bg-white'} animate-float`}
//               style={{ 
//                 width: `${size}px`,
//                 height: `${size}px`,
//                 top: Math.random() * 100 + '%',
//                 left: Math.random() * 100 + '%',
//                 boxShadow: `0 0 ${glowSize}px ${glowSize/3}px ${isBlue ? 'rgba(59, 130, 246, 0.7)' : 'rgba(255, 255, 255, 0.7)'}`, 
//                 animationDelay: Math.random() * 5 + 's',
//                 animationDuration: Math.random() * 10 + 10 + 's' 
//               }}
//             ></div>
//           );
//         })}
//       </div>

//       <div className="container mx-auto px-4 py-12 relative z-10">
//         {/* Back button */}
//         <div className="mb-8">
//           <Link 
//             to="/" 
//             className="inline-flex items-center px-4 py-2 bg-gray-800/80 hover:bg-blue-600/80 rounded-full text-gray-300 hover:text-white backdrop-blur-sm transition-all duration-300 border border-gray-700/50 hover:border-blue-500/50 shadow-md hover:shadow-blue-500/20"
//           >
//             <ArrowLeft size={16} className="mr-2" />
//             Back to Home
//           </Link>
//         </div>

//         {/* Page Header */}
//         <header className="mb-16">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600 animate-fade-in-right">
//             My Projects
//           </h1>
//           <p className="text-gray-300 max-w-2xl animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
//             Here's a collection of my work, showcasing my skills and experience in web development, 
//             UX/UI design, and software engineering. Each project represents unique challenges and solutions.
//           </p>
//         </header>

//         {/* Projects Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {allProjects.map((project, index) => (
//             <div 
//               key={project.id}
//               className={`group rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500 transition-all duration-500 backdrop-blur-sm bg-gray-800/80 shadow-xl hover:shadow-blue-900/20 hover:shadow-2xl hover:-translate-y-2 transform opacity-0 animate-fade-in ${
//                 isProjectVisible(project.id) ? 'opacity-100' : ''
//               }`}
//               style={{ animationDelay: `${0.1 * index}s` }}
//             >
//               {/* Project Image Section */}
//               <div className="h-64 bg-gradient-to-br from-blue-900 via-indigo-900 to-gray-900 relative overflow-hidden">
//                 {/* Project image with overlay */}
//                 <img 
//                   src={project.image} 
//                   alt={`${project.title} preview`} 
//                   className="w-full h-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/60 to-gray-900/90"></div>
                
//                 {/* Project icon positioned in center */}
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="w-20 h-20 rounded-full bg-blue-600/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
//                     <img 
//                       src={project.icon} 
//                       alt={`${project.title} logo`} 
//                       className="w-20 h-20 object-contain rounded-full p-2"
//                     />
//                   </div>
//                 </div>
                
//                 {/* Project title overlay */}
//                 <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
//                   <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
//                     {project.title}
//                   </h3>
//                 </div>
//               </div>
              
//               {/* Project Info Section */}
//               <div className="p-6">
//                 <p className="text-gray-300 mb-6">{project.description}</p>
                
//                 {/* Technology tags */}
//                 <div className="flex flex-wrap gap-2 mb-6">
//                   {project.technologies.map((tech, i) => (
//                     <span 
//                       key={i} 
//                       className="px-3 py-1 bg-gray-700/60 hover:bg-blue-800/40 rounded-full text-xs font-medium text-gray-300 hover:text-blue-200 transition-colors duration-300"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
                
//                 {/* Project links */}
//                 <div className="flex items-center justify-between mb-4">
//                   {/* GitHub link */}
//                   {project.github && (
//                     <a 
//                       href={project.github} 
//                       target="_blank" 
//                       rel="noopener noreferrer"
//                       className="p-2 bg-gray-700/60 hover:bg-gray-600/80 rounded-full text-gray-300 hover:text-white transition-colors duration-300"
//                       aria-label="View GitHub repository"
//                     >
//                       <Github size={20} />
//                     </a>
//                   )}
                  
//                   {/* Live demo link */}
//                   {project.demo && (
//                     <a 
//                       href={project.demo} 
//                       target="_blank" 
//                       rel="noopener noreferrer"
//                       className="p-2 bg-blue-700/60 hover:bg-blue-600/80 rounded-full text-gray-300 hover:text-white transition-colors duration-300"
//                       aria-label="View live demo"
//                     >
//                       <ExternalLink size={20} />
//                     </a>
//                   )}
                  
//                   {/* Show more details button */}
//                   <button 
//                     onClick={() => toggleProjectDetails(project.id)}
//                     className="flex items-center ml-auto text-blue-400 hover:text-blue-300 transition-colors duration-300"
//                   >
//                     {expandedProject === project.id ? 'Show less' : 'Show more'}
//                     {expandedProject === project.id ? (
//                       <ChevronUp size={16} className="ml-1" />
//                     ) : (
//                       <ChevronDown size={16} className="ml-1" />
//                     )}
//                   </button>
//                 </div>
                
//                 {/* Expanded details section */}
//                 {expandedProject === project.id && (
//                   <div className="mt-4 pt-4 border-t border-gray-700/50 animate-fade-in">
//                     <h4 className="text-lg font-medium text-blue-400 mb-2">Project Details</h4>
//                     <p className="text-gray-300 mb-4">{project.longDescription}</p>
                    
//                     {/* Additional project details like challenges, outcomes, etc. could go here */}
//                     <div className="grid grid-cols-2 gap-4">
//                       <div>
//                         <h5 className="text-sm font-medium text-gray-400 mb-1">Type</h5>
//                         <p className="text-gray-300">Web Application</p>
//                       </div>
//                       <div>
//                         <h5 className="text-sm font-medium text-gray-400 mb-1">Duration</h5>
//                         <p className="text-gray-300">3 months</p>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectsPage;

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
// Note: You'll need to include Boxicons in your project
// Add to your index.html: <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [animatedItems, setAnimatedItems] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const filterRef = useRef(null);

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'ai', name: 'AI & ML' },
    { id: 'iot', name: 'IoT' }
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

    // Observe elements with animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    // Close filter dropdown when clicking outside
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setIsFilterOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      observer.disconnect();
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Full projects list
  const allProjects = [
    {
      id: 1,
      title: "AI-Powered Task Manager",
      description: "An intelligent task management application that uses machine learning to prioritize and suggest tasks based on user behavior and preferences.",
      longDescription: "This AI-powered task manager analyzes your working patterns and task completion history to provide smart suggestions for task prioritization. It features natural language processing for quick task entry, automated categorization, and learns from your habits to become more personalized over time.",
      technologies: ["React", "Node.js", "TensorFlow.js", "MongoDB", "Express"],
      image: "/api/placeholder/800/500",
      uiImage: "/api/placeholder/800/500", // UI screenshot for background
      icon: "/api/placeholder/80/80",
      github: "https://github.com/username/ai-task-manager",
      demo: "https://ai-task-demo.example.com",
      category: "ai",
      featured: true
    },
    {
      id: 2,
      title: "Crypto Portfolio Tracker",
      description: "Real-time cryptocurrency portfolio tracker with price alerts, historical performance analysis, and personalized investment recommendations.",
      longDescription: "Track your cryptocurrency investments across multiple wallets and exchanges in one unified dashboard. The application provides real-time price updates, customizable alerts, detailed performance analytics, and tax reporting features. The responsive design ensures a seamless experience across all devices.",
      technologies: ["Vue.js", "Firebase", "CoinGecko API", "Chart.js", "Tailwind CSS"],
      image: "/api/placeholder/800/500",
      uiImage: "/api/placeholder/800/500",
      icon: "/api/placeholder/80/80",
      github: "https://github.com/username/crypto-tracker",
      demo: "https://crypto-tracker-demo.example.com",
      category: "web",
      featured: true
    },
    {
      id: 3,
      title: "E-Learning Platform",
      description: "A comprehensive e-learning platform with interactive courses, progress tracking, and real-time collaboration features for students and instructors.",
      longDescription: "This platform revolutionizes online education with interactive video lessons, coding challenges, quizzes, and a collaborative workspace. Students can track their progress, earn certificates, and participate in community discussions. Instructors can create courses, monitor student performance, and provide personalized feedback.",
      technologies: ["React", "Django", "PostgreSQL", "WebSockets", "AWS"],
      image: "/api/placeholder/800/500",
      uiImage: "/api/placeholder/800/500",
      icon: "/api/placeholder/80/80",
      github: "https://github.com/username/elearning-platform",
      demo: "https://elearning-demo.example.com",
      category: "web",
      featured: true
    },
    {
      id: 4,
      title: "Health & Fitness Tracker",
      description: "A comprehensive health tracking application that monitors nutrition, exercise, sleep patterns, and provides personalized wellness recommendations.",
      longDescription: "This all-in-one health companion helps users maintain a balanced lifestyle by tracking nutrition intake, workout routines, sleep quality, and hydration levels. It offers personalized meal plans, workout suggestions, and connects with wearable devices for accurate health metrics monitoring.",
      technologies: ["React Native", "GraphQL", "Node.js", "MongoDB", "FitBit API"],
      image: "/api/placeholder/800/500",
      uiImage: "/api/placeholder/800/500",
      icon: "/api/placeholder/80/80",
      github: "https://github.com/username/health-tracker",
      category: "mobile",
      featured: false
    },
    {
      id: 5,
      title: "Smart Home Dashboard",
      description: "A centralized dashboard to monitor and control IoT devices, with automation capabilities and energy consumption analytics.",
      longDescription: "Control all your smart home devices from a single, intuitive interface. This dashboard connects to various IoT ecosystems, allowing users to manage lights, thermostats, security cameras, and more. It features customizable automation routines, voice commands integration, and detailed energy usage reports to help reduce consumption.",
      technologies: ["React", "Node.js", "MQTT", "InfluxDB", "Raspberry Pi"],
      image: "/api/placeholder/800/500",
      uiImage: "/api/placeholder/800/500",
      icon: "/api/placeholder/80/80",
      github: "https://github.com/username/smart-home-dashboard",
      demo: "https://smart-home-demo.example.com",
      category: "iot",
      featured: false
    },
    {
      id: 6,
      title: "Social Media Analytics Tool",
      description: "An advanced analytics platform for social media managers to track engagement, sentiment, and campaign performance across multiple channels.",
      longDescription: "This comprehensive tool helps businesses optimize their social media presence by analyzing engagement metrics, audience demographics, and content performance. It tracks campaigns across multiple platforms, provides sentiment analysis of comments and mentions, and generates detailed reports with actionable insights.",
      technologies: ["Angular", "Python", "Django", "PostgreSQL", "TensorFlow"],
      image: "/api/placeholder/800/500",
      uiImage: "/api/placeholder/800/500",
      icon: "/api/placeholder/80/80",
      github: "https://github.com/username/social-analytics",
      category: "ai",
      featured: false
    }
  ];

  // Filtered projects based on active category
  const filteredProjects = activeFilter === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.category === activeFilter);

  // Function to toggle project details modal
  const toggleProjectDetails = (projectId) => {
    if (selectedProject === projectId) {
      setSelectedProject(null);
    } else {
      setSelectedProject(projectId);
    }
  };

  return (
    <div className="relative min-h-screen font-sans text-gray-100">
      {/* Global Background - Same as landing page */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black"></div>
      <div className="fixed inset-0 z-0 bg-[url('/api/placeholder/400/400')] bg-repeat opacity-5"></div>
      
      {/* Floating particles - Same as landing page */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(20)].map((_, i) => {
          const size = 0.3 + Math.random() * 0.7;
          const isBlue = Math.random() > 0.5;
          const glowSize = size * 10;
          
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

      {/* Back button navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800/40 bg-transparent backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-300 group"
          >
            <div className="p-2 rounded-full bg-gray-800/80 hover:bg-gray-700 transition-colors">
              <i className='bx bx-arrow-back text-xl group-hover:-translate-x-1 transition-transform duration-300'></i>
            </div>
            <span>Back to Home</span>
          </Link>
          
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            My Projects
          </h1>
          
          {/* Filter dropdown */}
          <div className="relative" ref={filterRef}>
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center space-x-2 py-2 px-4 border border-gray-700/50 rounded-full hover:border-blue-500/70 bg-gray-800/60 backdrop-blur-sm transition-all duration-300"
            >
              <span>{categories.find(cat => cat.id === activeFilter)?.name || 'All Projects'}</span>
              <i className={`bx ${isFilterOpen ? 'bx-chevron-up' : 'bx-chevron-down'} text-blue-400`}></i>
            </button>
            
            {isFilterOpen && (
              <div className="absolute right-0 mt-2 w-56 rounded-xl overflow-hidden border border-gray-700/50 bg-gray-800/90 backdrop-blur-md shadow-xl z-50 animate-fade-in-down">
                <div className="py-1">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      className={`block w-full text-left px-4 py-3 hover:bg-gray-700/60 transition-colors ${
                        activeFilter === category.id ? 'bg-blue-600/30 text-blue-300' : 'text-gray-300'
                      }`}
                      onClick={() => {
                        setActiveFilter(category.id);
                        setIsFilterOpen(false);
                      }}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-24 pb-20">
        <div className="mb-10 animate-on-scroll" id="projects-intro">
          <div className={`max-w-2xl mx-auto text-center mb-16 ${animatedItems.includes('projects-intro') ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold pb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600">
              Featured Projects
            </h2>
            <p className="mt-4 text-gray-300">
              Explore my complete portfolio of projects, showcasing innovation, problem-solving, and technical expertise.
              Each creation represents a unique challenge conquered through creativity and code.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`group rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500 transition-all duration-500 backdrop-blur-sm bg-gray-800/80 shadow-xl hover:shadow-blue-900/20 hover:shadow-2xl hover:-translate-y-2 animate-on-scroll`}
              id={`project-${index}`}
            >
              {/* Project Image Section */}
              <div 
                className={`h-56 bg-gradient-to-br from-blue-900 via-indigo-900 to-gray-900 relative ${
                  animatedItems.includes(`project-${index}`) ? 'animate-fade-in' : 'opacity-0'
                }`} 
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {/* Project visual overlay */}
                <div className="absolute inset-0 bg-gray-900 opacity-40 group-hover:opacity-10 transition-opacity duration-500"></div>
                
                {/* Background UI image with blur effect if available */}
                {project.uiImage && (
                  <div className="absolute inset-0 overflow-hidden">
                    <img 
                      src={project.uiImage} 
                      alt="" 
                      className="w-full h-full object-cover opacity-40 blur-[2px] group-hover:scale-110 transition-transform duration-700"
                      aria-hidden="true"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 via-gray-900/60 to-gray-900/80"></div>
                  </div>
                )}
                
                {/* Project icon or image placeholder */}
                <div className="absolute inset-0 flex items-center justify-center p-6 z-10 bg-gradient-to-b from-transparent via-transparent to-gray-900/80">
                  <div className="w-20 h-20 rounded-full bg-blue-600/20 backdrop-blur-sm flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500 relative z-10">
                    {project.icon ? (
                      <img 
                        src={project.icon} 
                        alt={`${project.title} logo`} 
                        className="w-20 h-20 object-contain rounded-full p-2"
                      />
                    ) : (
                      <i className='bx bx-code-block text-[36px] text-blue-400'></i>
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
                      <i className='bx bxl-github text-2xl'></i>
                    </a>
                  )}
                </div>
              </div>
              
              {/* Project Content */}
              <div 
                className={`p-8 ${
                  animatedItems.includes(`project-${index}`) ? 'animate-fade-in-up' : 'opacity-0'
                }`} 
                style={{ animationDelay: `${0.2 + 0.1 * index}s` }}
              >
                <p className="text-gray-300 mb-6 line-clamp-3">{project.description}</p>
                
                {/* Tech stack */}
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
                
                {/* Action buttons */}
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => toggleProjectDetails(project.id)}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium group/link"
                  >
                    {selectedProject === project.id ? 'View Less' : 'View Details'}
                    <i className={`bx ${selectedProject === project.id ? 'bx-chevron-up' : 'bx-chevron-right'} ml-1 group-hover/link:translate-x-1.5 transition-transform duration-300`}></i>
                  </button>
                  
                  {/* Live Demo Link if available */}
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      className="inline-flex items-center text-gray-300 hover:text-blue-300 transition-colors duration-300 text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className='bx bx-link-external mr-1'></i>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
              
              {/* Expandable details section */}
              {selectedProject === project.id && (
                <div className="p-8 pt-0 border-t border-gray-700/50 animate-fade-in">
                  <p className="text-gray-300 mb-6">{project.longDescription}</p>
                  
                  {/* Project Actions */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {project.github && (
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-gray-700/40 hover:bg-gray-700/80 text-gray-200 hover:text-white transition-all duration-300"
                      >
                        <i className='bx bxl-github text-xl'></i>
                        <span>View Code</span>
                      </a>
                    )}
                    
                    {project.demo && (
                      <a 
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-blue-600/30 hover:bg-blue-600/50 text-blue-100 hover:text-white transition-all duration-300"
                      >
                        <i className='bx bx-link-external text-xl'></i>
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                  
                  {/* Project details with icons */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start space-x-3">
                      <i className='bx bx-calendar-check text-xl text-blue-400 mt-1'></i>
                      <div>
                        <h4 className="font-medium text-gray-200">Last Updated</h4>
                        <p className="text-gray-400 text-sm">March 2025</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <i className='bx bx-time text-xl text-blue-400 mt-1'></i>
                      <div>
                        <h4 className="font-medium text-gray-200">Development Time</h4>
                        <p className="text-gray-400 text-sm">3 months</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <i className='bx bx-code-alt text-xl text-blue-400 mt-1'></i>
                      <div>
                        <h4 className="font-medium text-gray-200">Key Features</h4>
                        <ul className="text-gray-400 text-sm list-disc ml-4 mt-1">
                          <li>Responsive design for all devices</li>
                          <li>Real-time data synchronization</li>
                          <li>Advanced search functionality</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Close button */}
                  <div className="flex justify-center mt-6">
                    <button
                      onClick={() => toggleProjectDetails(project.id)}
                      className="inline-flex items-center text-gray-400 hover:text-white py-2 px-4 rounded-full border border-gray-700 hover:border-gray-600 transition-colors"
                    >
                      <i className='bx bx-x mr-1'></i>
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* No projects found message */}
        {filteredProjects.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <i className='bx bx-search text-6xl text-gray-600 mb-4'></i>
            <h3 className="text-2xl font-bold text-gray-400 mb-2">No projects found</h3>
            <p className="text-gray-500 mb-6">There are no projects in this category yet.</p>
            <button
              onClick={() => setActiveFilter('all')}
              className="inline-flex items-center px-6 py-3 bg-gray-800 rounded-full text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
            >
              <i className='bx bx-reset mr-2'></i>
              View All Projects
            </button>
          </div>
        )}
        
        {/* Back to top button */}
        <div className="flex justify-center mt-16">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-600/20 hover:bg-blue-600/40 text-blue-400 hover:text-blue-200 transition-all duration-300 transform hover:-translate-y-1"
          >
            <i className='bx bx-up-arrow-alt text-2xl'></i>
          </button>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="border-t border-gray-800/40 bg-gray-900/30 backdrop-blur-sm py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Virajith Dissanayaka. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <i className='bx bxl-github text-xl'></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <i className='bx bxl-linkedin text-xl'></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <i className='bx bxl-twitter text-xl'></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <i className='bx bx-envelope text-xl'></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProjectsPage;