import IntroductionPage from "./pages/IntroductionPage";
import Schedule from "./pages/Schedule";
import TopUpButton from "./components/topUpBotton/TopUpButton";
import Groom from "./pages/Groom";
import Bride from "./pages/Bride";
import WeddingInvitation from "./pages/weddingInvitation";
import StoriesSlider from "./pages/StoriesSlider";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const handleScroll = () => {
      console.log(window.visualViewport.height);
    };
    window.addEventListener("resize", handleScroll);

    return () => window.removeEventListener("resize", handleScroll);
  }, []);

  return (
    <div>
      <IntroductionPage />
      <Schedule />
      <WeddingInvitation />
      <Groom />
      <Bride />
      <StoriesSlider />
      <TopUpButton />
    </div>
  );
}

export default App;
