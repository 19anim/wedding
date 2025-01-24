//import Introduction from "./pages/Introduction";
import IntroductionPage from "./pages/IntroductionPage";
import Schedule from "./pages/Schedule";
import StoriesSliderPage from "./pages/StoriesSliderPage";
import TopUpButton from "./components/topUpBotton/TopUpButton";
import Groom from "./pages/Groom";
import Bride from "./pages/Bride";
import WeddingInvitation from "./pages/weddingInvitation";
import StoriesSlider from "./pages/StoriesSlider";

function App() {
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
