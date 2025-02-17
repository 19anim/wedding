import backgroundMusic from "../../assets/music/backgroundMusic.mp3";
import { useEffect, useRef } from "react";

const BackgroundMusic = () => {
  const musicRef = useRef(null);

  useEffect(() => {
    const enableAudio = () => {
      if (musicRef.current) {
        musicRef.current.muted = false;
        musicRef.current.play();
        document.removeEventListener("click", enableAudio);
      }
    };
    document.addEventListener("click", enableAudio);

    return () => {
      document.removeEventListener("click", enableAudio);
    };
  }, []);

  return <audio ref={musicRef} autoPlay loop muted src={backgroundMusic} />;
};

export default BackgroundMusic;
