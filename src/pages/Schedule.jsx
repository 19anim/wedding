import CountDown from "../components/countdown/countdown";
import Timeline from "../components/timeline/Timeline";
import ScheduleImage from "../assets/schedule.jpg";

const Schedule = () => {
  return (
    <section
      style={{
        backgroundImage: `linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
        ),url("${ScheduleImage}")`,
      }}
      className="h-screen snap-start flex justify-center items-center bg-center bg-cover flex-col gap-5"
    >
      <Timeline />
      <CountDown />
    </section>
  );
};

export default Schedule;
