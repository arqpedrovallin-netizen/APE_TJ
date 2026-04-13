// navigation.js

// Function to handle navigation and smooth transitions
function navigateTo(page) {
    // Add active class to the current link
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`.nav-link[href='${page}']`).classList.add('active');

    // Smooth transition
    const container = document.getElementById('page-container');
    container.classList.add('fade-out');
    setTimeout(() => {
        container.innerHTML = ''; // clear current page content
        loadPage(page); // load new page content
        container.classList.remove('fade-out');
    }, 300);
}

// Function to load the page content
function loadPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(html => {
            const container = document.getElementById('page-container');
            container.innerHTML = html;
        })
        .catch(error => console.error('Error loading page:', error));
}

// Event listeners for navigation links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const page = event.target.getAttribute('href');
        navigateTo(page);
    });
});