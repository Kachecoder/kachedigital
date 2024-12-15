import { motion } from 'motion/react'
import { useRef } from 'react'
import { useSnapshot } from 'valtio'
import { sceneState } from '../../store/scene'
import { useSceneAnimation } from '../../hooks/useSceneAnimation'

export function Box() {
  const meshRef = useRef()
  const snap = useSnapshot(sceneState)
  
  useSceneAnimation(meshRef)

  return (
    <motion.mesh
      ref={meshRef}
      animate={{
        rotateY: [0, Math.PI * 2],
      }}
      transition={{
        duration: snap.boxRotationSpeed,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={snap.boxColor} />
    </motion.mesh>
  )
}