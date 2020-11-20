let navCheckbox = document.querySelector('#navbar-toggle');

let navLinks = document.querySelectorAll('.navbar-link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navCheckbox.checked = false;
    })
})