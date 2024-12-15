import { motion } from 'framer-motion'
import { useState } from 'react'

export function Counter() {
  const [count, setCount] = useState(0)

  return (
    <motion.button
      onClick={() => setCount((count) => count + 1)}
      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      count is {count}
    </motion.button>
  )
}