// src/components/ThemeToggle.jsx
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "./ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className="icon-button" onClick={toggleTheme} aria-label="Toggle theme">
      {theme === "light" ? <FiMoon /> : <FiSun />}
    </button>
  );
};

export default ThemeToggle;
