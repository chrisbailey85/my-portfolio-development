let navCheckbox = document.querySelector('#navbar-toggle');

let navLinks = document.querySelectorAll('.navbar-link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navCheckbox.checked = false;
    })
})
const labels = document.querySelectorAll('label');
labels.forEach(label => {
    label.innerHTML = label.innerText
        .split("")
        .map((letter, index) => `<span style="transition-delay:${index * 50}ms">${letter}</span>`)
        .join("");
})