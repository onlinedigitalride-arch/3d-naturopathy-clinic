import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Stars, MeshDistortMaterial, Sparkles } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import * as THREE from 'three'

function HealingOrb() {
  const ref = useRef()
  useFrame(({ clock }) => {
    ref.current.rotation.y = clock.getElapsedTime() * 0.2
    ref.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.3) * 0.1
  })
  return (
    <Float speed={1.5} floatIntensity={0.4}>
      <mesh ref={ref}>
        <sphereGeometry args={[1.8, 64, 64]} />
        <MeshDistortMaterial color="#4CAF82" emissive="#2d7a50" emissiveIntensity={0.5} distort={0.3} speed={1.5} roughness={0} metalness={0.2} transparent opacity={0.85} />
      </mesh>
      <Sparkles count={80} scale={5} size={1.5} speed={0.3} color="#7EC8A4" />
    </Float>
  )
}

function LeafParticles() {
  const ref = useRef()
  const count = 60
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i*3] = (Math.random() - 0.5) * 12
      pos[i*3+1] = (Math.random() - 0.5) * 8
      pos[i*3+2] = (Math.random() - 0.5) * 8
    }
    return pos
  }, [])
  useFrame(({ clock }) => {
    ref.current.rotation.y = clock.getElapsedTime() * 0.05
  })
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#C8E6C9" transparent opacity={0.6} sizeAttenuation />
    </points>
  )
}

export default function HealingScene() {
  return (
    <Canvas camera={{ position: [0,0,6], fov:55 }} style={{height:'100vh'}}>
      <color attach="background" args={['#0D1A12']} />
      <ambientLight intensity={0.3} />
      <pointLight position={[3,4,3]} intensity={2} color="#4CAF82" />
      <pointLight position={[-3,-2,-3]} intensity={0.5} color="#C8E6C9" />
      <Stars radius={60} depth={30} count={2000} factor={2} fade />
      <HealingOrb />
      <LeafParticles />
      <EffectComposer>
        <Bloom luminanceThreshold={0.2} intensity={2} />
      </EffectComposer>
    </Canvas>
  )
}
