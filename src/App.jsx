import Introduction from "./pages/Introduction";
import Schedule from "./pages/Schedule";
import OurStory from "./pages/OurStory";
import StoriesSliderPage from "./pages/StoriesSliderPage";
import TopUpButton from "./components/topUpBotton/TopUpButton";

function App() {
  return (
    <div>
      <Introduction />
      <Schedule />
      {/* <OurStory /> */}
      <StoriesSliderPage />
      <TopUpButton />
    </div>
  );
}

export default App;
