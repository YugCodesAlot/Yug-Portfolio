
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black py-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-white/60 text-sm">
              &copy; {currentYear} Yug Makhecha. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center">
            <a 
              href="#" 
              className="bg-gold/20 hover:bg-gold/30 transition-colors p-3 rounded-full"
              aria-label="Back to top"
            >
              <ArrowUp size={20} className="text-gold" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
