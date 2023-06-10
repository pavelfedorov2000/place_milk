app.datepicker = {
    name: 'datepicker',
    description: 'your script description',
    init() {
        const datepicker = document.querySelector('.datepicker');
        const datepickerInput = datepicker.querySelector('input[type=date]');
        const datepickerValue = datepicker.querySelector('.datepicker__value');

        function formatDate(date) {
            return date.split('-').reverse().join('.');
        }

        datepicker.addEventListener('change', () => {
            datepickerValue.textContent = formatDate(datepickerInput.value);
        });
    },
};
