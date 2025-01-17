// Mock fetch function to simulate server validation
async function fetchCredentials() {
  // Simulating reading credentials from the credentials.csv file
  const credentials = [
    { email: "user1@example.com", password: "password1" },
    { email: "user2@example.com", password: "password2" },
  ];
  return credentials;
}

// Login Form Logic
document.getElementById("loginForm")?.addEventListener("submit", async function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Fetch credentials (this should be replaced with a server call)
  const credentials = await fetchCredentials();

  // Validate credentials
  const isValidUser = credentials.some(
    (user) => user.email === email && user.password === password
  );

  if (isValidUser) {
    window.location.href = "main.html"; // Redirect to the main page
  } else {
    document.getElementById("error-message").textContent = "Invalid email or password.";
  }
});
