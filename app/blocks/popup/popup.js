app.popup = {
    name: 'popup',
    description: 'popup',
    init() {
        // popups
        //jquery
        /* $('.open-popup').on('click', function () {
            $('body').addClass('_lock');
            $('.overlay').fadeIn('slow');
            $(`#${$(this).data('popup')}-popup`).fadeIn('slow');
        });
        $('.popup__close').on('click', function () {
            $('body').removeClass('_lock');
            $('.overlay').fadeOut('slow');
            $(this).parent().fadeIn('slow');
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
    }
}
