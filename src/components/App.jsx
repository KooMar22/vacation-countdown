import Header from "./Header";
import Footer from "./Footer";
import VacationCountdown from "./VacationCountdown";
import "../styles/styles.css";

const App = () => {
  return (
    <div className="container">
      < Header />
      < VacationCountdown />
      < Footer />
    </div>
  )
}

export default App;