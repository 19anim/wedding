import NewStory from "../newStories/NewStory";
import { motion } from "motion/react";

const NewStoryList = ({ stories }) => {
  return (
    <motion.main className="flex flex-wrap justify-center gap-1">
      {stories.map((story) => (
        <NewStory story={story} />
      ))}
    </motion.main>
  );
};

export default NewStoryList;
