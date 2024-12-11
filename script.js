// Toggle Menu for Mobile
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Scroll-to-Top Button
const scrollToTopButton = document.getElementById('scroll-to-top');

window.onscroll = function () {
    if (window.scrollY > 200) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
};

scrollToTopButton.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.onclick = function () {
    document.body.classList.toggle('dark-mode');
};
