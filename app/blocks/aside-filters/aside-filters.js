app.asideFilters = {
    name: 'asideFilters',
    description: 'your script description',
    init() {
        const asideFilters = document.querySelector('.aside-filters');
        const filterButton = document.querySelector('.filter-btn');

        if (!asideFilters || !filterButton) return;

        filterButton.addEventListener('click', () => {
            asideFilters.classList.add('active');
        });

        const asideFiltersClose = asideFilters.querySelector('.aside-filters__close');

        asideFiltersClose.addEventListener('click', () => {
            asideFilters.classList.remove('active');
        });

        const rangeSlider = document.getElementById('range-slider');

        if (!rangeSlider) return;

        noUiSlider.create(rangeSlider, {
            start: [0, 20000],
            connect: true,
            range: {
                'min': 0,
                'max': 60000
            }
        });

        rangeSlider.noUiSlider.on('update', function (values) {
            const range = rangeSlider.closest('.range');
            const rangeValueFrom = range.querySelector('.range__value--from').querySelector('.range__value-text').querySelector('span');
            const rangeValueTo = range.querySelector('.range__value--to').querySelector('.range__value-text').querySelector('span');

            if (!rangeValueFrom || !rangeValueTo) return;

            rangeValueFrom.innerHTML = `${Math.floor(values[0])}`;
            rangeValueTo.innerHTML = `${Math.floor(values[1])}`;
        });
    },
};
