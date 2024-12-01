import { useState } from "react";
import { motion } from "motion/react";

const NewOurStory = ({ story }) => {
  const [showDes, setShowDes] = useState(false);
  const { header, description } = story;
  return (
    <>
      {showDes ? (
        <motion.div
          onClick={() => {
            setShowDes(!showDes);
          }}
          whileInView={{ rotateX: 360, transition: { duration: 0.5 } }}
          className="size-[140px] lg:size-[190px] 2xl:size-[240px] bg-white"
        >
          {description}
        </motion.div>
      ) : (
        <motion.div
          transition={{ duration: 0.5 }}
          onClick={() => {
            setShowDes(!showDes);
          }}
          className="size-[140px] lg:size-[190px] 2xl:size-[240px] bg-white"
        >
          {header}
        </motion.div>
      )}
    </>
  );
};

export default NewOurStory;
