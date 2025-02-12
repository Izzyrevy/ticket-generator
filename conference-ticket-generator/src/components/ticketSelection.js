// src/components/TicketSelection.js
import React, { useState } from 'react';
import './ticketSelection.css'; 
const TicketSelection = ({ onNext, onCancel }) => {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [numberOfTickets, setNumberOfTickets] = useState(1);

  const handleTicketSelection = (ticketType) => {
    setSelectedTicket(ticketType);
  };

  const handleNext = () => {
    if (selectedTicket) {
      onNext({ type: selectedTicket, quantity: numberOfTickets });
    } else {
      alert('Please select a ticket type.');
    }
  };

  return (
    <div className="ticket-selection">
      <div className = "ticket-nav">
            <h3>Ticket Selection</h3> 
            <p>Step 1/3</p> 
        </div>
      <div className = "ticket-menu">
        <h2>Techember Fest "25"</h2>
        <p>Join us for an unforgettable experience at Techember Fest "25"! Secure your spot now.</p>
        <p>Location: [Event Location] || March 15, 2025 | 7:00 PM</p>
      </div>
      <h2>Ticket Selection</h2>
      <div className="ticket-options">
        <div className={`ticket-option ${selectedTicket === 'REGULAR ACCESS' ? 'selected' : ''}`} onClick={() => handleTicketSelection('REGULAR ACCESS')}>
          <h3>REGULAR ACCESS</h3>
          <p>20 left!</p>
          <span className="price">Free</span>
        </div>
        <div className={`ticket-option ${selectedTicket === 'VIP ACCESS' ? 'selected' : ''}`} onClick={() => handleTicketSelection('VIP ACCESS')}>
          <h3>VIP ACCESS</h3>
          <p>20 left!</p>
          <span className="price">$50</span>
        </div>
        <div className={`ticket-option ${selectedTicket === 'VVIP ACCESS' ? 'selected' : ''}`} onClick={() => handleTicketSelection('VVIP ACCESS')}>
          <h3>VVIP ACCESS</h3>
          <p>20 left!</p>
          <span className="price">$150</span>
        </div>
      </div>

        <p>Number of Tickets</p>
        <select 
            className="ticket-select" 
            value={numberOfTickets} 
            onChange={(e) => setNumberOfTickets(e.target.value)}
            >
            {[...Array(10).keys()].map((num) => (
            <option key={num + 1} value={num + 1}>{num + 1}</option>
            ))}
        </select>

      <div className="button-group">
        <button onClick={onCancel}>Cancel</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default TicketSelection;