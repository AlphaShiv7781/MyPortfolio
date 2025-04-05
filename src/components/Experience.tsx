const Experience = () => {
  return (
    <div>
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
    </div>
  )
}

export default Experience