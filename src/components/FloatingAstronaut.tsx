
import { useEffect, useRef } from 'react';

const FloatingAstronaut = () => {
  const astronautRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!astronautRef.current) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!astronautRef.current) return;
      
      // Parallax effect - move slightly based on mouse position
      const moveX = (e.clientX - window.innerWidth / 2) / 50;
      const moveY = (e.clientY - window.innerHeight / 2) / 50;
      
      astronautRef.current.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${moveX * 2}deg)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      ref={astronautRef} 
      className="relative transition-transform duration-300 ease-out"
    >
      <div className="w-[150px] h-[200px] md:w-[180px] md:h-[240px] lg:w-[220px] lg:h-[300px] relative">
        {/* Astronaut */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-full border border-white/20 shadow-[0_0_15px_rgba(212,175,55,0.3)] overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3/4 h-3/4 rounded-full bg-gradient-to-br from-black-light via-black to-black-dark border border-white/10 flex items-center justify-center">
              {/* Helmet Visor */}
              <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-gold/10 overflow-hidden flex items-center justify-center relative">
                <div className="absolute inset-0 opacity-30">
                  {/* Stars in helmet */}
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div 
                      key={i}
                      className="absolute w-[2px] h-[2px] bg-white rounded-full animate-pulse"
                      style={{ 
                        top: `${Math.random() * 100}%`, 
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 3}s`
                      }}
                    />
                  ))}
                </div>
                
                {/* Gold reflection */}
                <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-gold/30 rounded-full blur-md" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Astronaut body */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-3/5 bg-gradient-to-b from-white/20 to-white/5 rounded-2xl border border-white/20">
          {/* Backpack */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-5/6 h-2/3 bg-white/10 rounded-lg border border-white/10" />
        </div>
        
        {/* Floating tether/rope */}
        <div className="absolute -left-8 top-1/2 w-10 h-[1px] bg-gradient-to-r from-gold/80 to-transparent" />
        
        {/* Light glow effect */}
        <div className="absolute inset-0 rounded-full bg-gold/5 filter blur-xl animate-pulse" />
      </div>
    </div>
  );
};

export default FloatingAstronaut;
