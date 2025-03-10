import React from 'react';
import './Mail.css';
import { FiSearch, FiBell, FiMail, FiMoon, FiSettings } from 'react-icons/fi';

const Mail = () => {
  // Sample conversation data - you can replace with actual data
  const conversations = [
    { id: 1, name: 'Firdaus', lastMessage: 'salah', avatar: '/images/avatar-placeholder.jpg' },
    { id: 2, name: 'Firdaus', lastMessage: 'salah', avatar: '/images/avatar-placeholder.jpg' },
    { id: 3, name: 'Firdaus', lastMessage: 'salah', avatar: '/images/avatar-placeholder.jpg' },
    { id: 4, name: 'Firdaus', lastMessage: 'salah', avatar: '/images/avatar-placeholder.jpg' },
    { id: 5, name: 'Firdaus', lastMessage: 'salah', avatar: '/images/avatar-placeholder.jpg' }
  ];

  return (
    <div className="mail-container">
      <header className="mail-header">
        {/* <div className="logo">Petble</div> */}
        <div className="nav-icons">
          <button className="icon-button"><FiSearch /></button>
          <button className="icon-button"><FiBell /></button>
          <button className="icon-button active"><FiMail /></button>
          <button className="icon-button"><FiMoon /></button>
          <button className="icon-button"><FiSettings /></button>
        </div>
      </header>
      
      <main className="mail-content">
        <div className="conversation-list">
          {conversations.map(conversation => (
            <div key={conversation.id} className="conversation-item">
              <div className="avatar-container">
                <img src={conversation.avatar} alt={conversation.name} className="avatar" />
              </div>
              <div className="conversation-details">
                <div className="conversation-name">{conversation.name}</div>
                <div className="conversation-preview">You: {conversation.lastMessage}</div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Mail;