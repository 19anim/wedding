import GroomImage from "../assets/groom.jpg";
import BrideImage from "../assets/bride.jpg";

const Groom = () => {
  return (
    <section className="h-screen snap-start sm:bg-[#ffbe9866] bg-transparent sm:flex sm:gap-10">
      <section className="snap-start h-full w-full sm:w-[50%] flex flex-col bg-[#ffbe9866] sm:bg-transparent justify-center gap-5 py-2 px-2 sm:pl-2">
        <section className="w-full h-[30%] flex items-center">
          <section className="h-full w-[50%] overflow-hidden rounded-2xl">
            <img src={GroomImage} alt="" className="w-full block object-cover rounded-2xl" />
          </section>
          <section className="w-[50%]">
            <article>
              <header className="font-montserrat lg:text-[2em] sm:text-[1.5em] text-[1em] font-bold text-center">Meet the Groom</header>
              <p className="text-center">
                <i>Building Love, Brick by Brick: A Developer Marries the Architect of His Dreams</i>
              </p>
            </article>
          </section>
        </section>
        <section className="w-full flex flex-col gap-3">
          <article className="2xl:max-w-[70%] max-w-[90%]">
            <header className="font-montserrat lg:text-[2em] sm:text-[1.5em] text-[1em] font-bold text-center">About Ân</header>
            <main className="font-Poppins text-left">
              Born and raised in Ho Chi Minh city, My name is Nguyen Phi Tuan An and I am a Developer currently working at Bosch. I enjoys hanging out, playing
              video games, sports and has a knack for selling alcohol. Above all, I feel happiest spending time with family, friends, and now, my beautiful
              bride-to-be.
            </main>
          </article>

          <article className="2xl:max-w-[70%] max-w-[90%]">
            <header className="font-montserrat lg:text-[2em] sm:text-[1.5em] text-[1em] font-bold text-center">The Proposal</header>
            <main className="font-Poppins text-left">
              On a chilly October evening right after Thu's birthday, I and my Poker team surprised Thu with a heartfelt proposal at <i>Tiem An Nha Khoi</i>.
              The moment was unforgettable, and she, of course, said yes!
            </main>
          </article>

          <article className="2xl:max-w-[70%] max-w-[90%]">
            <header className="font-montserrat lg:text-[2em] sm:text-[1.5em] text-[1em] font-bold text-center">Fun Facts About me</header>
            <main className="font-Poppins text-left">
              Besides being a programmer, I also sell Jägermeister. Thanks to Jägermeister, Thu and I became husband and wife.
            </main>
          </article>
        </section>
      </section>

      <section className="snap-start h-full w-full sm:w-[50%] flex flex-col justify-center text-[1em] bg-[#ffbe9866] sm:bg-transparent gap-5 py-2 px-2 sm:pr-2">
        <section className="w-full flex flex-col gap-3">
          <article className="2xl:max-w-[70%] max-w-[90%] ">
            <header className="font-montserrat lg:text-[1.75em] sm:text-[1.5em] text-[1em] font-bold text-center">About Ân</header>
            <main className="font-Poppins text-right">
              Born and raised in Ho Chi Minh city, My name is Nguyen Phi Tuan An and I am a Developer currently working at Bosch. I enjoys hanging out, playing
              video games, sports and has a knack for selling alcohol. Above all, I feel happiest spending time with family, friends, and now, my beautiful
              bride-to-be.
            </main>
          </article>

          <article className="2xl:max-w-[70%] max-w-[90%]">
            <header className="font-montserrat lg:text-[2em] sm:text-[1.5em] text-[1em] font-bold text-center">The Proposal</header>
            <main className="font-Poppins text-right">
              On a chilly October evening right after Thu's birthday, I and my Poker team surprised Thu with a heartfelt proposal at <i>Tiem An Nha Khoi</i>.
              The moment was unforgettable, and she, of course, said yes!
            </main>
          </article>

          <article className="2xl:max-w-[70%] max-w-[90%]">
            <header className="font-montserrat lg:text-[2em] sm:text-[1.5em] text-[1em] font-bold text-center">Fun Facts About me</header>
            <main className="font-Poppins text-right">
              Besides being a programmer, I also sell Jägermeister. Thanks to Jägermeister, Thu and I became husband and wife.
            </main>
          </article>
        </section>
        <section className="w-full h-[30%] flex items-center">
          <section className="w-[50%]">
            <article>
              <header className="font-montserrat lg:text-[2em] sm:text-[1.5em] text-[1em] font-bold text-center">Meet the Groom</header>
              <p className="text-center">
                <i>Building Love, Brick by Brick: A Developer Marries the Architect of His Dreams</i>
              </p>
            </article>
          </section>
          <section className="h-full w-[50%] rounded-2xl overflow-hidden">
            <img src={BrideImage} alt="" className="w-full block object-cove rounded-2xl" />
          </section>
        </section>
      </section>
    </section>
  );
};

export default Groom;
