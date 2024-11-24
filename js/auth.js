// Random username and password for login validation
const VALID_USERNAME = "admin";
const VALID_PASSWORD = "securePass123";

// Function to toggle password visibility
function togglePassword() {
    const passwordField = document.getElementById("password");
    const eyeIcon = document.getElementById("eyeIcon");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        eyeIcon.innerHTML = `
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825a10.05 10.05 0 01-1.875.175c-4.478 0-8.268-2.943-9.542-7 1.274-4.057 5.064-7 9.542-7 1.378 0 2.688.265 3.875.75M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.25 20.25L3.75 3.75" />
        `;
    } else {
        passwordField.type = "password";
        eyeIcon.innerHTML = `
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        `;
    }
}

// Function to handle form submission
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!username || !password) {
        alert("Please fill in both username and password fields.");
        return;
    }

    // Login validation with random username and password
    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
        alert("Login successful!");
        // Redirect to dashboard or next page
        window.location.href = "../pages/dashboard.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
});
