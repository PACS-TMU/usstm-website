// Loading the navbar
const navbar = document.querySelector('nav');
fetch('/components/navbar.html')
    .then(response => response.text())
    .then(data => {
        navbar.innerHTML = data;
    });

// Loading the footer
const footer = document.querySelector('footer');
fetch('/components/footer.html')
    .then(response => response.text())
    .then(data => {
        footer.innerHTML = data;
    });
