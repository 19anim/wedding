import Story from "./Story";
import StoryDetail from "./StoryDetail";
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
  const [detailHeader, setDetailHeader] = useState("");
  return (
    <section className="flex absolute top-[10%] left-0 translate-y-[-10%] z-50 w-full h-full gap-5 px-5 py-10">
      <motion.section
        animate={isOpen ? "open" : "closed"}
        className="flex flex-col self-start items-center justify-center w-[300px] xl:w-[400px] font-montserrat text-sm xl:text-base"
      >
        <button
          onClick={() => {
            setIsOpen(!isOpen);
            setDetailHeader("");
          }}
          className=" mb-3 w-full flex justify-between text-left items-center bg-[#ffdcc3] border-none focus:outline-none"
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
          className="bg-[#ffdcc3] w-full flex flex-col"
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
            <Story
              key={story.header}
              story={story}
              setDetailHeader={setDetailHeader}
            />
          ))}
        </motion.ul>
      </motion.section>

      <StoryDetail detailHeader={detailHeader} />
    </section>
  );
};

export default StoryList;
