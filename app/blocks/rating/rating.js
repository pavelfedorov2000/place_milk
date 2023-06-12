app.rating = {
    name: 'rating',
    description: 'your script description',
    init() {
        const ratingFilterStars = document.querySelector('.rating-filter__stars');

        if (!ratingFilterStars) return;

        const ratingFilterCheckStars = ratingFilterStars.querySelectorAll('.checkbox__input');
        const starsCount = ratingFilterCheckStars.length;

        function checkGreaterStars(index) {
            for (let i = index + 1; i < starsCount; i++) {
                if (ratingFilterCheckStars[i].checked) {
                    ratingFilterCheckStars[i].checked = false;
                }
            }
        }

        function checkLowerStars(index) {
            for (let i = index - 1; i >= 0; i--) {
                if (!ratingFilterCheckStars[i].checked) {
                    ratingFilterCheckStars[i].checked = true;
                }
            }
        }

        ratingFilterCheckStars.forEach((star, index) => {
            star.addEventListener('change', () => {
                if (!star.checked) {
                    checkGreaterStars(index);
                }

                if (star.checked) {
                    checkLowerStars(index);
                }
            });
        });
    },
};
