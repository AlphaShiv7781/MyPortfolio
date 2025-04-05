import { X, Menu } from "lucide-react";
import { useState } from "react";

const Navigation = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);  

  return (
    <div>
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
    </div>
  )
}

export default Navigation