// Selector de tema claro/oscuro
const themeToggle = document.getElementById('theme-toggle-checkbox');
const themeToggleLabel = document.querySelector('.theme-toggle-label');

themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-theme');
});

themeToggleLabel.addEventListener('click', () => {
    themeToggle.click();
});

// Menú hamburguesa
const menuItems = document.querySelectorAll('.menu-item')

const menuBtn = document.querySelector('#menu-btn')

menuBtn.addEventListener('click', function () {
    document.body.classList.toggle('mobile-menu-active')
})




