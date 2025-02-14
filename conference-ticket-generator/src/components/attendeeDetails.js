import React, { useState } from 'react';
import './attendeeDetails.css'; 
import AvatarUpload from './avatarUpload';

const AttendeeDetails = ({ onBack, onConfirm }) => {
  const [attendeeName, setAttendeeName] = useState('');
  const [attendeeEmail, setAttendeeEmail] = useState('');
  const [profilePhoto, setProfilePhoto] = useState(''); 
  const [specialRequest, setSpecialRequest] = useState('');

  const handleImageUpload = (url) => {
    console.log({ url });
    setProfilePhoto(url);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const attendeeData = {
      name: attendeeName,
      email: attendeeEmail,
      profilePhoto, 
      specialRequest,
    };
    onConfirm(attendeeData);
  };

  return (
    <div className="attendee-details-container">
      <div className="attendee-nav">
        <h3>Attendee Details</h3> 
        <p>Step 2/3</p> 
      </div>
      <div className="attendee-details">
        <form onSubmit={handleSubmit}>
          <div className="profile-pic-container">
            <label>Upload profile photo*</label>
            <AvatarUpload onUpload={handleImageUpload} />
          </div>
          <div className="attendee-details-display">
            <label htmlFor="name">Enter your name*</label>
            <input 
              type="text" 
              id="name" 
              value={attendeeName} 
              onChange={(e) => setAttendeeName(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Enter your email*</label>
            <input 
              type="email" 
              id="email" 
              value={attendeeEmail} 
              onChange={(e) => setAttendeeEmail(e.target.value)} 
              required 
              placeholder='hello@izzyrev'
            />
          </div>
          <div className="form-group">
            <label htmlFor="specialRequest">Special Request?</label>
            <textarea 
              id="specialRequest" 
              value={specialRequest} 
              onChange={(e) => setSpecialRequest(e.target.value)} 
              rows="4" 
              required 
              placeholder="Enter your special request here..."
            />
          </div>
          <div className="button-group">
            <button type="button" onClick={onBack}>Back</button>
            <button type="submit">Get my free ticket</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AttendeeDetails;