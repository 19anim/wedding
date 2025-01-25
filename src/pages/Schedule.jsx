import CountDown from "../components/countdown/CountDown";
import Timeline from "../components/timeline/Timeline";
import ScheduleImage from "../assets/schedule.jpg";

const Schedule = () => {
  return (
    <section
      id="schedule"
      style={{
        backgroundImage: `linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
        ),url("${ScheduleImage}")`,
      }}
      className="w-full h-screen flex justify-center items-center bg-center bg-cover flex-col gap-5 overflow-hidden"
    >
      <Timeline />
      <CountDown />
    </section>
  );
};

export default Schedule;
