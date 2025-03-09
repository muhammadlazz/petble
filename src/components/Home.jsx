import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Make sure to create this CSS file

export default function Home() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  
  useEffect(() => {
    // Simulasi waktu loading gambar
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
          <p className="intro-text" style={{ color: '#333' }}>
            Discover the joy of bonding with your beloved pets! Join our community to share
            stories, tips, and experiences about the world of animals. This is the perfect place to connect
            with fellow animal lovers, share inspiration, and celebrate the beauty of the bond between
            humans and animals. Let's care for and cherish our furry friends together!
          </p>
          <div className="cta-container">
            <Link to="/signin" className="cta-button primary">Join Now</Link>
            <Link to="/about" className="cta-button secondary">Learn More</Link>
          </div>
        </div>
        <div className={`image-container ${isImageLoaded ? 'loaded' : ''}`}>
          <div className="hero-image" aria-label="Pet image"></div>
        </div>
      </section>
      
      <PetbleFriendMatch />
    </div>
  );
}

const PetbleFriendMatch = () => {
  return (
    <section className="friend-match-section">
      <div className="friend-match-container">
        <div className="friend-match-content">
          <div className="friend-match-image-container">
            <div className="friend-match-image"></div>
          </div>
          
          <div className="friend-match-text">
            <h2 className="section-heading">Find Your Peepals Match</h2>
            <p className="section-description">
              Petble is the perfect place to grow your circle of friends. Connect with fellow animal lovers, 
              send messages, and build meaningful friendships. Here, bonds are formed through a shared love 
              for animals!
            </p>
            
            <h3 className="feature-heading">PetConnect+:</h3>
            <ul className="feature-list">
              <li className="feature-item">
                <span className="bullet">•</span>
                <div className="feature-content">
                  <span className="feature-title">Discover People:</span> Browse people profiles and meet 
                  like-minded animal lovers.
                </div>
              </li>
              <li className="feature-item">
                <span className="bullet">•</span>
                <div className="feature-content">
                  <span className="feature-title">Start a Conversation:</span> Send messages to connect 
                  and share your pet stories.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};