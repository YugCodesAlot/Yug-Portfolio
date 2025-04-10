
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
    
    // Gold color material
    const goldMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xD4AF37,
      metalness: 0.8,
      roughness: 0.3,
      emissive: 0x4A3903,
      emissiveIntensity: 0.2
    });
    
    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1500;
    const posArray = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 15;
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
    
    // Add light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(0xD4AF37, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);
    
    // Create a low-poly sphere
    const icosahedronGeometry = new THREE.IcosahedronGeometry(1.5, 1);
    const icosahedron = new THREE.Mesh(icosahedronGeometry, goldMaterial);
    scene.add(icosahedron);
    
    // Create wireframe version of the shape
    const wireframeMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xffffff, 
      wireframe: true, 
      transparent: true, 
      opacity: 0.2 
    });
    const wireframeIcosahedron = new THREE.Mesh(icosahedronGeometry, wireframeMaterial);
    wireframeIcosahedron.scale.set(1.1, 1.1, 1.1);
    scene.add(wireframeIcosahedron);
    
    // Position camera
    camera.position.z = 4;
    
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
      
      icosahedron.rotation.y += 0.002;
      icosahedron.rotation.x += 0.001;
      wireframeIcosahedron.rotation.y += 0.001;
      wireframeIcosahedron.rotation.x += 0.002;
      
      icosahedron.rotation.y += (targetX - icosahedron.rotation.y) * 0.05;
      icosahedron.rotation.x += (targetY - icosahedron.rotation.x) * 0.05;
      wireframeIcosahedron.rotation.y += (targetX - wireframeIcosahedron.rotation.y) * 0.03;
      wireframeIcosahedron.rotation.x += (targetY - wireframeIcosahedron.rotation.x) * 0.03;
      
      particlesMesh.rotation.y += 0.0005;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
      scene.remove(icosahedron);
      scene.remove(wireframeIcosahedron);
      scene.remove(particlesMesh);
      
      icosahedronGeometry.dispose();
      goldMaterial.dispose();
      wireframeMaterial.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);
  
  return <div ref={containerRef} className={`${className || ''}`} />;
};

export default ThreeScene;
