import Head from 'next/head';
import { useState } from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import Image from 'next/image';

export default function Projects({ isDarkMode }) {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      title: "Movie Management System",
      period: "2024 March - 2024 May",
      type: "Web Application",
      category: "web",
      description: "A comprehensive movie management system built with ASP.NET Core MVC, featuring user authentication, role-based access control, and complete CRUD operations.",
      image: "/images/movie-management.png",
      technologies: ["C#", "ASP.NET Core MVC", "Entity Framework Core", "SQL Server", "Bootstrap", "HTML5", "CSS3", "JavaScript", "Git", "Visual Studio"],
      keyPoints: [
        "Developed a complete ASP.NET Core MVC application with secure user management and role-based access control",
        "Implemented full CRUD operations for movie management using Entity Framework Core",
        "Created responsive and dynamic user interface using Bootstrap with smooth animations",
        "Utilized SQL Server for efficient database management and operations",
        "Implemented secure authentication and authorization system"
      ],
      links: {
        github: "https://github.com/chavee716/Movie_Explorer-ASP.NET_Web_App",
        demo: null
      }
    },
    {
      title: "Smart Trolley System",
      period: "2024 March - 2024 May",
      type: "Embedded Systems",
      category: "embedded_systems",
      description: "An IoT-based smart trolley system that revolutionizes supermarket shopping using RFID technology, weight sensors, and real-time inventory tracking.",
      image: "/images/smart-trolley.png",
      technologies: ["RFID", "IoT", "Raspberry Pi", "Node.js", "Next.js", "MongoDB", "MQTT", "WebSocket", "Express.js"],
      keyPoints: [
        "Developed an automated product scanning system using RFID technology for instant product detection",
        "Implemented real-time weight verification system using load cell sensors for security",
        "Created an energy-efficient system with wireless features for inventory tracking",
        "Built a user-friendly interface with real-time error handling and automatic billing"
      ],  
      links: {
        github: "https://github.com/chavee716/Smart_Trolley_System",
        demo: null
      }
    },
    {
      title: "My Portfolio Website",
      period: "2025 Feb - 2025 March",
      type: "Web Development",
      category: "web",
      description: "A personal portfolio website built with Next.js to showcase my projects, skills, and experience.",
      image: "/images/portfolio-website.png",
      technologies: ["Next.js", "React", "Tailwind CSS", "JavaScript", "Responsive Design", "Git", "GitHub", "Render.com"],
      keyPoints: [
        "Integrated a backend email service enabling direct visitor communication to me",
        "Utilized Tailwind CSS for styling and responsive design to ensure compatibility across devices.",
        "Implemented light and dark mode for better user experience and accessibility.",
        "Deployed the website on Render.com for reliable hosting."
      ],
      links: {
        github: null,
        demo: null
      }
    },
    {
      title: "EV Charging Booking System",
      period: "2024 - PRESENT",
      type: "Software Project - Web application + Mobile application according to client requirements",
      category: "mobile",
      description: "The EV Charging and Booking System allows users to see the available charging stations near their live location and book a slot based on availability.",
      image: "/images/ev-charging-app.png",
      technologies: ["React", "Tailwind CSS", "React Native", "Node.js", "MongoDB", "Google Maps API", "Git", "GitHub", "JIRA"],
      keyPoints: [
        "The EV Charging and Booking System allows users to see the available charging stations near their live location and book a slot based on availability.",
        "Users can select their preferred timeslot in any station for charging and book them.",
        "Used JWT authentication and role-based access control (RBAC) to secure user data and admin functionalities.",
        "Created a mobile app using React Native and the backend using Node.js with a MongoDB database."
      ],
      links: {
        github: "https://github.com/chavee716/Electric_Vehicle_Charging_Booking_System",
        demo: null
      }
    },
    {
      title: "To Do List Tracker",
      period: "2024 Dec - 2025 Feb",
      type: "DevOps + Web Application",
      category: "devops",
      description: "DevOps pipeline implementation for a To Do List web application.",
      image: "/images/todo-list-app.png",
      technologies: ["GitHub Actions", "Jenkins", "Docker", "Docker Hub", "Git", "Terraform", "Node.js", "Express.js", "React.js", "AWS EC2"],
      keyPoints: [
        "Built a CI/CD pipeline using Jenkins to automate the process of building Docker images for frontend and backend services.",
        "Designed and implemented creating the server instance using Terraform to create the automation of creating AWS EC2"
      ],
      links: {
        github: "https://github.com/chavee716/devops",
        demo: null
      }
    },
    {
      title: "Hotel Booking and Management System",
      period: "2024 Jan - 2024 March",
      type: "Web Application",
      category: "web",
      description: "Allows users to book hotels and add their hotels to the app and manage them",
      image: "/images/hotel-booking-system.png",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT Authentication", "Git", "GitHub", "JIRA", "GitHub Actions"],
      keyPoints: [
        "Used pagination and lazy loading to reduce the delay when the web application is loading",
        "Added advanced search functionality with filtering and indexing capabilities to enhance user experience",
        "Designed a role-based access control (RBAC) system to ensure secure user authentication and authorization."
        
      ],
      links: {
        github: "https://github.com/chavee716/Hotel_Booking_Application",
        demo: null
      }
    },
    {
      title: "Mushroom Classification System",
      period: "2024 Sep - 2024 Dec",
      type: "Machine Learning",
      category: "ml",
      description: "Developed a machine learning model to classify mushrooms as poisonous or edible based on their characteristics.",
      image: "/images/mushroom-classification.png",
      technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn", "Google Colab"],
      keyPoints: [
        "Used a Decision Tree algorithm, achieving 99.63% accuracy and 99.49% precision on the dataset.",
        "Performed data preprocessing and feature engineering using Pandas to handle categorical variables.",
        "Trained and evaluated the model using Scikit-learn and fine-tuned hyperparameters for optimal performance."
      ],
      links: {
        github: "https://github.com/chavee716/Mushroom_Classification",
        demo: null
      }
    },
    {
      title: "Real-Time Face Mask Detection System",
      period: "2024 Dec - 2025 May",
      type: "Artificial Intelligence",
      category: "ml",
      description: "Implemented a real-time face mask detection system using OpenCV, TensorFlow, and deep learning.",
      image: "/images/face-mask-detection.jpg",
      technologies: ["Python", "TensorFlow", "OpenCV", "Seaborn", "NumPy"],
      keyPoints: [
        "Used a pre-trained DNN model (Caffemodel) to detect faces in the live video feed",
        "Detected faces are sent through a Convolutional Neural Network to check if a person is wearing a mask or not",
        "Developed an email notification system that automatically sends alerts with captured images when violations are detected",
        "Added a Cooldown timer to avoid sending unnecessary emails",
        "Integrated face detection with mask classification for live webcam feed analysis with optimized FPS performance"
      ],
      links: {
        github: "https://github.com/chavee716/Face-Mask-Detection-System",
        demo: null
      }
    },
    {
      title: "Car Rental System",
      period: "2024 Jan - 2024 March",
      type: "MySQL Application",
      category: "database",
      description: "A database application for managing car rentals.",
      image: "/images/car-rental-system.png",
      technologies: ["MySQL", "Visual Paradigm"],
      keyPoints: [
        "Created a 2NF schema to ensure consistent, non-redundant data.",
        "Reduced the time up to 2-3 seconds for Database Queries on average through indexing",
        "Used advanced SQL operations, including joins, unions, nested queries, and aggregates for efficient data management.",
        "Executed full outer joins, Cartesian products, and nested queries to retrieve required information."
      ],
      links: {
        github: "#",
        demo: null
      }
    },
    {
      title: "Hospital Management System",
      period: "2024 Jan - 2024 March",
      type: ".NET Application",
      category: "web",
      description: "Allows the respective authorities of the hospital to do CRUD operations on patients' records, doctors' information and their records.",
      image: "/images/hospital-management.jpeg",
      technologies: [".NET", "C#", "SQL", "WFA"],
      keyPoints: [
        "Implemented CRUD operations for managing patient records and doctor information",
        "Used SQL database for efficient data storage and retrieval of user and doctor information",
        "Developed a Windows Forms Application (WFA) for an intuitive user interface",
        "Created a secure and efficient system for hospital authorities to manage medical records"
      ],
      links: {
        github: null,
        demo: null
      }
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const filters = [
    { id: 'all', label: 'Projects' },
    { id: 'embedded_systems', label: 'Embedded Systems' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'devops', label: 'DevOps' },
    { id: 'ml', label: 'Machine Learning' },
    { id: 'database', label: 'Database' }
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <Head>
        <title>Projects | Chaveen Dias</title>
        <meta name="description" content="Projects by Chaveen Dias, Computer Engineering Undergraduate" />
      </Head>
      
      <main className="max-w-6xl mx-auto p-6">
        <h2 className={`text-4xl font-semibold mb-6 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          My Projects
        </h2>
        <p className={`text-center max-w-3xl mx-auto mb-10 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Here are some of the projects I&apos;ve worked on. Each one has helped me develop different skills and tackle unique challenges.
        </p>
        
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map(filterOption => (
            <button
              key={filterOption.id}
              onClick={() => setFilter(filterOption.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === filterOption.id
                  ? isDarkMode 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-blue-600 text-white'
                  : isDarkMode
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    : 'bg-white text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filterOption.label}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className={`rounded-xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-all duration-300 ${
                isDarkMode ? 'bg-gray-900' : 'bg-white'
              }`}
            >
              {/* Project Image */}
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  width={800}
                  height={400}
                  style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%'
                  }}
                  className="transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    {project.title}
                  </h3>
                  <span className={`text-xs px-3 py-1 rounded-full ${
                    isDarkMode ? 'bg-blue-900/40 text-blue-300' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {project.type}
                  </span>
                </div>
                
                <div className="flex items-center mb-4 text-sm">
                  <Calendar size={14} className={`mr-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                  <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>
                    {project.period}
                  </span>
                </div>
                
                <p className={`mb-5 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {project.description}
                </p>
                
                <div className="mb-5">
                  <h4 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                    Key Features:
                  </h4>
                  <ul className="space-y-1 pl-5 list-disc">
                    {project.keyPoints.map((point, i) => (
                      <li key={i} className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className={`text-xs px-2 py-1 rounded ${
                          isDarkMode 
                            ? 'bg-gray-800 text-green-400 border border-green-800' 
                            : 'bg-gray-100 text-green-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  {project.links.github && project.links.github !== "#" && (
                    <a 
                      href={project.links.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`flex items-center px-3 py-2 rounded-lg text-sm ${
                        isDarkMode 
                          ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  )}
                  
                  {project.links.demo && (
                    <a 
                      href={project.links.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`flex items-center px-3 py-2 rounded-lg text-sm ${
                        isDarkMode 
                          ? 'bg-blue-900/30 text-blue-400 hover:bg-blue-900/50' 
                          : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                      }`}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}