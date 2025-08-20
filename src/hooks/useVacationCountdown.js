import { useState, useEffect } from "react";
import calculateTimeRemaining from "../utils/timeCalculator";

const useVacationCountdown = () => {
  const [timeData, setTimeData] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeData(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return timeData;
};

export default useVacationCountdown;
