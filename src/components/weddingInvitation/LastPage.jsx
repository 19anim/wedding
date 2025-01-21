const LastPage = ({ pageTextRef }) => {
  return (
    <section className="absolute h-full w-full bg-[#fae4c4] shadow-[3px_3px_5px_0px_black] z-10 rounded-lg">
      <article
        ref={pageTextRef}
        className="opacity-100 transition-all duration-1000 hideText flex flex-col items-center justify-between h-full"
      >
        <section className="text-center text-[0.65rem] md:text-sm pt-8 md:pt-10 lg:pt-20">
          <p>TRÂN TRỌNG KÍNH MỜI</p>
          <p>
            ..........................................................................................
          </p>
          <p>ĐẾN THAM DỰ BUỔI TIỆC CHUNG VUI</p>
          <p>CÙNG GIA ĐÌNH CHÚNG TÔI</p>
        </section>

        <section className="text-center flex flex-col gap-2">
          <section>
            <p className="text-[0.65rem] md:text-sm">NHÀ HÀNG</p>
            <p className="font-greatVibes font-semibold text-xl md:text-4xl">
              Riverside Palace
            </p>
          </section>
          <section className="text-[0.65rem] md:text-sm">
            <p>SẢNH: NILE</p>
            <p>360D BẾN VÂN ĐỒN, P.01, Q.4, TP.HCM</p>
          </section>
        </section>

        <section className="text-center">
          <p className="text-[0.65rem] md:text-sm">18 GIỜ 00 ~ THỨ BẢY</p>
          <p className="text-xl md:text-4xl font-semibold">01.03.2025</p>
          <p className="text-[0.65rem] md:text-sm">
            (NHẰM NGÀY 02 THÁNG 02 NĂM ẤT TỴ)
          </p>
        </section>

        <section className="text-center text-[0.65rem] md:text-sm">
          <p>ĐÓN KHÁCH: 18:00 - KHAI TIỆC: 19:30</p>
        </section>

        <section className="text-center text-[0.65rem] md:text-sm pb-8 md:pb-10 lg:pb-20">
          <p>SỰ HIỆN DIỆN CỦA QUÝ KHÁCH</p>
          <p>LÀ NIỀM VINH HẠNH CHO GIA ĐÌNH CHÚNG TÔI</p>
        </section>
      </article>
      <p className="absolute top-2 right-0">
        <svg
          className="w-[50px] md:w-[100px]"
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1331.93 789.67"
        >
          <g class="cls-1">
            <rect width="1.67" height="1.33" />
          </g>
          <path d="m1170.32,238.97c-20.4,2.1-41.79,9.49-63.77,20.38-20.23,10.04-40.96,23.07-61.88,37.74-39.52-100.55-79.3-198.75-79.3-198.75h-25.73s-165.11,436.54-166.06,438.9c-11.46,36.31-41.59,63.64-78.85,71.49v13.94h163.08l-.36-13.94c-49.31,0-79.49-25.56-64.97-76.06.11-.4,9.27-25.21,22.72-61.58,43.46-10.52,97.6-53.51,154.89-99.02,45.91-36.47,92.79-73.7,136.52-96.68,22.38-11.74,43.91-19.77,64.08-22.04,1.13-.13,1.98-1.07,1.99-2.21.03-3.45.06-6.76.1-9.91.01-1.34-1.13-2.4-2.46-2.26Zm-209.17,121.85c-51.7,41.07-100.77,80.04-139.76,93.49,38.87-105.13,103.14-278.8,103.14-278.8l64.02,163.64c-9.16,7.18-18.3,14.44-27.41,21.67Z" />
          <path d="m1172.61,299.5c0-1.49-1.42-2.57-2.86-2.17-10.54,2.85-28.85,10.68-60.99,31.38-.62.4-.84.55-1.09.73-.61.42-.97,1.11-.97,1.85.02,23.88.35,357.66.35,387.95.07,16.39-6.81,32.04-18.91,42.99-12.1,10.95-28.27,16.17-44.43,14.33v13.11h185.77v-13.11s-56.26-2.33-56.26-46.99c0-2.91-.65-349.94-.65-358.93,0-34.66.03-62.41.04-71.13Z" />
          <path d="m1331.86,232.64c.38-1.4-.65-3.26-2.09-3.34-4.11-.23-11.84-.6-14.55.75-18.8,9.35-63.48,7.1-74.31,7.2-1.24.01-2.46,1.03-2.48,2.27l.07,10.22c-.02,1.27,1.01,2.32,2.28,2.32,12.58.02,20.2.03,25.31.3,11.58.61,20.73,10.04,21.07,21.63.76,25.72,1.04,31.22.95,67.56,0,2.17.91,2.94,2.12,2.99h11.77c1.06.04,2.07-.87,2.35-1.9l27.51-110Z" />
        </svg>
      </p>
    </section>
  );
};

export default LastPage;
