const mySwiper = new Swiper('.swiper', {
    loop: true,
    speed: 600,
    pagination: {
        el: ".swiper-pagination"
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    }
});