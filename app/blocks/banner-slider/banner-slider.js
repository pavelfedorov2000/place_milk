app.bannerSlider = {
    name: 'bannerSlider',
    description: 'your script description',
    init() {
        new Swiper(".banner-slider", {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 20,
            speed: 1000,
            navigation: {
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
            },
        });
    },
};