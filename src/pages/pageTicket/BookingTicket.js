import React, { useEffect, useState } from "react";
import { BookingProvider } from "./booking-context";
import "./BookingTicket.scss";
import Ticket from "./Ticket";
import TicketChooseSeats from "./TicketChooseSeats";
const BookingTicket = () => {
  const parmID = 44239;
  return (
    <div className="booking-container flex p-10 m-auto gap-7 ">
      <BookingProvider paramID={parmID}>
        <TicketChooseSeats></TicketChooseSeats>
        <Ticket></Ticket>
      </BookingProvider>
    </div>
  );
};

export default BookingTicket;
