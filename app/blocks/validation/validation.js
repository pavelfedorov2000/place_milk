app.validation = {
    name: 'validation',
    description: 'your script description',
    init() {
        const forms = document.querySelectorAll('.js-form');

        let defaultConfig = {
            // class of the parent element where the error/success class is added
            classTo: 'form-item',
            errorClass: 'error',
            successClass: 'success',
            // class of the parent element where error text element is appended
            errorTextParent: 'form-item',
            // type of element to create for the error text
            errorTextTag: 'span',
            // class of the error text element
            errorTextClass: 'error-text'
        };

        // create the pristine instance
        forms.forEach((form) => {
            let pristine = form && new Pristine(form, defaultConfig);

            form.addEventListener('submit', function (e) {
                e.preventDefault();

                pristine.validate(); // returns true or false
            });
        });

        //const phoneInput = document.querySelector('input[type=tel]');

        /* pristine.addValidator(phoneInput, function (value) {
            if (value.replace(/\D+/g, '').length > 0) {
                return true;
            }
            return false;
        }, "Некорректный номер", 2, false); */

        // phone mask
        //$("input[type=tel]").mask("+375 (99) 999-99-99");


        /* $('form').on('sumbit', function (e) {
            e.preventDefault();

            $.ajax({
                type: "POST",
                url: "send.php",
                data: $(this).serialize(),
            });
            $('.form__input').removeClass('valid');
            $(this).find("input").val("");
            $('form').trigger('reset');
            return false;
        }); */

        /* $.fn.setCursorPosition = function (pos) {
            if ($(this).get(0).setSelectionRange) {
                $(this).get(0).setSelectionRange(pos, pos);
            } else if ($(this).get(0).createTextRange) {
                var range = $(this).get(0).createTextRange();
                range.collapse(true);
                range.moveEnd('character', pos);
                range.moveStart('character', pos);
                range.select();
            }
        }; */

        // input mask
        /* const phoneInput = document.querySelector('#phone');
        const maskOptions = {
            mask: '+{7}(000)000-00-00',
            lazy: false
        }
    
        let mask;
    
        phoneInput.addEventListener('focus', function () {
            mask = new IMask(phoneInput, maskOptions);
        });
    
        phoneInput.addEventListener('blur', function () {
            if (this.value.match('_')) {
                mask.masked.reset();
            }
        }); */

        // phone mask
        $("input[name=phone]").on('click', function () {
            $(this).setCursorPosition(4);
        }).mask("+7 (999) 999-99-99");
    },
};