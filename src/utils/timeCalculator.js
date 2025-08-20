const calculateTimeRemaining = () => {
  const now = new Date();
  const vacationStartDate = new Date(2025, 7, 22, 16, 0, 0); // 22.08.2025. u 16:00h

  const difference = vacationStartDate - now;

  let timeRemaining = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (difference > 0) {
    timeRemaining = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return { timeRemaining, isVacationStarted: difference <= 0 };
};

export default calculateTimeRemaining;