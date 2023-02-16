import "./assets/App.css";
import NavBar from "./components/NavBar";
import WeatherPanel from "./components/WeatherPanel";
import Spinner from "./components/Spinner";
import Card from "./components/Card";
function App() {
  return (
    <div className="App">
      <NavBar />
      <WeatherPanel />
    </div>
  );
}

export default App;
