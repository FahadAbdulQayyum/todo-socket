import { motion } from "framer-motion";

const Star = ({ x, y }: { x: number; y: number }) => {
  return (
    <motion.div
      className="absolute bg-white rounded-full w-2 h-2"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        x: x + Math.random() * 50 - 25,
        y: y + Math.random() * 50 - 25,
      }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        duration: 5,
      }}
    />
  );
};

const FloatingStars = () => {
  return (
    <>
      <Star x={50} y={50} />
      <Star x={200} y={100} />
      <Star x={300} y={200} />
      <Star x={400} y={150} />
    </>
  );
};

export default FloatingStars;