import { useEffect, useState } from "react";

const GridItemWithIcon = ({ sectionNo, header, icon, mainText }) => {
  const [currentDeviceHeight, setCurrentDeviceHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setCurrentDeviceHeight(window.innerHeight);
    };

    // Set height on mount and resize
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavigate = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: currentDeviceHeight * parseInt(sectionNo),
      behavior: "smooth",
    });
  };
  return (
    <section
      onClick={handleNavigate}
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
    </section>
  );
};

export default GridItemWithIcon;
