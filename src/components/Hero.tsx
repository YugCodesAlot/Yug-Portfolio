
import ThreeScene from './ThreeScene';
import { ChevronDown } from 'lucide-react';
import SpaceBackground from './SpaceBackground';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <SpaceBackground />
      <div className="three-canvas-container">
        <ThreeScene />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="mb-12 animate-fade-in" style={{animationDelay: '0.3s'}}>
          <p className="text-gold italic text-2xl md:text-3xl lg:text-4xl">
            "In pursuit of the unknown"
          </p>
        </div>
          
        <h1 className="heading-xl mb-8 animate-fade-in" style={{animationDelay: '0.5s'}}>
          <span className="gold-gradient">Artificial Intelligence</span><br />
          <span className="text-white">& Machine Learning Specialist</span>
        </h1>
          
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '0.7s'}}>
          <a href="#projects" className="btn-gold">
            View My Projects
          </a>
          <a href="#contact" className="border border-gold/50 text-gold hover:bg-gold/10 transition-colors duration-300 font-medium px-6 py-2.5 rounded">
            Get in Touch
          </a>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white hover:text-gold transition-colors duration-300 animate-float"
      >
        <ChevronDown size={24} />
      </a>
    </section>
  );
};

export default Hero;
