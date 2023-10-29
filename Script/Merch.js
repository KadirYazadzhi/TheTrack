$(".card .aFavs").click(function () {
    $(this).parents(".card").toggleClass("esFav");
});
$(".card .alCarrito").click(function () {
    $(this).parents(".card").toggleClass("enCarrito");
});