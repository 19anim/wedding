import { motion } from "motion/react";
import useCalculateCountDown from "../../hooks/calculateCountdown.hook";
import Text from "../text/Text";

const CountDown = () => {
  var [dayDif, hourDif, minuteDif, secondDif] = useCalculateCountDown();

  const motionVariant = {
    initial: { y: -50, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
      },
    },
  };

  return (
    <section className="font-montserrat flex items-center flex-col">
      <motion.section
        initial={{ y: -200 }}
        whileInView={{ y: 0, transition: { duration: 0.5 } }}
        className="flex gap-2 text-base sm:text-2xl text-[#ff9e9e]  px-4 py-2"
      >
        <section className="flex flex-col items-center">
          <motion.div
            key={dayDif}
            initial="initial"
            animate="animate"
            variants={motionVariant}
          >
            {dayDif}
          </motion.div>
          <div>Days</div>
        </section>
        <p>: </p>
        <section className="flex flex-col items-center">
          <motion.div
            key={hourDif}
            initial="initial"
            animate="animate"
            variants={motionVariant}
          >
            {hourDif}
          </motion.div>
          <div>Hours</div>
        </section>
        <p>: </p>
        <section className="flex flex-col items-center">
          <motion.div
            key={minuteDif}
            initial="initial"
            animate="animate"
            variants={motionVariant}
          >
            {minuteDif}
          </motion.div>
          <div>Minutes</div>
        </section>
        <p>: </p>
        <motion.section className="flex flex-col items-center">
          <motion.div
            key={secondDif}
            initial="initial"
            animate="animate"
            variants={motionVariant}
          >
            {secondDif}
          </motion.div>
          <div>Seconds</div>
        </motion.section>
      </motion.section>
      <Text
        displayText="Till Bride Procession - Feb 23 2025"
        styling={{ className: "text-[#ff9e9e] text-base sm: text-xl" }}
      />
      <Text
        displayText="(Groom's weeding party at HCM - Mar 01 2025)"
        styling={{ className: "text-[#ff9e9e] text-base sm: text-xl" }}
      />
    </section>
  );
};

export default CountDown;
