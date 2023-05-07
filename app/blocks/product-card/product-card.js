app.productCard = {
    name: 'productCard',
    description: 'your script description',
    init() {
        const productCardThumbs = new Swiper(".product-card__thumbs", {
            slidesPerView: 'auto',
            spaceBetween: 22,
            speed: 1000,
            navigation: {
                nextEl: "#thumbs-slider .swiper-button-next",
                prevEl: "#thumbs-slider .swiper-button-prev",
            },
        });

        new Swiper(".product-card__slider", {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 22,
            speed: 1000,
            thumbs: {
                swiper: productCardThumbs
            },
        });

        new Swiper(".collection-slider", {
            slidesPerView: 1,
            spaceBetween: 38.75,
            speed: 1000,
            navigation: {
                nextEl: "#collection-goods .swiper-button-next",
                prevEl: "#collection-goods .swiper-button-prev",
            },
            breakpoints: {
                480: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                992: {
                    slidesPerView: 4,
                },
                1101: {
                    slidesPerView: 5,
                },
                1280: {
                    slidesPerView: 6,
                }
            },
        });

        new Swiper(".buyers-photos__slider", {
            loop: true,
            slidesPerView: 4,
            spaceBetween: 12,
            speed: 1000,
            navigation: {
                nextEl: "#buyers-photos .swiper-button-next",
                prevEl: "#buyers-photos .swiper-button-prev",
            },
        });
    },
};
