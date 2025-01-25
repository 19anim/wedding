import { useRef, useState } from "react";
import LastPage from "../components/weddingInvitation/LastPage";
import MiddlePage from "../components/weddingInvitation/MiddlePage";
import OutterPage from "../components/weddingInvitation/OutterPage";
import "../styles/weddingInvitation.styles.css";

const WeddingInvitation = () => {
  const invitationContainer = useRef(null);
  const outterPage = useRef(null);
  const outterPageText = useRef(null);
  const middlePage = useRef(null);
  const middlePageText = useRef(null);
  const lastPageText = useRef(null);
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
      lastPageText.current.classList.toggle("hideText");
    }
  };

  return (
    <section
      id="invitation"
<<<<<<< HEAD
      className="w-full h-screen bg-[#e1ded7] font-montserrat text-xs sm:text-base flex flex-col items-center justify-center bg-cover bg-center gap-1 text-black"
=======
      className="snap-start h-[100vh] bg-[#e1ded7] font-montserrat text-xs sm:text-base flex flex-col items-center justify-center bg-cover bg-center gap-1 text-black"
>>>>>>> parent of 6dfe824 (modify from vh to dvh)
    >
      <section className="text-center">
        <p className="font-greatVibes text-4xl ">Wedding Invitation</p>
        <p className="font-montserrat text-sm">Try Clicking on the invitation</p>
      </section>
      <section
        ref={invitationContainer}
        className="relative h-[60%] w-[70%] lg:w-[50%] lg:h-[90%] max-w-[665px] transition-all duration-1000 flex items-center"
      >
        <LastPage pageTextRef={lastPageText} />
        <MiddlePage
          pageRef={middlePage}
          pageTextRef={middlePageText}
          onclickHandler={handleMiddlePageTurn}
        />
        <OutterPage
          pageRef={outterPage}
          pageTextRef={outterPageText}
          onClickHandler={handleOutterPageTurn}
        />
      </section>
    </section>
  );
};

export default WeddingInvitation;
