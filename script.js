// script.js
document.getElementById('textbox').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    const text = this.value; // Get the text from the input box
    if (text.trim() !== '') {
      processText(text); // Call a function to process the text
      this.value = ''; // Clear the text box
    }
  }
});

function processText(inputText) {
  console.log('Processing text:', inputText);
  // Add further processing logic here
}

// Dark theme toggle
const themeSwitcher = document.getElementById('themeSwitcher');
themeSwitcher.addEventListener('change', function() {
  document.body.classList.toggle('dark-theme', this.checked);
});
