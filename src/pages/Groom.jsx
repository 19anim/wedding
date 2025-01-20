import GroomImage from "../assets/groom.jpg";
import { motion } from "motion/react";

const Groom = () => {
  return (
    <section
      id="groom"
      className="snap-start h-screen bg-[#ffbe9866] md:grid md:grid-cols-3 flex flex-col items-center px-4 py-2 overflow-hidden"
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
        className="h-[25%] w-[65%] md:h-[80%] md:w-full"
      >
        <section
          className="w-full h-full bg-cover md:bg-center rounded-lg"
          style={{ backgroundImage: `url("${GroomImage}")` }}
        ></section>
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
        className="col-span-2 text-center flex flex-col justify-center items-center gap-2 md:gap-5"
      >
        <section className="md:max-w-[70%]">
          <article>
            <header className="font-montserrat lg:text-[2em] sm:text-[1.5em] text-[1em] font-bold text-center">
              Meet the Groom
            </header>
            <p className="text-center hidden md:block">
              <i>
                Building Love, Brick by Brick: A Developer Marries the Architect
                of His Dreams
              </i>
            </p>
          </article>
        </section>
        <article className="md:max-w-[70%]">
          <header className="font-montserrat lg:text-[2em] sm:text-[1.5em] text-[1em] font-bold text-center">
            About Ân
          </header>
          <main className="font-Poppins">
            Born and raised in Ho Chi Minh city, My name is Nguyen Phi Tuan An
            and I am a Developer currently working at Bosch. I enjoys hanging
            out, playing video games, sports and has a knack for selling
            alcohol. Above all, I feel happiest spending time with family,
            friends, and now, my beautiful bride-to-be.
          </main>
        </article>
        <article className="md:max-w-[70%]">
          <header className="font-montserrat lg:text-[2em] sm:text-[1.5em] text-[1em] font-bold text-center">
            The Proposal
          </header>
          <main className="font-Poppins">
            On a chilly October evening right after Thu's birthday, I and my
            Poker team surprised Thu with a heartfelt proposal at{" "}
            <i>Tiem An Nha Khoi</i>. The moment was unforgettable, and she, of
            course, said yes!
          </main>
        </article>

        <article className="md:max-w-[70%]">
          <header className="font-montserrat lg:text-[2em] sm:text-[1.5em] text-[1em] font-bold text-center">
            Fun Facts About me
          </header>
          <main className="font-Poppins">
            Besides being a programmer, I also sell Jägermeister. Thanks to
            Jägermeister, Thu and I became husband and wife.
          </main>
        </article>
      </motion.section>
    </section>
  );
};

export default Groom;

{
  /* <section className="snap-start h-full w-full sm:w-[50%] flex flex-col justify-center bg-[#ffbe9866] sm:bg-transparent sm:gap-10 sm:py-2 px-2 sm:pr-2">
        <section className="w-full flex flex-col gap-3 items-end">
          <article className="lg:max-w-[70%]">
            <header className="font-montserrat lg:text-[2em] sm:text-[1.5em] text-[1em] font-bold text-center">
              About Ân
            </header>
            <main className="font-Poppins">
              Born and raised in Ho Chi Minh city, My name is Nguyen Phi Tuan An
              and I am a Developer currently working at Bosch. I enjoys hanging
              out, playing video games, sports and has a knack for selling
              alcohol. Above all, I feel happiest spending time with family,
              friends, and now, my beautiful bride-to-be.
            </main>
          </article>

          <article className="lg:max-w-[70%]">
            <header className="font-montserrat lg:text-[2em] sm:text-[1.5em] text-[1em] font-bold text-center">
              The Proposal
            </header>
            <main className="font-Poppins">
              On a chilly October evening right after Thu's birthday, I and my
              Poker team surprised Thu with a heartfelt proposal at{" "}
              <i>Tiem An Nha Khoi</i>. The moment was unforgettable, and she, of
              course, said yes!
            </main>
          </article>

          <article className="lg:max-w-[70%]">
            <header className="font-montserrat lg:text-[2em] sm:text-[1.5em] text-[1em] font-bold text-center">
              Fun Facts About me
            </header>
            <main className="font-Poppins">
              Besides being a programmer, I also sell Jägermeister. Thanks to
              Jägermeister, Thu and I became husband and wife.
            </main>
          </article>
        </section>
        <section className="w-full h-[30%] flex items-center">
          <section className="w-[50%]">
            <article>
              <header className="font-montserrat lg:text-[2em] sm:text-[1.5em] text-[1em] font-bold text-center">
                Meet the Groom
              </header>
              <p className="text-center">
                <i>
                  Building Love, Brick by Brick: A Developer Marries the
                  Architect of His Dreams
                </i>
              </p>
            </article>
          </section>
          <section className="h-full w-[50%] rounded-2xl overflow-hidden">
            <img
              src={BrideImage}
              alt=""
              className="w-full block object-cove rounded-2xl"
            />
          </section>
        </section>
      </section> */
}
