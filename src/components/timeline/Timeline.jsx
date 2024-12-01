import { motion } from "motion/react";
import Text from "../text/Text";

const Timeline = () => {
  return (
    <section id="schedule" className="flex flex-col items-center gap-2">
      <section>
        <Text
          displayText="We're Getting Married!"
          styling={{ className: "text-[#ff9e9e] text-xl" }}
        />
      </section>
      <section className="flex gap-2 text-[#ff9e9e] font-playfairDisplay text-[2em] sm:text-[3em] lg:text-[4em]">
        <Text
          displayText="Minh Thu"
          styling={{
            initial: { x: -100 },
            whileInView: { x: 0 },
            transition: {
              duration: 0.5,
            },
          }}
        />
        <Text
          displayText="&"
          styling={{
            initial: { y: -50 },
            whileInView: { y: 0 },
            transition: {
              duration: 0.5,
            },
          }}
        />
        <Text
          displayText="Tuan An"
          styling={{
            initial: { x: 100 },
            whileInView: { x: 0 },
            transition: {
              duration: 0.5,
            },
          }}
        />
      </section>
    </section>
  );
};

export default Timeline;
