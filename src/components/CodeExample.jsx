import { motion } from 'framer-motion'

export function CodeExample() {
  return (
    <motion.p 
      className="text-gray-600 dark:text-gray-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      Edit <code className="font-mono bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">src/App.jsx</code> and save to test HMR
    </motion.p>
  )
}