// Admin Login
function adminLogin() {
    // Implement admin login functionality
}

// Add Driver
function addDriver() {
    // Assume some validation logic here before displaying the message
    var driverName = document.getElementById('driverName').value;
    var driverLicense = document.getElementById('driverLicense').value;

    if (driverName && driverLicense) {
        // If validation passes, display success message
        document.getElementById('successMessage').innerText = 'Driver added successfully!';
    } else {
        // If validation fails, display an error message or take appropriate action
        document.getElementById('successMessage').innerText = 'Please fill in all fields.';
    }
}

// Add Vehicle
function addVehicle() {
    // Implement add vehicle functionality
}

// Employee Registration
function employeeRegister() {
    // Implement employee registration functionality
}

// Employee Login
function employeeLogin() {
    // Implement employee login functionality
}

// View Available Time Slots
function viewTimeSlots() {
    // Implement view available time slots functionality
}

// Select Time Slot
function selectTimeSlot() {
    // Implement select time slot functionality
}

// script.js

function openAddDriverPage() {
    window.location.href = 'add_Driver.html';
}

function openModifySerivesPage() {
    window.location.href = 'pickup_and_dropoff.html';
}

// script.js

function modifyServices() {
    // Get values from the form fields
    var pickUpLocation = document.getElementById('pickUpLocation').value;
    var dropOffLocation = document.getElementById('dropOffLocation').value;
    var pickUpTime = document.getElementById('pickUpTime').value;
    var dropOffTime = document.getElementById('dropOffTime').value;

    // Perform some validation (you can add your own validation logic here)
    if (pickUpLocation.trim() === '' || dropOffLocation.trim() === '' || pickUpTime.trim() === '' || dropOffTime.trim() === '') {
        // Display an error message if any field is empty
        document.getElementById('successMessage').innerText = 'Please fill in all fields.';
    } else {
        // Assume modification logic here (you can replace this with your actual modification logic)
        // For now, just display a success message
        document.getElementById('successMessage').innerText = 'Services modified successfully!';

        // You can add further logic to update the database or perform other actions as needed
    }
}

// script.js

function addVehicle() {
    // Get values from the form fields
    var vehicleType = document.getElementById('vehicleType').value;
    var vehicleNumber = document.getElementById('vehicleNumber').value;
    var seatingCapacity = document.getElementById('seatingCapacity').value;

    // Perform some validation (you can add your own validation logic here)
    if (vehicleType.trim() === '' || vehicleNumber.trim() === '' || seatingCapacity.trim() === '') {
        // Display an error message if any field is empty
        document.getElementById('successMessage').innerText = 'Please fill in all fields.';
    } else {
        // Assume addition logic here (you can replace this with your actual addition logic)
        // For now, just display a success message
        document.getElementById('successMessage').innerText = 'Vehicle added successfully!';

        // You can add further logic to update the database or perform other actions as needed
    }
}

function openAddVehicle() {
    window.location.href = 'add_vehicle.html';
}

function openManageBookings() {
    window.location.href = 'manage_booking.html';
}
// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Select the logout link by its ID
    const logoutLink = document.getElementById('logoutLink');

    // Add a click event listener to the logout link
    logoutLink.addEventListener('click', function (event) {
        // Prevent the default behavior of the link (in this case, prevent navigating to the "#" URL)
        event.preventDefault();

        // Perform logout actions here (e.g., redirect to login page or clear session)
        // For demonstration purposes, we'll show an alert
        alert('Logged out!'); 
    });
});

 //Add this script section at the end of the body //

    function navigateToAdminDashboard() {
        // Redirect to the admin dashboard page or perform any other desired action
        window.location.href = 'dashboard.html'; // Replace with the actual file path
    }