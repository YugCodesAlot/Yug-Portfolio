
import ThreeScene from './ThreeScene';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center">
      <div className="three-canvas-container">
        <ThreeScene />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="heading-xl mb-4 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <span className="gold-gradient">Artificial Intelligence</span><br />
            <span className="text-white">& Machine Learning Specialist</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-8 animate-fade-in" style={{animationDelay: '0.4s'}}>
            Passionate about the potential of AI-driven automation, decision-making, and academic research. 
            Specialized in deep learning, NLP, and agent-based systems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <a href="#projects" className="btn-gold">
              View My Projects
            </a>
            <a href="#contact" className="border border-gold/50 text-gold hover:bg-gold/10 transition-colors duration-300 font-medium px-6 py-2.5 rounded">
              Get in Touch
            </a>
          </div>
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
