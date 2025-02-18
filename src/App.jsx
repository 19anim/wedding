import IntroductionPage from "./pages/IntroductionPage";
import Schedule from "./pages/Schedule";
import TopUpButton from "./components/topUpBotton/TopUpButton";
import Groom from "./pages/Groom";
import Bride from "./pages/Bride";
import WeddingInvitation from "./pages/weddingInvitation";
import StoriesSlider from "./pages/StoriesSlider";
import MusicButton from "./components/backgroundMusic/musicButton";
import RSVP from "./pages/RSVP";
import { useEffect, useState } from "react";

function App() {
  const [currentDeviceHeight, setCurrentDeviceHeight] = useState(window.visualViewport.height);

  useEffect(() => {
    const handleResize = () => {
      setCurrentDeviceHeight(window.visualViewport.height);
    };

    // Set height on mount and resize
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <IntroductionPage currentDeviceHeight={currentDeviceHeight} />
      <Schedule currentDeviceHeight={currentDeviceHeight} />
      <WeddingInvitation currentDeviceHeight={currentDeviceHeight} />
      <Groom currentDeviceHeight={currentDeviceHeight} />
      <Bride currentDeviceHeight={currentDeviceHeight} />
      <StoriesSlider currentDeviceHeight={currentDeviceHeight} />
      <RSVP />
      <TopUpButton currentDeviceHeight={currentDeviceHeight} />
      <MusicButton></MusicButton>
    </div>
  );
}

export default App;
