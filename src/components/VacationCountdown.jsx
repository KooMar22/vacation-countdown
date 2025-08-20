import useVacationCountdown from "../hooks/useVacationCountdown";

const VacationCountdown = () => {
  const { timeRemaining, isVacationStarted } = useVacationCountdown();

  return (
    <div className="counter">
      {isVacationStarted ? (
        <div className="vacation-message">
          <div className="vacation-icon">🌴</div>
          <h1 className="vacation-title">Koristim godišnji odmor</h1>
          <div className="vacation-content">
            <p className="vacation-text">
              Ako nije hitno, pričekajte moj povratak.
              <br />
              Ako je hitno, preispitajte svoje prioritete. 😎
            </p>
            <p className="vacation-subtext">
              Ako me ipak kontaktirate, očekujte odgovor tek nakon što se vratim
              s godišnjeg odmora.
            </p>
          </div>
        </div>
      ) : (
        <div className="countdown-container">
          <h1 className="countdown-title">Do godišnjeg odmora je ostalo:</h1>
          <div className="countdown-grid">
            <div className="time-unit">
              <div className="time-number">{timeRemaining.days}</div>
              <div className="time-label">dana</div>
            </div>
            <div className="time-unit">
              <div className="time-number">{timeRemaining.hours}</div>
              <div className="time-label">sati</div>
            </div>
            <div className="time-unit">
              <div className="time-number">{timeRemaining.minutes}</div>
              <div className="time-label">minuta</div>
            </div>
            <div className="time-unit">
              <div className="time-number">{timeRemaining.seconds}</div>
              <div className="time-label">sekundi</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VacationCountdown;