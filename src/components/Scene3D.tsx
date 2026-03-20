import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";

const FloatingGeometry = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const mesh2Ref = useRef<THREE.Mesh>(null);
  const mesh3Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(t * 0.3) * 0.3;
      meshRef.current.rotation.y = t * 0.15;
    }
    if (mesh2Ref.current) {
      mesh2Ref.current.rotation.x = t * 0.2;
      mesh2Ref.current.rotation.z = Math.cos(t * 0.4) * 0.3;
    }
    if (mesh3Ref.current) {
      mesh3Ref.current.rotation.y = t * 0.25;
      mesh3Ref.current.rotation.x = Math.sin(t * 0.5) * 0.2;
    }
  });

  const goldColor = useMemo(() => new THREE.Color("#78350F"), []);
  const blueColor = useMemo(() => new THREE.Color("#2563EB"), []);

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
      <pointLight position={[-5, 3, 2]} intensity={0.8} color="#2563EB" />
      <pointLight position={[5, -3, -2]} intensity={0.6} color="#78350F" />

      {/* Main icosahedron */}
      <Float speed={2} rotationIntensity={0.4} floatIntensity={1.5}>
        <mesh ref={meshRef} position={[0, 0, 0]} scale={1.8}>
          <icosahedronGeometry args={[1, 1]} />
          <MeshTransmissionMaterial
            backside
            samples={6}
            resolution={512}
            transmission={0.95}
            roughness={0.1}
            thickness={0.5}
            ior={1.5}
            chromaticAberration={0.3}
            anisotropy={0.3}
            distortion={0.2}
            distortionScale={0.3}
            color={blueColor}
          />
        </mesh>
      </Float>

      {/* Orbiting torus */}
      <Float speed={3} rotationIntensity={0.8} floatIntensity={1}>
        <mesh ref={mesh2Ref} position={[-2.5, 1, -1]} scale={0.6}>
          <torusGeometry args={[1, 0.35, 16, 32]} />
          <meshStandardMaterial
            color={goldColor}
            metalness={0.9}
            roughness={0.15}
          />
        </mesh>
      </Float>

      {/* Small octahedron */}
      <Float speed={4} rotationIntensity={1} floatIntensity={0.8}>
        <mesh ref={mesh3Ref} position={[2.5, -1, 0.5]} scale={0.5}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color={blueColor}
            metalness={0.7}
            roughness={0.2}
            emissive={blueColor}
            emissiveIntensity={0.15}
          />
        </mesh>
      </Float>
    </>
  );
};

const Scene3D = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <FloatingGeometry />
      </Canvas>
    </div>
  );
};

export default Scene3D;
