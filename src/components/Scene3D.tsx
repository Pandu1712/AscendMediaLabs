import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";

const FloatingGeometry = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const mesh2Ref = useRef<THREE.Mesh>(null);
  const mesh3Ref = useRef<THREE.Mesh>(null);
  const mesh4Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(t * 0.2) * 0.2;
      meshRef.current.rotation.y = t * 0.1;
    }
    if (mesh2Ref.current) {
      mesh2Ref.current.rotation.x = t * 0.15;
      mesh2Ref.current.rotation.z = Math.cos(t * 0.3) * 0.2;
    }
    if (mesh3Ref.current) {
      mesh3Ref.current.rotation.y = t * 0.18;
      mesh3Ref.current.rotation.x = Math.sin(t * 0.4) * 0.15;
    }
    if (mesh4Ref.current) {
      mesh4Ref.current.rotation.z = t * 0.12;
      mesh4Ref.current.rotation.y = Math.cos(t * 0.25) * 0.2;
    }
  });

  const goldColor = useMemo(() => new THREE.Color("#78350F"), []);
  const blueColor = useMemo(() => new THREE.Color("#2563EB"), []);
  const lightBlue = useMemo(() => new THREE.Color("#38BDF8"), []);

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} color="#ffffff" />
      <pointLight position={[-5, 3, 2]} intensity={0.5} color="#2563EB" />
      <pointLight position={[5, -3, -2]} intensity={0.3} color="#78350F" />

      {/* Large subtle sphere - right side */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.8}>
        <mesh ref={meshRef} position={[3.5, 0.5, -2]} scale={1.4}>
          <icosahedronGeometry args={[1, 2]} />
          <MeshTransmissionMaterial
            backside
            samples={4}
            resolution={256}
            transmission={0.97}
            roughness={0.05}
            thickness={0.3}
            ior={1.5}
            chromaticAberration={0.2}
            anisotropy={0.2}
            distortion={0.1}
            distortionScale={0.2}
            color={blueColor}
          />
        </mesh>
      </Float>

      {/* Gold torus - left side */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.6}>
        <mesh ref={mesh2Ref} position={[-4, 1.5, -1]} scale={0.4}>
          <torusGeometry args={[1, 0.4, 16, 32]} />
          <meshStandardMaterial
            color={goldColor}
            metalness={0.95}
            roughness={0.1}
          />
        </mesh>
      </Float>

      {/* Small blue octahedron - top right */}
      <Float speed={2.5} rotationIntensity={0.6} floatIntensity={0.5}>
        <mesh ref={mesh3Ref} position={[4.5, 2.5, -1]} scale={0.3}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color={lightBlue}
            metalness={0.8}
            roughness={0.15}
            emissive={lightBlue}
            emissiveIntensity={0.1}
          />
        </mesh>
      </Float>

      {/* Tiny gold sphere - bottom left */}
      <Float speed={3} rotationIntensity={0.3} floatIntensity={0.4}>
        <mesh ref={mesh4Ref} position={[-3.5, -2, 0]} scale={0.25}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            color={goldColor}
            metalness={0.9}
            roughness={0.1}
            emissive={goldColor}
            emissiveIntensity={0.05}
          />
        </mesh>
      </Float>
    </>
  );
};

const Scene3D = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-60">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 40 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <FloatingGeometry />
      </Canvas>
    </div>
  );
};

export default Scene3D;
