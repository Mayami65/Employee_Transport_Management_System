document.addEventListener('DOMContentLoaded', function() {
    // Functionality for adding pick-up and drop-off locations
    var pickupInput = document.getElementById('pickupLocation');
    var dropoffInput = document.getElementById('dropoffLocation');
    var addLocationButton = document.getElementById('addLocationButton');
    var successMessage = document.getElementById('successMessage');

    addLocationButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent form submission

        var pickupValue = pickupInput.value.trim();
        var dropoffValue = dropoffInput.value.trim();

        if (pickupValue !== '' && dropoffValue !== '') {
            // Create list item with pick-up and drop-off locations
            var listItem = document.createElement('li');
            listItem.classList.add('list-group-item'); // Add list-group-item class
            listItem.innerHTML = `
                Booking - Date: ${getCurrentDate()}<br>
                Pick-up: ${pickupValue}<br>
                Drop-off: ${dropoffValue}
            `;
            document.querySelector('.card-body ul').appendChild(listItem);

            // Clear input fields
            pickupInput.value = '';
            dropoffInput.value = '';

            // Display success message
            successMessage.textContent = 'Location successfully added!';

            // Clear success message after 3 seconds
            setTimeout(function() {
                successMessage.textContent = '';
            }, 3000);
        } else {
            alert('Please enter both pick-up and drop-off locations.');
        }
    });

    // Functionality for selecting time slot
    var timeSelect = document.getElementById('Time');
    var submitButton = document.querySelector('.col-md-6 .card-body button[type="submit"]');

    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent form submission

        var selectedTime = timeSelect.value;

        if (selectedTime !== '') {
            alert('Time slot selected: ' + selectedTime);
            // You can add further actions here, like sending the selected time to the server
        } else {
            alert('Please select a time slot.');
        }
    });

    // Function to get current date in the format: Month Day, Year
    function getCurrentDate() {
        var today = new Date();
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        return today.toLocaleDateString('en-US', options);
    }
});
