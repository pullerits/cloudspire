// navbar.js

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Select the Products dropdown toggle button
    const dropdownToggle = document.querySelector('.navbar-products .dropdown-toggle');
    
    // Select the navbar-products div
    const navbarProducts = document.querySelector('.navbar-products');
  
    // Toggle the dropdown menu on button click
    dropdownToggle.addEventListener('click', function(event) {
      event.stopPropagation(); // Prevent event from bubbling up
      navbarProducts.classList.toggle('active');
    });
  
    // Close the dropdown menu when clicking outside
    document.addEventListener('click', function() {
      navbarProducts.classList.remove('active');
    });
  
    // Optional: Close the dropdown when pressing the Escape key
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape') {
        navbarProducts.classList.remove('active');
      }
    });
  });
  