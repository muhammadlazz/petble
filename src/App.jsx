import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import SignIn from "./components/SignIn";
import Discovery from "./components/Discovery";
import Mail from "./components/Mail";
import Notification from "./components/Notification";
import Settings from "./components/Settings";
import { FiMoon, FiSun, FiInstagram, FiYoutube, FiTwitter, FiFacebook } from "react-icons/fi";

function App() {
  const [activeMenu, setActiveMenu] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleMenu = () => {
    setActiveMenu(!activeMenu);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Router>
      <div className="app">
        {/* HEADER */}
        <header>
          <div className="container">
            <div className="logo-container">
              <NavLink to="/" className="logo">
                Petble
              </NavLink>
              <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
                <span className={`hamburger ${activeMenu ? "active" : ""}`}></span>
              </button>
            </div>

            <nav className={activeMenu ? "active" : ""}>
              <ul>
                <li>
                  <NavLink to="/" onClick={() => setActiveMenu(false)}>Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about" onClick={() => setActiveMenu(false)}>About Us</NavLink>
                </li>
                <li>
                  <NavLink to="/signin" onClick={() => setActiveMenu(false)}>Sign in</NavLink>
                </li>
              </ul>
            </nav>

            {/* Toggle Mode */}
            <button className="icon-button theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === "light" ? <FiMoon /> : <FiSun />}
            </button>
          </div>
        </header>

        {/* MAIN CONTENT */}
        <main>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/discovery" element={<Discovery />} />
              <Route path="/mail" element={<Mail />} />
              <Route path="/notifications" element={<Notification />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </main>

        {/* FOOTER */}
        <footer className="footer">
          <div className="footer-container">
            {/* Bagian Tentang Petble */}
            <div className="footer-section">
              <h3>Petble</h3>
              <p>Platform yang mendukung pemilik hewan peliharaan dalam merawat dan memahami kebutuhan hewan kesayangan mereka.</p>
              <div className="social-icons">
                <FiInstagram />
                <FiYoutube />
                <FiTwitter />
                <FiFacebook />
              </div>
            </div>

            {/* Bagian Navigasi */}
            <div className="footer-section">
              <h3>Navigasi</h3>
              <ul>
                <li><NavLink to="/about">About Us</NavLink></li>
                <li><NavLink to="/signin">Sign In</NavLink></li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Petble. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
