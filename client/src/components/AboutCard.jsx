import React from "react";

const AboutCard = ({ icon: Icon, title, text }) => {
  return (
    <div className="about-card-container">
      <div className="about-card">
        <div className="about-card-header">
          <Icon className="about-card-icon" />
          <h3 className="about-card-title">{title}</h3>
        </div>
        <p className="about-card-text">{text}</p>
      </div>
    </div>
  );
};

export default AboutCard;
