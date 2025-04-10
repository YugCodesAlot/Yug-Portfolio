
import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold font-montserrat">
          <span className="gold-gradient">YUG</span>
          <span className="text-white"> MAKHECHA</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-white hover:text-gold transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
          
          <div className="flex items-center space-x-4 ml-4">
            <a 
              href="https://www.linkedin.com/in/yug-makhecha-417601295" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-gold transition-colors duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:yugmakhecha1710@gmail.com" 
              className="text-white hover:text-gold transition-colors duration-300"
            >
              <Mail size={20} />
            </a>
          </div>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white hover:text-gold"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-panel mx-4 mt-3 p-4 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="text-white hover:text-gold transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            
            <div className="flex items-center space-x-4 pt-2 border-t border-white/10">
              <a 
                href="https://www.linkedin.com/in/yug-makhecha-417601295" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-gold transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:yugmakhecha1710@gmail.com" 
                className="text-white hover:text-gold transition-colors duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
