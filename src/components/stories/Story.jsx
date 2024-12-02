import { motion } from "motion/react";

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const Story = ({ story }) => {
  return (
    <motion.li
      className="p-2 cursor-pointer font-montserrat"
      variants={itemVariants}
    >
      {story.header}
    </motion.li>
  );
};

export default Story;
