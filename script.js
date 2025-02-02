let menuButton = document.getElementById("menu-button");
let mobileMenu = document.getElementById("mobile-menu");
menuButton.addEventListener("click", () => {
    if (mobileMenu.style.display == "none") {
        mobileMenu.style.display = "flex";
        mobileMenu.style.animation = "fade ease-in-out 0.5s";
    }
    else {
        mobileMenu.style.display = "none";
    }
})
