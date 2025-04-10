
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface ThreeSceneProps {
  className?: string;
}

const ThreeScene = ({ className }: ThreeSceneProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);
    
    // Create Earth globe
    const earthGeometry = new THREE.SphereGeometry(2, 32, 32);
    
    // Load Earth textures
    const textureLoader = new THREE.TextureLoader();
    
    // Create Earth material with a blue/teal base and gold highlights
    const earthMaterial = new THREE.MeshPhongMaterial({
      color: 0x1a4d6e,
      specular: 0xD4AF37,
      shininess: 15,
      bumpScale: 0.05,
      opacity: 0.9,
      transparent: true
    });
    
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    scene.add(earth);
    
    // Add atmosphere glow effect
    const atmosphereGeometry = new THREE.SphereGeometry(2.1, 32, 32);
    const atmosphereMaterial = new THREE.MeshPhongMaterial({
      color: 0x4a7fb5,
      side: THREE.BackSide,
      transparent: true,
      opacity: 0.3
    });
    
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    scene.add(atmosphere);
    
    // Create a wireframe overlay
    const wireframeGeometry = new THREE.SphereGeometry(2.05, 16, 16);
    const wireframeMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xD4AF37, 
      wireframe: true, 
      transparent: true, 
      opacity: 0.2 
    });
    
    const wireframe = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
    scene.add(wireframe);
    
    // Create particles (stars)
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1500;
    const posArray = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 20;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.01,
      color: 0xD4AF37,
      transparent: true,
      opacity: 0.8
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(0xD4AF37, 1);
    pointLight.position.set(5, 3, 5);
    scene.add(pointLight);
    
    // Position camera
    camera.position.z = 6;
    
    // Mouse interactivity
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    
    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      targetX = mouseX * 0.2;
      targetY = mouseY * 0.2;
      
      // Rotate the earth
      earth.rotation.y += 0.001;
      wireframe.rotation.y += 0.001;
      atmosphere.rotation.y += 0.001;
      
      // Respond to mouse movement
      earth.rotation.y += (targetX - earth.rotation.y) * 0.03;
      earth.rotation.x += (targetY - earth.rotation.x) * 0.03;
      wireframe.rotation.y = earth.rotation.y;
      wireframe.rotation.x = earth.rotation.x;
      atmosphere.rotation.y = earth.rotation.y;
      atmosphere.rotation.x = earth.rotation.x;
      
      // Slowly rotate particles
      particlesMesh.rotation.y += 0.0003;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
      
      // Cleanup scene
      scene.remove(earth);
      scene.remove(wireframe);
      scene.remove(atmosphere);
      scene.remove(particlesMesh);
      
      // Dispose geometries and materials
      earthGeometry.dispose();
      wireframeGeometry.dispose();
      atmosphereGeometry.dispose();
      particlesGeometry.dispose();
      
      earthMaterial.dispose();
      wireframeMaterial.dispose();
      atmosphereMaterial.dispose();
      particlesMaterial.dispose();
      
      renderer.dispose();
    };
  }, []);
  
  return <div ref={containerRef} className={`${className || ''}`} />;
};

export default ThreeScene;
