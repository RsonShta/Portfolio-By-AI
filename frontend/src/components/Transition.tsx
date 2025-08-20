import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface TransitionProps {
  children: ReactNode;
}

const Transition = ({ children }: TransitionProps) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
};

export default Transition;
