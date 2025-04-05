import { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, ChevronDown, Terminal, Code, Cpu } from 'lucide-react';
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import CV from '../Shivam_Sharma.pdf';
import myImage from '../Me.jpg';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      title: "ShlokaSaar",
      description: " An AI-powered Sanskrit shloka interpretation app using Flutter, providing real-time translations and explanations.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      link: "https://github.com/AlphaShiv7781/ShlokaSaar-Frontend",
      icon: <Terminal className="w-6 h-6 text-[#0fa]" />
    },
    {
      title: "InstaScan",
      description: " InstaScan, an AI-powered medical imaging application for skin cancer and pneumonia detection using deep learning.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      link: "https://github.com/AlphaShiv7781/InstaScan",
      icon: <Code className="w-6 h-6 text-[#0fa]" />
    },
    {
      title: "BlogFlex",
      description: "A full-stack blogging platform using Django and PostgreSQL, enabling users to create, edit, and manage blog posts with secure authentication.",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
      link: "https://github.com/AlphaShiv7781/BlogFlex",
      icon: <Cpu className="w-6 h-6 text-[#0fa]" />
    },
    {
      title: "Age and Gender Detection",
      description: "A machine learning project for detecting Age and Gender using OpenCV and TensorFlow.",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
      link: "https://github.com/AlphaShiv7781/Age_Gender_Detection",
      icon: <Cpu className="w-6 h-6 text-[#0fa]" />
    },
    {
      title: "AutoBot",
      description: "AutoBot, a cutting-edge Flutter application that seamlessly integrates three powerful AI features: an AI Chatbot, a ChatGPT 3.5 mobile clone, and an image generator using ChatGPT API and DALL-E API. Elevate your user experience with intelligent interactions and stunning visuals.",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
      link: "https://github.com/AlphaShiv7781/AutoBot",
      icon: <Cpu className="w-6 h-6 text-[#0fa]" />
    }
  ];

  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js"] },
    { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "AWS"] },
    { category: "Tools", items: ["Git", "Docker", "Figma", "Jest"] }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/50 backdrop-blur-lg z-50 cyber-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold neon-text">Portfolio</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-300 hover:text-[#0fa] transition-all duration-300 hover:scale-105">Home</a>
              <a href="#about" className="text-gray-300 hover:text-[#0fa] transition-all duration-300 hover:scale-105">About</a>
              <a href="#projects" className="text-gray-300 hover:text-[#0fa] transition-all duration-300 hover:scale-105">Projects</a>
              <a href="#skills" className="text-gray-300 hover:text-[#0fa] transition-all duration-300 hover:scale-105">Skills</a>
              <a href="#contact" className="text-gray-300 hover:text-[#0fa] transition-all duration-300 hover:scale-105">Contact</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-[#0fa] transition-transform duration-300 hover:scale-110"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block px-3 py-2 text-gray-300 hover:text-[#0fa] transition-all duration-300 hover:translate-x-2">Home</a>
              <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-[#0fa] transition-all duration-300 hover:translate-x-2">About</a>
              <a href="#projects" className="block px-3 py-2 text-gray-300 hover:text-[#0fa] transition-all duration-300 hover:translate-x-2">Projects</a>
              <a href="#skills" className="block px-3 py-2 text-gray-300 hover:text-[#0fa] transition-all duration-300 hover:translate-x-2">Skills</a>
              <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-[#0fa] transition-all duration-300 hover:translate-x-2">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/0 via-gray-900 to-gray-900"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 glitch" data-text="Hi, I'm SHIVAM SHARMA">
              Hi, I'm SHIVAM SHARMA
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 neon-text">
              Full Stack Developer | Problem Solver | Tech Enthusiast
            </p>
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/AlphaShiv7781" className="text-gray-400 hover:text-[#0fa] transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                <Github size={24} />
              </a>
              <a href="https://leetcode.com/u/Shiv_2706/" className="text-gray-400 hover:text-[#0fa] transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                <SiLeetcode size={24}  />
              </a>
              <a href="https://www.geeksforgeeks.org/user/shivamsharma242424/" className="text-gray-400 hover:text-[#0fa] transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                <SiGeeksforgeeks size={24}  />
              </a>
              <a href="https://www.linkedin.com/in/shivam-sharma-shivamsharmaprofile/" className="text-gray-400 hover:text-[#0fa] transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                <Linkedin size={24} />
              </a>
              <a href="mailto:shivamsharma242424@gmail.com" className="text-gray-400 hover:text-[#0fa] transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                <Mail size={24} />
              </a>
            </div>
            
            <div className="pt-10 pb-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-center">
            <a href={CV} download className="inline-block cyber-border bg-gray-800/50 text-[#0fa] py-2 px-6 rounded-md transition-all duration-300 hover:neon-box hover:scale-105">
              Download Resume
            </a>
          </div>
        </div>

            <div className="mt-12 animate-bounce hover:animate-none transition-all duration-300">
              <ChevronDown size={24} className="mx-auto text-[#0fa] hover:scale-110" />
            </div>
          </div>
        </div>
      </section>

    
      {/* About Section */}
      <section id="about" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 cyber-gradient opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-3xl font-bold mb-12 text-center neon-text">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#0fa] to-[#00f2fe] rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative aspect-square overflow-hidden rounded-lg cyber-border">
                <img
                  src={myImage}
                  alt="Profile"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-[#0fa]">Who am I?</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm a passionate Full Stack Developer with a keen interest in building innovative web solutions. With expertise in modern web technologies and a problem-solving mindset, I create efficient and scalable applications that make a difference.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My journey in tech started with a curiosity about how things work on the internet, which led me to dive deep into web development. Today, I combine my technical skills with creative thinking to build user-centric applications.
              </p>
              <div className="pt-4">
                <a
                  href="#contact"
                  className="inline-block cyber-border bg-gray-800/50 text-[#0fa] py-2 px-6 rounded-md transition-all duration-300 hover:neon-box hover:scale-105"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}

      <section id="experience" className="py-20 bg-gray-900/50 relative overflow-hidden">
        <div className="absolute inset-0 cyber-gradient opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-3xl font-bold mb-12 text-center neon-text">Experience</h2>
          <div className="space-y-6">
            <div className="bg-gray-800/50 p-6 rounded-lg cyber-border backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-gray-800/70">
              <h3 className="text-xl font-semibold mb-2 text-[#0fa] group-hover:neon-text transition-all duration-300">Flutter Developer at Evening Coders</h3>
              <p className="text-gray-400 mb-4">June 2024 - November 2024</p>
              <ul className="list-disc pl-5 text-gray-300 space-y-2">
                <li>Developed and maintained web applications using React, Node.js, and MongoDB.</li>
                <li>Collaborated with cross-functional teams to define, design, and ship new features.</li>
                <li>Participated in code reviews and contributed to team knowledge sharing.</li>
              </ul>
            </div>
            {/* Add more experience items as needed */}
          </div>
        </div> 
        </section>


      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900/50 relative overflow-hidden">
        <div className="absolute inset-0 cyber-gradient opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-3xl font-bold mb-12 text-center neon-text">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-gray-800/50 rounded-lg overflow-hidden cyber-border backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:bg-gray-800/70">
                <div className="relative">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute top-4 right-4 bg-gray-900/80 p-2 rounded-full backdrop-blur-sm">
                    {project.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-[#0fa] group-hover:neon-text transition-all duration-300">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    className="inline-flex items-center text-[#0fa] hover:text-[#00f2fe] transition-all duration-300 group-hover:translate-x-2"
                  >
                    View Project <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-20 bg-gray-900/50 relative overflow-hidden">
        <div className="absolute inset-0 cyber-gradient opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-3xl font-bold mb-12 text-center neon-text">Education</h2>
          <div className="space-y-6">
            <div className="bg-gray-800/50 p-6 rounded-lg cyber-border backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-gray-800/70">
              <h3 className="text-xl font-semibold mb-2 text-[#0fa] group-hover:neon-text transition-all duration-300">Bachelor of Technology in Computer Science</h3>
              <p className="text-gray-400 mb-4">Babu Banarasi Das Institute of Technology & Management, 2021-2025</p>
              <ul className="list-disc pl-5 text-gray-300 space-y-2">
                <li>Relevant coursework: Data Structures, Algorithms, Web Development, Database Management.</li>
                <li>Flutter mentor at GDSC BBDITM'23 .</li>
              </ul>
            </div>
            {/* Add more education items as needed */}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 cyber-gradient opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-3xl font-bold mb-12 text-center neon-text">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="group bg-gray-800/50 p-6 rounded-lg cyber-border backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-gray-800/70">
                <h3 className="text-xl font-semibold mb-4 text-[#0fa] group-hover:neon-text transition-all duration-300">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-900/50 text-[#0fa] rounded-full text-sm border border-[#0fa]/30 backdrop-blur-sm transition-all duration-300 hover:neon-box hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900/50 relative overflow-hidden">
        <div className="absolute inset-0 cyber-gradient opacity-30"></div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-3xl font-bold mb-12 text-center neon-text">Get In Touch</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md bg-gray-800/50 border-gray-700 text-white focus:border-[#0fa] focus:ring focus:ring-[#0fa] focus:ring-opacity-50 transition-all duration-300"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md bg-gray-800/50 border-gray-700 text-white focus:border-[#0fa] focus:ring focus:ring-[#0fa] focus:ring-opacity-50 transition-all duration-300"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md bg-gray-800/50 border-gray-700 text-white focus:border-[#0fa] focus:ring focus:ring-[#0fa] focus:ring-opacity-50 transition-all duration-300"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full cyber-border bg-gray-800/50 text-[#0fa] py-2 px-4 rounded-md transition-all duration-300 hover:neon-box hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p>© {new Date().getFullYear()} SHIVAM SHARMA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;