import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Box } from './Box'
import { Lights } from './Lights'

export function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 4] }}>
      <Lights />
      <Box />
      <OrbitControls enableDamping dampingFactor={0.05} />
    </Canvas>
  )
}