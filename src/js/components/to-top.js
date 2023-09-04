const scroll = new SmoothScroll(".to-top");
const toTop = document.querySelector(".to-top");
const heroHeight = document.querySelector(".hero").offsetHeight;

const isVisibleToTop = (y = 0) => {
    if (y >= heroHeight) {
        toTop.classList.add("to-top--active");
        console.log("added to-top--active");
    } else {
        toTop.classList.remove("to-top--active");
        console.log("remove");
    }
};

isVisibleToTop(window.scrollY);

window.addEventListener("scroll", () => {
    let y = window.scrollY;

    isVisibleToTop(y);
});
