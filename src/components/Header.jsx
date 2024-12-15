import { motion } from 'framer-motion'
import { Logo } from './Logo'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

export function Header() {
  return (
    <>
      <div className="flex gap-8 mb-8">
        <Logo href="https://vite.dev" src={viteLogo} alt="Vite logo" />
        <Logo href="https://react.dev" src={reactLogo} alt="React logo" />
      </div>
      <motion.h1
        className="text-5xl font-bold mb-8 text-gray-800 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Vite + React
      </motion.h1>
    </>
  )
}