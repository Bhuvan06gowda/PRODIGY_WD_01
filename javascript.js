// Change navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = "10px 10%";
        navbar.style.background = "#1a110f"; // Darker on scroll
    } else {
        navbar.style.padding = "20px 10%";
        navbar.style.background = "rgba(44, 30, 26, 0.95)";
    }
});

// Simple Mobile Menu Toggle Logic
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // You would add CSS for .nav-links.active to show a mobile overlay
    alert("Mobile menu clicked! (Connect your CSS for full mobile view)");
});