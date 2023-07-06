const portfolioTabsNav = document.querySelector(".portfolio-tabs-nav");

portfolioTabsNav.addEventListener("click", (e) => {
    const target = e.target;

    if (target.classList.contains("portfolio-tabs-nav__btn")) {
        console.log("asd");
        const path = target.dataset.path;

        document.querySelectorAll(".portfolio-tabs-nav__btn").forEach((el) => {
            el.classList.remove("portfolio-tabs-nav__btn--active");
        });
        target.classList.add("portfolio-tabs-nav__btn--active");

        document.querySelectorAll(".portfolio-tabs__item").forEach((el) => {
            el.style.display = "none";
            el.classList.remove("portfolio-tabs__item--visible");
        });

        document.querySelectorAll(`[data-target="${path}"]`).forEach((el) => {
            el.closest(".portfolio-tabs__item").classList.add(
                "portfolio-tabs__item--visible"
            );
        });

        if (path == "all") {
            document.querySelectorAll(".portfolio-tabs__item").forEach((el) => {
                el.style.display = "none";
                el.classList.add("portfolio-tabs__item--visible");
            });
        }
    }
});
