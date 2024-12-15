import { motion } from 'framer-motion'

export function Logo({ href, src, alt }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <img src={src} className="h-24" alt={alt} />
    </motion.a>
  )
}