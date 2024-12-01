import { motion } from "motion/react";

const Text = ({ styling, displayText }) => {
  return <motion.p {...styling}>{displayText}</motion.p>;
};

export default Text;
