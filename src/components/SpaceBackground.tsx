
import { useEffect } from 'react';

const SpaceBackground = () => {
  useEffect(() => {
    const canvas = document.getElementById('space-canvas') as HTMLCanvasElement;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);
    
    // Stars
    class Star {
      x: number;
      y: number;
      size: number;
      color: string;
      speed: number;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.5;
        this.color = `rgba(255, 255, 255, ${Math.random() * 0.8 + 0.2})`;
        this.speed = Math.random() * 0.05 + 0.01;
      }
      
      update() {
        this.y += this.speed;
        
        // Reset stars when they reach the bottom
        if (this.y > canvas.height) {
          this.y = 0;
          this.x = Math.random() * canvas.width;
        }
      }
      
      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Nebula
    class Nebula {
      x: number;
      y: number;
      size: number;
      color: string;
      opacity: number;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 150 + 50;
        
        const colors = [
          'rgba(148, 0, 211, 0.2)', // Purple
          'rgba(75, 0, 130, 0.2)',  // Indigo
          'rgba(0, 0, 255, 0.2)',   // Blue
          'rgba(212, 175, 55, 0.1)', // Gold tint
        ];
        
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.opacity = Math.random() * 0.2;
      }
      
      draw() {
        if (!ctx) return;
        
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0, 
          this.x, this.y, this.size
        );
        
        gradient.addColorStop(0, this.color.replace('0.2', String(this.opacity)));
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Create stars and nebulae
    const starCount = Math.floor((canvas.width * canvas.height) / 5000);
    const stars = Array.from({ length: starCount }, () => new Star());
    
    const nebulaCount = 5;
    const nebulae = Array.from({ length: nebulaCount }, () => new Nebula());
    
    // Animation loop
    const animate = () => {
      if (!ctx) return;
      
      // Clear canvas with a semi-transparent black to create trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw nebulae
      nebulae.forEach(nebula => nebula.draw());
      
      // Update and draw stars
      stars.forEach(star => {
        star.update();
        star.draw();
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);
  
  return (
    <canvas 
      id="space-canvas" 
      className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-black-light to-[#0B0B14]"
    />
  );
};

export default SpaceBackground;
