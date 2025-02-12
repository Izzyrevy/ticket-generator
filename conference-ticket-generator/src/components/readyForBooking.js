// src/components/ReadyForBooking.js
import React from 'react';

const ReadyForBooking = ({ ticket, attendee }) => {
    return (
        <div className="ready-for-booking">
            <h2>Ready for Booking</h2>
            <h3>Ticket Details</h3>
            <p>Ticket Type: {ticket.name}</p>
            <p>Price: ${ticket.price}</p>

            <h3>Attendee Details</h3>
            <p>Full Name: {attendee.fullName}</p>
            <p>Email: {attendee.email}</p>
            <p>Avatar: <img src={attendee.avatar} alt="Avatar" /></p>

            <button> on Click to Confirm Booking </button>
        </div>    
    );
};

export default ReadyForBooking;