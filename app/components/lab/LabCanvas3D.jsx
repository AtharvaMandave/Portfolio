'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function LabCanvas3D({ activeRoom = '01_WORKSPACE', is3DEnabled = true }) {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const targetCamPos = useRef({ x: 0, y: 0, z: 12 });
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!is3DEnabled || !containerRef.current) return;

    // Room camera coordinate mappings for environmental movement
    const roomCoordinates = {
      '01_WORKSPACE': { x: 0, y: 0, z: 14, rotX: 0, rotY: 0 },
      '02_PROJECT_LAB': { x: -4, y: -2, z: 12, rotX: 0.1, rotY: -0.15 },
      '03_AI_CORE': { x: 0, y: 3, z: 10, rotX: -0.2, rotY: 0 },
      '04_TECH_WALL': { x: 4, y: -1, z: 13, rotX: 0.05, rotY: 0.2 },
      '05_EXPERIMENTS': { x: -3, y: 2, z: 12, rotX: -0.1, rotY: -0.1 },
      '06_ACHIEVEMENTS': { x: 3, y: 1, z: 11, rotX: 0.1, rotY: 0.1 },
      '07_TRANSMISSION': { x: 0, y: -3, z: 13, rotX: 0.15, rotY: 0 },
    };

    const target = roomCoordinates[activeRoom] || roomCoordinates['01_WORKSPACE'];
    targetCamPos.current = target;
  }, [activeRoom, is3DEnabled]);

  useEffect(() => {
    if (!is3DEnabled || !containerRef.current) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    // Scene
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x090909, 0.04);
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 100);
    camera.position.set(0, 0, 14);
    cameraRef.current = camera;

    // WebGL Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setClearColor(0x090909, 0);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 1. Blueprint Grid Lines (Floor & Ceiling planes)
    const gridHelper = new THREE.GridHelper(60, 40, 0x222222, 0x141414);
    gridHelper.position.y = -6;
    scene.add(gridHelper);

    const topGrid = new THREE.GridHelper(60, 40, 0x1a1a1a, 0x0f0f0f);
    topGrid.position.y = 8;
    scene.add(topGrid);

    // 2. Floating Laboratory Particle Cloud (Data packets)
    const particleCount = 220;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const greenColor = new THREE.Color(0xb7ff4a);
    const warmColor = new THREE.Color(0xe8e2d3);
    const amberColor = new THREE.Color(0xd98b3a);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 40;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 25;

      const roll = Math.random();
      const col = roll > 0.6 ? greenColor : (roll > 0.3 ? warmColor : amberColor);
      particleColors[i * 3] = col.r;
      particleColors[i * 3 + 1] = col.g;
      particleColors[i * 3 + 2] = col.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.12,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 3. Floating Geometric Architectural Schematics (Icosahedrons & Cubes)
    const wireGroup = new THREE.Group();
    
    // Core Icosahedron Wireframe
    const icoGeo = new THREE.IcosahedronGeometry(1.8, 1);
    const icoMat = new THREE.MeshBasicMaterial({
      color: 0xb7ff4a,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    });
    const icoMesh = new THREE.Mesh(icoGeo, icoMat);
    icoMesh.position.set(5, 2, -2);
    wireGroup.add(icoMesh);

    // Quantum Torus
    const torusGeo = new THREE.TorusGeometry(2.4, 0.03, 8, 30);
    const torusMat = new THREE.MeshBasicMaterial({
      color: 0xd98b3a,
      transparent: true,
      opacity: 0.35,
    });
    const torusMesh = new THREE.Mesh(torusGeo, torusMat);
    torusMesh.position.set(-6, -1, -3);
    wireGroup.add(torusMesh);

    scene.add(wireGroup);

    // Mouse Parallax Listener
    const handleMouseMove = (e) => {
      mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseRef.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Slow orbital rotation of background geometry
      icoMesh.rotation.x = elapsedTime * 0.15;
      icoMesh.rotation.y = elapsedTime * 0.2;
      torusMesh.rotation.x = elapsedTime * 0.25;
      torusMesh.rotation.z = elapsedTime * 0.1;
      particles.rotation.y = elapsedTime * 0.02;

      // Smooth camera interpolation towards active room target
      const target = targetCamPos.current;
      const targetX = target.x + mouseRef.current.x * 0.75;
      const targetY = target.y + mouseRef.current.y * 0.5;
      const targetZ = target.z;

      camera.position.x += (targetX - camera.position.x) * 0.04;
      camera.position.y += (targetY - camera.position.y) * 0.04;
      camera.position.z += (targetZ - camera.position.z) * 0.04;

      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [is3DEnabled]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 3D WebGL Canvas */}
      <div ref={containerRef} className="absolute inset-0 opacity-80" />

      {/* Laboratory Ambient Blueprint Grid Overlay */}
      <div className="absolute inset-0 lab-grid-bg opacity-30 pointer-events-none" />
      <div className="absolute inset-0 lab-blueprint-dots opacity-40 pointer-events-none" />

      {/* Vignette Depth Gradient */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#090909]/40 to-[#090909] pointer-events-none" />
    </div>
  );
}
