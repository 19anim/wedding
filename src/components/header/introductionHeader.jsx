import React from "react";

const IntroductionHeader = () => {
  return (
    <article className="flex flex-col items-center w-full text-black gap-3 pt-4">
      <p className="font-medium">WELCOME TO</p>
      <header className="text-6xl md:text-8xl font-greatVibes">
        Our Wedding
      </header>
      <section className="w-full max-w-[400px] border-black grid grid-cols-3 justify-center items-center">
        <hr className="border border-black"></hr>
        <article className="text-center font-cursive">TA-MT</article>
        <hr className="border border-black"></hr>
      </section>
      <h3 className="font-Poppins tracking-[7px]">WEDDING WEBSITE</h3>
    </article>
  );
};

export default IntroductionHeader;
