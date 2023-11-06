var slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("productSlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


// Избираме бутона с клас "next"
const nextButton = document.querySelector('.next');

// Избираме div-овете с клас "info" и "delivery-modal"
const infoDiv = document.querySelector('.info');
const deliveryDiv = document.querySelector('.delivery-modal');

// Добавяме събитие "click" на бутона
nextButton.addEventListener('click', function() {
    // Смяна на стиловете на div-овете
    if (infoDiv.style.display === 'none' || infoDiv.style.display === '') {
        infoDiv.style.display = 'block';
        deliveryDiv.style.display = 'none';
    } else {
        infoDiv.style.display = 'none';
        deliveryDiv.style.display = 'block';
    }
});
