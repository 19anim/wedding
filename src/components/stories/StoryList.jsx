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
      content:
        "Apr 04 2021, we first met at Gọn & Nhẹ beer club (Kinda weird for the first time at a beer club 😂)",
    },
    {
      header: "The Day We Started Our Relationship",
      content:
        "Apr 23 2021, I asked Thư for her agreement on a relationship after got couple of drink 😜. And you guess what, I got her agreement",
    },
    {
      header: "The Day I Propose Her",
      content: `Oct 20 2023, right after her birthday. This is a plan that I have organized with my Poker team, and I got her "Yes" at Tiệm Ăn Nhà Khói`,
    },
    {
      header: "Opening Ceremony Date",
      content:
        "Sep 30 2023, the Opening Ceremony Date occurs before my Proposal day some how 😂",
    },
    {
      header: "Engagement Ceremony Date",
      content: "Aug 03 2024, ",
    },
    {
      header: "Wedding Ceremoney Date",
      content: "Feb 23 2025",
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
