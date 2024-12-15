import { Scene } from './three/Scene'
import { SceneControls } from './SceneControls'

export function Scene3D() {
  return (
    <div className="space-y-4">
      <div className="w-full h-[400px] bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden">
        <Scene />
      </div>
      <SceneControls />
    </div>
  )
}