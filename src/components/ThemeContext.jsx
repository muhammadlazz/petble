import { createContext, useState, useEffect } from "react";

// Buat Context
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Simpan tema di localStorage supaya tetap tersimpan saat refresh
  const getInitialTheme = () => localStorage.getItem("theme") || "dark";

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle Tema
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};