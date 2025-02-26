import Rsvp from "../../assets/introduction_assets/rsvp.png";
import OurStories from "../../assets/introduction_assets/our-stories.png";
import Countdown from "../../assets/introduction_assets/countdown.png";
import WeddingInvitation from "../../assets/introduction_assets/wedding-invitation.png";
import Bride from "../../assets/introduction_assets/bride.png";
import Groom from "../../assets/introduction_assets/groom.png";
import introVideo from "../../assets/videos/introVideo.mp4";
import introVideo2 from "../../assets/videos/introVideo2.mp4";
import introVideo3 from "../../assets/videos/introVideo3.mp4";
import GridItemWithIcon from "./gridItemWithIcon";
import GridItemWithVideo from "./gridItemWithVideo";

const IntroductionMenu = ({ introductionPageRef }) => {
  return (
    <section className="w-[90%] h-full grid grid-cols-3 grid-rows-4 text-black text-center items-center justify-center bg-[#e7d4d4c7] mb-4 rounded-xl border border-[rgba(255,255,255,0.5)]">
      <GridItemWithIcon
        sectionId="bride"
        introductionPageRef={introductionPageRef}
        sectionNo="4"
        header="THE BRIDE"
        icon={Bride}
        mainText="Meet the Bride"
      />
      <GridItemWithIcon
        sectionId="groom"
        introductionPageRef={introductionPageRef}
        sectionNo="3"
        header="THE GROOM"
        icon={Groom}
        mainText="Meet the Groom"
      />
      <GridItemWithIcon
        sectionId="ourStories"
        introductionPageRef={introductionPageRef}
        sectionNo="5"
        header="OUR STORIES"
        icon={OurStories}
        mainText="Join our special moment in life"
      />
      <GridItemWithIcon
        sectionId="schedule"
        introductionPageRef={introductionPageRef}
        sectionNo="1"
        header="COUNTDOWN"
        icon={Countdown}
        mainText="Let's do the countdown"
      />
      <GridItemWithIcon
        sectionId="invitation"
        introductionPageRef={introductionPageRef}
        sectionNo="2"
        header="INVITATION"
        icon={WeddingInvitation}
        mainText="Check out our wedding invitation"
      />
      <GridItemWithIcon
        sectionId="rsvp"
        introductionPageRef={introductionPageRef}
        sectionNo="6"
        icon={Rsvp}
        mainText="Please do the R.S.V.P"
      />
      <GridItemWithVideo isMain={false} videoSrc={introVideo} position="left" />
      <GridItemWithVideo isMain={true} videoSrc={introVideo2} />
      <GridItemWithVideo isMain={false} videoSrc={introVideo3} position="right" />
      {/* <GridItemWithMusic
        songName="DU CHO MAI VE SAU"
        songLink="https://open.spotify.com/embed/track/4Iz5EWPCAT8jYNk4IpLoll?utm_source=generator"
        isMain={false}
      />
      <GridItemWithMusic
        songName="GOLDEN HOUR"
        songLink="https://open.spotify.com/embed/track/4yNk9iz9WVJikRFle3XEvn?utm_source=generator&theme=0"
        isMain={true}
      />
      <GridItemWithMusic
        songName="DIE WITH A SMILE"
        songLink="https://open.spotify.com/embed/track/2plbrEY59IikOBgBGLjaoe?utm_source=generator"
        isMain={false}
      /> */}
    </section>
  );
};

export default IntroductionMenu;
