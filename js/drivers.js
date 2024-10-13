// Sample array of drivers (replace this with your data)
var drivers = [
    { driverName: "Driver Name 1", licenseNumber: "DL12345", contact: "+1 123-456-7890" },
    { driverName: "Driver Name 2", licenseNumber: "DL67890", contact: "+1 987-654-3210" }
];

document.addEventListener("DOMContentLoaded", function () {
    // Initial display of drivers on page load
    updateDriverListUI();
});

function updateDriverListUI() {
    var driverList = document.getElementById('driverList');

    // Clear existing list content
    driverList.innerHTML = '';

    // Loop through drivers and add them to the list
    drivers.forEach(function (driver) {
        var listItem = document.createElement('li');
        listItem.classList.add('list-group-item');

        var driverDetails = `
            <h4>${driver.driverName}</h4>
            <p>License Number: ${driver.licenseNumber}</p>
            <p>Contact: ${driver.contact}</p>
            <button class="btn btn-primary" onclick="editDriver('${driver.licenseNumber}')">Edit</button>
            <button class="btn btn-danger" onclick="deleteDriver('${driver.licenseNumber}')">Delete</button>
        `;

        listItem.innerHTML = driverDetails;
        driverList.appendChild(listItem);
    });
}


function addNewDriver() {
    var newDriverName = document.getElementById('newDriverName').value;
    var newLicenseNumber = document.getElementById('newLicenseNumber').value;
    var newContact = document.getElementById('newContact').value;

    // Check if the license number is unique (you may need to adjust this based on your data structure)
    var isUniqueLicenseNumber = !drivers.some(driver => driver.licenseNumber === newLicenseNumber);

    if (isUniqueLicenseNumber) {
        // Add the new driver to the array
        drivers.push({ driverName: newDriverName, licenseNumber: newLicenseNumber, contact: newContact });

        // Update the UI
        updateDriverListUI();
        clearAddDriverForm(); // Clear input fields
    } else {
        alert('License Number must be unique.');
    }
}

function clearAddDriverForm() {
    // Clear input fields in the add driver form
    document.getElementById('newDriverName').value = '';
    document.getElementById('newLicenseNumber').value = '';
    document.getElementById('newContact').value = '';
}


function editDriver(licenseNumber) {
    var editedDriver = drivers.find(driver => driver.licenseNumber === licenseNumber);

    // Populate the modal with driver details
    document.getElementById('editedDriverName').value = editedDriver.driverName;
    document.getElementById('editedLicenseNumber').value = editedDriver.licenseNumber;
    document.getElementById('editedContact').value = editedDriver.contact;

    // Show the edit driver modal
    $('#editDriverModal').modal('show');
}

function saveEditedDriver() {
    var editedLicenseNumber = document.getElementById('editedLicenseNumber').value;
    var index = drivers.findIndex(driver => driver.licenseNumber === editedLicenseNumber);

    if (index !== -1) {
        drivers[index].driverName = document.getElementById('editedDriverName').value;
        drivers[index].contact = document.getElementById('editedContact').value;

        // Update the UI
        updateDriverListUI();

        // Close the edit driver modal
        $('#editDriverModal').modal('hide');
    }
}

function closeAddDriverForm() {
    document.querySelector('.add-driver-form').style.display = 'none';
}

function closeEditDriverForm() {
    // Close the edit driver modal
    $('#editDriverModal').modal('hide');
}

function deleteDriver(licenseNumber) {
    // Remove the driver from the array
    drivers = drivers.filter(driver => driver.licenseNumber !== licenseNumber);

    // Update the UI
    updateDriverListUI();
}

// Function to navigate back to the admin dashboard
function navigateToAdminDashboard() {
    window.location.href = '/Admin/dashboard.html';
}

function searchDrivers() {
    console.log('Searching drivers...');
    var searchInput = document.getElementById('searchInput').value.toLowerCase();

    var filteredDrivers = drivers.filter(function (driver) {
        return (
            driver.driverName.toLowerCase().includes(searchInput) ||
            driver.licenseNumber.toLowerCase().includes(searchInput) ||
            driver.contact.toLowerCase().includes(searchInput)
        );
    });

    // Update the UI with the filtered list
    updateFilteredDriverListUI(filteredDrivers);
}

function updateFilteredDriverListUI(filteredDrivers) {
    var driverList = document.getElementById('driverList');

    // Clear existing list content
    driverList.innerHTML = '';

    // Display the filtered drivers
    filteredDrivers.forEach(function (driver) {
        var listItem = document.createElement('li');
        listItem.classList.add('list-group-item');

        var driverDetails = `
            <h4>${driver.driverName}</h4>
            <p>License Number: ${driver.licenseNumber}</p>
            <p>Contact: ${driver.contact}</p>
            <button class="btn btn-primary" onclick="editDriver('${driver.licenseNumber}')">Edit</button>
            <button class="btn btn-danger" onclick="deleteDriver('${driver.licenseNumber}')">Delete</button>
        `;

        listItem.innerHTML = driverDetails;
        driverList.appendChild(listItem);
    });
}
