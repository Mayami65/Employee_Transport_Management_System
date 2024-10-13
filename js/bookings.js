// Sample array of bookings (replace this with your data)
var bookings = [
    { employeeName: "Employee 1", date: "2024-03-01", timeSlot: "Morning" },
    { employeeName: "Employee 2", date: "2024-03-02", timeSlot: "Afternoon" }
];

document.addEventListener("DOMContentLoaded", function () {
    // Initial display of bookings on page load
    updateBookingListUI();
});

// Function to update the booking list in the UI
function updateBookingListUI() {
    var bookingList = document.getElementById('bookingList');

    // Clear existing list content
    bookingList.innerHTML = '';

    // Loop through bookings and add them to the list
    bookings.forEach(function (booking) {
        var listItem = document.createElement('li');
        listItem.classList.add('list-group-item');

        var bookingDetails = `
            <h4>${booking.employeeName}</h4>
            <p>Date: ${booking.date}</p>
            <p>Time Slot: ${booking.timeSlot}</p>
        `;

        listItem.innerHTML = bookingDetails;
        bookingList.appendChild(listItem);
    });
}

// Additional functions for managing bookings can be added here

// Function to navigate back to the admin dashboard
function navigateToAdminDashboard() {
    window.location.href = '/Admin/dashboard.html';
}

// Function to search bookings
function searchBookings() {
    console.log('Searching bookings...');
    var searchInput = document.getElementById('searchInput').value.toLowerCase();

    var filteredBookings = bookings.filter(function (booking) {
        return (
            booking.employeeName.toLowerCase().includes(searchInput) ||
            booking.date.toLowerCase().includes(searchInput) ||
            booking.timeSlot.toLowerCase().includes(searchInput)
        );
    });

    // Update the UI with the filtered list
    updateFilteredBookingListUI(filteredBookings);
}

function updateFilteredBookingListUI(filteredBookings) {
    var bookingList = document.getElementById('bookingList');

    // Clear existing list content
    bookingList.innerHTML = '';

    // Display the filtered bookings
    filteredBookings.forEach(function (booking) {
        var listItem = document.createElement('li');
        listItem.classList.add('list-group-item');

        var bookingDetails = `
            <h4>${booking.employeeName}</h4>
            <p>Date: ${booking.date}</p>
            <p>Time Slot: ${booking.timeSlot}</p>
        `;

        listItem.innerHTML = bookingDetails;
        bookingList.appendChild(listItem);
    });
}
