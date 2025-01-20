import { useRef, useState } from "react";
import "../styles/weddingInvitation.styles.css";

const WeddingInvitation = () => {
  const invitationContainer = useRef(null);
  const outterPage = useRef(null);
  const outterPageText = useRef(null);
  const middlePage = useRef(null);
  const middlePageText = useRef(null);
  const finalPageText = useRef(null);
  const [isOutterPageTurn, setItOutterPageTurn] = useState(false);
  const [isMiddlePageTurn, setIsMiddlePageTurn] = useState(false);

  const handleOutterPageTurn = () => {
    setItOutterPageTurn(!isOutterPageTurn);
    outterPage.current.classList.toggle("outterPageOpen");
    outterPageText.current.classList.toggle("hideText");
    middlePageText.current.classList.toggle("hideText");
    invitationContainer.current.classList.toggle("moveBook");
  };

  const handleMiddlePageTurn = () => {
    if (isOutterPageTurn) {
      setIsMiddlePageTurn(!isMiddlePageTurn);
      middlePage.current.classList.toggle("middlePageOpen");
      middlePageText.current.classList.toggle("hideText");
      finalPageText.current.classList.toggle("hideText");
    }
  };

  return (
    <section
      id="invitation"
      className="snap-start h-[100vh] bg-[#e1ded7] font-montserrat text-xs sm:text-base flex flex-col items-center justify-center bg-cover bg-center "
    >
      <section
        ref={invitationContainer}
        className="relative h-[40%] w-[50%] lg:h-[90%] max-w-[665px] transition-all duration-1000 flex items-center"
      >
        <section className="absolute h-full w-full border border-black cursor-pointer z-10">
          <header
            ref={finalPageText}
            className="opacity-100 transition-all duration-1000 pl-5 text-2xl hideText"
          >
            Trang cuoi ne
          </header>
        </section>
        <section
          ref={middlePage}
          onClick={handleMiddlePageTurn}
          className="absolute transition-all duration-1000 h-[90%] w-[90%] border border-red-600 cursor-pointer z-20"
        >
          <header
            ref={middlePageText}
            className="opacity-100 transition-all duration-1000 pl-5 text-2xl hideText"
          >
            Trang giua ne
          </header>
        </section>

        <section
          onClick={handleOutterPageTurn}
          ref={outterPage}
          className="relative transition-all duration-1000 h-[80%] w-[85%] border border-blue-600 flex items-center cursor-pointer z-30"
        >
          <header
            ref={outterPageText}
            className="opacity-100 transition-all duration-1000 pl-5 text-2xl"
          >
            "AND THE TWO <br /> SHALL BECOME ONE"
          </header>
        </section>
      </section>
    </section>
  );
};

export default WeddingInvitation;

{
  /* <section
  onClick={handleOutterPageTurn}
  ref={outterPage}
  className="relative top-[50%] translate-y-[-50%] h-[80%] w-[85%] border border-blue-600 flex items-center cursor-pointer z-30"
>
  <header className="pl-5 text-2xl">
    "AND THE TWO <br /> SHALL BECOME ONE"
  </header>
</section>; */
}
