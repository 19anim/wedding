import BrideImage from "../assets/bride.jpg";
import { motion } from "motion/react";

const Bride = () => {
  return (
    <section
      id="bride"
      className="snap-start h-screen bg-[#ffbe9866] md:grid md:grid-cols-3 flex flex-col justify-center items-center px-4 py-2 overflow-hidden"
    >
      <motion.section
        initial={{
          opacity: 0,
          x: "-200px",
        }}
        whileInView={{
          opacity: 1,
          x: "0px",
          transition: { duration: 0.5 },
        }}
        className="col-span-2 text-center flex flex-col justify-center items-center gap-2 md:gap-5"
      >
        <section className="md:max-w-[70%]">
          <article>
            <header className="font-montserrat lg:text-[2em] sm:text-[1.5em] text-[1em] font-bold text-center">Meet the Bride</header>
            <p className="text-center hidden md:block">
              <i>Building Love, Brick by Brick: An Architecter Marries the Developer of Her Dreams</i>
            </p>
          </article>
        </section>
        <article className="md:max-w-[70%]">
          <header className="font-montserrat lg:text-[2em] sm:text-[1.5em] text-[1em] font-bold text-center">About Thư</header>
          <main className="font-Poppins">
            Born in My Tho city and raised in Ho Chi Minh city, My name is Nguyen Kieu Minh Thu and I am an Architect. I love art and beauty in many ways.
          </main>
        </article>
        <article className="md:max-w-[70%]">
          <header className="font-montserrat lg:text-[2em] sm:text-[1.5em] text-[1em] font-bold text-center">The Proposal</header>
          <main className="font-Poppins">
            On a cold October evening right after my birthday, the groom and our Poker team surprised me with a romatic proposal, It was an unforgettable
            moment, and of course i had been waiting for that moment for a long time. I said yes.
          </main>
        </article>

        <article className="md:max-w-[70%]">
          <header className="font-montserrat lg:text-[2em] sm:text-[1.5em] text-[1em] font-bold text-center">Fun Facts About me</header>
          <main className="font-Poppins">
            Thanks to Jägermeister, somehow our two kindred spirits found each other and connected in love. And now we are husband and wife.
          </main>
        </article>
      </motion.section>
      <motion.section
        initial={{
          opacity: 0,
          x: "200px",
        }}
        whileInView={{
          opacity: 1,
          x: "0px",
          transition: { duration: 0.5 },
        }}
        className="h-[25%] w-[65%] md:h-[80%] md:w-full"
      >
        <section className="w-full h-full bg-cover md:bg-center rounded-lg" style={{ backgroundImage: `url("${BrideImage}")` }}></section>
      </motion.section>
    </section>
  );
};

export default Bride;
