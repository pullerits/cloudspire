// JavaScript to handle dropdown toggle
document.getElementById("hamburger-menu").addEventListener("click", function () {
    const dropdown = document.getElementById("mobile-dropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});

// JavaScript to toggle the sub-dropdown for services
document.getElementById("products-link").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent navigation if the link is clicked
    const subDropdown = document.getElementById("products-dropdown");
    subDropdown.style.display = subDropdown.style.display === "block" ? "none" : "block";
});