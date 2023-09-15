const burger = document.querySelector(".burger");

burger.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("burger--active");
});
