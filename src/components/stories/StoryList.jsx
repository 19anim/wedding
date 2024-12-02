import Story from "./Story";
import { motion } from "motion/react";
import { useState } from "react";

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
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.section
      animate={isOpen ? "open" : "closed"}
      className="absolute top-[10%] left-[50%] translate-x-[-50%] translate-y-[-10%] flex flex-col items-center justify-center w-[300px] md:w-[400px] z-50"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-[1em] mb-3 w-full font-montserrat flex justify-between text-left items-center bg-[#ffdcc3] border-none focus:outline-none"
      >
        Our Stories
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.2 }}
        >
          <svg width="15" height="15" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </motion.div>
      </button>
      <motion.ul
        className="bg-[#ffdcc3] w-full flex flex-col gap-3"
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
      >
        {stories.map((story) => (
          <Story key={story.header} story={story} />
        ))}
      </motion.ul>
    </motion.section>
  );
};

export default StoryList;
