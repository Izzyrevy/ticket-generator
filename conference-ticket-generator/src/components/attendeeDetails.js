import React, { useState } from 'react';
import './attendeeDetails.css'; 

const AttendeeDetails = ({ onBack, onConfirm }) => {
  const [attendeeName, setAttendeeName] = useState('');
  const [attendeeEmail, setAttendeeEmail] = useState('');
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [aboutProject, setAboutProject] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const attendeeData = {
      name: attendeeName,
      email: attendeeEmail,
      profilePhoto,
      aboutProject,
    };
    onConfirm(attendeeData);
  };

  return (
    <div className="attendee-details">
      <h2>Enter Attendee Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <strong>Upload profile photo:</strong>
          {profilePhoto && (
            <img 
              src={URL.createObjectURL(profilePhoto)} 
              alt="Profile" 
              style={{ width: '100px', height: '100px', borderRadius: '50%', margin: '10px 0' }} 
            />
          )}
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setProfilePhoto(e.target.files[0])}
          />
        </div>
        <div className="attendee-details-display">
          <label htmlFor="name">Enter your name:</label>
          <input 
            type="text" 
            id="name" 
            value={attendeeName} 
            onChange={(e) => setAttendeeName(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Enter your email:</label>
          <input 
            type="email" 
            id="email" 
            value={attendeeEmail} 
            onChange={(e) => setAttendeeEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="aboutProject">About your project:</label>
          <textarea 
            id="aboutProject" 
            value={aboutProject} 
            onChange={(e) => setAboutProject(e.target.value)} 
            rows="4" 
            required 
          />
        </div>
        <div className="button-group">
          <button type="button" onClick={onBack}>Back</button>
          <button type="submit">Get my free ticket</button>
        </div>
      </form>
    </div>
  );
};

export default AttendeeDetails;