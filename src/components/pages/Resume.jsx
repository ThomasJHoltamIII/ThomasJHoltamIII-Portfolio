import React from 'react';
import '../styles/Resume.css';


export default function Resume() {
  return (
    <div className="resume-container, hero" >
      <h1>Resume</h1>
      <div className="resume-section">
        <h2>Thomas John Holtam III</h2>
        <p>Email: ThomasJHoltam@Gmail.com | Phone: 720-341-5480 | LinkedIn: Placeholder</p>
      </div>
      <div className="resume-section">
        <h2>Objective</h2>
        <p>A highly motivated individual seeking to leverage extensive knowledge of project managment and software devolopment to work and grow as a developer.</p>
      </div>
      <div className="resume-section">
        <h2>Education</h2>
        <p>High School Diploma, soon I will be gruaduating from DU's Full Stack Bootcamp</p>
      </div>
      <div className="resume-section">
        <h2>Skills</h2>
        <p>Proficient in: JavaScript, React, Node.js, SQL, NoSQL, Git</p>
      </div>
      <div className="resume-section actions">
        <button>Download Resume</button>
        <button>View Detailed Resume</button>
      </div>
    </div>
  );
}