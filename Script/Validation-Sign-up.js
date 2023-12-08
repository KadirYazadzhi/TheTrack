


function validateField(fieldName) {
    const field = document.getElementById(fieldName);
    const errorElement = document.getElementById(`${fieldName}Error`);
    const isValid = field.value.trim() !== '';

    errorElement.innerText = isValid ? '' : `Please enter ${fieldName === 'password' ? 'the' : 'your'} ${fieldName}.`;
    field.classList.toggle('error', !isValid);
    field.classList.toggle('valid', isValid);
}

function validateForm() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const formbtn = document.getElementById('submitprofile');


    if (formbtn) {
        formbtn.addEventListener('click', function () {
            name.style.backgroundColor = name.value.trim() === '' ? '#ffeded' : 'transparent';
            email.style.backgroundColor = email.value.trim() === '' ? '#ffeded' : 'transparent';
            password.style.backgroundColor = password.value.trim() === '' ? '#ffeded' : 'transparent';
        });
    }

    validateField('name');
    validateField('email');
    validateField('password');


}
document.addEventListener('DOMContentLoaded', function () {
    const userParagraph = document.getElementById('user');
    const loginModal = document.getElementById('login');
    const formbtn = document.getElementById('submitprofile');

    if (formbtn) {
        formbtn.addEventListener('click', function (event) {
            event.preventDefault();

            // Промяна на стойността в параграфа и запис в Local Storage
            const name = document.getElementById('name');
            if (name.value.trim() !== '') {
                userParagraph.innerText = ` ${name.value.trim()}`;
                localStorage.setItem('userName', name.value.trim());
            }

            // Затваряне на модалната форма
            loginModal.classList.remove('show');
            loginModal.style.display = 'none';
            document.body.classList.remove('modal-open');
            const modalBackdrop = document.getElementsByClassName('modal-backdrop')[0];
            if (modalBackdrop) {
                modalBackdrop.parentNode.removeChild(modalBackdrop);
            }
        });
    }

    // Зареждане на стойността от Local Storage при стартиране на страницата
    const storedUserName = localStorage.getItem('userName');
    if (storedUserName) {
        userParagraph.innerText = ` ${storedUserName}`;
        loginModal.style.display = 'none'
    }

});