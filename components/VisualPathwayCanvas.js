'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'

function GLBModel({ path }) {
  const { scene } = useGLTF(path)
  return <primitive object={scene} />
}

function MockPathway({ onSelect }) {
  return (
    <group>
      <mesh position={[-1.2, 0.2, 0]} onClick={() => onSelect('olhos')}>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshStandardMaterial color="#60a5fa" />
      </mesh>
      <mesh position={[1.2, 0.2, 0]} onClick={() => onSelect('olhos')}>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshStandardMaterial color="#60a5fa" />
      </mesh>
      <mesh position={[0, 0.15, -0.25]} rotation={[0, 0, Math.PI / 2]} onClick={() => onSelect('nervo-optico')}>
        <cylinderGeometry args={[0.11, 0.11, 2.2, 24]} />
        <meshStandardMaterial color="#f59e0b" />
      </mesh>
      <mesh position={[0, 0.18, 0.55]} onClick={() => onSelect('quiasma-optico')}>
        <boxGeometry args={[0.8, 0.24, 0.3]} />
        <meshStandardMaterial color="#f43f5e" />
      </mesh>
    </group>
  )
}

export default function VisualPathwayCanvas({ onSelect, modelPath = null }) {
  return (
    <div className="h-[460px] w-full rounded-2xl border border-slate-800 bg-slate-900/70">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[3, 4, 2]} intensity={1.2} />
        <Suspense fallback={null}>{modelPath ? <GLBModel path={modelPath} /> : <MockPathway onSelect={onSelect} />}</Suspense>
        <OrbitControls enablePan={false} />
      </Canvas>
    </div>
  )
}
