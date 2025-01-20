const GridItemWithMusic = ({ songName, songLink, isMain }) => {
  const tailwindStyling = isMain
    ? "group row-span-2 col-span-3 lg:col-span-1 border border-[rbga(255,255,255,0.5)] h-full rounded-[0.5rem_0.5rem_0rem_0rem] flex flex-col justify-center items-center gap-2 hover:shadow-lg"
    : "group hidden row-span-2 border border-[rbga(255,255,255,0.5)] h-full rounded-[0rem_0.5rem_0rem_0.5rem] lg:flex flex-col justify-center items-center gap-2 hover:shadow-lg";
  return (
    <section className={tailwindStyling}>
      <header>
        <b>🎵 {songName} 🎵</b>
      </header>
      <iframe
        className="group-hover:animate-slightBounce"
        src={songLink}
        width="90%"
        height="152"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
      <main>Let's enjoy the rythm</main>
    </section>
  );
};

export default GridItemWithMusic;
