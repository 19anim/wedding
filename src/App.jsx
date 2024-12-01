import Introduction from "./pages/Introduction";
import Schedule from "./pages/Schedule";
import OurStory from "./pages/OurStory";
import NewOurStory from "./pages/NewOurStory";
import ArrowUp from "./assets/arrow-up-circle-outline.svg";

function App() {
  return (
    <div>
      <Introduction />
      <Schedule />
      <NewOurStory />
      <a href="#" className="fixed bottom-[50px] right-[50px] size-10">
        <img
          src={ArrowUp}
          alt=""
          style={{
            filter:
              "invert(66%) sepia(74%) saturate(533%) hue-rotate(307deg) brightness(115%) contrast(107%)",
          }}
        />
      </a>
    </div>
  );
}

export default App;
