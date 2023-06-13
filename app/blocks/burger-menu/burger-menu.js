app.burger = {
    name: 'burger',
    description: 'burger-btn and burger-menu logic',
    init() {
        const html = document.querySelector('html');
        const body = document.querySelector('body');
        const burgerBtn = document.querySelector('.jsOpenMenu');
        const dropdownMenu = document.querySelector('.dropdown-menu');

        burgerBtn.addEventListener('click', () => {
            if (burgerBtn.getAttribute('aria-expanded') === 'false') {
                if (navigator.userAgent.includes('Safari')) {
                    html.classList.add('disable-fix');
                }
                body.classList.add('_lock');
                burgerBtn.setAttribute('aria-expanded', true);
                dropdownMenu.classList.add('active');
            } else {
                if (navigator.userAgent.includes('Safari')) {
                    html.classList.remove('disable-fix');
                }
                body.classList.remove('_lock');
                burgerBtn.setAttribute('aria-expanded', false);
                dropdownMenu.classList.remove('active');
            }
        });
    },
};
