let container = document.querySelector(".setting-container");
let menu = document.querySelector(".settings-menu");

container.addEventListener("mouseenter", function () {
    menu.classList.add("show");
});

container.addEventListener("mouseleave", function () {
    menu.classList.remove("show");
});