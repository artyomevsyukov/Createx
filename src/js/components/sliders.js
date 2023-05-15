const bodyStyle = window.getComputedStyle(document.body);
const gap = parseInt(bodyStyle.getPropertyValue("--grid-gap"));
console.log(gap);

const portfolioSlider = new Swiper(".portfolio-section__items", {
    slidesPerView: 3,
    spaceBetween: gap,
    // loop: true,
    // slidePerGroup: 3,
    navigation: {
        nextEl: ".portfolio-section__next",
        prevEl: ".portfolio-section__prev",
    },
});
