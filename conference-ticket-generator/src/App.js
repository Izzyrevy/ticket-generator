import React, { useState } from 'react';
import TicketSelection from './components/ticketSelection';
import AttendeeDetails from './components/attendeeDetails'; 
import TicketConfirmation from './components/ticketConfirmation';
import './App.css';

const TicketBookingApp = () => {
  const [step, setStep] = useState(1);
  const [ticketData, setTicketData] = useState({});
  const [attendeeData, setAttendeeData] = useState({});
  const [selectedTicket, setSelectedTicket] = useState(null);

  const handleNext = (data) => {
    setTicketData({
      type: data.type,
      quantity: data.quantity, 
    });
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleConfirmation = (data) => {
    setAttendeeData(data);
    setStep(step + 1);
  };

  return (
    <div className="ticket-booking-app">
      {step === 1 && (
        <TicketSelection
          selectedTicket={selectedTicket}
          setSelectedTicket={setSelectedTicket}
          onNext={handleNext}
        />
      )}
      {step === 2 && (
        <AttendeeDetails onBack={handleBack} onConfirm={handleConfirmation} />
      )}
      {step === 3 && (
        <TicketConfirmation
          ticketData={ticketData}
          attendeeData={attendeeData}
        />
      )}
    </div>
  );
};

export default TicketBookingApp;