// Select elements
const button = document.getElementById('animateButton');
const userPreferenceDisplay = document.getElementById('userPreference');

// Function to save user preference
function saveUserPreference(color) {
  localStorage.setItem('favoriteColor', color);
  displayUserPreference();
}

// Function to retrieve and display user preference
function displayUserPreference() {
  const favoriteColor = localStorage.getItem('favoriteColor');
  if (favoriteColor) {
    userPreferenceDisplay.textContent = `Your favorite color is: ${favoriteColor}`;
    document.body.style.backgroundColor = favoriteColor; // Change background color dynamically
  } else {
    userPreferenceDisplay.textContent = 'No favorite color saved.';
  }
}

// Trigger animation on button click
button.addEventListener('click', () => {
  button.classList.add('bounce-animation'); // Add animation class

  // Remove animation class after the animation ends
  setTimeout(() => {
    button.classList.remove('bounce-animation');
  }, 1000);

  // Save a random color as user preference
  const randomColor = getRandomColor();
  saveUserPreference(randomColor);
});

// Generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Display user preference on page load
displayUserPreference();