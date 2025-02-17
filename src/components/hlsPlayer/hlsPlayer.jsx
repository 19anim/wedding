import { useEffect, useRef } from "react";
import Hls from "hls.js";

const HLSPlayer = ({ src }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(videoRef.current);
    } else if (videoRef.current.canPlayType("application/vnd.apple.mpegurl")) {
      videoRef.current.src = src;
    }
  }, [src]);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      playsInline
      className="absolute top-0 left-0 w-full h-full object-cover"
    />
  );
};

export default HLSPlayer;
