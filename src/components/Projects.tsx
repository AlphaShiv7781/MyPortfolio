import { Code, ExternalLink } from "lucide-react"

const Projects = () => {

    const projects = [
        {
          title: "ShlokaSaar",
          description: " An AI-powered Sanskrit shloka interpretation app using Flutter, providing real-time translations and explanations.",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
          link: "https://github.com/AlphaShiv7781/ShlokaSaar-Frontend",
          icon: <Code className="w-6 h-6 text-[#0fa]" />
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
          icon: <Code className="w-6 h-6 text-[#0fa]" />
        },
        {
          title: "Age and Gender Detection",
          description: "A machine learning project for detecting Age and Gender using OpenCV and TensorFlow.",
          image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
          link: "https://github.com/AlphaShiv7781/Age_Gender_Detection",
          icon: <Code className="w-6 h-6 text-[#0fa]" />
        },
        {
          title: "AutoBot",
          description: "AutoBot, a cutting-edge Flutter application that seamlessly integrates three powerful AI features: an AI Chatbot, a ChatGPT 3.5 mobile clone, and an image generator using ChatGPT API and DALL-E API. Elevate your user experience with intelligent interactions and stunning visuals.",
          image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
          link: "https://github.com/AlphaShiv7781/AutoBot",
          icon: <Code className="w-6 h-6 text-[#0fa]" />
        }
      ];
    

  return (
    <div>
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
    </div>
  )
}

export default Projects