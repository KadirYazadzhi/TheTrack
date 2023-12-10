var swiper = new Swiper('.product-slider', {
    spaceBetween: 30,
    effect: 'fade',
    // initialSlide: 2,
    loop: false,
    navigation: {
        nextEl: '.next',
        prevEl: '.prev'
    },
    // mousewheel: {
    //     // invert: false
    // },
    on: {
        init: function(){
            var index = this.activeIndex;

            var target = $('.product-slider__item').eq(index).data('target');

            console.log(target);

            $('.product-img__item').removeClass('active');
            $('.product-img__item#'+ target).addClass('active');
        }
    }

});

swiper.on('slideChange', function () {
    var index = this.activeIndex;

    var target = $('.product-slider__item').eq(index).data('target');

    console.log(target);

    $('.product-img__item').removeClass('active');
    $('.product-img__item#'+ target).addClass('active');

    if(swiper.isEnd) {
        $('.prev').removeClass('disabled');
        $('.next').addClass('disabled');
    } else {
        $('.next').removeClass('disabled');
    }

    if(swiper.isBeginning) {
        $('.prev').addClass('disabled');
    } else {
        $('.prev').removeClass('disabled');
    }
});

$(".js-fav").on("click", function() {
    $(this).find('.heart').toggleClass("is-active");
});







// Function to show the modal
function showModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

// Function to handle "ADD TO CART" button click
function ShowCopyModal () {
    const textModal = document.getElementById('textModal')
    const butttonModal = document.getElementById('buttonModal')
    textModal.style.color = 'white'
    textModal.innerHTML = 'Изберете времетраене преди да добавите в количката!'
    butttonModal.innerHTML = 'ОК'
    showModal();
}
function addToCart() {
    // Check which radio button is selected
    const selectedProduct = document.querySelector('input[type = "radio"]:checked');


    if (selectedProduct) {
        // Show the modal when a radio button is selected
        showModal();
    } else {
       ShowCopyModal()
    }

}




