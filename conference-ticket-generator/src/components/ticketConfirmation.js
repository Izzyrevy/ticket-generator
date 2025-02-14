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

    const onCancel = () => {
        setTicketBooked(false);
    };
  
    return (
        <div className="ticket-confirmation">
            <div className="ticket-confirm">
                <h3>Ready</h3> 
                <p>Step 3/3</p> 
            </div>
            <h2>Your Ticket is Booked!</h2>
            <p>Check your email for a copy or download the ticket</p> 
            {!ticketBooked ? (
                <div className="ticket-booked-box">
                    <div className="ticket-booked">
                        <h3>Techember Fest "25"!</h3>
                        <p>
                            Event Location: 34 Burdolon Road, Ikoyi Lagos || March 15, 2025 | 7:00 PM
                        </p>
                        <form onSubmit={handleSubmit}>
                            {attendeeData.profilePhoto && (
                                <div className="profile-pic-container">
                                    <img 
                                        src={attendeeData.profilePhoto} 
                                        alt="Profile" 
                                        className="profile-pic" 
                                    />
                                </div>
                            )}
                            <div className="confirmation-details">
                                <div className="detail-item">
                                    <p>Ticket Type:</p>
                                    <span>{ticketData.type}</span>
                                </div>
                                <div className="detail-item">
                                    <p>Number of Tickets:</p>
                                    <span>{ticketData.quantity}</span>
                                </div>
                                <div className="detail-item">
                                    <p>Name:</p>
                                    <span>{attendeeData.name}</span>
                                </div>
                                <div className="detail-item">
                                    <p>Email:</p>
                                    <span>{attendeeData.email}</span>
                                </div>
                            </div>
                        </form>
                    </div>
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
                </div>
            )  } 
            <div className="button-group">
                        <button onClick={onCancel}>Book Another Ticket</button>
                        <button onClick={downloadTicket}>Download Ticket</button>
                    </div>
        </div>
    );
};

export default TicketConfirmation;