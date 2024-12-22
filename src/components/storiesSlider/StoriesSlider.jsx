import FirstMet from "../../assets/thumbnail.jpg";
import SecondImg from "../../assets/schedule.jpg";
import ThirdImg from "../../assets/ourstory.jpg";
import FourthImg from "../../assets/fourthImage.jpg";
import FifthImg from "../../assets/fifthImage.jpg";
import SixthImg from "../../assets/sixthImage.jpg";
import { useState } from "react";

const StoriesSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const stories = [
    {
      imgSrc: FirstMet,
      header: "The Day We First Met",
      content:
        "Apr 04 2021, we first met at Gọn & Nhẹ beer club (Kinda weird for the first time at a beer club 😂)",
    },
    {
      imgSrc: SecondImg,
      header: "The Day We Started Our Relationship",
      content:
        "Apr 23 2021, I asked Thư for her agreement on a relationship after got couple of drink 😜. And you guess what, I got her agreement",
    },
    {
      imgSrc: ThirdImg,
      header: "The Day I Propose Her",
      content: `Oct 20 2023, right after her birthday. This is a plan that I have organized with my Poker team, and I got her "Yes" at Tiệm Ăn Nhà Khói`,
    },
    {
      imgSrc: FourthImg,
      header: "Opening Ceremony Date",
      content:
        "Sep 30 2023, the Opening Ceremony Date occurs before my Proposal day some how 😂",
    },
    {
      imgSrc: FifthImg,
      header: "Engagement Ceremony Date",
      content: "Aug 03 2024, ",
    },
    {
      imgSrc: SixthImg,
      header: "Wedding Ceremoney Date",
      content: "Feb 23 2025",
    },
  ];
  const handleNextButton = () => {
    if (currentIndex + 1 > stories.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const handlePrevButton = () => {
    if (currentIndex === 0) {
      setCurrentIndex(stories.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="absolute top-0 left-0 w-full h-full flex flex-col z-50 gap-2 justify-center items-center py-4">
      <header className="font-montserrat font-bold text-[2em] text-center">
        {stories[currentIndex].header}
      </header>
      <section className="w-full h-full flex items-center justify-between">
        <div
          className="w-[15%] h-[80%] bg-center bg-cover ease-in-out duration-500"
          style={{
            backgroundImage: `url("${
              currentIndex === 0
                ? stories[stories.length - 1].imgSrc
                : stories[currentIndex - 1].imgSrc
            }")`,
          }}
        ></div>
        <div
          data-index="0"
          className="w-[60%] h-full bg-center bg-cover ease-in-out duration-500"
          style={{
            backgroundImage: `url("${stories[currentIndex].imgSrc}")`,
          }}
        ></div>
        <div
          className="w-[15%] h-[80%] bg-center bg-cover ease-in-out duration-500"
          style={{
            backgroundImage: `url("${
              currentIndex === stories.length - 1
                ? stories[0].imgSrc
                : stories[currentIndex + 1].imgSrc
            }")`,
          }}
        ></div>
      </section>
      <article className="w-[80%] py-5 overflow-auto m-auto text-center">
        {stories[currentIndex].content}
      </article>
      {/* <section className="flex justify-center gap-2 w-full">
        <button
          onClick={handlePrevButton}
          className="border border-[#cfa2a2] bg-[#ff9e9e] bg-opacity-50 outline-none"
        >{`<`}</button>
        <button
          onClick={handleNextButton}
          className="border border-[#cfa2a2] bg-[#ff9e9e] bg-opacity-50 outline-none"
        >{`>`}</button>
      </section> */}
      <ul className="flex text-xl gap-6">
        {stories.map((story, index) => {
          return (
            <li
              key={story.header}
              onClick={() => {
                setCurrentIndex(index);
              }}
              className={`h-[15px] ${
                index === currentIndex
                  ? "w-[35px] shadow-[1px_2px]"
                  : "w-[15px]"
              } bg-[#ff9e9e] rounded-full cursor-pointer duration-700 border-solid border-[#0006] border-[1px]`}
            ></li>
          );
        })}
      </ul>
    </section>
  );
};

export default StoriesSlider;
