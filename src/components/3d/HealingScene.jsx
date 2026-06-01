import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Environment, MeshDistortMaterial, Sparkles } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'

function HealingOrb() {
  const ref = useRef()
  useFrame(({ clock }) => {
    ref.current.rotation.y = clock.getElapsedTime() * 0.2
  })
  return (
    <Float speed={1.5} floatIntensity={0.4}>
      <mesh ref={ref}>
        <sphereGeometry args={[1.8, 64, 64]} />
        <MeshDistortMaterial color="#4CAF82" emissive="#4CAF82" emissiveIntensity={0.15} distort={0.25} speed={1.5} roughness={0.1} metalness={0.1} transparent opacity={0.9} />
      </mesh>
      <Sparkles count={60} scale={5} size={1.2} speed={0.3} color="#4CAF82" />
    </Float>
  )
}

function LeafParticles() {
  const ref = useRef()
  const count = 50
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i*3] = (Math.random()-0.5)*12; pos[i*3+1] = (Math.random()-0.5)*8; pos[i*3+2] = (Math.random()-0.5)*8
    }
    return pos
  }, [])
  useFrame(({ clock }) => { ref.current.rotation.y = clock.getElapsedTime() * 0.05 })
  return (
    <points ref={ref}>
      <bufferGeometry><bufferAttribute attach="attributes-position" args={[positions.slice(), 3]} /></bufferGeometry>
      <pointsMaterial size={0.05} color="#2D9B5E" transparent opacity={0.5} sizeAttenuation />
    </points>
  )
}

export default function HealingScene() {
  return (
    <Canvas camera={{position:[0,0,6],fov:55}} style={{height:'100vh'}}>
      <color attach="background" args={['#EDF7F2']} />
      <ambientLight intensity={1.8} />
      <pointLight position={[3,4,3]} intensity={2} color="#4CAF82" />
      <pointLight position={[-3,-2,-3]} intensity={0.8} color="#A8D8B9" />
      <HealingOrb />
      <LeafParticles />
      <Environment preset="park" />
      <EffectComposer>
        <Bloom luminanceThreshold={0.85} intensity={0.4} />
      </EffectComposer>
    </Canvas>
  )
}
