import React from "react";
import { useContext } from "react";
import { FaBell, FaEnvelope, FaMoon, FaSun, FaCog, FaSearch } from "react-icons/fa";
import "./Settings.css"; // Pastikan file CSS ini sudah ada
import { ThemeContext } from "./ThemeContext";

const Settings = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="settings-container">
      {/* Navbar Icon */}
      <div className="navbar-icons">
        <FaSearch className="icon" />
        <FaBell className="icon" />
        <FaEnvelope className="icon" />
        <button onClick={toggleTheme} className="theme-toggle">{theme === "dark" ? <FaSun /> : <FaMoon />}</button>
        <FaCog className="icon active" />
      </div>

      {/* Header */}
      <h1 className="logo">Petble</h1>

      {/* Profile Section */}
      <div className="settings-section">
        <label>Profile</label>
        <div className="profile-card">
          <div className="profile-pic"></div>
          <span className="username">Jua</span>
          <button className="change-profile-btn">Change Profile</button>
        </div>
      </div>

      {/* Form Sections */}
      <div className="settings-section">
        <label>Bio</label>
        <textarea className="input-box" placeholder="Enter your bio..."></textarea>
      </div>

      <div className="settings-section">
        <label>Gender</label>
        <select className="input-box">
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="settings-section">
        <label>Interest</label>
        <select className="input-box">
          <option value="">Select Interest</option>
          <option value="cats">Cats</option>
          <option value="dogs">Dogs</option>
          <option value="both">Both</option>
        </select>
      </div>
    </div>
  );
};

export default Settings;