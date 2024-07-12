import React from "react";
import { Link } from "react-router-dom";
import "./personalProjects.scss"; // Import your styles

const Portol = () => {
  return (
    <div className="project-container">
      {/* Back Button */}
      <Link to="/" className="back-button">
        Go Back
      </Link>

      {/* Title */}
      <h1 className="project-title">Portol - NFC Management</h1>

      {/* Project Details */}
      <div className="project-details">
        {/* Left Column - Description */}
        <div className="column">
          <h2 className="section-title">What It Is</h2>
          <p className="project-description">
          Portol is a full-stack web application designed to empower store owners in maximizing revenue through efficient management of NFC tags and insightful analytics. Store owners can associate NFC tags with specific products or clothing items, enabling them to track customer interactions such as requests for different sizes or variations. This capability not only enhances operational efficiency but also improves the overall customer experience by ensuring swift responses to customer needs. </p>        </div>

        {/* Right Column - Image */}
<div className="column">
  <img
    src="nfc.png"
    alt="Screenshot of Stuber project"
    className="project-image"
  />
</div>

      </div>

      {/* Technologies Used */}
      <div className="project-technologies">
        <h2 className="section-title">Technologies Used</h2>
        <p>
        Portol utilizes React for its frontend, leveraging Node.js with Express for the backend API services. MySQL serves as the database solution for storing crucial data. AWS Lambda functions are employed for serverless computing tasks, while AWS API Gateway manages the APIs, ensuring seamless integration and scalability of the application. AWS also hosts the entire infrastructure, ensuring robust performance and reliability.        </p>
      </div>

      {/* Second Image */}
      <div className="project-media">
        <img
          src="portolarc.png"
          alt="Another screenshot of Stuber project"
          className="project-image-large" // Apply a new class for larger image size
        />
      </div>

      {/* What I Learned */}
      <div className="project-learned">
        <h2 className="section-title">What I Learned</h2>
        <p>
        Through this project, I gained extensive knowledge in NFC technology, collaborating closely with stakeholders who rely on data-driven insights for decision-making. I honed my skills in creating intuitive user interfaces and swiftly implementing new features in response to stakeholder requests. The experience deepened my understanding of user-centric design principles and the importance of seamless integration of technologies like NFC for enhancing application functionality.        </p>
      </div>

      {/* Video Walkthrough */}
      <div className="video-walkthrough">
        <h2 className="section-title">Video Walkthrough</h2>
        <div className="video-container">
          {/* Replace with your video iframe */}
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Hzcs1SJHRyI"
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

export default Portol;
