import myImage from '../../Me.jpg';
const About = () => {
  return (
    <div>
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
    </div>
  )
}

export default About