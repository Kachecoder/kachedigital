import { motion } from 'framer-motion'
import { Header } from './components/Header'
import { Counter } from './components/Counter'
import { CodeExample } from './components/CodeExample'
import { Scene3D } from './components/Scene3D'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
      <Header />
      <div className="space-y-4 w-full max-w-2xl px-4">
        <Scene3D />
        <Counter />
        <CodeExample />
      </div>
      <div>
      <h1>React</h1>
      </div>
      <motion.p 
        className="mt-8 text-gray-500 dark:text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Click on the Vite and React logos to learn more
      </motion.p>
    </div>
  )
}