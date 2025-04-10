
import { useState } from 'react';
import { Code, Server, Database, LineChart, Globe } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', label: 'All Skills', icon: <LineChart size={18} /> },
    { id: 'languages', label: 'Languages', icon: <Code size={18} /> },
    { id: 'frameworks', label: 'Frameworks', icon: <Server size={18} /> },
    { id: 'ml', label: 'ML Techniques', icon: <Database size={18} /> },
    { id: 'web', label: 'Web Dev', icon: <Globe size={18} /> },
  ];
  
  const skills = [
    { name: 'Python', category: 'languages', level: 95 },
    { name: 'JavaScript', category: 'languages', level: 90 },
    { name: 'TypeScript', category: 'languages', level: 85 },
    
    { name: 'PyTorch', category: 'frameworks', level: 90 },
    { name: 'TensorFlow', category: 'frameworks', level: 85 },
    { name: 'Hugging Face', category: 'frameworks', level: 80 },
    { name: 'Node.js', category: 'frameworks', level: 85 },
    { name: 'Tailwind CSS', category: 'frameworks', level: 90 },
    { name: 'React', category: 'frameworks', level: 85 },
    { name: 'RAG', category: 'frameworks', level: 80 },
    
    { name: 'Deep Learning', category: 'ml', level: 90 },
    { name: 'Time-Series Analysis', category: 'ml', level: 85 },
    { name: 'Transfer Learning', category: 'ml', level: 85 },
    { name: 'Explainable AI', category: 'ml', level: 80 },
    { name: 'TF-IDF Vectorization', category: 'ml', level: 85 },
    { name: 'Cosine Similarity Search', category: 'ml', level: 85 },
    
    { name: 'Full-stack Applications', category: 'web', level: 85 },
    { name: 'Beautiful Soup', category: 'web', level: 80 },
    { name: 'FAISS', category: 'web', level: 80 },
    { name: 'Vector Databases', category: 'web', level: 85 },
    { name: 'OpenCV', category: 'web', level: 80 },
    { name: 'Docker', category: 'web', level: 85 },
    { name: 'FastAPI', category: 'web', level: 85 },
    { name: 'CrewAI', category: 'web', level: 80 },
    { name: 'LangChain', category: 'web', level: 85 },
  ];
  
  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);
  
  return (
    <section id="skills" className="section-spacing">
      <div className="container mx-auto px-4">
        <h2 className="heading-lg text-center mb-12">
          <span className="gold-gradient">Technical</span> Skills
        </h2>
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              className={`flex items-center px-4 py-2 rounded-full transition-all ${
                activeCategory === category.id
                  ? 'bg-gold text-black font-medium'
                  : 'bg-black-light text-white hover:text-gold'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="mr-2">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div 
              key={`${skill.name}-${index}`} 
              className="glass-panel p-5 animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-white">{skill.name}</h3>
                <span className="text-gold font-semibold">{skill.level}%</span>
              </div>
              <div className="w-full bg-black-dark rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-gold-dark to-gold h-2 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
