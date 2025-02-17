import music from "../../assets/introduction_assets/music.png";
import musicOff from "../../assets/introduction_assets/music-off.png";
import backgroundMusic from "../../assets/music/backgroundMusic.mp3";
import { useRef } from "react";

const MusicButton = () => {
  const musicIcon = useRef(null);
  const musicRef = useRef(null);

  const clickHandler = () => {
    if (musicIcon.current.src.includes(musicOff)) {
      musicIcon.current.src = music;
      musicRef.current.play();
      musicRef.current.muted = false;
    } else {
      musicIcon.current.src = musicOff;
      musicRef.current.currentTime = 0;
      musicRef.current.pause();
    }
  };

  return (
    <section
      onClick={clickHandler}
      className="fixed top-[70px] right-[50px] size-12 z-[100] cursor-pointer animate-wiggle"
    >
      <img className="duration-150 transition-all" ref={musicIcon} src={musicOff} alt="" />
      <audio ref={musicRef} autoPlay loop muted src={backgroundMusic} />
    </section>
  );
};

export default MusicButton;
