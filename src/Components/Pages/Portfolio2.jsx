import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Mail, Download, ChevronRight, User, Code, Award, Book, MapPin, Link, ExternalLink, ArrowRight } from 'lucide-react';  
import ProjectCard from './ProjectCard';

import Virajith1 from '/src/assets/Virajith1.png'; 
import Virajith_Dissanayaka from '/src/assets/Virajith_Dissanayaka.pdf'

import Omobio from '/src/assets/omobio_pvt_ltd_logo.jpg';
import RCC from '/src/assets/RCC.jpg';
import UCSC from '/src/assets/ucsc.jpg';

import GCP from '/src/assets/gcp-color.svg';
import Jenkins from '/src/assets/file-type-jenkins.svg';
import Ansible from '/src/assets/ansible.svg';
import Terraform from '/src/assets/file-type-terraform.svg';
import Mysql from '/src/assets/mysql-original-wordmark.svg';
import Java from '/src/assets/java-original-wordmark.svg';
import Python from '/src/assets/python.svg';

import Cloud from '/src/assets/Cloud.jpg';
import Driveaze2 from '/src/assets/Driveaze/Driveaze2.png';
import Driveaze from '/src/assets/Driveaze/Driveaze.png';
import bill from '/src/assets/Driveaze/bill.png';
import akahubhome from '/src/assets/AKAHUB/akahubhome.jpg';
import AkaHub from '/src/assets/AKAHUB/AkaHub.png';
import Res from '/src/assets/AKAHUB/Res.png';
import CounselorDB from '/src/assets/AKAHUB/CounselorDB.png';
import AkahubDB from '/src/assets/AKAHUB/AkahubDB.png';
import chat from '/src/assets/AKAHUB/chat.png';


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
    linkedin: "linkedin.com/in/virajith-dissanayaka/",
  };

  const socialMedia = [
    { 
      name: "LinkedIn", 
      url: "https://www.linkedin.com/in/virajith-dissanayaka/", 
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
    { name: "GCP", category: "Cloud", iconSrc: GCP, color: "#4285F4" },
    { name: "Docker", category: "DevOps", iconClass: "bx bxl-docker", color: "#2496ED" },
    { name: "Kubernetes", category: "DevOps", iconClass: "bx bxl-kubernetes", color: "#326CE5" },
    { name: "Jenkins", category: "DevOps", iconSrc: Jenkins, color: "#D33833" },
    { name: "GitHub Actions", category: "DevOps", iconClass: "bx bxl-github", color: "#2088FF" },
    { name: "Ansible", category: "DevOps", iconSrc: Ansible, color: "#EE0000" },
    { name: "Terraform", category: "Infrastructure", iconSrc: Terraform, color: "#7B42BC" },
    { name: "Spring Boot", category: "Backend", iconClass: "bx bxl-spring-boot", color: "#6DB33F" },
    { name: "React", category: "Frontend", iconClass: "bx bxl-react", color: "#61DAFB" },
    { name: "Node.js", category: "Backend", iconClass: "bx bxl-nodejs", color: "#339933" },
    { name: "MongoDB", category: "Database", iconClass: "bx bxl-mongodb", color: "#47A248" },
    { name: "PostgreSQL", category: "Database", iconClass: "bx bxl-postgresql", color: "#0064a5" },
    { name: "MySQL", category: "Database", iconSrc: Mysql, color: "#00758F" },
    { name: "Git", category: "DevOps", iconClass: "bx bxl-git", color: "#F05032" },
    { name: "Java", category: "Language", iconSrc: Java, color: "#EA2D2E" },
    { name: "Python", category: "Language", iconSrc: Python, color: "#306998" },
    { name: "Bash Script", category: "Language", iconClass: "bx bx-terminal", color: "#4EAA25" }
  ];

  // Project data
  const projects = [
    // {
    //   id: 1,
    //   title: 'Cloud Migration Framework',
    //   description: 'Automated migration of on-premise applications to AWS with zero downtime using Terraform and Ansible',
    //   technologies: ['AWS', 'Terraform', 'Ansible', 'Python'],
    //   link: '#',
    //   uiImage: Cloud,
    // },
    {
      id: 1,
      title: "CI/CD Pipeline Deployment Project",
      description: "Automated deployment pipeline for a Dockerized Python app using GitHub Actions and AWS ECS, ensuring efficient and reliable cloud delivery.",
      longDescription: "This project focused on creating a CI/CD pipeline to automate the deployment of a containerized Python web application to Amazon ECS using GitHub Actions. The pipeline builds the Docker image, pushes it to AWS Elastic Container Registry (ECR), and deploys it to an ECS Fargate service behind an Application Load Balancer. This automation ensures consistent and quick deployments with zero downtime and simplified rollback capability.",
      uiImage: Cloud, 
      // icon: dockerIcon,
      technologies: ["GitHub Actions", "Docker", "AWS ECR", "AWS ECS", "IAM", "ALB", "CI/CD"],
      // github: "", 
      // demo: "", 
      lastUpdated: "April 2025",
      developmentTime: "2 months",
      features: [
        "Automated build and push of Docker image to AWS ECR",
        "Infrastructure configuration for ECS and IAM using best practices",
        "Zero-downtime deployments using ECS rolling update strategy",
        "GitHub Actions workflows triggered on push to main branch",
        "Secure authentication and permissions setup via IAM roles",
        "Load-balanced deployment using AWS Application Load Balancer",
        "Rollback-ready deployments with container version control"
      ],
      // images: [
      //   {
      //     // src: cicdWorkflow, // Replace with actual image
      //     alt: "GitHub Actions Workflow",
      //     caption: "CI/CD Workflow using GitHub Actions"
      //   },
      //   {
      //     // src: ecsDashboard, // Replace with actual image
      //     alt: "ECS Service",
      //     caption: "AWS ECS Fargate Deployment Dashboard"
      //   }
      // ]
    },
    {
      id: 2,
      title: "Vehicle Service Station Management System",
      description: "Comprehensive web and mobile system for vehicle service management, streamlining bookings, inventory, staff coordination, and customer interactions.",
      longDescription: "The Vehicle Service Station Management System for Samarasinghe Motors Pvt Ltd is an integrated solution that transforms service station operations. This web and mobile application enables customers to schedule services, track repair progress, and provide feedback, while empowering administrators with efficient inventory tracking, staff coordination, and automated billing. The system also generates detailed reports for revenue and service performance analysis, reducing operational bottlenecks and elevating customer experience through streamlined workflows.",
      uiImage: Driveaze2,
      icon: Driveaze,
      technologies: ["React.js", "Tailwind CSS", "Flutter", "Spring Boot", "PostgreSQL", "AWS", "JWT Authentication"],
      github: "https://github.com/orgs/Driveaze-3-rd-year-group-project/repositories",
      demo: "https://samarasinghe-motors-demo.netlify.app",
      lastUpdated: "November 2024",
      developmentTime: "6 months",
      features: [
        "Online service booking with automated reminders",
        "Real-time vehicle repair progress tracking",
        "Automated billing with online and in-person payment options",
        "Inventory management for fast-moving items",
        "Staff and job management for technicians and roles",
        "Customer feedback and complaint handling system",
        "Revenue and service trend report generation"
      ],
      images: [
        {
          src: Driveaze2,
          alt: "Service Station Landing Page",
          caption: "Service Station Management system Landing Page"
        },
        {
          src: bill,
          alt: "Bill View",
          caption: "Bill View"
        }
      ]
    },
    {
      id: 3,
      title: "ඇක Hub - Student Collaboration Platform",
      description: "A centralized platform for UCSC students to share study materials, connect with counselors, receive academic updates, host elections, and promote club events.",
      longDescription: "Developed as a second-year group project at the University of Colombo School of Computing, ඇක Hub is a comprehensive platform designed to enhance the student experience. Built from scratch without frameworks, it provides tools for sharing academic resources, hosting anonymous elections, managing counselor appointments, and promoting club events. The platform features automated notifications, timetable parsing, and an encrypted chat system, fostering seamless knowledge sharing and student support. With a Reddit-style post-sharing system and robust analytics, ඇක Hub empowers students and administrators to stay connected and organized. [Watch the project overview on YouTube](https://www.youtube.com/watch?v=EQJ6ZLTolbc)",
      uiImage: akahubhome,
      icon: AkaHub,
      technologies: ["PHP", "HTML", "CSS", "JavaScript", "jQuery", "Python", "MySQL", "Apache", "Nginx"],
      github: "https://github.com/SaliyaBandara/aka-hub/",
      // demo: "https://ekhub-demo.netlify.app",
      lastUpdated: "May 2024",
      developmentTime: "12 months",
      features: [
        "Automated notifications and email system via Cron Jobs",
        "Fully anonymous public voting system",
        "Automatic timetable PDF parsing and calendar creation",
        "Encrypted private chat system for counseling",
        "Reddit-style post-sharing with threaded comments",
        "Intuitive organization of study materials and course content",
        "Simplified counselor appointment system",
        "User logs management and analytics",
        "User access control and account creation",
        "Dedicated feed for counselors and club events"
      ],
      images: [
        {
          src: AkahubDB,
          alt: "Aka Hub Dashboard",
          caption: "Main dashboard with academic updates and event feeds"
        },
        {
          src: CounselorDB,
          alt: "Reservation Requests",
          caption: "Counselor Reservation Requests"
        },
        {
          src: chat,
          alt: "Counseling Chat Interface",
          caption: "Encrypted private chat for counselor appointments"
        }
      ]
    }
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
        degree: "Associate DevOps Engineer",
        institution: "Omobio (Pvt) Ltd",
        startDate: "Jun 2025",
        endDate: "Present",
        description: "Responsible for deploying applications, managing production servers, monitoring system performance, and automating tasks on critical RHEL live servers in the telecom domain.",
        logo: Omobio,
      },
      {
        degree: "Trainee DevOps Engineer",
        institution: "Omobio (Pvt) Ltd",
        startDate: "Dec 2024",
        endDate: "Jun 2025",
        description: "Completed a 6-month internship focused on DevOps practices including server and application monitoring, Linux shell scripting, working with critical RHEL live servers in the telecom domain, and managing containerized environments using Podman and Docker.",
        logo: Omobio,
      },
      {
        degree: "BSc in Computer Science",
        institution: "University of Colombo School of Computing",
        startDate: "May 2022",
        endDate: "May 2025",
        description: "Completed Bachelor's degree in Computer Science with a solid foundation in Computer Networks, Operating Systems, Software Engineering, System and Network Administration, Cloud Technologies, and Information System Security.",
        logo: UCSC
      },      
      {
        degree: "GCE Advance Level",
        institution: "Rajapaksha Central Collage Weeraketiya",
        startDate: "Jan 2012",
        endDate: "Oct 2020",
        description: "Studied in the Physical Science stream and achieved ABB in the first attempt: A in Chemistry, B in Combined Mathematics, and B in Physics.",
        logo: RCC, 
      }
  ];

  const renderIcon = (tech) => {
    if (tech.iconSrc) {
      // For imported SVG files
      return (
        <img 
          src={tech.iconSrc} 
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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const calculateDuration = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();
    
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const years = Math.floor(diffDays / 365);
    const months = Math.floor((diffDays % 365) / 30);
    
    if (years > 0 && months > 0) {
      return `${years} year${years > 1 ? 's' : ''} ${months} month${months > 1 ? 's' : ''}`;
    } else if (years > 0) {
      return `${years} year${years > 1 ? 's' : ''}`;
    } else if (months > 0) {
      return `${months} month${months > 1 ? 's' : ''}`;
    } else {
      return 'Less than a month';
    }
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
                href={`#${link.section}`} // Keep this for accessibility
                onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  scrollToSection(link.section);
                }}
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
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.section); // Scrolls and closes menu
                  }}
                  className={`block px-3 py-3 rounded-md flex items-center space-x-2 ${
                    activeSection === link.section ? 'bg-gray-700 text-blue-400' : 'text-gray-300 hover:bg-gray-700'
                  }`}
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
              <div className={`flex items-center space-x-4 ${animatedItems.includes('hero-text') ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
                <a  
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('projects');
                  }}
                  className="inline-flex items-center px-6 py-3 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors"
                >
                  View Projects
                  <i className="bx bx-chevron-right text-xl ml-1 flex-shrink-0"></i>
                </a>
                <a 
                  href={Virajith_Dissanayaka} 
                  className="inline-flex items-center px-6 py-3 h-12 border border-gray-700 hover:border-blue-400 hover:text-blue-400 rounded-md font-medium transition-all"
                >
                  <Download size={20} className="mr-2 flex-shrink-0" />
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
                        
                        {/* Enhanced date display with start and end dates */}
                        <div className="mb-4">
                          <div className={`flex items-center gap-2 text-gray-400 text-sm ${
                            index % 2 === 0 ? 'md:justify-end' : 'justify-start'
                          }`}>
                            <span className="bg-gray-700 px-2 py-1 rounded-md">
                              {edu.startDate}
                            </span>
                            <span className="text-gray-500">→</span>
                            <span className="bg-gray-700 px-2 py-1 rounded-md">
                              {edu.endDate || 'Present'}
                            </span>
                          </div>
                          {/* Duration calculation */}
                          <span className={`text-gray-500 text-xs mt-1 italic ${
                            index % 2 === 0 ? 'md:text-right' : 'text-left'
                          }`}>
                            Duration: {calculateDuration(edu.startDate, edu.endDate)}
                          </span>
                        </div>
                        
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
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  animatedItems={animatedItems}
                />
              ))}
            </div>
            
            
            <div className={`mt-20 text-center ${animatedItems.includes('projects-footer') ? 'animate-fade-in-up' : ''}`} id="projects-footer">
              <a 
                //href="#/projects" 
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


