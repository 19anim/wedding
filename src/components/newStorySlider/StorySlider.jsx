import "../../styles/storiesSlider.styles.css";
import FirstMet from "../../assets/ourstories/first-met.jpg";
import StartRelationship from "../../assets/ourstories/startRelationship.jpg";
import Propose from "../../assets/ourstories/propose.jpg";
import ProposalCeremony from "../../assets/ourstories/proposalCeremony.jpg";
import engagementCeremonyDate from "../../assets/ourstories/engagementCeremonyDate.jpg";
import WeddingDate from "../../assets/ourstories/weddingDate.jpg";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

const StorySlider = () => {
  const storyRefs = useRef([]);
  const thumbnailRefs = useRef([]);
  const sendLoveButtonRef = useRef(null);
  const [hearts, setHearts] = useState([]);
  const [prevActiveItem, setPrevActiveItem] = useState(0);
  const stories = [
    {
      header: "The Day We First Met",
      content:
        "Apr 04 2021, we first met at Gọn & Nhẹ beer club (Kinda weird for the first time at a beer club 😂)",
      backgroundImage: FirstMet,
    },
    {
      header: "The Day We Started Our Relationship",
      content:
        "Apr 23 2021, I asked Thư for her agreement on a relationship after got couple of drink 😜. And you guess what, I got her agreement",
      backgroundImage: StartRelationship,
    },
    {
      header: "The Day I Propose Her",
      content: `Oct 20 2023, right after her birthday. This is a plan that I have organized with my Poker team, and I got her "Yes" at Tiệm Ăn Nhà Khói`,
      backgroundImage: Propose,
    },
    {
      header: "Proposal Ceremony Date",
      content: "Sep 30 2023, the Proposal Ceremony Date occurs before my Proposal day some how 😂",
      backgroundImage: ProposalCeremony,
    },
    {
      header: "Engagement Ceremony Date",
      content:
        "Aug 03 2024, We are in the love of our friends as they joining our Engagement Ceremony Date with all of their happiness",
      backgroundImage: engagementCeremonyDate,
    },
    {
      header: "Wedding Date",
      content:
        "Feb 23 2024, After going through many ups and downs in our love story, we decided to be together and build a happy life together",
      backgroundImage: WeddingDate,
    },
  ];

  const handleSendLoveClick = (event) => {
    const x = event.clientX;
    const y = event.clientY;

    // Create a new heart with unique ID
    const newHeart = { id: Date.now(), x, y };
    setHearts((prevHearts) => [...prevHearts, newHeart]);

    // Remove heart after animation
    setTimeout(() => {
      setHearts((prevHearts) => prevHearts.filter((heart) => heart.id !== newHeart.id));
    }, 1000);
  };

  useEffect(() => {
    storyRefs.current[0].classList.add("active");
    storyRefs.current[0].childNodes[0].children[0].classList.add("animate-showContent");
    storyRefs.current[0].childNodes[0].children[1].classList.add("animate-showContent");
    thumbnailRefs.current[0].classList.add("thumbnail-item--active");
    thumbnailRefs.current[0].classList.add("animate-slightBounce");
    thumbnailRefs.current[0].classList.remove("brightness-50");
  }, []);

  return (
    <section id="ourStories" className="h-screen w-full snap-start relative">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ opacity: 1, scale: 0.5, y: 0 }}
          animate={{ opacity: 0, scale: 2, y: -100 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute text-red-500 text-3xl z-50"
          style={{ left: heart.x, top: heart.y }}
        >
          ❤️
        </motion.div>
      ))}
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
              <section className="active absolute top-[20%] left-[10%] text-white">
                <header className="tracking-[0.4rem] font-montserrat text-2xl md:text-4xl font-bold pb-7 transition-all duration-300 opacity-0 translate-y-[30px] drop-shadow-[0_4px_10px_rgba(255,0,0,0.6)] bg-clip-text text-transparent blur-sm bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
                  {header}
                </header>
                <main className="text-sm md:text-lg max-w-[70%] md:max-w-[50%] transition-all duration-500 opacity-0 translate-y-[30px] blur-sm drop-shadow-[0_2px_5px_rgba(255,255,255,0.8)]">
                  {content}
                </main>
                <button
                  onClick={handleSendLoveClick}
                  ref={sendLoveButtonRef}
                  className="px-5 py-3 mt-5 text-black rounded-3xl bg-[#f99393c7] shadow-[0_5px_15px_rgba(249,147,147,0.6)] 
                    hover:shadow-[0_8px_20px_rgba(249,147,147,0.8)] 
                    transition-all duration-300"
                >
                  Sending love 💕
                </button>
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
