document.addEventListener('DOMContentLoaded', function() {

    if (!localStorage.getItem('profileAccepted')) {
        setTimeout(function() {
            openProfileModal();
        }, 4000);
    }
});

function openProfileModal() {
    var modal = document.getElementById('profile-modal');
    var closemodal = document.getElementById('closeButton')

    modal.style.display = 'block';

    closemodal.addEventListener('click', function() {
        localStorage.setItem('profileAccepted', true);
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {

            modal.style.display = 'none';
        }
    });
}





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

