import { useSnapshot } from 'valtio'
import { sceneState, actions } from '../store/scene'
import { ColorPicker } from './controls/ColorPicker'
import { SliderControl } from './controls/SliderControl'

export function SceneControls() {
  const snap = useSnapshot(sceneState)

  return (
    <div className="space-y-4 p-4 bg-white dark:bg-gray-800 rounded-lg">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Scene Controls</h2>
      
      <div className="space-y-4">
        <ColorPicker />

        <div className="space-y-3">
          <SliderControl
            label="Rotation Speed"
            value={snap.boxRotationSpeed}
            onChange={actions.setRotationSpeed}
            min={1}
            max={10}
          />

          <SliderControl
            label="Float Height"
            value={snap.boxFloatHeight}
            onChange={actions.setFloatHeight}
            min={0}
            max={1}
            step={0.1}
          />

          <SliderControl
            label="Float Speed"
            value={snap.boxFloatSpeed}
            onChange={actions.setFloatSpeed}
            min={0.1}
            max={1}
            step={0.1}
          />
        </div>
      </div>
    </div>
  )
}