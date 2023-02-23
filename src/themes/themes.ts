import React from "react";

export const themes = {
  dayTheme: {
    color: "#1e54a3",
    background: "#ffe7e7",
  },
  nightTheme: {
    color: "#075fa6",
    background: "#110e1f",
  },
};

export const ThemeContext = React.createContext(themes.dayTheme);
