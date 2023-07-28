export class TicketService {
  constructor(ticketPaymentService, seatReservationService) {
    this.ticketPaymentService = ticketPaymentService;
    this.seatReservationService = seatReservationService;
  }

  purchaseTickets(ticketTypeRequest) {
    // Validate the ticket purchase request
    if (!this.isValidTicketPurchase(ticketTypeRequest)) {
      throw new Error("Invalid ticket purchase request.");
    }

    const { adultCount, childCount, infantCount } = ticketTypeRequest;
    const totalTickets = adultCount + childCount + infantCount;

    // Business rule: Only a maximum of 20 tickets can be purchased at a time
    if (totalTickets > 20) {
      throw new Error("Maximum 20 tickets can be purchased at a time.");
    }

    // Calculate the total amount for the tickets
    const totalAmount = this.calculateTotalAmount(ticketTypeRequest);

    // Make a payment request to TicketPaymentService
    this.ticketPaymentService.makePayment(totalAmount);

    // Calculate the number of seats to reserve
    const seatsToReserve = adultCount + childCount;

    // Make a seat reservation request to SeatReservationService
    this.seatReservationService.reserveSeats(seatsToReserve);

    // Return the total amount and number of seats reserved
    return { totalAmount, seatsReserved: seatsToReserve };
  }

  isValidTicketPurchase(ticketTypeRequest) {
    const { adultCount, childCount, infantCount } = ticketTypeRequest;

    // Business rule: Infants cannot be purchased without an Adult ticket
    if (infantCount > 0 && adultCount === 0) {
      return false;
    }

    return true;
  }

  calculateTotalAmount(ticketTypeRequest) {
    const { adultCount, childCount } = ticketTypeRequest;

    // Ticket prices
    const infantPrice = 0;
    const childPrice = 10;
    const adultPrice = 20;

    // Calculate the total amount
    const totalAmount =
      infantPrice * ticketTypeRequest.infantCount +
      childPrice * ticketTypeRequest.childCount +
      adultPrice * ticketTypeRequest.adultCount;

    return totalAmount;
  }
}
