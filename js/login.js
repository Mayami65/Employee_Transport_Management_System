document.addEventListener('DOMContentLoaded', function () {
    // Login form submission
    document.getElementById('loginForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting normally

        // Fetch form values
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        // Check if username and password are not empty
        if (username.trim() !== '' && password.trim() !== '') {
            // Redirect to the employee dashboard page
            window.location.href = '/html/em-Dashboard.html';
        } else {
            // Display an error message if username or password is empty
            alert('Please enter username and password.');
        }
    });

    // Registration success message
    document.getElementById('registrationForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting normally

        // Add your logic for handling registration (e.g., sending data to a server, validation, etc.)
        // ...

        // For demonstration purposes, show the registration success message
        document.getElementById('registrationSuccessMessage').style.display = 'block';
    });
});
