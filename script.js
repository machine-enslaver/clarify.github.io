// Fetch and parse the CSV file
async function fetchCredentials() {
  const response = await fetch('credentials.csv');
  const text = await response.text();
  const rows = text.split('\n');
  const headers = rows[0].split(',');

  // Convert CSV rows to objects
  const credentials = rows.slice(1).map((row) => {
    const values = row.split(',');
    return headers.reduce((acc, header, index) => {
      acc[header.trim()] = values[index]?.trim();
      return acc;
    }, {});
  });

  return credentials;
}

// Login Form Logic
document.getElementById('loginForm')?.addEventListener('submit', async function (event) {
  event.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  // Fetch credentials from the CSV file
  const credentials = await fetchCredentials();

  // Validate the entered credentials
  const isValidUser = credentials.some(
    (user) => user.email === email && user.password === password
  );

  if (isValidUser) {
    window.location.href = "main.html"; // Redirect to the main page
  } else {
    document.getElementById('error-message').textContent = "Invalid email or password.";
  }
});
