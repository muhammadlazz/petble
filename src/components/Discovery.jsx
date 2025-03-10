import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Discovery.css';
import { FiSearch, FiBell, FiMail, FiMoon, FiSettings } from 'react-icons/fi';
import LazuardiImage from "./Lazuardi.jpg";
import RivanImage from "./rivan.jpg";
import NajwaImage from "./najwa.jpg";
import ElizabethImage from "./elizabeth.jpg";

const Discovery = () => {
  const navigate = useNavigate(); // Tambahkan useNavigate

  return (
    <div className="discovery-container">
      <header className="discovery-header">
        {/* <div className="logo">Petble</div> */}
        <div className="nav-icons">
          <button className="icon-button"><FiSearch /></button>
          <button className="icon-button" onClick={() => navigate('/notifications')}><FiBell /></button>
          <button className="icon-button" onClick={() => navigate('/mail')}><FiMail /></button>
          <button className="icon-button" onClick={() => navigate("/settings")}><FiSettings /></button>
        </div>
      </header>

      <main className="discovery-content">
        <div className="user-cards-grid">
          {/* User Cards */}
          <div className="user-card">
            <div className="user-image-container">
            <img src={LazuardiImage} alt="Lazuardi" className="user-image" />

              <div className="user-name">Lazuardi, 21</div>
            </div>
            <div className="user-interests">
              <span className="interest-tag">Reptile lovers</span>
              <span className="interest-tag">Cat Lovers</span>
              <button className="add-friend-btn">Add Friend</button>
            </div>
          </div>
          {/* User Cards */}
          <div className="user-card">
            <div className="user-image-container">
            <img src={RivanImage} alt="Rivan" className="user-image" />
              <div className="user-name">Rivan, 21</div>
            </div>
            <div className="user-interests">
              <span className="interest-tag">Reptile lovers</span>
              <span className="interest-tag">Gecko lovers</span>
              <button className="add-friend-btn">Add Friend</button>
            </div>
          </div>
          {/* User Cards */}
          <div className="user-card">
            <div className="user-image-container">
            <img src={NajwaImage} alt="Najwa" className="user-image" />
              <div className="user-name">Najwa, 21</div>
            </div>
            <div className="user-interests">
              <span className="interest-tag">Reptile lovers</span>
              <span className="interest-tag">Gecko lovers</span>
              <button className="add-friend-btn">Add Friend</button>
            </div>
          </div>
          {/* User Cards */}
          <div className="user-card">
            <div className="user-image-container">
            <img src={ElizabethImage} alt="Elizabeth" className="user-image" />
              <div className="user-name">Ellizabeth, 21</div>
            </div>
            <div className="user-interests">
              <span className="interest-tag">Reptile lovers</span>
              <span className="interest-tag">Gecko lovers</span>
              <button className="add-friend-btn">Add Friend</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Discovery;