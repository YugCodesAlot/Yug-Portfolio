import { useState } from 'react';
import { Calendar, Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState<'work' | 'education'>('work');
  
  const workExperiences = [
    {
      title: "Intern",
      company: "Allianz Cloud",
      period: "2024 - Present",
      description: [
        "Focus on AI in Cybersecurity",
        "Worked on AI-driven threat detection models",
        "Developed automation tools for vulnerability assessment"
      ]
    },
    {
      title: "Academic Researcher",
      company: "Navrachana University",
      period: "2022 - Present",
      description: [
        "Focus on Machine Learning and Deep Learning in healthcare",
        "Published 2 academic papers at international conferences",
        "Built Machine Learning, Deep Learning, and Statistical models",
        "Worked on scientific researches with an emphasis on AI in healthcare"
      ]
    },
    {
      title: "Independent AI Researcher",
      company: "Freelance",
      period: "2021 - Present",
      description: [
        "Conducted research on machine learning applications in healthcare and automation",
        "Developed AI models for real-world use cases",
        "Presented findings at conferences"
      ]
    },
    {
      title: "Academic AI Research Consultant",
      company: "Freelance",
      period: "2021 - Present",
      description: [
        "Assisted businesses and academia with AI solutions and model optimization",
        "Provided consulting services for AI-driven projects",
        "Developed machine learning pipelines"
      ]
    }
  ];
  
  const education = [
    {
      degree: "Bachelor of Computer Applications",
      institution: "Navrachana University, Vadodara",
      period: "2020 - 2024",
      grade: "8.76 CGPA",
      details: [
        "Focus on Computer Science fundamentals and programming",
        "Specialized in AI, ML and Deep Learning"
      ]
    }
  ];
  
  return (
    <section id="experience" className="section-spacing bg-gradient-to-b from-black to-black-light relative">
      <div className="container mx-auto px-4">
        <h2 className="heading-lg text-center mb-12">
          <span className="gold-gradient">Experience</span> & Education
        </h2>
        
        <div className="flex justify-center mb-8">
          <div className="bg-black-light rounded-full p-1 inline-flex">
            <button
              className={`flex items-center px-6 py-2 rounded-full transition-all ${
                activeTab === 'work' 
                  ? 'bg-gold text-black font-medium' 
                  : 'text-white hover:text-gold'
              }`}
              onClick={() => setActiveTab('work')}
            >
              <Briefcase size={18} className="mr-2" />
              Work Experience
            </button>
            
            <button
              className={`flex items-center px-6 py-2 rounded-full transition-all ${
                activeTab === 'education' 
                  ? 'bg-gold text-black font-medium' 
                  : 'text-white hover:text-gold'
              }`}
              onClick={() => setActiveTab('education')}
            >
              <GraduationCap size={18} className="mr-2" />
              Education
            </button>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {activeTab === 'work' ? (
            <div className="space-y-8">
              {workExperiences.map((job, index) => (
                <div 
                  key={index} 
                  className="card-border animate-fade-in"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="glass-panel p-6">
                    <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white">{job.title}</h3>
                        <p className="text-gold">{job.company}</p>
                      </div>
                      <div className="flex items-center mt-2 md:mt-0">
                        <Calendar size={16} className="text-white/60 mr-2" />
                        <span className="text-white/60">{job.period}</span>
                      </div>
                    </div>
                    
                    <ul className="list-disc pl-5 text-white/80 space-y-1">
                      {job.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div 
                  key={index} 
                  className="card-border animate-fade-in"
                >
                  <div className="glass-panel p-6">
                    <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                        <p className="text-gold">{edu.institution}</p>
                      </div>
                      <div className="flex items-center mt-2 md:mt-0">
                        <Calendar size={16} className="text-white/60 mr-2" />
                        <span className="text-white/60">{edu.period}</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <span className="inline-block bg-gold/20 text-gold px-3 py-1 rounded">
                        {edu.grade}
                      </span>
                    </div>
                    
                    <ul className="list-disc pl-5 text-white/80 space-y-1">
                      {edu.details.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
