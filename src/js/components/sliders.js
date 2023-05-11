const swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".portfolio-section__next",
        prevEl: ".portfolio-section__prev",
    },
});
