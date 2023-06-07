app.burger = {
    name: 'burger',
    description: 'burger-btn and burger-menu logic',
    init() {
        const body = document.querySelector('body');
        const burgerBtn = document.querySelector('.jsOpenMenu');
        const dropdownMenu = document.querySelector('.dropdown-menu');
        //const burgerMenuClose = document.querySelector('.burger-menu__close');

        burgerBtn.addEventListener('click', () => {
            if (burgerBtn.getAttribute('aria-expanded') === 'false') {
                body.classList.add('_lock');
                burgerBtn.setAttribute('aria-expanded', true);
                dropdownMenu.classList.add('active');
            } else {
                body.classList.remove('_lock');
                burgerBtn.setAttribute('aria-expanded', false);
                dropdownMenu.classList.remove('active');
            }
        });

        /* burgerBtn.addEventListener('click', () => {
            body.classList.add('_lock');
            burgerBtn.classList.add('active');
            burgerMenu.classList.add('active');
        });

        burgerMenuClose.addEventListener('click', () => {
            body.classList.remove('_lock');
            burgerBtn.classList.remove('active');
            burgerMenu.classList.remove('active');
        }); */
    },
};
