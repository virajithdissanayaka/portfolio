import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
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
      title: "DevConnect",
      description: "A full-stack social platform for developers to share projects, connect with peers, and collaborate on coding challenges. Features include real-time messaging, code sharing, and project showcasing.",
      longDescription: "DevConnect is a comprehensive social networking platform designed specifically for software developers. It enables professionals to showcase their portfolios, share code snippets, collaborate on projects, and connect with like-minded peers in the industry. The platform integrates with GitHub to display repositories and contribution statistics, while also providing its own project management tools for team collaboration. Users can create detailed profiles highlighting their skills, experience, and current projects they're working on.",
      uiImage: "/images/devconnect-bg.jpg",
      icon: "/images/devconnect-logo.png",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io", "Redux"],
      github: "https://github.com/username/devconnect",
      demo: "https://devconnect-demo.netlify.app",
      lastUpdated: "April 2025",
      developmentTime: "4 months",
      features: [
        "Real-time chat with code snippet sharing",
        "Developer profile with GitHub integration",
        "Project showcase with live demos",
        "Job board with filtering options",
        "Community forums with tagging system"
      ],
      images: [
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRdUnsfQIzmCi5RJoV-KKi3hGv5X2yAJECrR86ebMAGaTwQK6f_tWlzEG1m5Kay_YDR7I&usqp=CAU",
          alt: "DevConnect Dashboard",
          caption: "Main dashboard with activity feed and project suggestions"
        },
        {
          src: "/images/devconnect-profile.jpg",
          alt: "User Profile Page",
          caption: "Developer profile showing skills, projects and GitHub stats"
        },
        {
          src: "/images/devconnect-chat.jpg",
          alt: "Chat Interface",
          caption: "Real-time messaging with code snippet support"
        }
      ]
    },
    {
      id: 2,
      title: "FinTrack",
      description: "A personal finance management application built with React and Firebase. Allows users to track expenses, set budgets, visualize spending patterns, and receive financial insights.",
      longDescription: "FinTrack is a comprehensive personal finance management application that helps users take control of their finances through intuitive expense tracking, budget management, and financial analytics. The application securely connects to banking APIs to import transactions automatically while maintaining user privacy. FinTrack's intelligent categorization system uses machine learning to accurately sort expenses, while the goal-setting feature allows users to plan for future financial milestones. The responsive design ensures a consistent experience across all devices.",
      uiImage: "/images/fintrack-bg.jpg",
      icon: "/images/fintrack-logo.png",
      technologies: ["React", "Firebase", "Chart.js", "Material UI", "Plaid API"],
      github: "https://github.com/username/fintrack",
      demo: "https://fintrack-app.firebaseapp.com",
      lastUpdated: "March 2025",
      developmentTime: "3 months",
      features: [
        "Secure bank account integration",
        "Automated expense categorization",
        "Custom budget creation and tracking",
        "Interactive spending visualizations",
        "Financial goal setting and monitoring"
      ],
      images: [
        {
          src: "/images/fintrack-dashboard.jpg",
          alt: "FinTrack Dashboard",
          caption: "Financial overview dashboard with key metrics"
        },
        {
          src: "/images/fintrack-budgets.jpg",
          alt: "Budget Management",
          caption: "Budget creation and tracking interface"
        }
      ]
    },
    {
      id: 3,
      title: "WeatherNow",
      description: "A modern weather application providing real-time forecasts, interactive maps, and severe weather alerts. Uses the OpenWeatherMap API with geolocation support.",
      technologies: ["JavaScript", "HTML5", "CSS3", "OpenWeatherMap API", "Leaflet.js"],
      github: "https://github.com/username/weather-now",
      demo: "https://weathernow-app.netlify.app",
      lastUpdated: "January 2025",
      developmentTime: "1 month"
    },
    {
      id: 4,
      title: "TaskMaster Pro",
      description: "A Kanban-style task management application with drag-and-drop functionality, team collaboration features, task priorities, and deadline tracking.",
      longDescription: "TaskMaster Pro revolutionizes team productivity with its intuitive Kanban board interface and powerful collaboration tools. The application features customizable workflows, real-time updates across all team members' devices, and detailed analytics to track productivity over time. TaskMaster Pro integrates with popular calendar applications and provides smart notifications to ensure nothing falls through the cracks. The application supports file attachments, sub-tasks, and recurring task scheduling to handle complex project management needs.",
      uiImage: "/images/taskmaster-bg.jpg",
      icon: "/images/taskmaster-logo.png",
      technologies: ["Vue.js", "Vuex", "Node.js", "MongoDB", "Express", "Drag-and-Drop API"],
      github: "https://github.com/username/taskmaster-pro",
      demo: "https://taskmaster-pro.herokuapp.com",
      features: [
        "Customizable Kanban boards with multiple views",
        "Team collaboration with real-time updates",
        "Task dependencies and critical path visualization",
        "Time tracking and productivity analytics",
        "Integration with Google Calendar and Outlook"
      ],
      images: [
        {
          src: "/images/taskmaster-board.jpg",
          alt: "Kanban Board",
          caption: "Main Kanban board with drag-and-drop cards"
        },
        {
          src: "/images/taskmaster-analytics.jpg",
          alt: "Team Analytics",
          caption: "Team productivity analytics dashboard"
        },
        {
          src: "/images/taskmaster-mobile.jpg",
          alt: "Mobile Interface",
          caption: "Responsive mobile interface for on-the-go task management"
        }
      ]
    },
    {
      id: 5,
      title: "AI Image Generator",
      description: "A web application that uses machine learning to generate unique images based on text prompts. Features style transfer, image editing, and social sharing.",
      longDescription: "This AI Image Generator harnesses the power of deep learning models to create stunning, unique images from textual descriptions. Users can enter detailed prompts and watch as the AI interprets their words into visual art. The application features multiple AI models including stable diffusion and DALL-E style generators, with options to adjust parameters like image dimensions, style strength, and guidance scale. Users can save their generated images, create collections, and share their creations directly to social media platforms.",
      uiImage: "/images/ai-generator-bg.jpg",
      icon: "/images/ai-generator-logo.png",
      technologies: ["Python", "TensorFlow", "React", "FastAPI", "WebSockets", "AWS"],
      github: "https://github.com/username/ai-image-generator",
      demo: "https://ai-image-creator.vercel.app",
      lastUpdated: "April 2025",
      developmentTime: "6 months",
      features: [
        "Text-to-image generation with fine controls",
        "Style transfer from reference images",
        "Image editing and enhancement capabilities",
        "User galleries and collections",
        "Community showcase with voting system"
      ],
      images: [
        {
          src: "/images/ai-generator-interface.jpg",
          alt: "Generation Interface",
          caption: "Main interface for entering prompts and adjusting parameters"
        },
        {
          src: "/images/ai-generator-gallery.jpg",
          alt: "User Gallery",
          caption: "Personal gallery of saved generated images"
        },
        {
          src: "/images/ai-generator-community.jpg",
          alt: "Community Showcase",
          caption: "Community showcase of top-rated AI creations"
        }
      ]
    },
    {
      id: 6,
      title: "EcoTracker",
      description: "An environmental impact monitoring application that helps users track and reduce their carbon footprint through daily activities tracking, sustainable alternatives, and community challenges.",
      technologies: ["React Native", "Firebase", "D3.js", "Node.js", "Express"],
      github: "https://github.com/username/eco-tracker",
      lastUpdated: "February 2025",
      developmentTime: "5 months"
    },
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
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              animatedItems={animatedItems}
            />
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