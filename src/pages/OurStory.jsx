import OurStoryVideo from "../assets/ourstory.mp4";
import StoryList from "../components/stories/StoryList";

const OurStory = () => {
  return (
    <section id="ourstory" className="h-dvh snap-start relative">
      <StoryList />
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

export default OurStory;
