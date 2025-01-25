import IntroductionBackground from "../assets/introduction.jpg";
import IntrodctionHeader from "../components/header/introductionHeader";
import IntroductionMenu from "../components/gridSection/introductionMenu";

function IntroductionPage() {
  return (
    <section
      id="#"
<<<<<<< HEAD
      style={{
        backgroundImage: `url("${IntroductionBackground}")`,
      }}
      className="w-full h-screen bg-[#fea36e85] font-montserrat text-xs sm:text-base flex flex-col items-center bg-cover bg-center"
=======
      ref={introductionPageRef}
      style={{ backgroundImage: `url("${IntroductionBackground}")` }}
      className="snap-start h-[100vh] bg-[#fea36e85] font-montserrat text-xs sm:text-base flex flex-col items-center bg-cover bg-center"
>>>>>>> parent of 6dfe824 (modify from vh to dvh)
    >
      <IntrodctionHeader />
      <IntroductionMenu />
    </section>
  );
}

export default IntroductionPage;
