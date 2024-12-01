import Story from "./Story";
import { motion } from "motion/react";

const variant = {
  initial: {
    opacity: 0,
    x: -200,
  },
  inView: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 1,
    },
  },
};

const StoryList = () => {
  const stories = [
    {
      header: "The Day We First Met",
      content: "ABC",
    },
    {
      header: "The Day We Started Our Relationship",
      content: "ABC",
    },
    {
      header: "The Day I Propose Her",
      content: "ABC",
    },
    {
      header: "Opening Ceremony Date",
      content: "ABC",
    },
    {
      header: "Engagement Ceremony Date",
      content: "ABC",
    },
    {
      header: "Wedding Ceremoney Date",
      content: "ABC",
    },
  ];
  return (
    <motion.ol
      variants={variant}
      initial="initial"
      whileInView="inView"
      className="ml-10 relative text-gray-500 border-s border-gray-200"
    >
      {stories.map((story, index) => {
        return <Story key={story.header} index={index} story={story} />;
      })}
    </motion.ol>
  );
};

export default StoryList;
