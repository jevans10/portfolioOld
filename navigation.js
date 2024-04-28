// navigation.js

document.addEventListener("DOMContentLoaded", function() {
  const navContainer = document.getElementById('nav-container');

  // Fetch and insert the navigation bar
  fetch('navigation.html')
    .then(response => response.text())
    .then(html => {
      navContainer.innerHTML = html;
    });
});
