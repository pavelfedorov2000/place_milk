app.scrollNav = {
    name: 'scrollNav',
    description: 'your script description',
    init() {
        const attr = 'data-section';
        const scrollBtns = document.querySelectorAll(`[${attr}]`);

        if (!scrollBtns.length) return;

        scrollBtns.forEach((btn) => {
            btn.addEventListener('click', () => {
                if (btn.classList.contains('scroll-nav__btn')) {
                    document.querySelector('.scroll-nav__btn.active').classList.remove('active');
                    btn.classList.add('active');
                }

                window.scrollTo({
                    top: document.querySelector(`#${btn.getAttribute(attr)}`).offsetTop + document.querySelector('.header').getBoundingClientRect().height,
                    behavior: "smooth"
                });
            });
        });
    },
};
