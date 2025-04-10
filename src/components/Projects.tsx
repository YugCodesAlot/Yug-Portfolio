
import { useState } from 'react';
import { ArrowRight, Bot, Eye, Database, Brain, FileText, Code, Activity } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  
  const projects = [
    {
      title: "AI Supplier Agent",
      icon: <Bot className="text-gold" size={24} />,
      description: "Comprehensive AI agent system to identify and recommend suppliers across India.",
      details: [
        "Webscraped 15,000 manufacturers across India",
        "Built a RAG-based chatbot framework",
        "Implemented an ANN-powered intelligent supplier search algorithm",
        "Developed an interactive front-end using modern web technologies"
      ],
      technologies: ["Python", "RAG", "ANN", "Web Scraping", "React"]
    },
    {
      title: "Real-Time Object Detection",
      icon: <Eye className="text-gold" size={24} />,
      description: "Advanced object detection system with real-time processing capabilities.",
      details: [
        "Developed a real-time object detection model using YOLO",
        "Trained on custom datasets and optimized performance for accuracy",
        "Implemented efficient frame processing for video streams"
      ],
      technologies: ["Python", "YOLO", "OpenCV", "TensorFlow", "Deep Learning"]
    },
    {
      title: "Social Media Sentiment Analysis",
      icon: <Activity className="text-gold" size={24} />,
      description: "NLP system for analyzing sentiment from social media posts and comments.",
      details: [
        "Fine-tuned transformer-based NLP models for sentiment classification",
        "Analyzed and visualized trends from large-scale social media data",
        "Developed dashboard for real-time sentiment tracking"
      ],
      technologies: ["Python", "NLP", "Transformers", "Hugging Face", "Data Visualization"]
    },
    {
      title: "Vector-Borne Disease Prediction",
      icon: <Database className="text-gold" size={24} />,
      description: "Predictive system for early detection of vector-borne diseases using ML.",
      details: [
        "Built a predictive model for early detection of vector-borne diseases",
        "Incorporated geospatial data with health metrics",
        "Achieved high accuracy in disease outbreak prediction"
      ],
      technologies: ["Python", "ML", "Statistical Modeling", "Geospatial Analysis"]
    },
    {
      title: "LLM Research and Conference Paper",
      icon: <Brain className="text-gold" size={24} />,
      description: "Academic research on Large Language Models focused on safety and applications.",
      details: [
        "Presented a research paper on Large Language Models and AI safety",
        "Focused on security, efficiency, and real-world applications of LLMs",
        "Developed benchmark tests for LLM evaluation"
      ],
      technologies: ["LLMs", "AI Safety", "Research", "NLP", "Benchmarking"]
    },
    {
      title: "XAI Research and Novel Paper",
      icon: <FileText className="text-gold" size={24} />,
      description: "Research on Explainable AI in healthcare, specifically for IVF procedures.",
      details: [
        "Presented a research paper on Explainable AI in IVF (In Vitro Fertilization)",
        "Focused on enhancing understandability and faithfulness of AI in IVF",
        "Developed novel XAI techniques for medical applications"
      ],
      technologies: ["XAI", "Healthcare AI", "Research", "Python", "ML"]
    },
    {
      title: "Full-Stack Web Application",
      icon: <Code className="text-gold" size={24} />,
      description: "Modern web application with dynamic UI and integrated API endpoints.",
      details: [
        "Developed a dynamic web application using Node.js and Typescript",
        "Implemented a responsive UI with Tailwind CSS and integrated API endpoints",
        "Built secure authentication and data handling systems"
      ],
      technologies: ["TypeScript", "Node.js", "React", "Tailwind CSS", "API Design"]
    },
    {
      title: "Agentic System for Automation",
      icon: <Bot className="text-gold" size={24} />,
      description: "AI-driven multi-agent system for complex workflow automation.",
      details: [
        "Currently developing an AI-driven agentic system to optimize workflow automation",
        "Integrating multi-agent collaboration for adaptive decision-making",
        "Designing autonomous task handling and delegation"
      ],
      technologies: ["Python", "LangChain", "CrewAI", "LLMs", "Automation"]
    }
  ];
  
  return (
    <section id="projects" className="section-spacing bg-gradient-to-b from-black-light to-black">
      <div className="container mx-auto px-4">
        <h2 className="heading-lg text-center mb-12">
          <span className="gold-gradient">Featured</span> Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="animated-feature glass-panel p-6 cursor-pointer group transition-all duration-300"
              onClick={() => setSelectedProject(selectedProject === index ? null : index)}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-black-dark rounded-lg">
                  {project.icon}
                </div>
                <ArrowRight 
                  size={20} 
                  className={`text-gold transition-transform duration-300 ${
                    selectedProject === index ? 'rotate-90' : 'group-hover:translate-x-1'
                  }`} 
                />
              </div>
              
              <h3 className="heading-sm mb-2 gold-gradient">{project.title}</h3>
              <p className="text-white/70 mb-4">
                {project.description}
              </p>
              
              {selectedProject === index && (
                <div className="mt-4 animate-fade-in">
                  <ul className="list-disc pl-5 text-white/80 space-y-1 mb-4">
                    {project.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="text-xs bg-gold/20 text-gold px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
