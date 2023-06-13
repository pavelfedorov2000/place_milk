window.addEventListener('DOMContentLoaded', () => {
    app.burger.init();
    app.bannerSlider.init();
    app.productCard.init();
    app.fileUpload.init();
    app.mediaBlock.init();
    app.select.init();
    app.asideFilters.init();
    app.datepicker.init();
    app.rating.init();
    app.catalogSort.init();

    document.querySelectorAll('[data-section]').forEach((btn) => {
        btn.addEventListener('click', () => {
            if (btn.classList.contains('scroll-nav__btn')) {
                document.querySelector('.scroll-nav__btn.active').classList.remove('active');
                btn.classList.add('active');
            }

            window.scrollTo({
                top: document.querySelector(`#${btn.getAttribute('data-section')}`).offsetTop,
                behavior: "smooth"
            });
        });
    });

    function checkAll() {
        const checkAll = document.querySelector('.lk-page__check-all');

        if (!checkAll) return;

        const checkAllInput = checkAll.querySelector('.checkbox__input');
        const goods = checkAll.closest('.lk-page').querySelector('.lk-goods').querySelectorAll('.good-card');

        if (!checkAllInput) return;

        checkAllInput.addEventListener('change', () => {
            const isChecked = checkAllInput.checked;

            goods.forEach((good) => {
                const goodCheck = good.querySelector('.checkbox__input');

                if (isChecked) {
                    checkAllInput.removeAttribute('checked');
                    goodCheck.setAttribute('checked', true);

                } else {
                    checkAllInput.setAttribute('checked', true);
                    goodCheck.removeAttribute('checked');
                }
            });
        });
    }

    checkAll();

    //js
    /* const overlay = document.querySelector('.overlay');
    const openPopup = document.querySelectorAll('.open-popup');
    const popup = document.querySelector('#popup');
    const thanksPopup = document.querySelector('#thanks');
    const popupClose = document.querySelectorAll('.popup__close');
    openPopup.addEventListener('click', function () {
        body.classList.add('_lock');
        overlay.style.display = 'block';
        document.getElementById(this.getAttribute('data-popup')).style.display = 'block';
    });
    popupClose.forEach(close => {
        close.addEventListener('click', () => {
            overlay.style.display = 'none';
            close.parentElement.style.display = 'none';
            body.classList.remove('_lock');
        });
    });
    document.querySelectorAll('.popup').forEach(popup => {
        let popupForm = popup.querySelector('form');
        popupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            popupForm.querySelectorAll('input').forEach(input => {
                input.value = '';
            });
            popupForm.parentElement.style.display = 'none';
            thanksPopup.style.display = 'block';
        });
    }); */

    /* const searchForm = document.querySelector('.search-form');
    const searchInput = searchForm.querySelector('.search-form__input');
    const searchBtn = document.querySelector('.header__search-btn');
    searchBtn.addEventListener('click', function () {
        searchForm.classList.add('search-form--active');
    });
    
    document.addEventListener('mouseup', (e) => {
        if (searchForm != e.target && searchInput != e.target) {
            searchForm.classList.remove('search-form--active');
        }
    }); */
});