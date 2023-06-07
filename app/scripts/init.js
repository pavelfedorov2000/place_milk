window.addEventListener('DOMContentLoaded', () => {
    app.burger.init();
    app.bannerSlider.init();
    app.productCard.init();
    app.mediaBlock.init();
    app.select.init();
    app.asideFilters.init();

    document.querySelectorAll('[data-section]').forEach((btn) => {
        btn.addEventListener('click', () => {
            window.scrollTo({
                top: document.querySelector(`#${btn.getAttribute('data-section')}`).offsetTop,
                behavior: "smooth"
            });
        });
    });

    /* const animatedItems = document.querySelectorAll('.animated');

    const callback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target)
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }

    const options = {
        // root: по умолчанию window, но можно задать любой элемент-контейнер
        rootMargin: '0px 0px 75px 0px',
        threshold: 0,
    };

    const observer = new IntersectionObserver(callback, options);

    animatedItems.forEach((item) => observer.observe(item)); */

    // Custom js select
    /* const selectItem = document.querySelectorAll('.select');
    // Toggle menu
    selectItem.forEach((select) => {
        const selectTitle = select.querySelector('.select__title');
        const selectLabels = select.querySelectorAll('.select__label');

        selectTitle.addEventListener('click', () => {
            if ('active' === select.getAttribute('data-state')) {
                select.setAttribute('data-state', '');
            } else {
                select.setAttribute('data-state', 'active');
            }
        });

        selectLabels.forEach((label) => {
            label.addEventListener('click', (e) => {
                selectTitle.textContent = e.target.textContent;
                select.setAttribute('data-state', '');
            });
        })
    }); */

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