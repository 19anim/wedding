import OurStoryVideo from "../assets/ourstory.mp4";
import StoryList from "../components/stories/StoryList";

const OurStory = () => {
  return (
<<<<<<< HEAD
    <section id="ourstory" className="h-svh snap-start relative">
=======
    <section id="ourstory" className="h-screen snap-start relative">
>>>>>>> parent of 6dfe824 (modify from vh to dvh)
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
