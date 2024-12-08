import { motion } from "motion/react";
import Image from "../../assets/schedule.jpg";

const StoryDetail = ({ detailHeader }) => {
  return (
    <motion.article
      className="bg-[#ffdcc3] w-full h-full flex p-10"
      animate={detailHeader !== "" ? "open" : "closed"}
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
      <div
        style={{ backgroundImage: `url(${Image})` }}
        className="flex-[1_1_60%] bg-center bg-cover rounded-[2px]"
      ></div>
      <section className=" flex-[1_1_40%]">
        <header></header>
        <main></main>
      </section>
    </motion.article>
  );
};

export default StoryDetail;
