 // Sample array to represent a list of vehicles (you will replace this with your actual data)
 var vehicles = [
    { model: 'Vehicle Model 1', licensePlate: 'ABC123' },
    { model: 'Vehicle Model 2', licensePlate: 'XYZ789' }
    // Add more vehicle data as needed
];

document.addEventListener('DOMContentLoaded', function() {
    // Populate the initial list of vehicles
    displayVehicles();
});

function displayVehicles() {
    var vehicleList = document.getElementById('vehicleList');
    vehicleList.innerHTML = '';

    // Iterate through the vehicles array and create list items for each vehicle
    vehicles.forEach(function(vehicle) {
        var listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.innerHTML = `
            <h4>${vehicle.model}</h4>
            <p>License Plate: ${vehicle.licensePlate}</p>
            <button class="btn btn-primary" onclick="editVehicle('${vehicle.licensePlate}')">Edit</button>
            <button class="btn btn-danger" onclick="deleteVehicle('${vehicle.licensePlate}')">Delete</button>
        `;
        vehicleList.appendChild(listItem);
    });
}
function addNewVehicle() {
    var model = document.getElementById('newVehicleModel').value;
    var licensePlate = document.getElementById('newVehicleLicensePlate').value;

    // Validate input
    if (model.trim() === '' || licensePlate.trim() === '') {
        alert('Please enter both model and license plate.');
        return;
    }

    // Check for duplicate license plates
    if (vehicles.some(vehicle => vehicle.licensePlate === licensePlate)) {
        alert('License plate already exists.');
        return;
    }

    // Add the new vehicle to the array
    vehicles.push({ model: model, licensePlate: licensePlate });

    // Update the UI
    displayVehicles();

    // Clear the form fields
    document.getElementById('newVehicleModel').value = '';
    document.getElementById('newVehicleLicensePlate').value = '';

    // Display success message
    var successMessage = document.getElementById('successMessage');
    successMessage.textContent = 'Vehicle added successfully!';
    successMessage.style.display = 'block';

    // Hide the success message after 3 seconds
    setTimeout(function() {
        successMessage.style.display = 'none';
    }, 3000);
}


function editVehicle(licensePlate) {
    var newModel = prompt('Enter new model for the vehicle:');
    if (newModel === null || newModel.trim() === '') {
        return; // User cancelled or entered empty value
    }

    // Find the index of the vehicle with the given license plate
    var index = vehicles.findIndex(vehicle => vehicle.licensePlate === licensePlate);
    if (index !== -1) {
        vehicles[index].model = newModel;
        displayVehicles(); // Update the UI
    } else {
        alert('Vehicle not found.');
    }
}

function deleteVehicle(licensePlate) {
    if (confirm('Are you sure you want to delete this vehicle?')) {
        // Filter out the vehicle with the given license plate
        vehicles = vehicles.filter(vehicle => vehicle.licensePlate !== licensePlate);
        displayVehicles(); // Update the UI
    }
}

