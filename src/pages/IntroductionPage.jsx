import IntroductionBackground from "../assets/introduction.jpg";
import IntroductionHeader from "../components/header/introductionHeader";
import IntroductionMenu from "../components/gridSection/introductionMenu";
import { useRef } from "react";

function IntroductionPage() {
  const introductionPageRef = useRef(null);
  return (
    <section
      ref={introductionPageRef}
      id="#"
      style={{ backgroundImage: `url("${IntroductionBackground}")` }}
      className="snap-start h-[100vh] bg-[#fea36e85] font-montserrat text-xs sm:text-base flex flex-col items-center bg-cover bg-center"
    >
      <IntroductionHeader />
      <IntroductionMenu introductionPageRef={introductionPageRef} />
    </section>
  );
}

export default IntroductionPage;
