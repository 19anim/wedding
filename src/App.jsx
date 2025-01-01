import Introduction from "./pages/Introduction";
import Schedule from "./pages/Schedule";
import StoriesSliderPage from "./pages/StoriesSliderPage";
import TopUpButton from "./components/topUpBotton/TopUpButton";
import Groom from "./pages/Groom";

function App() {
  return (
    <div>
      <Introduction />
      <Schedule />
      <StoriesSliderPage />
      <Groom />
      <TopUpButton />
    </div>
  );
}

export default App;
