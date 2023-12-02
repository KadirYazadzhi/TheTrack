document.addEventListener("DOMContentLoaded", function () {
    var favButtons = document.querySelectorAll(".card .aFavs");
    var cartButtons = document.querySelectorAll(".card .alCarrito");

    favButtons.forEach(function (favButton) {
        favButton.addEventListener("click", function () {
            var card = this.closest(".card");
            if (card) {
                card.classList.toggle("esFav");
            }
        });
    });

    cartButtons.forEach(function (cartButton) {
        cartButton.addEventListener("click", function () {
            var card = this.closest(".card");
            if (card) {
                card.classList.toggle("enCarrito");
            }
        });
    });
});