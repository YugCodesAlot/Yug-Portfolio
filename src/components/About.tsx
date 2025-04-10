
import { Brain, Code, Atom } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-spacing relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h2 className="heading-lg mb-6">
              <span className="gold-gradient">About</span> Me
            </h2>
            
            <p className="text-white/80 mb-6">
              I'm an AI and Machine Learning specialist with a passion for creating intelligent systems that solve complex problems. With expertise in deep learning, NLP, agent-based systems, and web development, I focus on designing scalable AI solutions that drive automation and decision-making.
            </p>
            
            <p className="text-white/80 mb-6">
              My background combines academic research with practical implementation, allowing me to bridge the gap between theoretical AI concepts and real-world applications. I'm particularly interested in the intersection of AI safety, healthcare applications, and automation technologies.
            </p>
            
            <p className="text-white/80">
              Currently pursuing my Bachelor of Computer Applications with a CGPA of 8.76, I continuously work on personal projects, academic research, and professional internship experiences to expand my knowledge and skills in the rapidly evolving AI landscape.
            </p>
          </div>
          
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="animated-feature glass-panel p-6">
                <Brain className="text-gold mb-4" size={40} />
                <h3 className="heading-sm mb-2">AI Research</h3>
                <p className="text-white/70">
                  Published academic papers on AI in healthcare and conducted research on machine learning applications.
                </p>
              </div>
              
              <div className="animated-feature glass-panel p-6">
                <Code className="text-gold mb-4" size={40} />
                <h3 className="heading-sm mb-2">Full Stack</h3>
                <p className="text-white/70">
                  Developed web applications using JavaScript, TypeScript, React, and Tailwind CSS with focus on clean architecture.
                </p>
              </div>
              
              <div className="animated-feature glass-panel p-6">
                <Atom className="text-gold mb-4" size={40} />
                <h3 className="heading-sm mb-2">ML Engineering</h3>
                <p className="text-white/70">
                  Built models using PyTorch, TensorFlow, and Hugging Face. Skilled in deep learning and transfer learning.
                </p>
              </div>
              
              <div className="animated-feature glass-panel p-6">
                <div className="relative">
                  <div className="absolute -top-1 -left-1 w-10 h-10 border-t-2 border-l-2 border-gold/50"></div>
                  <div className="absolute -bottom-1 -right-1 w-10 h-10 border-b-2 border-r-2 border-gold/50"></div>
                  <h3 className="heading-sm text-center my-6 gold-gradient">CGPA</h3>
                  <p className="text-4xl text-gold text-center font-bold mb-2">8.76</p>
                  <p className="text-white/70 text-center">
                    Bachelor of Computer Applications
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
