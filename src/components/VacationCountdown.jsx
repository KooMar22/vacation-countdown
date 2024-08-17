import { useState, useEffect } from "react";

function VacationCountdown() {
  const calculateTimeRemaining = () => {
    const now = new Date();
    const vacationStartDate = new Date(2024, 7, 23, 15, 0, 0); // 23.08.2024. u 15:00h

    const difference = vacationStartDate - now;

    let timeRemaining = {};
    if (difference > 0) {
      timeRemaining = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return { timeRemaining, isVacationStarted: difference <= 0 };
  };

  const [timeData, setTimeData] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeData(calculateTimeRemaining());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const { timeRemaining, isVacationStarted } = timeData;

  return (
    <div className="counter">
      {isVacationStarted ? (
        <div className="message">
          <h1>Korisnik je na godišnjem odmoru 😎</h1>
          <p>Ako vam je život mio, triput razmislite prije nego ćete mu poslati službeni e-mail.</p>
        </div>
      ) : (
        <div>
          <h1>Do godišnjeg odmora je ostalo:</h1>
          <div className="countdown">
            <h2>{timeRemaining.days} dana</h2>
            <h2>{timeRemaining.hours} sati</h2>
            <h2>{timeRemaining.minutes} minuta</h2>
            <h2>{timeRemaining.seconds} sekundi</h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default VacationCountdown;