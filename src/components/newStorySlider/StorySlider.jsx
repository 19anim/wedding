import "../../styles/storiesSlider.styles.css";
import Bride from "../../assets/bride.jpg";
import Groom from "../../assets/groom.jpg";
import Kissing from "../../assets/fifthImage.jpg";
import Bride2 from "../../assets/sixthImage.jpg";
import HoldingHand from "../../assets/schedule.jpg";
import { useEffect, useRef, useState } from "react";

const StorySlider = () => {
  const storyRefs = useRef([]);
  const thumbnailRefs = useRef([]);
  const [prevActiveItem, setPrevActiveItem] = useState(0);
  const stories = [
    {
      header: "The Day We First Met",
      content:
        "Apr 04 2021, we first met at Gọn & Nhẹ beer club (Kinda weird for the first time at a beer club 😂)",
      backgroundImage: Bride,
    },
    {
      header: "The Day We Started Our Relationship",
      content:
        "Apr 23 2021, I asked Thư for her agreement on a relationship after got couple of drink 😜. And you guess what, I got her agreement",
      backgroundImage: Groom,
    },
    {
      header: "The Day I Propose Her",
      content: `Oct 20 2023, right after her birthday. This is a plan that I have organized with my Poker team, and I got her "Yes" at Tiệm Ăn Nhà Khói`,
      backgroundImage: Kissing,
    },
    {
      header: "Opening Ceremony Date",
      content: "Sep 30 2023, the Opening Ceremony Date occurs before my Proposal day some how 😂",
      backgroundImage: Bride2,
    },
    {
      header: "Engagement Ceremony Date",
      content:
        "Aug 03 2024, We are in the love of our friends as they joining our Engagement Ceremony Date with all of their happiness",
      backgroundImage: HoldingHand,
    },
  ];

  useEffect(() => {
    storyRefs.current[0].classList.add("active");
    storyRefs.current[0].childNodes[0].children[0].classList.add("animate-showContent");
    storyRefs.current[0].childNodes[0].children[1].classList.add("animate-showContent");
    thumbnailRefs.current[0].classList.add("thumbnail-item--active");
    thumbnailRefs.current[0].classList.add("animate-slightBounce");
    thumbnailRefs.current[0].classList.remove("brightness-50");
  }, []);

  return (
    <section className="h-svh h- w-full snap-start relative">
      <section className="w-full h-full relative">
        {stories.map(({ header, content, backgroundImage }, index) => {
          return (
            <section
              key={header}
              ref={(element) => (storyRefs.current[index] = element)}
              style={{
                backgroundImage: `url("${backgroundImage}")`,
              }}
              className="transition-all duration-700 absolute opacity-0 w-full h-full bg-cover bg-center after:bg-[linear-gradient(to_top,#000_10%,transparent)] after:w-full after:h-full after:absolute after:contents-[''] after:left-0 after:bottom-0"
            >
              <section className="active absolute top-[10%] md:top-[20%] left-[10%] text-white max-w-[50%]">
                <header className="text-2xl md:text-4xl font-semibold pb-7 transition-all duration-300 opacity-0 translate-y-[30px] blur-sm">
                  {header}
                </header>
                <main className="text-sm md:text-base transition-all duration-500 opacity-0 translate-y-[30px] blur-sm">
                  {content}
                </main>
              </section>
            </section>
          );
        })}
      </section>

      <section className="w-full h-[250px] absolute z-50 bottom-7 overflow-auto flex md:justify-center items-center gap-2 px-4">
        {stories.map(({ header, backgroundImage }, index) => {
          return (
            <section
              key={header}
              ref={(element) => (thumbnailRefs.current[index] = element)}
              onClick={() => {
                storyRefs.current[prevActiveItem].classList.remove("active");
                storyRefs.current[prevActiveItem].childNodes[0].children[0].classList.remove(
                  "animate-showContent"
                );
                storyRefs.current[prevActiveItem].childNodes[0].children[1].classList.remove(
                  "animate-showContent"
                );
                thumbnailRefs.current[prevActiveItem].classList.remove("thumbnail-item--active");
                thumbnailRefs.current[prevActiveItem].classList.remove("animate-slightBounce");
                storyRefs.current[index].classList.add("active");
                storyRefs.current[index].childNodes[0].children[0].classList.add(
                  "animate-showContent"
                );
                storyRefs.current[index].childNodes[0].children[1].classList.add(
                  "animate-showContent"
                );
                thumbnailRefs.current[index].classList.add("thumbnail-item--active");
                thumbnailRefs.current[index].classList.add("animate-slightBounce");
                thumbnailRefs.current[prevActiveItem].classList.add("brightness-50");
                setPrevActiveItem(index);
              }}
              className="min-w-[100px] md:w-[150px] h-[170px] md:h-[220px] brightness-50 transition-all duration-500 cursor-pointer hover:animate-slightBounce"
            >
              <figure
                className="w-full h-full bg-cover bg-center rounded-lg"
                style={{
                  backgroundImage: `url("${backgroundImage}")`,
                }}
              ></figure>
            </section>
          );
        })}
      </section>
    </section>
  );
};

export default StorySlider;
