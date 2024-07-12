import React from "react";
import { Link } from "react-router-dom";
import "./personalProjects.scss"; // Import your styles

const Stretchify = () => {
  return (
    <div className="project-container">
      {/* Back Button */}
      <Link to="/" className="back-button">
        Go Back
      </Link>

      {/* Title */}
      <h1 className="project-title">Stretchify - Make stretching fun</h1>

      {/* Project Details */}
      <div className="project-details">
        {/* Left Column - Description */}
        <div className="column">
          <h2 className="section-title">What It Is</h2>
          <p className="project-description">
Stretchify is a Swift app designed as a full-stack web application to make stretching easy and enjoyable. It empowers users with custom stretch functionality, aimed at enhancing flexibility and comfort. Users can personalize their stretching routines to suit their needs, making stretching a seamless part of their daily routines.
          </p>        </div>

        {/* Right Column - Image */}
<div className="column">
  <img
    src="stretchifylogo.png"
    alt="Screenshot of Stuber project"
    className="project-image"
  />
</div>

      </div>

      {/* Technologies Used */}
      <div className="project-technologies">
        <h2 className="section-title">Technologies Used</h2>
        <p>
        Stretchify is built for iOS with Swift and SwiftUI in Xcode. It will be deployed on the App Store, offering users a convenient way to access its custom stretch functionalities designed to enhance flexibility and comfort.



      </p>
      </div>

      {/* Second Image */}
      <div className="project-media">
        <img
          src="stretchreal.png"
          alt="Another screenshot of Stuber project"
          className="project-image-large" // Apply a new class for larger image size
        />
      </div>

      {/* What I Learned */}
      <div className="project-learned">
        <h2 className="section-title">What I Learned</h2>
        <p>

I built Stretchify because I was eager to learn Swift and try developing a mobile app for iOS. My goal was to solve the problem of making stretching fun and accessible. Throughout the process, I gained valuable experience in creating beautiful app designs and mastering the Swift programming language. This project taught me the intricacies of crafting user-friendly mobile interfaces and harnessing Swift's capabilities to enhance app functionality.      </p>
      </div>

      {/* Video Walkthrough */}
      <div className="video-walkthrough">
        <h2 className="section-title">Video Walkthrough</h2>
        <div className="video-container">
          {/* Replace with your video iframe */}
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/hAkG2dvEz4E"
            title="Portol Project Video Walkthrough"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Stretchify;
