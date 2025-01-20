const GridItemWithIcon = ({ sectionId, header, icon, mainText }) => {
  return (
    <a
      href={`#${sectionId}`}
      className="group border border-[rbga(255,255,255,0.5)] h-full rounded-[0.5rem_0rem_0.5rem_0rem] flex flex-col items-center justify-center hover:shadow-lg cursor-pointer"
    >
      <header>
        <b>{header}</b>
      </header>
      <div
        style={{ backgroundImage: `url("${icon}")` }}
        className="h-[50%] w-full bg-contain bg-no-repeat bg-center group-hover:animate-wiggle"
      ></div>
      <main>{mainText}</main>
    </a>
  );
};

export default GridItemWithIcon;
