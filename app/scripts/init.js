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
    app.scrollNav.init();

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
});