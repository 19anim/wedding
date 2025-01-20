//import Introduction from "./pages/Introduction";
import IntroductionPage from "./pages/IntroductionPage";
import Schedule from "./pages/Schedule";
import StoriesSliderPage from "./pages/StoriesSliderPage";
import TopUpButton from "./components/topUpBotton/TopUpButton";
import Groom from "./pages/Groom";
import Bride from "./pages/Bride";
import WeddingInvitation from "./pages/weddingInvitation";

function App() {
  return (
    <div>
      <IntroductionPage />
      <Schedule />
      <Groom />
      <Bride />
      <StoriesSliderPage />
      <WeddingInvitation />
      <TopUpButton />
    </div>
  );
}

export default App;
