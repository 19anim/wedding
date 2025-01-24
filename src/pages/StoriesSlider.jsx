import "../styles/storiesSlider.styles.css";
import Bride from "../assets/bride.jpg";
import Groom from "../assets/groom.jpg";
import Kissing from "../assets/fifthImage.jpg";
import Bride2 from "../assets/sixthImage.jpg";
import HoldingHand from "../assets/schedule.jpg";

const StoriesSlider = () => {
  return (
    <section className="h-screen w-full snap-start relative">
      <section className="w-full h-full relative">
        <section
          style={{
            backgroundImage: `url("${Bride}")`,
          }}
          className="absolute opacity-0 w-full h-full bg-cover bg-center after:bg-[linear-gradient(to_top,#000_40%,transparent)] after:w-full after:h-full after:absolute after:contents-[''] after:left-0 after:bottom-0 active"
        >
          <section className="absolute top-[10%] md:top-[20%] left-[10%] text-white max-w-[50%]">
            <header className="text-4xl font-semibold pb-7">Story 1</header>
            <main className="text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
              consequuntur officiis corporis incidunt, reprehenderit numquam
              tenetur excepturi quam ipsum porro nam eius tempora quos eum odit
              impedit officia beatae at!
            </main>
          </section>
        </section>
        <section
          style={{
            backgroundImage: `url("${Groom}")`,
          }}
          className="absolute opacity-0 w-full h-full bg-cover bg-center after:bg-[linear-gradient(to_top,#000_40%,transparent)] after:w-full after:h-full after:absolute after:contents-[''] after:left-0 after:bottom-0"
        ></section>
        <section
          style={{
            backgroundImage: `url("${Kissing}")`,
          }}
          className="absolute opacity-0 w-full h-full bg-cover bg-center after:bg-[linear-gradient(to_top,#000_40%,transparent)] after:w-full after:h-full after:absolute after:contents-[''] after:left-0 after:bottom-0"
        ></section>
        <section
          style={{
            backgroundImage: `url("${Bride2}")`,
          }}
          className="absolute opacity-0 w-full h-full bg-cover bg-center after:bg-[linear-gradient(to_top,#000_40%,transparent)] after:w-full after:h-full after:absolute after:contents-[''] after:left-0 after:bottom-0"
        ></section>
        <section
          style={{
            backgroundImage: `url("${HoldingHand}")`,
          }}
          className="absolute opacity-0 w-full h-full bg-cover bg-center after:bg-[linear-gradient(to_top,#000_40%,transparent)] after:w-full after:h-full after:absolute after:contents-[''] after:left-0 after:bottom-0"
        ></section>
      </section>

      <section className="w-full h-[250px] absolute z-50 bottom-7 overflow-auto flex justify-center items-center gap-2">
        <section className="min-w-[100px] md:w-[150px] h-[170px] md:h-[220px]">
          <figure
            className="w-full h-full bg-cover bg-center rounded-lg thumbnail-item--active"
            style={{
              backgroundImage: `url("${Bride}")`,
            }}
          ></figure>
        </section>

        <section className="min-w-[100px] md:w-[150px] h-[170px] md:h-[220px]">
          <figure
            className="w-full h-full bg-cover bg-center rounded-lg brightness-50"
            style={{
              backgroundImage: `url("${Groom}")`,
            }}
          ></figure>
        </section>

        <section className="min-w-[100px] md:w-[150px] h-[170px] md:h-[220px]">
          <figure
            className="w-full h-full bg-cover bg-center rounded-lg brightness-50"
            style={{
              backgroundImage: `url("${Kissing}")`,
            }}
          ></figure>
        </section>

        <section className="min-w-[100px] md:w-[150px] h-[170px] md:h-[220px]">
          <figure
            className="w-full h-full bg-cover bg-center rounded-lg brightness-50"
            style={{
              backgroundImage: `url("${Bride2}")`,
            }}
          ></figure>
        </section>

        <section className="min-w-[100px] md:w-[150px] h-[170px] md:h-[220px]">
          <figure
            className="w-full h-full bg-cover bg-center rounded-lg brightness-50"
            style={{
              backgroundImage: `url("${HoldingHand}")`,
            }}
          ></figure>
        </section>
      </section>
    </section>
  );
};

export default StoriesSlider;
