import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si'
import CV from '../../Shivam_Sharma_Resume.pdf';
const Hero = () => {
  return (
    <div>
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
    </div>
  )
}

export default Hero