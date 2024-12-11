import OurStoryVideo from "../assets/ourstory.mp4";
import StoriesSlider from "../components/storiesSlider/StoriesSlider";

const StoriesSliderPage = () => {
  return (
    <section id="ourstory" className="h-screen snap-start relative">
      <StoriesSlider />
      <video
        autoPlay={true}
        muted
        loop
        className="h-screen w-screen object-cover"
        src={OurStoryVideo}
      />
    </section>
  );
};

export default StoriesSliderPage;
