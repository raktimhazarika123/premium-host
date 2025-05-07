// Initialize AOS (Animate On Scroll) library
AOS.init({
    once: true, // Animations occur only once
    offset: 100, // Offset (in pixels) from the original trigger point
    delay: 0, // Delay before animation starts
    duration: 800, // Animation duration
    easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)', // Custom easing function
    startEvent: 'DOMContentLoaded', // Event that triggers initialization
    disable: function() {
        return window.innerWidth < 768; // Disable animations on mobile
    }
});

// Navbar Scroll Effect
// Adds/removes 'scrolled' class to header based on scroll position
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Hamburger Menu Toggle
// Toggles mobile navigation menu
const hamburger = document.querySelector('.hamburger');
const navUl = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navUl.classList.toggle('active');
});

// Close Menu on Link Click
// Closes mobile menu when a navigation link is clicked
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navUl.classList.remove('active');
    });
});

// Back to Top Functionality
// Smooth scroll to top when "Get Started" buttons are clicked
document.querySelectorAll('.back-to-top').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});