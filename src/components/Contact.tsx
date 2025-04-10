
import { useState } from 'react';
import { PhoneCall, Mail, Linkedin, Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, you would send this data to a backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
      duration: 5000,
    });
    
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };
  
  return (
    <section id="contact" className="section-spacing bg-gradient-to-b from-black to-black-light">
      <div className="container mx-auto px-4">
        <h2 className="heading-lg text-center mb-12">
          <span className="gold-gradient">Get in</span> Touch
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <p className="text-white/80 mb-8">
              I'm currently open to new opportunities, collaborations, and research projects. 
              Feel free to reach out if you have any questions or just want to connect!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gold/20 mr-4">
                  <PhoneCall className="text-gold" size={20} />
                </div>
                <div>
                  <p className="text-white/60 text-sm">Phone</p>
                  <a href="tel:+919638360143" className="text-white hover:text-gold transition-colors">
                    +91 96383 60143
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gold/20 mr-4">
                  <Mail className="text-gold" size={20} />
                </div>
                <div>
                  <p className="text-white/60 text-sm">Email</p>
                  <a href="mailto:yugmakhecha1710@gmail.com" className="text-white hover:text-gold transition-colors">
                    yugmakhecha1710@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gold/20 mr-4">
                  <Linkedin className="text-gold" size={20} />
                </div>
                <div>
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
          
          <div className="lg:w-1/2">
            <form onSubmit={handleSubmit} className="card-border">
              <div className="glass-panel p-6">
                <div className="mb-4">
                  <label className="block text-white mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-black-dark border border-white/10 rounded p-3 text-white focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-white mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-black-dark border border-white/10 rounded p-3 text-white focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-white mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full bg-black-dark border border-white/10 rounded p-3 text-white focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gold-dark to-gold hover:from-gold hover:to-gold-light text-black font-medium p-3 rounded flex items-center justify-center transition-all duration-300"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
