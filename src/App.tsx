// import WeatherData from "./components/WeatherData";
// import Weather from "./components/weather";
import Navigation from "./components/navigation/navigation";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>

      {/* <header>
        <div className="location">
          <WeatherData />
        </div>
      </header>
      <main>
        <NasaApod />
      </main>
      <footer></footer> */}
    </div>
  );
}

export default App;
