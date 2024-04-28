  // Fetch and insert the head content
  fetch('head.html')
  .then(response => response.text())
  .then(html => {
    headElement.innerHTML += html;
  });