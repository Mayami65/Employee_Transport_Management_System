var drivers = [
    { licenseNumber: 'DL12345', driverName: 'Driver Name 1', contact: '+1 123-456-7890' },
    { licenseNumber: 'DL67890', driverName: 'Driver Name 2', contact: '+1 987-654-3210' }
    // Add more driver data as needed
];

document.addEventListener('DOMContentLoaded', function () {
    displayDrivers();
});

function displayDrivers() {
    var driverList = document.querySelector('.list-group');
    driverList.innerHTML = '';

    drivers.forEach(function (driver) {
        var listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.innerHTML = `
            <h4>${driver.driverName}</h4>
            <p>License Number: ${driver.licenseNumber}</p>
            <p>Contact: ${driver.contact}</p>
            <button class="btn btn-primary" onclick="editDriver('${driver.licenseNumber}')">Edit</button>
            <button class="btn btn-danger" onclick="deleteDriver('${driver.licenseNumber}')">Delete</button>
        `;
        driverList.appendChild(listItem);
    });
}

function addNewDriver() {
    var newDriverName = document.getElementById('newDriverName').value;
    var newLicenseNumber = document.getElementById('newLicenseNumber').value;
    var newContact = document.getElementById('newContact').value;

    if (!newDriverName || !newLicenseNumber || !newContact) {
        alert('Please fill in all the fields.');
        return;
    }

    var isLicenseNumberUnique = drivers.every(driver => driver.licenseNumber !== newLicenseNumber);

    if (!isLicenseNumberUnique) {
        alert('License number must be unique.');
        return;
    }

    drivers.push({ licenseNumber: newLicenseNumber, driverName: newDriverName, contact: newContact });
    displayDrivers();

    document.getElementById('newDriverName').value = '';
    document.getElementById('newLicenseNumber').value = '';
    document.getElementById('newContact').value = '';
}

function editDriver(licenseNumber) {
    var editedDriver = drivers.find(driver => driver.licenseNumber === licenseNumber);

    document.getElementById('editedDriverName').value = editedDriver.driverName;
    document.getElementById('editedLicenseNumber').value = editedDriver.licenseNumber;
    document.getElementById('editedContact').value = editedDriver.contact;

    document.querySelector('.edit-driver-form').style.display = 'block';
}

function saveEditedDriver() {
    var editedDriverName = document.getElementById('editedDriverName').value;
    var editedLicenseNumber = document.getElementById('editedLicenseNumber').value;
    var editedContact = document.getElementById('editedContact').value;

    var editedDriverIndex = drivers.findIndex(driver => driver.licenseNumber === editedLicenseNumber);

    if (editedDriverIndex !== -1) {
        drivers[editedDriverIndex].driverName = editedDriverName;
        drivers[editedDriverIndex].contact = editedContact;

        displayDrivers();

        document.querySelector('.add-driver-form').style.display = 'none';
    }
}

function deleteDriver(licenseNumber) {
    drivers = drivers.filter(driver => driver.licenseNumber !== licenseNumber);
    displayDrivers();
}

function navigateToAdminDashboard() {
    window.location.href = '/Admin/dashboard.html';
}

// Sample array of drivers (replace this with your data)
var drivers = [
    { driverName: "Driver Name 1", licenseNumber: "DL12345", contact: "+1 123-456-7890" },
    { driverName: "Driver Name 2", licenseNumber: "DL67890", contact: "+1 987-654-3210" }
];

document.addEventListener('DOMContentLoaded', function () {
    updateDriverListUI();
});

function editDriver(licenseNumber) {
    var editedDriver = drivers.find(driver => driver.licenseNumber === licenseNumber);

    document.getElementById('editedDriverName').value = editedDriver.driverName;
    document.getElementById('editedLicenseNumber').value = editedDriver.licenseNumber;
    document.getElementById('editedContact').value = editedDriver.contact;

    // Open the modal
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
        closeEditDriverForm();
    }
}

function closeEditDriverForm() {
    // Close the modal
    $('#editDriverModal').modal('hide');
}

function updateDriverListUI() {
    var driverListContainer = document.getElementById('driverList');
    driverListContainer.innerHTML = '';

    drivers.forEach(driver => {
        var listItem = document.createElement('li');
        listItem.classList.add('list-group-item');
        listItem.innerHTML = `
            <h4>${driver.driverName}</h4>
            <p>License Number: ${driver.licenseNumber}</p>
            <p>Contact: ${driver.contact}</p>
            <button class="btn btn-primary" onclick="editDriver('${driver.licenseNumber}')">Edit</button>
            <button class="btn btn-danger" onclick="deleteDriver('${driver.licenseNumber}')">Delete</button>
        `;
        driverListContainer.appendChild(listItem);
    });
}
