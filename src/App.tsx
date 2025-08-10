import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Calendar, GraduationCap, Award, Code, Cpu, Eye, Cog, Database, GitBranch, Users, Target, Zap, Heart, ExternalLink, Building, ChevronLeft, ChevronRight } from 'lucide-react';

function App() {
    const [currentImageIndex, setCurrentImageIndex] = React.useState<{[key: number]: number}>({});

    const nextImage = (projectId: number, totalImages: number) => {
      setCurrentImageIndex(prev => ({
        ...prev,
        [projectId]: ((prev[projectId] || 0) + 1) % totalImages
      }));
    };

    const prevImage = (projectId: number, totalImages: number) => {
      setCurrentImageIndex(prev => ({
        ...prev,
        [projectId]: ((prev[projectId] || 0) - 1 + totalImages) % totalImages
      }));
    };

    return (
    <div className="min-h-screenbg bg-gray-50">
      {/* Navigation */}
      <nav className="bg-rose-50 shadow-sm border-b border-rose-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-900">Maram Cheikh</h1>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-sky-500 transition-colors">About</a>
              <a href="#education" className="text-gray-600 hover:text-sky-500 transition-colors">Education</a>
              <a href="#skills" className="text-gray-600 hover:text-sky-500 transition-colors">Skills</a>
              <a href="#projects" className="text-gray-600 hover:text-sky-500 transition-colors">Projects</a>
              <a href="#experience" className="text-gray-600 hover:text-sky-500 transition-colors">Experience</a>
              <a href="#contact" className="text-gray-600 hover:text-sky-500 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

{/* About Section */}
<section id="about" className="bg-white py-20">
  <div className="max-w-7xl mx-auto px-6">
    <div className="max-w-full mx-auto">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
        <img 
          src="./public/maramm.jpg" 
          alt="Maram Cheikh" 
          className="w-64 h-64 rounded-xl object-cover shadow-2xl transition-transform duration-500 hover:scale-105"
        />
        
        <div className="text-center lg:text-left max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-2">
            Maram Cheikh
          </h1>
          <p className="text-xl text-blue-600 font-medium mb-6">
            Final Year Engineering Student @ INSAT
          </p>
          <p className="text-lg text-gray-600 font-medium mb-6">
            Instrumentation and Industrial Maintenance specialized in Microelectronics
            <br />
            <span className="text-blue-500">(Partnership with the University of Grenoble Alpes)</span>
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
             Passionate about IoT and embedded systems, I'm dedicated to bridging the gap between 
            hardware and software to create innovative technological. Currently, I'm actively seeking a final year internship to apply my skills and contribute to impactful projects. 
          </p>

          <div className="flex justify-center lg:justify-start">
            <a 
              href="/cv.pdf" 
              download="Maram_Cheikh_CV.pdf"
              className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-full font-semibold shadow-md transition-all duration-300 inline-block"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Education Section */}
      <section id="education" className="bg-gradient-to-br from-yellow-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Education</h2>
            <p className="text-xl text-gray-600">My academic journey and qualifications</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* INSAT */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-sky-400">
              <div className="flex items-start gap-6">
                <div className="bg-sky-100 p-4 rounded-full">
                  <GraduationCap className="w-8 h-8 text-sky-600" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-blue-900">National Institute of Applied Sciences and Technology (INSAT)</h3>
                    <div className="flex items-center text-sky-600 font-semibold">
                      <Calendar className="w-5 h-5 mr-2" />
                      2021 - 2026
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-sky-50 p-4 rounded-lg"> 
                      <h4 className="font-semibold text-blue-900 mb-2">Pre-Engineering Cycle (2021-2023)</h4>
                      <p className="text-gray-600">Mathematics, Physics, Computer Science</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Engineering Cycle (2023-2026)</h4>
                      <p className="text-gray-600">Instrumentation and Industrial Maintenance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* High School */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-green-400">
              <div className="flex items-start gap-6">
                <div className="bg-green-100 p-4 rounded-full">
                  <Award className="w-8 h-8 text-green-500" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-blue-900">Mohamed Ali Annabi High School</h3>
                    <div className="flex items-center text-green-500 font-semibold">
                      <MapPin className="w-5 h-5 mr-2" />
                      Ras Jbal
                    </div>
                  </div>
                  <p className="text-gray-600">Scientific Baccalaureate with High Honors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-gradient-to-br from-purple-50 to-rose-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Skills & Expertise</h2>
            <p className="text-xl text-gray-600">Technical and personal competencies</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Technical Skills */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-8 flex items-center">
                <Code className="w-8 h-8 text-sky-600 mr-3" />
                Technical Skills
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Programming and Software development */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                    <Code className="w-5 h-5 text-sky-600 mr-2" />
                    Programming and Software development
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'Embedded C', 'React JS', 'VHDL', 'SQL', 'GitHub','YOLOv8','OpenCV'].map((skill) => (
                      <span key={skill} className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Embedded Systems & Electronics */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                    <Cpu className="w-5 h-5 text-green-500 mr-2" />
                    Embedded Systems & Electronics
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['STM32', 'ESP32', 'Raspberry Pi', 'Microelectronics', 'Robotics'].map((skill) => (
                      <span key={skill} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tools & Platforms */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                    <Cog className="w-5 h-5 text-yellow-500 mr-2" />
                    Tools & Platforms
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['LabVIEW', 'MATLAB', 'SolidWorks', 'Linux', 'Firebase'].map((skill) => (
                      <span key={skill} className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Skills */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-8 flex items-center">
                <Heart className="w-8 h-8 text-rose-500 mr-3" />
                Personal Skills
              </h3>
              
              <div className="space-y-4">
                {[
                  { icon: Zap, skill: 'Hard Work', color: 'text-yellow-600', bg: 'bg-yellow-50' },
                  { icon: Users, skill: 'Team Spirit', color: 'text-green-500', bg: 'bg-green-50' },
                  { icon: Target, skill: 'Stress Management', color: 'text-purple-500', bg: 'bg-purple-50' },
                  { icon: Target, skill: 'Ambition & Motivation', color: 'text-rose-500', bg: 'bg-rose-50' }
                ].map(({ icon: Icon, skill, color, bg }) => (
                  <div key={skill} className={`${bg} p-4 rounded-lg shadow-sm flex items-center`}>
                    <div className={`${bg} p-3 rounded-full mr-4`}>
                      <Icon className={`w-6 h-6 ${color}`} />
                    </div>
                    <span className="text-blue-900 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certificates Section */}
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
              <Award className="w-8 h-8 text-yellow-600 mr-3" />
              Certificates
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Certificates with actual images */}
              {[
                { id: 1, name: 'Communication Protocols', image: '/certif csf.jpg' },
                { id: 2, name: 'GitHub Foundations– DataCamp', image: '/GITHUB.jpg' },
                { id: 3, name: 'National Robotics Weekend', image: '/NRW.jpg' },
                { id: 4, name: 'Large Language Model– NVIDIA', image: '/NVIDEA.jpg' },
                { id: 5, name: ' ROSfor Beginners: Basics, Motion, and OpenCV– Udemy', image: '/ROS Certif.jpg' },
                { id: 6, name: 'National Re-Tech Fusion Hackathon', image: '/NRTF.jpg' },
                { id: 7, name: 'AI Fundamentals', image: '/ai.jpg' }
              ].map((cert) => (
                <div key={cert.id} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-32 rounded-lg mb-4 overflow-hidden cursor-pointer">
                    <img 
                      src={cert.image} 
                      alt={cert.name}
                      className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                      onClick={() => window.open(cert.image, '_blank')}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDIwMCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTI4IiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik04NyA2NEw5MyA3MEwxMDcgNTZNNjQgOTZIMTM2QzE0MC40MTggOTYgMTQ0IDkyLjQxOCAxNDQgODhWNDBDMTQ0IDM1LjU4MiAxNDAuNDE4IDMyIDEzNiAzMkg2NEMzOS41ODIgMzIgNTYgMzUuNTgyIDU2IDQwVjg4QzU2IDkyLjQxOCA1OS41ODIgOTYgNjQgOTZaIiBzdHJva2U9IiM5Q0EzQUYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTE2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNjc3NDhGIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiPkNlcnRpZmljYXRlIEltYWdlPC90ZXh0Pgo8L3N2Zz4K';
                      }}
                    />
                  </div>
                  <h4 className="font-semibold text-gray-800 text-center">{cert.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gradient-to-br from-sky-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Projects</h2>
            <p className="text-xl text-gray-600">Innovative solutions and technical implementations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                id: 1, 
                title: 'Smart irrigation system', 
                images: ['/smart irrig.png', '/smart irr.png'], 
                skills: ['React Js', 'IoT', 'ESP32', 'Firebase'],
                description: 'Development of an automated irrigation management system using soil moisture sensors and an ESP32 microcontroller. The system enables intelligent watering based on real-time environmental data, optimizing water usage.'
              },
              { 
                id: 2, 
                title: 'Line follower robot', 
                images: ['/robot.jpg'], 
                skills: ['Motor Control', 'Hardware Integration', 'PID control '],
                description: 'Development of a line follower robot capable of detecting and following a predefined path using sensor-based feedback. The robot adjusts its movement dynamically based on real-time data, allowing it to follow complex trajectories'
              },
              { 
                id: 3, 
                title: 'Smart glasses for visually impaired individuals', 
                images: ['/comp visi2.png', '/compvisi.png'], 
                skills: ['OpenCV', 'YOLOv8', 'Sensors'],
                description: 'Research and development of smart glasses aimed at supporting visually impaired individuals through computer vision for real-time perception of their surroundings'
              },
              { 
                id: 4, 
                title: 'Autonomous robot', 
                images: ['/project4_1.jpg', '/project4_2.jpg'], 
                skills: ['Autonomous Navigation', 'Embedded Systems & Programming', ' Testing & Optimization'],
                description: 'Development of an autonomous robot capable of navigating its environment, identifying and puncturing balloons, and distinguishing cubes based on their color. Using sensor input and computer vision, the robot makes real-time decisions to move toward targets, perform tasks'
              },
              { 
                id: 5, 
                title: 'Smart Mobility for Wheelchair Users"Wellness Innovation Bootcamp–2nd prize"', 
                images: ['/emp1.png', '/emp2.png'], 
                skills: ['Figma', 'User-centered design', 'Accessibility awareness'],
                description: 'An innovative platform that helps wheelchair users find accessible locations via an interactive map with filters and detailed information, while promoting community feedback and partnerships to improve accessibility.'
                },
              { 
                id: 6, 
                title: 'IoT-Based Garage Automation Using Matter on Ubuntu', 
                images: ['/sofia2.png', '/sofia1.png'], 
                skills: ['Matter Protocol', 'Smart Home Concepts', 'ubuntu'],
                description: 'Development of an IoT solution for automating a garage door using the MATTER protocol on Ubuntu, ensuring secure and interoperable communication within smart home ecosystems. The project integrates advanced features such as GPS-based automation and remote control.'
              },
              { 
                id: 7, 
                title: 'Matter over Thread ecosystem', 
                images: ['/project7_1.jpg'], 
                skills: ['VHDL', 'FPGA', 'Digital'],
                description: '...'
              }
            ].map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Project Images Carousel */}
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={project.images[currentImageIndex[project.id] || 0]} 
                    alt={`${project.title} - Image ${(currentImageIndex[project.id] || 0) + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjE5MiIgdmlld0JveD0iMCAwIDMwMCAxOTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMTkyIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMzAgOTZMMTM2IDEwMkwxNTAgODhNOTYgMTQ0SDE5MkMyMDQuNDE4IDE0NCAyMTYgMTMyLjQxOCAyMTYgMTIwVjcyQzIxNiA1OS41ODIgMjA0LjQxOCA0OCAxOTIgNDhIOTZDODMuNTgyIDQ4IDcyIDU5LjU4MiA3MiA3MlYxMjBDNzIgMTMyLjQxOCA4My41ODIgMTQ0IDk2IDE0NFoiIHN0cm9rZT0iIzlDQTNBRiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHN2ZyB4PSIxMjAiIHk9IjgwIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSI+CjxwYXRoIGQ9Ik0xNCAxNUgxNlYxN0gxNFYxNVpNMTAgMTVIMTJWMTdIMTBWMTVaTTYgMTVIOFYxN0g2VjE1Wk0xNiA5SDE4VjExSDE2VjlaTTEyIDlIMTRWMTFIMTJWOVpNOCA5SDEwVjExSDhWOVpNMTggNUgyMFY3SDE4VjVaTTE0IDVIMTZWN0gxNFY1Wk0xMCA1SDEyVjdIMTBWNVoiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+Cjx0ZXh0IHg9IjE1MCIgeT0iMTcwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNjc3NDhGIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiPlByb2plY3QgSW1hZ2U8L3RleHQ+Cjwvc3ZnPgo=';
                    }}
                  />
                  
                  {/* Navigation arrows - only show if multiple images */}
                  {project.images.length > 1 && (
                    <>
                      <button
                        onClick={() => prevImage(project.id, project.images.length)}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => nextImage(project.id, project.images.length)}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                      
                      {/* Image counter */}
                      <div className="absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-xs">
                        {(currentImageIndex[project.id] || 0) + 1} / {project.images.length}
                      </div>
                      
                      {/* Dots indicator */}
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                        {project.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(prev => ({ ...prev, [project.id]: index }))}
                            className={`w-2 h-2 rounded-full transition-all duration-200 ${
                              (currentImageIndex[project.id] || 0) === index 
                                ? 'bg-white' 
                                : 'bg-white/50 hover:bg-white/75'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-blue-900 mb-2">Skills Learned:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill, index) => (
                        <span key={index} className="bg-sky-100 text-sky-700 px-2 py-1 rounded text-sm">{skill}</span>
                      ))}
                    </div>
                  </div>
                  

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-gradient-to-br from-green-50 to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Experience</h2>
            <p className="text-xl text-gray-600">Professional experience and industry exposure</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                title: 'Summer Internship',
                company: 'SOFIATECH',
                duration: 'July 2025 - August 2025',
                description: 'Development of a Matter over Thread Ecosystem using Raspberry pi to build a Border Router',
                learnings: ['Rasp', 'Protocol implementation', 'Network configuration']
              },
              {
                id: 2,
                title: 'Exploratory internship in Microelectronics(1 week)',
                company: 'Grenoble,France "CIME-NANOTECH and ST Crolles Clean Rooms , CEA-Leti, LTM, Labex Microelectronics"',
                duration: 'July 2025',
                description: 'Visit to ST-Crolles(Clean Room), CEA-Leti, LTM, and Labex Microelectronics and practical work in the CIME-NANOTECH Clean Room',
                learnings: ['fabrication', 'conception', 'clean room']
              },
              {
                id: 3,
                title: 'Summer Internship',
                company: 'SOFIATECH',
                duration: 'July 2024',
                description: 'Development of an IoT solution for automating a garage door using the MATTER protocol on Ubuntu',
                learnings: ['Matter protocol', 'Smart automation', 'System integration']
              },
              {
                id: 4,
                title: 'Volontary Summer Internship',
                company: 'Eleonetech',
                duration: 'July 2023',
                description: 'Developed tests using LabVIEW and gained insight into the daily responsibilities of maintenance professionals.',
                learnings: ['Labview', 'maintenance operations', 'Applied knowledge']
              }
            ].map((experience) => (
              <div key={experience.id} className="bg-white rounded-xl p-8 shadow-lg border-2 border-rose-100 hover:border-rose-300 transition-all duration-300">
                <div className="bg-rose-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Building className="w-8 h-8 text-rose-500" />
                </div>
                
                <h3 className="text-xl font-bold text-blue-900 mb-2">{experience.title}</h3>
                <p className="text-sky-600 font-semibold mb-2">{experience.company}</p>
                <p className="text-gray-600 mb-4">Duration: {experience.duration}</p>
                <p className="text-gray-600 mb-6">
                  {experience.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-blue-900">Key Learnings:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    {experience.learnings.map((learning, index) => (
                      <li key={index}>• {learning}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gradient-to-r from-sky-400 to-purple-400 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-xl text-sky-100 mb-12 max-w-2xl mx-auto">
            Let's connect and discuss opportunities in engineering, IoT, and embedded systems.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <a 
              href="mailto:maram.cheikh@insat.ucar.tn?subject=Contact%20from%20Portfolio&body=Hello%20Maram,%0D%0A%0D%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20get%20in%20touch.%0D%0A%0D%0ABest%20regards" 
              className="bg-white/10 hover:bg-white/20 text-white p-6 rounded-xl transition-all duration-200 backdrop-blur-sm group flex flex-col items-center"
            >
              <Mail className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <p className="font-semibold mb-1">Email</p>
              <p className="text-sm text-sky-100 text-center leading-tight">
                maram.cheikh@<br />insat.ucar.tn
              </p>
            </a>
            
            <a 
              href="tel:+216XXXXXXXX" 
              className="bg-white/10 hover:bg-white/20 text-white p-6 rounded-xl transition-all duration-200 backdrop-blur-sm group"
            >
              <Phone className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <p className="font-semibold mb-1">Phone</p>
              <p className="text-sm text-sky-100">+216 29 711 413</p>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/maram-cheikh-026b68247" 
              className="bg-white/10 hover:bg-white/20 text-white p-6 rounded-xl transition-all duration-200 backdrop-blur-sm group"
            >
              <Linkedin className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <p className="font-semibold mb-1">LinkedIn</p>
              <p className="text-sm text-sky-100">Connect with me</p>
            </a>
            
            <div className="bg-white/10 text-white p-6 rounded-xl backdrop-blur-sm">
              <MapPin className="w-8 h-8 mx-auto mb-3" />
              <p className="font-semibold mb-1">Location</p>
              <p className="text-sm text-sky-100">Tunisia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-20 text-white py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Maram Cheikh. Engineering the future through innovation and technology.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;