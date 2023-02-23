// import WeatherData from "./components/WeatherData";
// import Weather from "./components/weather";
import Navigation from "./components/navigation/navigation";
import { Outlet } from "react-router-dom";
import { ThemeContext, themes } from "./themes/themes";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState({
    color: "",
    background: "",
  });
  const [time, setTime] = useState(+new Date().toLocaleString().slice(12, -6));

  function ChangeTheme() {
    setInterval(() => {
      const currentTime = +new Date().toLocaleString().slice(12, -6);

      setTime(currentTime);
    }, 1800000);
    time < 17 ? setTheme(themes.dayTheme) : setTheme(themes.nightTheme);
  }

  useEffect(() => {
    ChangeTheme();
  }, []);

  return (
    <ThemeContext.Provider value={theme}>
      <div style={theme}>
        <header>
          <Navigation />
        </header>
        <main className="main">
          <Outlet />
        </main>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
