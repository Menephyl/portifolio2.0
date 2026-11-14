import { useEffect, useRef, memo } from "react";
import * as THREE from "three";

function Immersive3DBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // --- Scene, Camera, Renderer ---
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050505, 0.0016);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 85;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // --- Geometries & Groups ---
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Central Core: High-Tech Wireframe Icosahedron (Metallic Silver)
    const coreGeometry = new THREE.IcosahedronGeometry(18, 1);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x94a3b8,
      wireframe: true,
      transparent: true,
      opacity: 0.16,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, wireframeMaterial);
    mainGroup.add(coreMesh);

    // 2. Outer Ring: Geometric Octahedron Orbit (Emerald Highlight)
    const outerGeometry = new THREE.OctahedronGeometry(26, 0);
    const outerMaterial = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      wireframe: true,
      transparent: true,
      opacity: 0.12,
    });
    const outerMesh = new THREE.Mesh(outerGeometry, outerMaterial);
    mainGroup.add(outerMesh);

    // 3. Second Ring: Floating Torus / Node Gyroscope
    const torusGeometry = new THREE.TorusGeometry(36, 0.4, 8, 48);
    const torusMaterial = new THREE.MeshBasicMaterial({
      color: 0x64748b,
      wireframe: true,
      transparent: true,
      opacity: 0.08,
    });
    const torusMesh = new THREE.Mesh(torusGeometry, torusMaterial);
    torusMesh.rotation.x = Math.PI / 3;
    mainGroup.add(torusMesh);

    // 4. Data Constellation Particles (Silver & Emerald nodes)
    const particleCount = window.innerWidth < 768 ? 90 : 180;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const emeraldColor = new THREE.Color(0x10b981);
    const silverColor = new THREE.Color(0xcbd5e1);
    const slateColor = new THREE.Color(0x64748b);

    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3;
      particlePositions[idx] = (Math.random() - 0.5) * 220;
      particlePositions[idx + 1] = (Math.random() - 0.5) * 200;
      particlePositions[idx + 2] = (Math.random() - 0.5) * 160;

      // Color distribution: 25% emerald (ROI), 75% metallic silver/slate
      const chosenColor = Math.random() < 0.25 ? emeraldColor : Math.random() < 0.6 ? silverColor : slateColor;
      particleColors[idx] = chosenColor.r;
      particleColors[idx + 1] = chosenColor.g;
      particleColors[idx + 2] = chosenColor.b;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );
    particlesGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(particleColors, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 2.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
    });
    const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particleSystem);

    // 5. Interconnecting Financial Lines between Close Particles
    const maxLines = window.innerWidth < 768 ? 100 : 250;
    const linePositions = new Float32Array(maxLines * 6);
    const linesGeometry = new THREE.BufferGeometry();
    linesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(linePositions, 3)
    );

    const linesMaterial = new THREE.LineBasicMaterial({
      color: 0x94a3b8,
      transparent: true,
      opacity: 0.1,
    });
    const lineMesh = new THREE.LineSegments(linesGeometry, linesMaterial);
    scene.add(lineMesh);

    // --- Interaction States ---
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let scrollY = window.scrollY;
    let targetScrollY = window.scrollY;

    const handleMouseMove = (event: MouseEvent) => {
      targetX = (event.clientX / window.innerWidth - 0.5) * 2;
      targetY = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    const handleScroll = () => {
      targetScrollY = window.scrollY;
    };

    const handleResize = () => {
      if (!canvas) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    // --- Animation Loop ---
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth interpolation for mouse and scroll
      mouseX += (targetX - mouseX) * 0.04;
      mouseY += (targetY - mouseY) * 0.04;
      scrollY += (targetScrollY - scrollY) * 0.05;

      const maxScroll = Math.max(1, document.body.scrollHeight - window.innerHeight);
      const scrollProgress = scrollY / maxScroll;

      // Rotate central cluster dynamically
      coreMesh.rotation.x = elapsedTime * 0.12 + scrollProgress * Math.PI * 1.5;
      coreMesh.rotation.y = elapsedTime * 0.18 + scrollProgress * Math.PI * 2.5;

      outerMesh.rotation.x = -elapsedTime * 0.15 - scrollProgress * Math.PI * 2;
      outerMesh.rotation.y = elapsedTime * 0.22 + scrollProgress * Math.PI * 2;

      torusMesh.rotation.z = elapsedTime * 0.08 + scrollProgress * Math.PI * 1.8;
      torusMesh.rotation.x = Math.PI / 3 + scrollProgress * 0.8;

      // Group positions based on scroll & mouse parallax
      mainGroup.position.x = mouseX * 12 + Math.sin(scrollProgress * Math.PI * 2) * 15;
      mainGroup.position.y = -mouseY * 8 - (scrollProgress - 0.5) * 40;
      mainGroup.position.z = Math.cos(scrollProgress * Math.PI * 2) * 20;

      // Floating particles gentle pulse
      particleSystem.rotation.y = elapsedTime * 0.025 + scrollProgress * 1.2;
      particleSystem.rotation.x = mouseX * 0.1;

      // Update lines between dynamic nearest neighbors
      const pPositions = particlesGeometry.attributes.position.array as Float32Array;
      let lineIndex = 0;
      const connectionDist = 38;

      for (let i = 0; i < particleCount && lineIndex < maxLines * 6; i += 2) {
        const x1 = pPositions[i * 3];
        const y1 = pPositions[i * 3 + 1];
        const z1 = pPositions[i * 3 + 2];

        for (let j = i + 1; j < Math.min(i + 12, particleCount); j++) {
          const x2 = pPositions[j * 3];
          const y2 = pPositions[j * 3 + 1];
          const z2 = pPositions[j * 3 + 2];

          const dist = Math.hypot(x1 - x2, y1 - y2, z1 - z2);
          if (dist < connectionDist && lineIndex < maxLines * 6) {
            linePositions[lineIndex++] = x1;
            linePositions[lineIndex++] = y1;
            linePositions[lineIndex++] = z1;
            linePositions[lineIndex++] = x2;
            linePositions[lineIndex++] = y2;
            linePositions[lineIndex++] = z2;
          }
        }
      }
      linesGeometry.attributes.position.needsUpdate = true;

      // Camera parallax
      camera.position.x = mouseX * 14;
      camera.position.y = -mouseY * 10;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    // --- Cleanup ---
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);

      coreGeometry.dispose();
      wireframeMaterial.dispose();
      outerGeometry.dispose();
      outerMaterial.dispose();
      torusGeometry.dispose();
      torusMaterial.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      linesGeometry.dispose();
      linesMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none bg-[#050505]">
      {/* Subtle Metallic Deep Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(148,163,184,0.06),rgba(5,5,5,0.98))]" />
      
      {/* WebGL Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
    </div>
  );
}

export default memo(Immersive3DBackground);
