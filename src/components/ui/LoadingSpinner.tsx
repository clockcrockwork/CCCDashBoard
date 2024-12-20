import { motion } from 'framer-motion';

export function LoadingSpinner() {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-6 h-6 border-4 border-primary border-t-transparent rounded-full"
        />
      </motion.div>
    </div>
  );
}