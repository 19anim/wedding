import InvitationTexture from "../../assets/invitation-texture.png";

const OutterPage = ({ pageRef, pageTextRef, onClickHandler }) => {
  return (
    <section
      style={{
        backgroundImage: `url("${InvitationTexture}")`,
      }}
      ref={pageRef}
      onClick={onClickHandler}
      className="relative transition-all duration-1000 h-[80%] w-[85%] bg-[antiquewhite] flex items-center cursor-pointer z-30 rounded-[0px_0.5rem_0.5rem_0px] shadow-[3px_3px_5px_0px_black]"
    >
      <header
        ref={pageTextRef}
        className="opacity-100 transition-all duration-1000 pl-5 text-base md:text-2xl text-[#bcbcbc] drop-shadow-[1px_1px_black]"
      >
        "AND THE TWO <br /> SHALL BECOME ONE"
      </header>
    </section>
  );
};

export default OutterPage;
