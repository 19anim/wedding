import IntroductionBackground from "../assets/introduction.jpg";
import WeddingInvitation from "../assets/introduction_assets/wedding-invitation.png";

function IntroductionTemp(props) {
  return (
    <section
      style={{ backgroundImage: `url("${IntroductionBackground}")` }}
      className="snap-start h-[100vh] sm:bg-[#fea36e85] font-montserrat text-xs sm:text-base flex flex-col items-center bg-cover bg-center"
    >
      <article className="flex flex-col items-center w-full text-black gap-3 pt-4">
        <p className="font-medium">WELCOME TO</p>
        <header className="text-8xl font-greatVibes">Our Wedding</header>
        <section className="w-full max-w-[400px] border-black grid grid-cols-3 justify-center items-center">
          <hr className="border-black"></hr>
          <article className="text-center font-cursive">TA-MT</article>
          <hr className="border-black"></hr>
        </section>
        <h3 className="font-Poppins tracking-[7px]">WEDDING WEBSITE</h3>
      </article>
      <section className="w-[80%] h-full grid grid-cols-3 grid-rows-4 text-black text-center items-center justify-center bg-[#E2DAC3] mb-4 border border-black rounded-xl">
        <section className="border-r border-b h-full">1</section>
        <section className="border-r border-b h-full">2</section>
        <section className="border-b h-full">3</section>
        <section className="border-r border-b h-full">4</section>
        <section className="border-r border-b h-full flex flex-col items-center justify-center">
          <header>WEDDING INVITATION</header>
          <img
            className="max-h-[70px]"
            src={WeddingInvitation}
            alt="Wedding Invitation"
          />
          <main>Thank you for coming, check out our wedding invitation</main>
        </section>
        <section className="border-b h-full">6</section>
        <section className="row-span-2 border-r h-full">7</section>
        <section className="row-span-2 border-r h-full">8</section>
        <section className="row-span-2 h-full">9</section>
      </section>
    </section>
  );
}

export default IntroductionTemp;
