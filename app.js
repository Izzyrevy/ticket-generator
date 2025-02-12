// src/App.js
import React, { useState } from 'react';
// import TicketSelection from './components/ticketSelection';
// import AttendeeDetails from './components/attendeeDetails';
import './App.css';

const App = () => {
  const [step, setStep] = useState(1);
  const [ticketType, setTicketType] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [aboutProject, setAboutProject] = useState('');

  const handleTicketSelection = (type) => {
    setTicketType(type);
    setStep(2);
  };

  const handleAttendeeDetails = () => {
    setStep(3);
  };

  const handleBooking = () => {
    // Handle booking logic here
    console.log('Booking ticket:', ticketType, name, email, aboutProject);
  };

  return (
    <div className="container">
      {step === 1 && (
        <div className="ticket-selection">
          <h2>Ticket Selection</h2>
          <div className="ticket-options">
            <div className="ticket-option" onClick={() => handleTicketSelection('REGULAR ACCESS')}>
              <h3>REGULAR ACCESS</h3>
              <p>20 left!</p>
              <span className="price">Free</span>
            </div>
            <div className="ticket-option" onClick={() => handleTicketSelection('VIP ACCESS')}>
              <h3>VIP ACCESS</h3>
              <p>20 left!</p>
              <span className="price">$50</span>
            </div>
            <div className="ticket-option" onClick={() => handleTicketSelection('VVIP ACCESS')}>
              <h3>VVIP ACCESS</h3>
              <p>20 left!</p>
              <span className="price">$150</span>
            </div>
          </div>
        </div>
      )}
      {step === 2 && (
        <div className="attendee-details">
          <h2>Attendee Details</h2>
          <div className="form-group">
            <label htmlFor="name">Enter your name:</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Enter your email:</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="aboutProject">About your project:</label>
            <textarea id="aboutProject" value={aboutProject} onChange={(e) => setAboutProject(e.target.value)} />
          </div>
          <button onClick={handleAttendeeDetails}>Next</button>
        </div>
      )}
      {step === 3 && (
        <div className="booking-confirmation">
          <h2>Confirm Your Booking</h2>
          <p>Ticket Type: {ticketType}</p>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>About Your Project: {aboutProject}</p>
          <button onClick={handleBooking}>Book Now</button>
        </div>
      )}
    </div>
  );
};

export default App;
