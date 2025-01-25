import IntroductionBackground from "../assets/introduction.jpg";
import IntrodctionHeader from "../components/header/introductionHeader";
import IntroductionMenu from "../components/gridSection/introductionMenu";

function IntroductionPage({ currentDeviceHeight }) {
  return (
    <section
      id="#"
      style={{
        backgroundImage: `url("${IntroductionBackground}")`,
        height: `${currentDeviceHeight}px`,
      }}
      className="snap-start w-full bg-[#fea36e85] font-montserrat text-xs sm:text-base flex flex-col items-center bg-cover bg-center"
    >
      <IntrodctionHeader />
      <IntroductionMenu />
    </section>
  );
}

export default IntroductionPage;
