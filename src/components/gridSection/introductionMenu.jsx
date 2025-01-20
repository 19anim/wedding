import Rsvp from "../../assets/introduction_assets/rsvp.png";
import OurStories from "../../assets/introduction_assets/our-stories.png";
import Countdown from "../../assets/introduction_assets/countdown.png";
import WeddingInvitation from "../../assets/introduction_assets/wedding-invitation.png";
import Bride from "../../assets/introduction_assets/bride.png";
import Groom from "../../assets/introduction_assets/groom.png";
import GridItemWithIcon from "./gridItemWithIcon";
import GridItemWithMusic from "./gridItemWithMusic";

const IntroductionMenu = () => {
  return (
    <section className="w-[90%] h-full grid grid-cols-3 grid-rows-4 text-black text-center items-center justify-center bg-[#e7d4d4c7] mb-4 rounded-xl border border-[rbga(255,255,255,0.5)]">
      <GridItemWithIcon
        sectionId="bride"
        header="THE BRIDE"
        icon={Bride}
        mainText="Meet the Bride"
      />
      <GridItemWithIcon
        sectionId="groom"
        header="THE GROOM"
        icon={Groom}
        mainText="Meet the Groom"
      />
      <GridItemWithIcon
        sectionId="ourstory"
        header="OUR STORIES"
        icon={OurStories}
        mainText="Join our special moment in life"
      />
      <GridItemWithIcon
        sectionId="schedule"
        header="COUNTDOWN"
        icon={Countdown}
        mainText="Let's do the countdown"
      />
      <GridItemWithIcon
        sectionId="invitation"
        header="INVITATION"
        icon={WeddingInvitation}
        mainText="Check out our wedding invitation"
      />
      <GridItemWithIcon
        header="R.S.V.P SECTION"
        icon={Rsvp}
        mainText="Please do the R.S.V.P"
      />
      <GridItemWithMusic
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
      />
    </section>
  );
};

export default IntroductionMenu;
