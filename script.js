// Function to toggle between light and dark themes
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');
  
    // Update theme toggle icon
    const themeToggleIcon = document.getElementById('theme-toggle-icon');
    if (body.classList.contains('dark-mode')) {
      themeToggleIcon.src = 'dark-mode-icon.png';
    } else {
      themeToggleIcon.src = 'light-mode-icon.png';
    }
  }
  
  // Event listener for theme toggle button click
  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
  
