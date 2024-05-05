import config from "../conf/index.js";

//Implementation of fetch call to fetch all reservations
async function fetchReservations() {
  // TODO: MODULE_RESERVATIONS
  // 1. Fetch Reservations by invoking the REST API and return them
  try {
    let res = await fetch(`${config.backendEndpoint}/reservations`);
    let reservationData = await res.json();
    return reservationData;
  } catch (error) {
    // Place holder for functionality to work in the Stubs
    return null;
  }
}

//Function to add reservations to the table. Also; in case of no reservations, display the no-reservation-banner, else hide it.
function addReservationToTable(reservations) {
  // TODO: MODULE_RESERVATIONS
  // 1. Add the Reservations to the HTML DOM so that they show up in the table
  const noReservationBanner = document.getElementById('no-reservation-banner');
  const reservationTableParent = document.getElementById('reservation-table-parent');

  if (reservations.length === 0) {
    noReservationBanner.style.display = 'block';
    reservationTableParent.style.display = 'none';
  } else {
    noReservationBanner.style.display = 'none';
    reservationTableParent.style.display = 'block';

    // Select the reservation table body
    const reservationTable = document.getElementById('reservation-table');
    // Loop through reservations and add rows to the table
    reservations.forEach((reservation) => {
      // Format the date and booking time using the "en-IN" locale
      const formattedDate = new Date(reservation.date).toLocaleDateString('en-IN');
      const formattedBookingDate = new Date(reservation.time).toLocaleString('en-IN',{dateStyle:"long"});
      const formattedBookingTime = new Date(reservation.time).toLocaleString('en-IN',{timeStyle:"medium"});

      // Create a new table row
      const row = document.createElement("tr");

      // Insert cells with reservation details
      let id_td = document.createElement("td");
      id_td.textContent = reservation.id;

      let booking_td = document.createElement("td");
      booking_td.textContent = reservation.name;

      let adventure_td = document.createElement("td");
      adventure_td.textContent = reservation.adventureName;

      let person_td = document.createElement("td");
      person_td.textContent = reservation.person;

      let date_td = document.createElement("td");
      date_td.textContent = formattedDate;

      let price_td = document.createElement("td");
      price_td.textContent = reservation.price;

      let time_td = document.createElement("td");
      time_td.textContent = formattedBookingDate + ", " + formattedBookingTime;

      // Create a button cell for the reservation visit button
      let button_td = document.createElement("td");
      button_td.id = reservation.id;

      const visitButton = document.createElement('button');
      visitButton.style.border = "none";
      visitButton.className = 'reservation-visit-button';
      visitButton.textContent = 'Visit Adventure';
      
      // Create a link with the adventure ID as a parameter
      const adventureId = reservation.adventure;
      const adventureLink = document.createElement('a');
      adventureLink.href = `../detail/?adventure=${adventureId}`;
      adventureLink.appendChild(visitButton);
      button_td.appendChild(adventureLink);

      row.append(id_td, booking_td, adventure_td, person_td, date_td, price_td, time_td, button_td);
      reservationTable.appendChild(row);
    });
  }

  /*
    Iterating over reservations, adding it to table (into div with class "reservation-table") and link it correctly to respective adventure
    The last column of the table should have a "Visit Adventure" button with id=<reservation-id>, class=reservation-visit-button and should link to respective adventure page

    Note:
    1. The date of adventure booking should appear in the format D/MM/YYYY (en-IN format) Example:  4/11/2020 denotes 4th November, 2020
    2. The booking time should appear in a format like 4 November 2020, 9:32:31 pm
  */
}

export { fetchReservations, addReservationToTable };
