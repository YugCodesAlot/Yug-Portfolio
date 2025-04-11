
import { PhoneCall, Mail, Linkedin } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  
  return (
    <section id="contact" className="section-spacing bg-gradient-to-b from-black to-black-light">
      <div className="container mx-auto px-4">
        <h2 className="heading-lg text-center mb-12">
          <span className="gold-gradient">Get in</span> Touch
        </h2>
        
        <div className="max-w-4xl mx-auto card-border">
          <div className="glass-panel p-8">
            <p className="text-white/80 mb-8 text-center">
              I'm currently open to new opportunities, collaborations, and research projects. 
              Feel free to reach out if you have any questions or just want to connect!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gold/20 mb-4">
                  <PhoneCall className="text-gold" size={20} />
                </div>
                <p className="text-white/60 text-sm">Phone</p>
                <a href="tel:+919638360143" className="text-white hover:text-gold transition-colors">
                  +91 96383 60143
                </a>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gold/20 mb-4">
                  <Mail className="text-gold" size={20} />
                </div>
                <p className="text-white/60 text-sm">Email</p>
                <a href="mailto:yugmakhecha1710@gmail.com" className="text-white hover:text-gold transition-colors">
                  yugmakhecha1710@gmail.com
                </a>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gold/20 mb-4">
                  <Linkedin className="text-gold" size={20} />
                </div>
                <p className="text-white/60 text-sm">LinkedIn</p>
                <a 
                  href="https://www.linkedin.com/in/yug-makhecha-417601295" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white hover:text-gold transition-colors"
                >
                  Yug Makhecha
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
