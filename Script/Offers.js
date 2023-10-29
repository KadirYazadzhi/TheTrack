const slider = document.querySelector('.slider');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const containerWidth = document.querySelector('.container').offsetWidth;
let currentPosition = 0;

leftArrow.addEventListener('click', () => {
    currentPosition += containerWidth * 2; // Променете стойността на 2, ако искате да променяте по две карточки
    if (currentPosition > 0) {
        currentPosition = 0;
    }
    slider.style.transform = `translateX(${currentPosition}px)`;
});

rightArrow.addEventListener('click', () => {
    currentPosition -= containerWidth * 2; // Променете стойността на 2, ако искате да променяте по две карточки
    const maxPosition = -containerWidth * (document.querySelectorAll('.container').length - 2); // Променете 2 на броя на карточките минус 2
    if (currentPosition < maxPosition) {
        currentPosition = maxPosition;
    }
    slider.style.transform = `translateX(${currentPosition}px)`;
});

