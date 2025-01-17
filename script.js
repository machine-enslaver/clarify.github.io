// Fetch and parse the CSV file
async function fetchCredentials() {
  const response = await fetch('credentials.csv');
  const text = await response.text();
  const rows = text.split('\n').filter(row => row.trim() !== ''); // Remove empty rows
  const headers = rows[0].split('\t').map(header => header.trim()); // Use tab as separator for your file

  // Convert CSV rows to objects
  const credentials = rows.slice(1).map((row) => {
    const values = row.split('\t').map(value => value.trim()); // Split by tab and trim values
    return headers.reduce((acc, header, index) => {
      acc[header] = values[index] || ''; // Handle missing values
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