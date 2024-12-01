import StoryList from "../components/stories/StoryList";
import OurStoryVideo from "../assets/ourstory.mp4";
import Text from "../components/text/Text";

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
      <Text
        styling={{
          className:
            "absolute top-[5%] left-[50%] translate-x-[-50%] text-[2em] sm:text-[3em] lg:text-[4em] font-montserrat",
        }}
        displayText="Our Stories"
      />
      <section className="flex items-center justify-center absolute top-[50%] translate-y-[-50%]">
        <StoryList />
      </section>
    </section>
  );
};

export default OurStory;
