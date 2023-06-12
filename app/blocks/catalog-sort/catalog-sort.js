app.catalogSort = {
    name: 'catalogSort',
    description: 'your script description',
    init() {
        const catalogSort = document.querySelector('.catalog-sort');

        if (!catalogSort) return;

        const catalogSortItems = catalogSort.querySelectorAll('.catalog-sort-item');

        if (!catalogSortItems.length) return;

        catalogSortItems.forEach((item) => {
            item.addEventListener('click', () => {
                const catalogSortItemActive = catalogSort.querySelector('.catalog-sort-item.active');
                catalogSortItemActive.classList.remove('active');

                if (!item.classList.contains('active')) {
                    item.classList.add('active');
                }
            });
        });
    },
};
