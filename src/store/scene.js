import { proxy } from 'valtio'

export const sceneState = proxy({
  boxColor: '#4f46e5',
  boxRotationSpeed: 4,
  boxFloatHeight: 0.2,
  boxFloatSpeed: 0.2,
})

export const actions = {
  setBoxColor: (color) => {
    sceneState.boxColor = color
  },
  setRotationSpeed: (speed) => {
    sceneState.boxRotationSpeed = speed
  },
  setFloatHeight: (height) => {
    sceneState.boxFloatHeight = height
  },
  setFloatSpeed: (speed) => {
    sceneState.boxFloatSpeed = speed
  },
}