import { motion } from "motion/react";
import Text from "../text/text";

const Timeline = () => {
  return (
    <section id="schedule" className="flex flex-col items-center gap-2">
      <section>
        <Text
          displayText="We're Getting Married!"
          styling={{ className: "text-[#ff9e9e] text-xl" }}
        />
      </section>
      <section className="flex gap-2 text-[#ff9e9e] font-playfairDisplay text-[80px]">
        <Text
          displayText="Minh Thu"
          styling={{
            initial: { x: -200 },
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
            initial: { x: 200 },
            whileInView: { x: 0 },
            transition: {
              duration: 0.5,
            },
          }}
        />
      </section>

      {/* <section className="w-[600px] flex justify-around items-center text-2xl px-4 py-2 rounded-[50px] bg-slate-200">
        <section className="flex flex-col items-center">
          <header>My Tho</header>
          <main>Feb 23, 2025</main>
        </section>
        <div className="h-[30px] border border-black"></div>
        <section className="flex flex-col items-center">
          <header>TPHCM</header>
          <main>Mar 01, 2025</main>
        </section>
      </section> */}
    </section>
  );
};

export default Timeline;
