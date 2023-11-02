// Loading the navbar
const header = document.querySelector('header');
fetch('/components/header.html')
    .then(response => response.text())
    .then(data => {
        header.innerHTML = data;
    });

// Loading the footer
const footer = document.querySelector('footer');
fetch('/components/footer.html')
    .then(response => response.text())
    .then(data => {
        footer.innerHTML = data;
    });
