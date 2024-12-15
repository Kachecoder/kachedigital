import { useState } from 'react'
import { ChromePicker } from 'react-color'
import { useSnapshot } from 'valtio'
import { sceneState, actions } from '../../store/scene'

export function ColorPicker() {
  const [showPicker, setShowPicker] = useState(false)
  const snap = useSnapshot(sceneState)

  return (
    <div className="relative">
      <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">
        Box Color
      </label>
      
      <div 
        className="w-full h-10 rounded cursor-pointer border border-gray-300 dark:border-gray-600"
        style={{ backgroundColor: snap.boxColor }}
        onClick={() => setShowPicker(!showPicker)}
      />
      
      {showPicker && (
        <div className="absolute z-10 mt-2">
          <div 
            className="fixed inset-0" 
            onClick={() => setShowPicker(false)} 
          />
          <ChromePicker 
            color={snap.boxColor}
            onChange={(color) => actions.setBoxColor(color.hex)}
          />
        </div>
      )}
    </div>
  )
}