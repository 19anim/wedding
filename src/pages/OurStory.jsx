import StoryList from "../components/stories/StoryList";
import OurStoryVideo from "../assets/ourstory.mp4";

const OurStory = () => {
  return (
    <section id="ourstory" className="h-screen snap-start relative">
      <video
        autoPlay={true}
        muted
        loop
        className="h-screen w-screen object-cover"
        src={OurStoryVideo}
      />
      <section className="flex items-center justify-center absolute top-[50%] translate-y-[-50%]">
        <StoryList />
      </section>
    </section>
  );
};

export default OurStory;
