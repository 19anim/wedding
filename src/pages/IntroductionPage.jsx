import IntroductionBackground from "../assets/introduction.jpg";
import IntrodctionHeader from "../components/header/introductionHeader";
import IntroductionMenu from "../components/gridSection/introductionMenu";
import { useRef } from "react";

function IntroductionPage() {
  const introductionPageRef = useRef(null);
  return (
    <section
      id="#"
      ref={introductionPageRef}
      style={{ backgroundImage: `url("${IntroductionBackground}")` }}
      className="snap-start h-svh bg-[#fea36e85] font-montserrat text-xs sm:text-base flex flex-col items-center bg-cover bg-center"
    >
      <IntrodctionHeader />
      <IntroductionMenu introductionPageRef={introductionPageRef} />
    </section>
  );
}

export default IntroductionPage;
