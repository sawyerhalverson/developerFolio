import React from "react";
import { Link } from "react-router-dom";
import "./personalProjects.scss"; // Import your styles

const LifePilot = () => {
  return (
    <div className="project-container">
      {/* Back Button */}
      <Link to="/" className="back-button">
        Go Back
      </Link>

      {/* Title */}
      <h1 className="project-title">LifePilot - Navigate Your Time</h1>

      {/* Project Details */}
      <div className="project-details">
        {/* Left Column - Description */}
        <div className="column">
          <h2 className="section-title">What It Is</h2>
          <p className="project-description">

Lifepilot is a full-stack web application built as a tool to help individuals manage their time effectively and foster greater accountability. It empowers users to take control of their schedules and productivity, aiming to enhance personal organization and efficiency.          </p>
        </div>

        {/* Right Column - Image */}
        <div className="column">
          <img
            src="lp1.png"
            alt="Screenshot of Stuber project"
            className="project-image"
          />
        </div>
      </div>

      {/* Technologies Used */}
      <div className="project-technologies">
        <h2 className="section-title">Technologies Used</h2>
        <p>
        Lifepilot utilizes React for the frontend, MySQL for the database, and standard HTML and CSS for its user interface.



</p>
      </div>

      {/* Second Image */}
      <div className="project-media">
        <img
          src="lp2.png"
          alt="Another screenshot of Stuber project"
          className="project-image-large" // Apply a new class for larger image size
        />
      </div>

      {/* What I Learned */}
      <div className="project-learned">
        <h2 className="section-title">What I Learned</h2>
        <p>

Through this project, I learned the importance of working on a project that aligns with my passion. I was motivated to build this application for myself to better manage my own time. It provided me with hands-on experience in dynamically loading data into an insights page, complete with filtering and sorting functionalities. This project also equipped me with the skills to develop a full-stack web application from scratch, using technologies like React, Node.js, Express, MySQL, HTML, and CSS.        </p>
      </div>

      {/* Video Walkthrough */}
      <div className="video-walkthrough">
        <h2 className="section-title">Video Walkthrough</h2>
        <div className="video-container">
          {/* Replace with your video iframe */}
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ELv0e36dLyA"
            title="Stuber Project Video Walkthrough"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default LifePilot;
