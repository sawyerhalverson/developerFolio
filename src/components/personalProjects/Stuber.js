import React from "react";
import { Link } from "react-router-dom";
import "./personalProjects.scss"; // Import your styles

const Stuber = () => {
  return (
    <div className="project-container">
      {/* Back Button */}
      <Link to="/" className="back-button">
        Go Back
      </Link>

      {/* Title */}
      <h1 className="project-title">Stuber - Rideshare for Students</h1>

      {/* Project Details */}
      <div className="project-details">
        {/* Left Column - Description */}
        <div className="column">
          <h2 className="section-title">What It Is</h2>
          <p className="project-description">
            Stuber is a full-stack web application designed as a rideshare service specifically for students, aiming to address the challenge of limited parking space on university campuses.
          </p>
        </div>

        {/* Right Column - Image */}
        <div className="column">
          <img
            src="stuber2.png"
            alt="Screenshot of Stuber project"
            className="project-image"
          />
        </div>
      </div>

      {/* Technologies Used */}
      <div className="project-technologies">
        <h2 className="section-title">Technologies Used</h2>
        <p>
          Stuber was built with React for the frontend, Node.js and Express for the backend, and MySQL for the database. AWS was utilized for hosting the application and managing the database infrastructure.
        </p>
      </div>

      {/* Second Image */}
      <div className="project-media">
        <img
          src="stuber1.png"
          alt="Another screenshot of Stuber project"
          className="project-image-large" // Apply a new class for larger image size
        />
      </div>

      {/* What I Learned */}
      <div className="project-learned">
        <h2 className="section-title">What I Learned</h2>
        <p>
          Through this project, I gained invaluable experience designing and developing a full-stack web application using React, Node.js, Express, MySQL, HTML, and CSS. Working under a tight deadline challenged me to refine my time management skills and prioritize tasks effectively. It was a rewarding journey that deepened my appreciation for solving real-world problems, particularly in creating user-friendly UI designs. Integrating third-party APIs like Mapbox for location services enriched my understanding of leveraging external tools to enhance application functionality.
        </p>
      </div>

      {/* Video Walkthrough */}
      <div className="video-walkthrough">
        <h2 className="section-title">Video Walkthrough</h2>
        <div className="video-container">
          {/* Replace with your video iframe */}
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/10Jyx2HhcWQ"
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

export default Stuber;
