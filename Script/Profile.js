var messageBox = document.querySelector('.js-message');
var btn = document.querySelector('.js-message-btn');
var card = document.querySelector('.js-profile-card');
var closeBtn = document.querySelectorAll('.js-message-close');

btn.addEventListener('click',function (e) {
    e.preventDefault();
    card.classList.add('active');
});

closeBtn.forEach(function (element, index) {
    console.log(element);
    element.addEventListener('click',function (e) {
        e.preventDefault();
        card.classList.remove('active');
    });
});

const btnActivate = document.getElementById('language');
const btnActivateNew = document.getElementById('language-new');
const languageHidden = document.getElementById('language-hidden');
const languageHiddenNew = document.getElementById('language-hidden-new');
btnActivate.addEventListener('mouseover',function (e) {
    languageHidden.style.display = 'block';
});
btnActivate.addEventListener('mouseleave',function (e) {
    languageHidden.style.display = 'none';
});


btnActivateNew.addEventListener('mouseover',function (e) {
    languageHiddenNew.style.display = 'block';
});
btnActivateNew.addEventListener('mouseleave',function (e) {
    languageHiddenNew.style.display = 'none';
});
