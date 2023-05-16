const bodyStyle = window.getComputedStyle(document.body);
const gap = parseInt(bodyStyle.getPropertyValue("--grid-gap"));

const portfolioSlider = new Swiper(".portfolio-section__items", {
    // direction: "horizontal",
    slidesPerView: 3,
    spaceBetween: gap,
    loop: "true",
    grabCursore: "true",
    // slidePerGroup: 3,
    // slidePerGroup: 3,
    navigation: {
        nextEl: ".portfolio-section__next",
        prevEl: ".portfolio-section__prev",
    },
});
