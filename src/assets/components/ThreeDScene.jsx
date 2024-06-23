import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import styled from 'styled-components';

const SceneContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1; /* Ensure it sits behind other content */
`;

const ThreeDScene = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Basic setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000); // Set a background color to differentiate the model

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 2, 5); // Adjust camera position to ensure the model is in view

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasRef.current.appendChild(renderer.domElement);

    // Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 1, 0); // Set the controls target to the center of the model
    controls.update();

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 1);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x00ffcc, 1, 100);
    pointLight1.position.set(50, 50, 50);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xff0066, 1, 100);
    pointLight2.position.set(-50, 50, -50);
    scene.add(pointLight2);

    // Add helpers for debugging
    const gridHelper = new THREE.GridHelper(10, 10);
    scene.add(gridHelper);

    const axesHelper = new THREE.AxesHelper(5);
    scene.add(axesHelper);

    // Load the GLTF model
    const loader = new GLTFLoader();
    loader.load('../../../public/untitled.glb', function (gltf) {
      const model = gltf.scene;

      console.log('Model loaded:', gltf);
      // Position the model
      model.position.set(0, 0, 0);
      model.scale.set(1, 1, 1); // Adjust scale if necessary

      // Apply metalheart aesthetic materials
      model.traverse((child) => {
        if (child.isMesh) {
          console.log('Applying material to:', child);
          child.material = new THREE.MeshStandardMaterial({
            color: 0x555555,
            metalness: 1,
            roughness: 0.4,
            emissive: new THREE.Color(0x00ffff),
            emissiveIntensity: 0.5,
          });
        }
      });

      scene.add(model);
    }, undefined, function (error) {
      console.error('Error loading model:', error);
    });

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onWindowResize);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', onWindowResize);
      canvasRef.current.removeChild(renderer.domElement);
      controls.dispose();
    };
  }, []);

  return <SceneContainer ref={canvasRef}></SceneContainer>;
};

export default ThreeDScene;
