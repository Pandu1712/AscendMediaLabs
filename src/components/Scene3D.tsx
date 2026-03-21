import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial, Stars, Sparkles } from "@react-three/drei";
import * as THREE from "three";

const PowerfulCore = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.15 + (state.pointer.y * 0.2);
      meshRef.current.rotation.y = t * 0.2 + (state.pointer.x * 0.2);
    }
  });

  return (
    <group position={[3, 0, -2]}>
      {/* Torus Knot — reduced segments for better perf */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh ref={meshRef} scale={1.8}>
          <torusKnotGeometry args={[1.2, 0.4, 128, 32]} />
          <MeshTransmissionMaterial
            backside
            samples={2}
            resolution={256}
            transmission={0.9}
            roughness={0.1}
            thickness={1}
            ior={1.5}
            chromaticAberration={0.3}
            anisotropy={0.2}
            distortion={0.3}
            distortionScale={0.4}
            color="#38bdf8"
          />
        </mesh>
      </Float>
      
      {/* Inner glowing core */}
      <mesh scale={0.7} position={[0, 0, 0]}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshBasicMaterial color="#f59e0b" transparent opacity={0.6} />
      </mesh>
      
      <pointLight position={[0, 0, 0]} intensity={8} distance={10} color="#f59e0b" />
    </group>
  );
};

const Scene3D = () => {
  return (
    <div className="hidden md:block absolute inset-0 z-0 opacity-100">
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 0, 10], fov: 45 }}
          gl={{
            antialias: false,            // Disable AA — biggest perf gain
            alpha: true,
            powerPreference: "high-performance",
            precision: "mediump",        // Medium precision instead of highp
          }}
          dpr={[1, 1.5]}               // Cap pixel ratio at 1.5 (not 2)
          style={{ background: "transparent" }}
        >
          {/* Lighting */}
          <ambientLight intensity={0.2} />
          <directionalLight position={[10, 10, 5]} intensity={4} color="#f59e0b" />
          <directionalLight position={[-10, -10, -5]} intensity={4} color="#2563eb" />
          <pointLight position={[0, 5, 0]} intensity={2} color="#ffffff" />
          
          {/* Reduced particle counts */}
          <Stars radius={50} depth={50} count={1500} factor={4} saturation={1} fade speed={1} />
          <Sparkles count={80} scale={15} size={2.5} speed={0.3} opacity={0.3} color="#f59e0b" />
          
          <PowerfulCore />
        </Canvas>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
    </div>
  );
};

export default Scene3D;
