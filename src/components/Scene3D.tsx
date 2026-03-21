import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial, Stars, Sparkles } from "@react-three/drei";
import * as THREE from "three";

const PowerfulCore = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      // Smooth continuous rotation plus mouse interaction
      meshRef.current.rotation.x = t * 0.15 + (state.pointer.y * 0.2);
      meshRef.current.rotation.y = t * 0.2 + (state.pointer.x * 0.2);
    }
  });

  return (
    <group position={[3, 0, -2]}>
      {/* Massive Abstract Monolith */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh ref={meshRef} scale={1.8}>
          <torusKnotGeometry args={[1.2, 0.4, 256, 64]} />
          <MeshTransmissionMaterial
            backside
            samples={4}
            resolution={512}
            transmission={0.9}
            roughness={0.1}
            thickness={1}
            ior={1.5}
            chromaticAberration={0.5}
            anisotropy={0.4}
            distortion={0.5}
            distortionScale={0.5}
            color="#38bdf8" // Royal Blue luminous tint
          />
        </mesh>
      </Float>
      
      {/* Inner glowing core for the knot to refract */}
      <mesh scale={0.7} position={[0, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="#f59e0b" transparent opacity={0.6} />
      </mesh>
      
      {/* Internal point light bouncing around the glass */}
      <pointLight position={[0, 0, 0]} intensity={10} distance={10} color="#f59e0b" />
    </group>
  );
};

const Scene3D = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-100">
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 0, 10], fov: 45 }}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          style={{ background: "transparent" }}
        >
          {/* High-contrast lighting setup */}
          <ambientLight intensity={0.2} />
          <directionalLight position={[10, 10, 5]} intensity={4} color="#f59e0b" />
          <directionalLight position={[-10, -10, -5]} intensity={4} color="#2563eb" />
          <pointLight position={[0, 5, 0]} intensity={2} color="#ffffff" />
          
          {/* Intense space/particle environment */}
          <Stars radius={50} depth={50} count={3000} factor={5} saturation={1} fade speed={1.5} />
          <Sparkles count={200} scale={15} size={3} speed={0.4} opacity={0.4} color="#f59e0b" />
          
          <PowerfulCore />
        </Canvas>
      </div>
      
      {/* Gradient overlay to ensure UI text remains highly legible against the powerful 3D scene */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
    </div>
  );
};

export default Scene3D;
