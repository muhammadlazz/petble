import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import SignIn from './components/SignIn'
import Discovery from './components/Discovery'
import Mail from './components/Mail'
import Notification from './components/Notification'
import Settings from './components/Settings'
import { ThemeProvider, useTheme } from './components/ThemeContext'

function App() {
  const [activeMenu, setActiveMenu] = useState(false)
  const { theme, toggleTheme } = useTheme() // Gunakan context

  const toggleMenu = () => {
    setActiveMenu(!activeMenu)
  }

  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <header>
            <div className="container">
              <div className="logo-container">
                <NavLink to="/" className="logo">Petble</NavLink>
                <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
                  <span className={`hamburger ${activeMenu ? 'active' : ''}`}></span>
                </button>
              </div>

              <nav className={activeMenu ? 'active' : ''}>
                <ul>
                  <li><NavLink to="/" onClick={() => setActiveMenu(false)}>Home</NavLink></li>
                  <li><NavLink to="/about" onClick={() => setActiveMenu(false)}>About Us</NavLink></li>
                  <li><NavLink to="/signin" onClick={() => setActiveMenu(false)}>Sign in</NavLink></li>
                </ul>
              </nav>

              {/* Tombol Toggle Dark Mode */}
              <button onClick={toggleTheme}>
                {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
              </button>
            </div>
          </header>

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

          <footer>
            <div className="container">
              <p>&copy; {new Date().getFullYear()} Petble. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
