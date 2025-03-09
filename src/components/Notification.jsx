import React from "react";
import "./Notification.css"; // Pastikan CSS ini sudah ada

const notifications = [
  { id: 1, name: "Jua", date: "Today" },
  { id: 2, name: "Jua", date: "Today" },
  { id: 3, name: "Jua", date: "Yesterday" },
  { id: 4, name: "Jua", date: "Yesterday" },
  { id: 5, name: "Jua", date: "Yesterday" },
];

const groupedNotifications = notifications.reduce((acc, notif) => {
  if (!acc[notif.date]) acc[notif.date] = [];
  acc[notif.date].push(notif);
  return acc;
}, {});

const Notification = () => {
  return (
    <div className="notification-container">
      <h1 className="logo">Petble</h1>

      {/* Notifikasi dikelompokkan berdasarkan Today & Yesterday */}
      {Object.entries(groupedNotifications).map(([date, notifs]) => (
        <div key={date}>
          <h2 className="date-header">{date}</h2>
          <div className="notification-card">
            {notifs.map((notif) => (
              <div className="notification-item" key={notif.id}>
                <div className="profile-pic"></div>
                <p>
                  <span className="username">{notif.name}</span> wants to add you as a friend
                </p>
                <div className="buttons">
                  <button className="accept-btn">Accept</button>
                  <button className="decline-btn">Decline</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notification;