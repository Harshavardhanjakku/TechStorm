new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 20,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {   
            slidesPerView: 1.5, 
            centeredSlides: true,
        },
        480: { 
            slidesPerView: 2,
        },
        768: { 
            slidesPerView: 2.5,
        },
        1024: { 
            slidesPerView: 3,
        }
    }
});
