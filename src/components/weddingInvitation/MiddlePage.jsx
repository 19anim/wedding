import InvitationTexture from "../../assets/invitation-texture.png";

const MiddlePage = ({ pageRef, pageTextRef, onclickHandler }) => {
  return (
    <section
      style={{
        backgroundImage: `url("${InvitationTexture}")`,
      }}
      ref={pageRef}
      onClick={onclickHandler}
      className="absolute transition-all duration-1000 h-[90%] w-[90%] bg-[#fae4c4] cursor-pointer z-20 rounded-[0px_0.5rem_0.5rem_0px] shadow-[3px_3px_5px_0px_black]"
    >
      <article
        ref={pageTextRef}
        className="opacity-100 transition-all duration-1000 hideText flex flex-col items-center justify-between h-full"
      >
        <section className="flex justify-between gap-4 pt-2 md:pt-10 lg:pt-20 md:px-2">
          <section className="text-[0.65rem] md:text-sm text-center">
            <p className="font-semibold">ÔNG: NGUYỄN PHI TUẤN (CỐ PHỤ)</p>
            <p className="font-semibold">BÀ: NGUYỄN THỊ MINH QUÂN</p>
            <p className="text-[0.7rem] hidden md:block">
              <i>
                SỐ 304/50 NGUYỄN THƯỢNG HIỀN, PHƯỜNG 5, QUẬN PHÚ NHUẬN, TP HỒ
                CHÍ MINH
              </i>
            </p>
          </section>
          <section className="text-[0.65rem] md:text-sm text-center">
            <p className="font-semibold">ÔNG: NGUYỄN VIỆT HÙNG</p>
            <p className="font-semibold">BÀ: KIỀU THỊ XUÂN SƠN</p>
            <p className="text-[0.7rem] hidden md:block">
              <i>SỐ 30 THÁI SANH HẠNH, PHƯỜNG 2, TP MỸ THO, TỈNH TIỀN GIANG</i>
            </p>
          </section>
        </section>

        <section className="text-center text-[0.65rem] md:text-sm">
          <p>TRÂN TRỌNG BÁO TIN</p>
          <p>
            <span className="font-semibold">LỄ THÀNH HÔN</span> CỦA CON CHÚNG
            TÔI
          </p>
        </section>

        <section className="text-center flex flex-col gap-4">
          <section>
            <p className="font-greatVibes text-xl md:text-4xl">
              Nguyễn Phi Tuấn Ân
            </p>
            <p className="text-[0.65rem] md:text-sm">TRƯỞNG NAM</p>
          </section>

          <article className="font-greatVibes">&</article>

          <section>
            <p className="font-greatVibes text-xl md:text-4xl">
              Nguyễn Kiều Minh Thư
            </p>
            <p className="text-[0.65rem] md:text-sm">ÚT NỮ</p>
          </section>
        </section>

        <section className="text-center text-[0.65rem] md:text-sm pb-2 md:pb-10 lg:pb-20">
          <p>HÔN LỄ ĐƯỢC CỬ HÀNH TẠI TƯ GIA</p>
          <p>VÀO LÚC 08 GIỜ 00</p>
          <p className="font-semibold">NGÀY 23 THÁNG 02 NĂM 2025</p>
          <p>(NHẰM NGÀY 26 THÁNG 01 NĂM ẤT TỴ)</p>
        </section>
      </article>
    </section>
  );
};

export default MiddlePage;
