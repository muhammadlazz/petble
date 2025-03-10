import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import petbleImage from "./petble2.jpg";
import petbleImage2 from "./petble3.jpg";

export default function Home() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsImageLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="page-container">
      <section className="hero-section">
        <div className="content-section">
          <h1 className="main-heading">Hi, Peepals!</h1>
          <p className="intro-text">
            Discover the joy of bonding with your beloved pets! Join our
            community to share stories, tips, and experiences about the world of
            animals.
          </p>
          <div className="cta-container">
            <Link to="/signin" className="cta-button primary">
              Join Now
            </Link>
            <Link to="/about" className="cta-button secondary">
              Learn More
            </Link>
          </div>
        </div>

        {/* Gambar Hero */}
        <div className={`image-container ${isImageLoaded ? "loaded" : ""}`}>
          {isImageLoaded ? (
            <img src={petbleImage} alt="Pet image" className="hero-image" />
          ) : (
            <div className="loading-placeholder">Loading...</div>
          )}
        </div>
      </section>

      <PetbleFriendMatch />
    </div>
  );
}

// Komponen PetbleFriendMatch
const PetbleFriendMatch = () => {
  return (
    <section className="friend-match-section">
      <div className="friend-match-container">
        <div className="friend-match-content">
          {/* Gambar di kiri */}
          <div className="friend-match-image-container">
            <img
              src={petbleImage2}
              // alt="Friend Match Illustration"
              className="friend-match-image"
            />
          </div>

          {/* Teks di kanan */}
          <div className="friend-match-text">
            <h2 className="section-heading">Find Your Peepals Match</h2>
            <p className="section-description">
              Petble is the perfect place to grow your circle of friends.
              Connect with fellow animal lovers, send messages, and build
              meaningful friendships.
            </p>

            <h3 className="feature-heading">PetConnect+:</h3>
            <ul className="feature-list">
              <li className="feature-item">
                <span className="feature-title">Discover People:</span> Browse
                profiles and meet like-minded animal lovers.
              </li>
              <li className="feature-item">
                <span className="feature-title">Start a Conversation:</span>{" "}
                Send messages to connect and share your pet stories.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

