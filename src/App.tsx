import Footer from './components/Footer'
import Contact from './components/Contact';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Experience from './components/Experience';
import About from './components/About';
import Hero from './components/Hero';
import Navigation from './components/Navigation';

function App() {
  


  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/50 backdrop-blur-lg z-50 cyber-border">
         <Navigation/>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 relative overflow-hidden">
         <Hero/>
      </section>

    
      {/* About Section */}
      <section id="about" className="py-20 relative overflow-hidden">
        <About/>
      </section>

      {/* Experience */}

      <section id="experience" className="py-20 bg-gray-900/50 relative overflow-hidden">
        <Experience/> 
        </section>


      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900/50 relative overflow-hidden">
        <Projects/>
      </section>

      {/* Education */}
      <section id="education" className="py-20 bg-gray-900/50 relative overflow-hidden">
        <Education/>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative overflow-hidden">
        <Skills/>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900/50 relative overflow-hidden">
        <Contact/>
      </section>

      {/* Footer */}
      <Footer/>
      
    </div>
  );
}

export default App;