import { motion } from "framer-motion";

const Ribbon = () => {
  const ribbonVariants = {
    closed: { width: 0 },
    open: { width: "300px" },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      className="bg-red-500 text-white p-4 rounded-lg"
      variants={ribbonVariants}
      initial="closed"
      animate="open"
      transition={{ duration: 1 }}
    >
      <motion.h3
        variants={textVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1, duration: 0.5 }}
      >
        Achievements
      </motion.h3>
    </motion.div>
  );
};

export default Ribbon;