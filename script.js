// Function to handle smooth scrolling
function scrollToSection() {
    // Adjust this value based on where you want to scroll
    const targetSection = document.querySelector('.about-summary'); // Targeting the About section
    if (targetSection) {
        window.scrollTo({
            top: targetSection.offsetTop, // Get the vertical position of the target section
            behavior: 'smooth' // Smooth scroll effect
        });
    }
}

// Optionally, you can add more functionality here, like form validation, etc.
