import { motion } from "motion/react";

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const Story = ({ story, setDetailHeader }) => {
  return (
    <motion.li
      className="px-3 py-[0.3em] cursor-pointer hover:text-blue-600"
      variants={itemVariants}
      onClick={() => {
        setDetailHeader(story.header);
      }}
    >
      {story.header}
    </motion.li>
  );
};

export default Story;
