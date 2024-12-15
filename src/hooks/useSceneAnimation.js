import { useFrame } from '@react-three/fiber'
import * as maath from 'maath'
import { useSnapshot } from 'valtio'
import { sceneState } from '../store/scene'

export function useSceneAnimation(meshRef) {
  const snap = useSnapshot(sceneState)
  
  useFrame((state, delta) => {
    if (!meshRef.current) return

    maath.easing.damp3(
      meshRef.current.position,
      [
        0,
        Math.sin(state.clock.elapsedTime) * snap.boxFloatHeight,
        0
      ],
      snap.boxFloatSpeed,
      delta
    )
  })
}