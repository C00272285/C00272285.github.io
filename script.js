// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    // Function to handle highlighting the current section in the nav bar
    function activateLink() {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');
    }

    // Event listener for scroll to activate link
    window.addEventListener('scroll', activateLink);
});
