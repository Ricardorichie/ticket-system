const TicketService = require("./services/TicketService");
const ticketPaymentService = new TicketPaymentService(); // Implement this class
const seatReservationService = new SeatReservationService(); // Implement this class

const ticketService = new TicketService(
  ticketPaymentService,
  seatReservationService
);

const ticketTypeRequest = {
  adultCount: 2,
  childCount: 1,
  infantCount: 0,
};
const ticketPurchase = async () => {
  try {
    const purchaseResult = ticketService.purchaseTickets(ticketTypeRequest);
    console.log("Tickets purchased successfully!");
    console.log("Total amount:", purchaseResult.totalAmount);
    console.log("Seats reserved:", purchaseResult.seatsReserved);
  } catch (error) {
    console.error("Ticket purchase failed:", error.message);
  }
};
