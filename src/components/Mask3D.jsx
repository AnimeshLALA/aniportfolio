import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture, Float, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import userPhoto from '../assets/user-photo.png';

const MaskObject = () => {
  const meshRef = useRef();
  const texture = useTexture(userPhoto);

  useFrame((state) => {
    if (!meshRef.current) return;
    const { x, y } = state.mouse;
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, x * 0.2, 0.1);
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, -y * 0.2, 0.1);
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <planeGeometry args={[5, 5]} />
        <meshBasicMaterial map={texture} transparent alphaTest={0.5} />
      </mesh>
    </Float>
  );
};

const Mask3D = () => {
  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={1} />
        <MaskObject />
      </Canvas>
    </div>
  );
};

export default Mask3D;
