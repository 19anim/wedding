import { useEffect, useState } from "react";

const useCalculateCountDown = () => {
  const DAY_IN_MILLISECOND = 24 * 60 * 60 * 1000;
  const destinationDate = new Date("Mar 1 2025 GMT+0700");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [dayDif, setDayDif] = useState();
  const [hourDif, setHourDif] = useState();
  const [minuteDif, setMinuteDif] = useState();
  const [secondDif, setSecondDif] = useState();

  useEffect(() => {
    calculateDate(currentDate, destinationDate);
    let setDateInterval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(setDateInterval);
  }, [currentDate]);

  const calculateDate = (currentDate, destinationDate) => {
    let millisecondDif = destinationDate.getTime() - currentDate.getTime();
    let daysLeft = millisecondDif / DAY_IN_MILLISECOND;
    let roundedDaysLeft = Math.floor(millisecondDif / DAY_IN_MILLISECOND);
    let hoursLeft = (daysLeft - roundedDaysLeft) * 24;
    let roundedHoursLeft = Math.floor(hoursLeft);
    let minutesLeft = (hoursLeft - roundedHoursLeft) * 60;
    let roundedMinutesLeft = Math.floor(minutesLeft);
    let secondsLeft = (minutesLeft - roundedMinutesLeft) * 60;
    let roundedSecondsLeft = Math.floor(secondsLeft);

    roundedDaysLeft !== dayDif ? setDayDif(roundedDaysLeft) : null;
    roundedHoursLeft !== hourDif ? setHourDif(roundedHoursLeft) : null;
    roundedMinutesLeft !== minuteDif ? setMinuteDif(roundedMinutesLeft) : null;
    roundedSecondsLeft !== secondDif ? setSecondDif(roundedSecondsLeft) : null;
  };
  return [dayDif, hourDif, minuteDif, secondDif];
};

export default useCalculateCountDown;
