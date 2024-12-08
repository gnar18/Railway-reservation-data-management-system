document.getElementById('reservationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const trainNumber = document.getElementById('trainNumber').value;
    const travelDate = document.getElementById('travelDate').value;
    const departureStation = document.getElementById('departureStation').value;
    const arrivalStation = document.getElementById('arrivalStation').value;
    const departureTime = document.getElementById('departureTime').value;
    const seatNumber = document.getElementById('seatNumber').value;

    addReservation(name, trainNumber, travelDate, departureStation, arrivalStation, departureTime, seatNumber);

    // Clear form fields
    document.getElementById('name').value = '';
    document.getElementById('trainNumber').value = '';
    document.getElementById('travelDate').value = '';
    document.getElementById('departureStation').value = '';
    document.getElementById('arrivalStation').value = '';
    document.getElementById('departureTime').value = '';
    document.getElementById('seatNumber').value = '';
});

function addReservation(name, trainNumber, travelDate, departureStation, arrivalStation, departureTime, seatNumber) {
    const reservationList = document.getElementById('reservationList');

    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${name}</td>
        <td>${trainNumber}</td>
        <td>${travelDate}</td>
        <td>${departureStation}</td>
        <td>${arrivalStation}</td>
        <td>${departureTime}</td>
        <td>${seatNumber}</td>
        <td>
            <button onclick="editReservation(this)">Edit</button>
            <button onclick="deleteReservation(this)">Delete</button>
        </td>
    `;

    reservationList.appendChild(row);
}

function editReservation(button) {
    const row = button.parentElement.parentElement;

    document.getElementById('name').value = row.cells[0].innerText;
    document.getElementById('trainNumber').value = row.cells[1].innerText;
    document.getElementById('travelDate').value = row.cells[2].innerText;
    document.getElementById('departureStation').value = row.cells[3].innerText;
    document.getElementById('arrivalStation').value = row.cells[4].innerText;
    document.getElementById('departureTime').value = row.cells[5].innerText;
    document.getElementById('seatNumber').value = row.cells[6].innerText;

    row.remove();
}

function deleteReservation(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}
