const GridItemWithVideo = ({ isMain, videoSrc, position }) => {
  const tailwindStyling = isMain
    ? `relative group overflow-hidden row-span-2 col-span-3 lg:col-span-1  h-full rounded-[0rem_0rem_0rem_0rem] flex flex-col justify-center items-center gap-2 hover:shadow-lg`
    : `relative group overflow-hidden hidden row-span-2  h-full ${
        position === "left" ? "rounded-[0rem_0rem_0rem_0.5rem]" : "rounded-[0rem_0rem_0.5rem_0rem]"
      }  lg:flex flex-col justify-center items-center gap-2 hover:shadow-lg`;
  return (
    <section className={`${tailwindStyling} `}>
      <video
        playsInline
        autoPlay
        muted
        loop
        src={videoSrc}
        className="absolute top-0 left-0 w-full h-full object-cover"
      ></video>
    </section>
  );
};

export default GridItemWithVideo;
