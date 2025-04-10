
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
    
    // Create Earth globe with higher resolution
    const earthGeometry = new THREE.SphereGeometry(2, 64, 64);
    
    // Load Earth textures
    const textureLoader = new THREE.TextureLoader();
    
    // Create Earth texture promises
    const earthMapPromise = new Promise<THREE.Texture>((resolve) => {
      textureLoader.load('/earth_map.jpg', (texture) => resolve(texture));
    });
    
    const bumpMapPromise = new Promise<THREE.Texture>((resolve) => {
      textureLoader.load('/earth_bump.jpg', (texture) => resolve(texture));
    });
    
    const specularMapPromise = new Promise<THREE.Texture>((resolve) => {
      textureLoader.load('/earth_specular.jpg', (texture) => resolve(texture));
    });
    
    const cloudMapPromise = new Promise<THREE.Texture>((resolve) => {
      textureLoader.load('/earth_clouds.jpg', (texture) => resolve(texture));
    });
    
    // Create Earth material and add to the scene
    const earthMaterial = new THREE.MeshPhongMaterial({
      color: 0x1a4d6e,
      specular: 0xD4AF37,
      shininess: 15,
      bumpScale: 0.05,
      opacity: 0.9,
      transparent: true
    });
    
    // Create Earth mesh and add to scene
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    scene.add(earth);
    
    // Add atmosphere glow effect
    const atmosphereGeometry = new THREE.SphereGeometry(2.1, 64, 64);
    const atmosphereMaterial = new THREE.MeshPhongMaterial({
      color: 0x4a7fb5,
      side: THREE.BackSide,
      transparent: true,
      opacity: 0.3
    });
    
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    scene.add(atmosphere);
    
    // Create a wireframe overlay
    const wireframeGeometry = new THREE.SphereGeometry(2.05, 32, 32);
    const wireframeMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xD4AF37, 
      wireframe: true, 
      transparent: true, 
      opacity: 0.15 
    });
    
    const wireframe = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
    scene.add(wireframe);
    
    // Create a cloud layer
    const cloudGeometry = new THREE.SphereGeometry(2.15, 64, 64);
    const cloudMaterial = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.15,
      blending: THREE.AdditiveBlending
    });
    
    const clouds = new THREE.Mesh(cloudGeometry, cloudMaterial);
    scene.add(clouds);
    
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
    
    const pointLight1 = new THREE.PointLight(0xffffff, 1);
    pointLight1.position.set(5, 3, 5);
    scene.add(pointLight1);
    
    const pointLight2 = new THREE.PointLight(0xD4AF37, 0.8);
    pointLight2.position.set(-5, -3, 2);
    scene.add(pointLight2);
    
    // Apply textures when they load
    Promise.all([earthMapPromise, bumpMapPromise, specularMapPromise, cloudMapPromise])
      .then(([earthMap, bumpMap, specularMap, cloudMap]) => {
        // Apply textures to earth
        earthMaterial.map = earthMap;
        earthMaterial.bumpMap = bumpMap;
        earthMaterial.specularMap = specularMap;
        
        // Apply cloud texture
        cloudMaterial.map = cloudMap;
        cloudMaterial.alphaMap = cloudMap;
      })
      .catch(error => {
        console.error("Error loading textures:", error);
        // Fallback if textures fail to load
      });
    
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
      clouds.rotation.y += 0.0005; // Clouds rotate slightly slower
      
      // Respond to mouse movement
      earth.rotation.y += (targetX - earth.rotation.y) * 0.03;
      earth.rotation.x += (targetY - earth.rotation.x) * 0.03;
      wireframe.rotation.y = earth.rotation.y;
      wireframe.rotation.x = earth.rotation.x;
      atmosphere.rotation.y = earth.rotation.y;
      atmosphere.rotation.x = earth.rotation.x;
      clouds.rotation.y = earth.rotation.y * 0.95; // Slight differential rotation for clouds
      clouds.rotation.x = earth.rotation.x * 0.95;
      
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
      scene.remove(clouds);
      scene.remove(particlesMesh);
      
      // Dispose geometries and materials
      earthGeometry.dispose();
      wireframeGeometry.dispose();
      atmosphereGeometry.dispose();
      cloudGeometry.dispose();
      particlesGeometry.dispose();
      
      earthMaterial.dispose();
      wireframeMaterial.dispose();
      atmosphereMaterial.dispose();
      cloudMaterial.dispose();
      particlesMaterial.dispose();
      
      renderer.dispose();
    };
  }, []);
  
  return <div ref={containerRef} className={`${className || ''}`} />;
};

export default ThreeScene;
