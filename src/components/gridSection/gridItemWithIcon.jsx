const GridItemWithIcon = ({
  introductionPageRef,
  sectionNo,
  header,
  icon,
  mainText,
  sectionId,
}) => {
  // const handleNavigate = (event) => {
  //   event.preventDefault();
  //   document.documentElement.style.scrollSnapType = "none";

  //   window.scrollTo({
  //     top: introductionPageRef.current.clientHeight * parseInt(sectionNo),
  //     behavior: "smooth",
  //   });

  //   setTimeout(() => {
  //     document.documentElement.style.scrollSnapType = "y mandatory";
  //   }, 1000);
  // };

  const handleNavigate = (event) => {
    document.getElementById(sectionId).scrollIntoView();
  };

  return (
    <section
      onClick={handleNavigate}
      className="group border border-[rgba(255,255,255,0.5)] h-full rounded-[0.5rem_0.5rem_0.5rem_0.5rem] flex flex-col items-center justify-center hover:shadow-lg cursor-pointer"
    >
      <header>
        <b>{header}</b>
      </header>
      <div
        style={{ backgroundImage: `url("${icon}")` }}
        className="h-[50%] w-full bg-contain bg-no-repeat bg-center group-hover:animate-wiggle"
      ></div>
      <main>{mainText}</main>
    </section>
  );
};

export default GridItemWithIcon;
