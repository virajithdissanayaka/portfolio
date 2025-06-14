import React, { useState, useEffect, useRef } from 'react';

const ProjectCard = ({ project, index, animatedItems }) => {
  const [showDetails, setShowDetails] = useState(false);
  const detailsRef = useRef(null);
  const modalContentRef = useRef(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (showDetails) {
      // Save current scroll position and lock scroll
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      // Restore scroll position when modal closes
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
      }
    }
  }, [showDetails]);

  // Close when clicking outside the modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (detailsRef.current && !detailsRef.current.contains(event.target)) {
        setShowDetails(false);
      }
    };

    if (showDetails) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDetails]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setShowDetails(false);
      }
    };

    if (showDetails) {
      document.addEventListener('keydown', handleEscape);
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [showDetails]);

  // Calculate modal content height on mount and resize
  useEffect(() => {
    if (showDetails && modalContentRef.current) {
      const updateModalHeight = () => {
        const modalHeader = detailsRef.current.querySelector('.modal-header');
        const headerHeight = modalHeader ? modalHeader.offsetHeight : 0;
        const maxContentHeight = Math.max(100, window.innerHeight * 0.85 - headerHeight - 16); // 16px for safety margin
        modalContentRef.current.style.maxHeight = `${maxContentHeight}px`;
      };

      updateModalHeight();
      window.addEventListener('resize', updateModalHeight);
      
      return () => {
        window.removeEventListener('resize', updateModalHeight);
      };
    }
  }, [showDetails]);

  return (
    <>
    {/* Project Card */}
    <div 
        className={`group rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500 transition-all duration-500 animate-on-scroll backdrop-blur-sm bg-gray-800/80 shadow-xl hover:shadow-blue-900/20 hover:shadow-2xl hover:-translate-y-2`}
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
              onClick={() => setShowDetails(true)}
              className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium group/link"
            >
              View Details
              <i className="bx bx-chevron-right ml-1 group-hover/link:translate-x-1.5 transition-transform duration-300"></i>
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
      </div>

      {/* Compact Modal Details View */}
      {showDetails && (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-4 py-6">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setShowDetails(false)}></div>
          
          {/* Modal Container - Properly sized and centered */}
          <div 
            ref={detailsRef}
            className="relative bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 rounded-xl shadow-2xl shadow-blue-900/20 w-full max-w-2xl mx-auto my-auto overflow-hidden flex flex-col"
            style={{ maxHeight: '85vh' }}
          >
            {/* Header with Close Button */}
            <div className="flex justify-between items-center p-5 border-b border-gray-700/50 sticky top-0 bg-gray-800 z-10 modal-header">
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              <button
                onClick={() => setShowDetails(false)}
                className="w-10 h-10 rounded-full bg-gray-700/60 hover:bg-gray-600 text-gray-400 hover:text-white transition-colors flex items-center justify-center"
                aria-label="Close details"
              >
                <i className='bx bx-x text-2xl'></i>
              </button>
            </div>
            
            {/* Project Details Content with its own scrollbar */}
            <div 
              ref={modalContentRef}
              className="custom-scrollbar overflow-y-auto p-5"
            >
              {/* Project Images Section (if available) */}
              {project.images && project.images.length > 0 && (
                <div className="mb-6">
                  <div className="grid grid-cols-1 gap-4">
                    {project.images.map((image, imgIndex) => (
                      <div key={imgIndex} className="rounded-lg overflow-hidden bg-gray-900/50 border border-gray-700/50">
                        <img 
                          src={image.src} 
                          alt={image.alt || `${project.title} screenshot ${imgIndex + 1}`}
                          draggable="false" 
                          className="w-full h-auto object-cover"
                        />
                        {image.caption && (
                          <div className="p-3 text-sm text-gray-400 text-center">
                            {image.caption}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Description */}
              <div className="mb-6">
                <p className="text-gray-300">{project.longDescription || project.description}</p>
              </div>
              
              {/* Action Links */}
              <div className="flex flex-wrap gap-4 mb-6">
                {project.github && (
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 py-2 px-4 rounded-lg bg-gray-700/60 hover:bg-gray-600 text-gray-200 hover:text-white transition-all duration-300"
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
                    className="flex items-center justify-center space-x-2 py-2 px-4 rounded-lg bg-blue-600/40 hover:bg-blue-600/60 text-blue-100 hover:text-white transition-all duration-300"
                  >
                    <i className='bx bx-link-external text-xl'></i>
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
              
              {/* Tech stack */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-200 mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-gray-700/60 hover:bg-blue-800/40 rounded-full text-sm font-medium text-gray-300 hover:text-blue-200 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Project Details */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <i className='bx bx-calendar-check text-xl text-blue-400 mt-1'></i>
                    <div>
                      <h4 className="font-medium text-gray-200">Last Updated</h4>
                      <p className="text-gray-400">{project.lastUpdated || 'March 2025'}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <i className='bx bx-time text-xl text-blue-400 mt-1'></i>
                    <div>
                      <h4 className="font-medium text-gray-200">Development Time</h4>
                      <p className="text-gray-400">{project.developmentTime || '3 months'}</p>
                    </div>
                  </div>
                </div>
                
                {/* Right Column */}
                <div>
                  <div className="flex items-start space-x-3">
                    <i className='bx bx-code-alt text-xl text-blue-400 mt-1'></i>
                    <div>
                      <h4 className="font-medium text-gray-200">Key Features</h4>
                      <ul className="text-gray-400 list-disc ml-4 mt-1">
                        {project.features ? (
                          project.features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                          ))
                        ) : (
                          <>
                            <li>Responsive design for all devices</li>
                            <li>Real-time data synchronization</li>
                            <li>Advanced search functionality</li>
                          </>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bottom padding for scrollable content */}
              <div className="h-2"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Add CSS for custom scrollbar and animations
const style = document.createElement('style');
style.textContent = `
  /* Custom scrollbar for modal content */
  .custom-scrollbar::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-track {
    background: rgba(31, 41, 55, 0.5);
    border-radius: 4px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: rgba(59, 130, 246, 0.5);
    border-radius: 4px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: rgba(59, 130, 246, 0.7);
  }
  
  /* Hide scrollbar when unnecessary */
  .custom-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: rgba(59, 130, 246, 0.5) rgba(31, 41, 55, 0.5);
  }
  
  /* Animations */
  .animate-fade-in {
    animation: fadeIn 0.6s ease-in-out forwards;
  }
  
  .animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out forwards;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
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
`;
document.head.appendChild(style);

export default ProjectCard;