// src/components/TicketConfirmation.js
import React, { useState } from 'react';
import AttendeeDetailsDisplay from './attendeeDetails';
import './ticketConfirmation.css';

const TicketConfirmation = ({ ticketData, attendeeData }) => {
    const [ticketBooked, setTicketBooked] = useState(false);
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData();
      formData.append('ticketType', ticketData.type); 
      formData.append('numberOfTickets', ticketData.quantity); 
      formData.append('attendeeName', attendeeData.name);
      formData.append('attendeeEmail', attendeeData.email);
      if (attendeeData.profilePhoto) {
        formData.append('profilePhoto', attendeeData.profilePhoto);
      }
  
      const response = await fetch('/api/tickets', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        setTicketBooked(true);
      } else {
        // Handle error
        console.error('Error booking ticket');
      }
    };

    const downloadTicket = () => {
        const ticketDetails = `
          Ticket Type: ${ticketData.type}
          Number of Tickets: ${ticketData.quantity}
          Attendee Name: ${attendeeData.name}
          Attendee Email: ${attendeeData.email}
        `;
        const blob = new Blob([ticketDetails], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'ticket.txt'; 
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url); 
      };
  
    return (
      <div className="ticket-confirmation">
        {!ticketBooked ? (
          <div className="ticket-selection">
            <h2>Techember Fest "25"!</h2>
            <p>
              Event Location: 34 Burdolon Road, Ikoyi Lagos || March 15, 2025 | 7:00 PM
            </p>
            <form onSubmit={handleSubmit}>
              {/* Square Profile Picture */}
              {attendeeData.profilePhoto && (
                <div className="profile-pic-container">
                  <img 
                    src={URL.createObjectURL(attendeeData.profilePhoto)} 
                    alt="Profile" 
                    className="profile-pic" 
                  />
                </div>
              )}
               <div className="confirmation-details">
              <div className="detail-item">
                <strong>Ticket Type:</strong>
                <span>{ticketData.type}</span>
              </div>
              <div className="detail-item">
                <strong>Number of Tickets:</strong>
                <span>{ticketData.quantity}</span>
              </div>
              <div className="detail-item">
                <strong>Name:</strong>
                <span>{attendeeData.name}</span>
              </div>
              <div className="detail-item">
                <strong>Email:</strong>
                <span>{attendeeData.email}</span>
              </div>
            </div>
            <button type="submit">Book Ticket</button>
          </form>
        </div>
      ) : (
        <div className="confirmation-message">
          <h2>Thank You for Your Purchase!</h2>
          <p>Your ticket has been successfully booked.</p>
          <div className="confirmation-details">
            <div className="detail-item">
              <strong>Ticket Type:</strong>
              <span>{ticketData.type}</span>
            </div>
            <div className="detail-item">
              <strong>Number of Tickets:</strong>
              <span>{ticketData.quantity}</span>
            </div>
            <AttendeeDetailsDisplay attendeeData={attendeeData} />
          </div>
          <button onClick={downloadTicket}>Download Ticket</button> {/* Download Ticket Button */}
        </div>
      )}
    </div>
  );
};

export default TicketConfirmation;