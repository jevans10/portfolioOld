// head.js

document.addEventListener("DOMContentLoaded", function() {
  const headElement = document.querySelector('head');

  // Fetch and insert the head content
  fetch('head.html')
    .then(response => response.text())
    .then(html => {
      headElement.innerHTML += html;
    });
});
