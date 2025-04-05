
const Education = () => {
  return (
    <div>
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
    </div>
  )
}

export default Education