import { useState } from "react";
import OurStoryVideo from "../assets/ourstory.mp4";
import { motion } from "motion/react";
import NewStoryList from "../components/newStories/NewStoryList";

const NewOurStory = () => {
  const stories = [
    {
      header: "The Day We First Met",
      description:
        "Apr 04 2021, we first met at Gọn & Nhẹ beer club (Kinda weird for the first time at a beer club 😂)",
    },
    {
      header: "The Day We Started Our Relationship",
      description:
        "Apr 23 2021, I asked Thư for her agreement on a relationship after got couple of drink 😜. And you guess what, I got her agreement",
    },
    {
      header: "The Day I Propose Her",
      description: `Oct 20 2023, right after her birthday. This is a plan that I have organized with my Poker team, and I got her "Yes" at Tiệm Ăn Nhà Khói`,
    },
    {
      header: "Opening Ceremony Date",
      description:
        "Sep 30 2023, the Opening Ceremony Date occurs before my Proposal day some how 😂",
    },
    {
      header: "Engagement Ceremony Date",
      description: "Aug 03 2024, ",
    },
    {
      header: "Wedding Ceremoney Date",
      description: "Feb 23 2025",
    },
  ];
  return (
    <section className="h-screen snap-start relative">
      <section className="absolute w-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center justify-center z-50">
        <header>Our Stories</header>
        <NewStoryList stories={stories} />
      </section>
      <video
        autoPlay={true}
        muted
        loop
        className="h-screen w-screen object-cover"
        src={OurStoryVideo}
      />
    </section>
  );
};

export default NewOurStory;
