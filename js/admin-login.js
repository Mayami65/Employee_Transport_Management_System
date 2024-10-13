document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('adminLoginForm').addEventListener('submit', function (event) {
        event.preventDefault();

        // Fetch admin login credentials
        var adminUsername = document.getElementById('adminUsername').value;
        var adminPassword = document.getElementById('adminPassword').value;

        // Add your logic for admin authentication (e.g., sending data to a server)
        // For demonstration purposes, redirect to the admin dashboard page
        if (adminUsername === 'Admin' && adminPassword === 'admin123') {
            window.location.href = '/Admin/dashboard.html'; // Replace with the actual path
        } else {
            alert('Invalid credentials. Please try again.'); // Display an alert for invalid credentials
        }
    });
});
