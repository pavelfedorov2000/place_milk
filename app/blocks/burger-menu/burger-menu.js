app.burger = {
    name: 'burger',
    description: 'burger-btn and burger-menu logic',
    init() {
        const body = document.querySelector('body');
        const burgerBtn = document.querySelector('.burger-btn');
        const burgerMenu = document.querySelector('.burger-menu');
        const burgerMenuClose = document.querySelector('.burger-menu__close');
        const menuLinks = document.querySelectorAll('.menu__link');

        burgerBtn.addEventListener('click', () => {
            body.classList.toggle('_lock');
            burgerBtn.classList.toggle('active');
            burgerMenu.classList.toggle('active');
        });
        burgerBtn.addEventListener('click', () => {
            body.classList.add('_lock');
            burgerBtn.classList.add('active');
            burgerMenu.classList.add('active');
        });
        burgerMenuClose.addEventListener('click', () => {
            body.classList.remove('_lock');
            burgerBtn.classList.remove('active');
            burgerMenu.classList.remove('active');
        });
    },
};
