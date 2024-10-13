document.addEventListener("DOMContentLoaded", function () {
    // Load existing time slots on page load
    loadTimeSlots();

    // Add event listener for the add time slot form
    document.getElementById('addTimeSlotForm').addEventListener('submit', function (event) {
        event.preventDefault();
        addTimeSlot();
    });
});

// Function to load existing time slots
function loadTimeSlots() {
    // Fetch existing time slots from your backend/API
    // Replace the dummy data with actual API calls
    var existingTimeSlots = [
        { id: 1, startTime: '08:00 AM', endTime: '09:00 AM' },
        { id: 2, startTime: '10:00 AM', endTime: '11:00 AM' }
        // Add more time slots as needed
    ];

    var timeSlotList = document.getElementById('timeSlotList');

    // Clear existing list content
    timeSlotList.innerHTML = '';

    // Display the existing time slots
    existingTimeSlots.forEach(function (timeSlot) {
        var row = document.createElement('tr');
        row.innerHTML = `
            <td>${timeSlot.id}</td>
            <td>${timeSlot.startTime}</td>
            <td>${timeSlot.endTime}</td>
            <td>
                <button class="btn btn-primary" onclick="editTimeSlot(${timeSlot.id})">Edit</button>
                <button class="btn btn-danger" onclick="deleteTimeSlot(${timeSlot.id})">Delete</button>
            </td>
        `;
        timeSlotList.appendChild(row);
    });
}

// Function to add a new time slot
function addTimeSlot() {
    // Implement logic to add a new time slot to your backend/API
    // After adding, call loadTimeSlots() to update the UI
    // For now, let's assume a successful addition with dummy data
    var newTimeSlot = {
        id: Math.floor(Math.random() * 1000), // Dummy ID for demonstration
        startTime: document.getElementById('startTime').value,
        endTime: document.getElementById('endTime').value
    };

    // Add the new time slot to the list
    var timeSlotList = document.getElementById('timeSlotList');
    var row = document.createElement('tr');
    row.innerHTML = `
        <td>${newTimeSlot.id}</td>
        <td>${newTimeSlot.startTime}</td>
        <td>${newTimeSlot.endTime}</td>
        <td>
            <button class="btn btn-primary" onclick="editTimeSlot(${newTimeSlot.id})">Edit</button>
            <button class="btn btn-danger" onclick="deleteTimeSlot(${newTimeSlot.id})">Delete</button>
        </td>
    `;
    timeSlotList.appendChild(row);

    // Clear the form after adding
    document.getElementById('startTime').value = '';
    document.getElementById('endTime').value = '';
}

// Function to edit a time slot
function editTimeSlot(timeSlotId) {
    // Implement logic to edit the selected time slot
    // You may open a modal or navigate to a different page for editing
    console.log('Edit Time Slot:', timeSlotId);
}

// Function to delete a time slot
function deleteTimeSlot(timeSlotId) {
    // Implement logic to delete the selected time slot from your backend/API
    // After deletion, call loadTimeSlots() to update the UI
    // For now, let's assume a successful deletion with dummy data
    console.log('Delete Time Slot:', timeSlotId);
    loadTimeSlots(); // Update the UI
}