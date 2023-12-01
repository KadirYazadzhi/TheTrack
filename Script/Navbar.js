document.addEventListener("DOMContentLoaded", function () {
    var cartIcon = document.getElementById('cartIcon');
    var navBar = document.querySelector('.nav');

    function hideCartIcon() {
        cartIcon.style.display = 'none';
    }

    function showCartIcon() {
        cartIcon.style.display = 'block';
    }

    function isMobileScreen() {
        return window.innerWidth < 768;
    }

    function updateCartIconVisibility() {
        if (isMobileScreen() && !navBar.classList.contains('openNav')) {
            hideCartIcon();
        } else {
            showCartIcon();
        }
    }

    window.addEventListener('load', updateCartIconVisibility);
    window.addEventListener('resize', updateCartIconVisibility);

    navBar.addEventListener('transitionend', updateCartIconVisibility);

    cartIcon.addEventListener('click', function () {
        if (isMobileScreen()) {
            navBar.classList.toggle('openNav');
            updateCartIconVisibility();
        }
    });
});





const nav = document.querySelector(".nav"),
    searchIcon = document.querySelector("#searchIcon"),
    navOpenBtn = document.querySelector(".navOpenBtn"),
    navCloseBtn = document.querySelector(".navCloseBtn");

searchIcon.addEventListener("click", () => {
    nav.classList.toggle("openSearch");
    nav.classList.remove("openNav");
    if (nav.classList.contains("openSearch")) {
        return searchIcon.classList.replace("uil-search", "uil-times");
    }
    searchIcon.classList.replace("uil-times", "uil-search");
});

navOpenBtn.addEventListener("click", () => {
    nav.classList.add("openNav");
    nav.classList.remove("openSearch");
    searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
    nav.classList.remove("openNav");
});


