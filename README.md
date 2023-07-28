# Ticket Service

The Ticket Service is a JavaScript implementation that allows users to purchase tickets and make payments while adhering to specific business rules. The service ensures correct ticket pricing, proper ticket combinations, and seat reservations.

## Business Rules

1. There are three types of tickets: Infant, Child, and Adult.
2. Ticket prices are based on the ticket type, as follows:
   - INFANT: £0
   - CHILD: £10
   - ADULT: £20
3. Multiple tickets can be purchased at any given time, with a maximum limit of 20 tickets.
4. Infants do not pay for a ticket and are not allocated a seat. They will sit on an Adult's lap.
5. Child and Infant tickets cannot be purchased without purchasing an Adult ticket.

## Constraints & Assumptions

- The `TicketService` interface cannot be modified.
- The code in the thirdparty.\* packages cannot be modified.
- All accounts with an id greater than zero are valid, and they have sufficient funds to pay for any number of tickets.
- The `TicketPaymentService` implementation is an external provider with no defects. Payment will always go through once requested.
- The `SeatReservationService` implementation is an external provider with no defects. Seat reservations will always be successful once requested.

## Usage

1. Install Dependencies

   Before running the Ticket Service, make sure you have the required dependencies installed:

   ```bash
   # Assuming you have Node.js and npm installed
   npm install
   ```
