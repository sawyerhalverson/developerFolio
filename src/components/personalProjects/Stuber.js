import React from "react";
import "./personalProjects.scss"; // Import your styles

const Stuber = () => {
  return (
    <div className="project-container">
      {/* Title */}
      <h1 className="project-title">Stuber Project</h1>

      {/* Project Details */}
      <div className="project-details">
        {/* Left Column - Description */}
        <div className="column">
          <h2 className="section-title">What It Is</h2>
          <p className="project-description">
            Stuber is a full-stack web application that connects users with nearby restaurants offering exclusive discounts during off-peak hours.
          </p>
        </div>

        {/* Right Column - Image */}
        <div className="column">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Screenshot of Stuber project"
            className="project-image"
          />
        </div>
      </div>

      {/* Space */}
      <div className="space"></div>

      {/* Technologies Used */}
      <div className="project-technologies">
        <h2 className="section-title">Technologies Used</h2>
        <p>
          Built with: React, Node.js, Express, MongoDB, Bootstrap
        </p>
      </div>

      {/* Space */}
      <div className="space"></div>

      {/* What I Learned */}
      <div className="project-learned">
        <h2 className="section-title">What I Learned</h2>
        <p>
          Through this project, I learned how to design and develop a full-stack web application from scratch, integrate third-party APIs for location services and payment processing, and manage user authentication and authorization securely.
        </p>
      </div>

      {/* Second Image */}
      <div className="project-media">
        <img
          src="https://via.placeholder.com/400x300"
          alt="Another screenshot of Stuber project"
          className="project-image"
        />
      </div>

      {/* Video Walkthrough */}
      <div className="video-walkthrough">
        <h2 className="section-title">Video Walkthrough</h2>
        <div className="video-container">
          {/* Replace with your video iframe */}
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/your-video-id"
            title="Stuber Project Video Walkthrough"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Stuber;
