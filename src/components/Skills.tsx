
export const Skills = () => {
    const skills = [
        { category: "Frontend", items: ["Flutter", "React.js", "Next.js", "TypeScript", "Tailwind CSS" ] },
        { category: "Backend", items: ["Node.js", "FastAPI", "Django", "Python", "PostgreSQL", "MongoDB"] },
        { category: "Tools", items: ["Git", "Firebase", "Cloudinary", "Postman", "Figma", "Android Studio", "VsCode"] }
      ];
  return (
    <div>
       
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
    </div>
  )
}

export default Skills
