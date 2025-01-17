import IntroductionBackground from "../assets/introduction.jpg";
import WeddingInvitation from "../assets/introduction_assets/wedding-invitation.png";

function IntroductionTemp(props) {
  return (
    <section
      style={{ backgroundImage: `url("${IntroductionBackground}")` }}
      className="snap-start h-[100vh] bg-[#fea36e85] font-montserrat text-xs sm:text-base flex flex-col items-center bg-cover bg-center"
    >
      <article className="flex flex-col items-center w-full text-black gap-3 pt-4">
        <p className="font-medium">WELCOME TO</p>
        <header className="text-6xl md:text-8xl font-greatVibes">Our Wedding</header>
        <section className="w-full max-w-[400px] border-black grid grid-cols-3 justify-center items-center">
          <hr className="border border-black"></hr>
          <article className="text-center font-cursive">TA-MT</article>
          <hr className="border border-black"></hr>
        </section>
        <h3 className="font-Poppins tracking-[7px]">WEDDING WEBSITE</h3>
      </article>
      <section className="w-[80%] h-full grid grid-cols-3 grid-rows-4 text-black text-center items-center justify-center bg-[#E2DAC3] mb-4 rounded-xl border border-[rbga(255,255,255,0.5)]">
        <section className="border border-[rbga(255,255,255,0.5)] h-full rounded-[0.5rem_0rem_0.5rem_0rem] hover:shadow-lg">1</section>
        <section className="border border-[rbga(255,255,255,0.5)] h-full rounded-[0rem_0rem_0.5rem_0.5rem]  hover:shadow-lg">2</section>
        <section className="border border-[rbga(255,255,255,0.5)] h-full rounded-[0rem_0.5rem_0rem_0.5rem] hover:shadow-lg">3</section>
        <section className="border border-[rbga(255,255,255,0.5)] h-full rounded-[0rem_0.5rem_0.5rem_0rem] hover:shadow-lg">4</section>
        <section className="border  border-[rbga(255,255,255,0.5)] h-full rounded-lg flex flex-col items-center justify-center hover:shadow-lg transition-all">
          <header>WEDDING INVITATION</header>
          <div style={{ backgroundImage: `url("${WeddingInvitation}")` }} className="h-[50%] w-full bg-contain bg-no-repeat bg-center"></div>
          <main>Thank you for coming, check out our wedding invitation</main>
        </section>
        <section className="border border-[rbga(255,255,255,0.5)] h-full rounded-[0.5rem_0rem_0rem_0.5rem] hover:shadow-lg">6</section>
        <section className="row-span-2 border border-[rbga(255,255,255,0.5)] h-full rounded-[0rem_0.5rem_0rem_0.5rem] hover:shadow-lg">7</section>
        <section className="row-span-2 border border-[rbga(255,255,255,0.5)] h-full rounded-[0.5rem_0.5rem_0rem_0rem] hover:shadow-lg">8</section>
        <section className="row-span-2 border border-[rbga(255,255,255,0.5)] h-full rounded-[0.5rem_0rem_0.5rem_0rem] hover:shadow-lg">9</section>
      </section>
    </section>
  );
}

export default IntroductionTemp;
