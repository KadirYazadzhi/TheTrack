document.addEventListener('DOMContentLoaded', function () {
    const userParagraph = document.getElementById('user');
    const formbtn = document.getElementById('submitprofile');
    const login = document.getElementById('smalllogin');
    const loginModal = document.getElementById('biglogin');

    function validateField(fieldName) {
        const field = document.getElementById(fieldName);
        const errorElement = document.getElementById(`${fieldName}Error`);
        const isValid = field.value.trim() !== '';

        errorElement.innerText = isValid ? '' : `Please enter ${fieldName === 'password' ? 'the' : 'your'} ${fieldName}.`;
        field.classList.toggle('error', !isValid);
        field.classList.toggle('valid', isValid);

        return isValid;
    }

    function validateForm() {
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const password = document.getElementById('password');

        const isNameValid = validateField('name');
        const isEmailValid = validateField('email');
        const isPasswordValid = validateField('password');

        return isNameValid && isEmailValid && isPasswordValid;
    }

    function handleInputChange(event) {
        const field = event.target;
        field.style.backgroundColor = field.value.trim() === '' ? '#ffeded' : 'transparent';
        field.classList.add('valid');

        const errorElement = document.getElementById(`${field.id}Error`);
        if (errorElement && field.value.trim() !== '') {
            errorElement.innerText = '';
        }
    }

    const inputFields = document.querySelectorAll('.input-profile');
    inputFields.forEach(function (inputField) {
        inputField.addEventListener('input', handleInputChange);
    });

    if (formbtn) {
        formbtn.addEventListener('click', function (event) {
            event.preventDefault();

            const isFormValid = validateForm();

            if (isFormValid) {
                const name = document.getElementById('name');

                if (name.value.trim() !== '') {
                    userParagraph.innerText = ` ${name.value.trim()}`;
                    localStorage.setItem('userName', name.value.trim());
                }

                loginModal.style.display = 'none';
                login.style.display = 'none';
            }
        });
    }

    // Зареждане на стойността от Local Storage при стартиране на страницата
    const storedUserName = localStorage.getItem('userName');
    if (storedUserName) {
        userParagraph.innerText = ` ${storedUserName}`;
    }

    // Проверка при отваряне на модалната форма
    document.addEventListener('click', function (event) {
        if (event.target === userParagraph && userParagraph.innerText !== 'User') {
            loginModal.style.display = 'none';
            login.style.display = 'none';
        }
    });

    // Показване на модалната форма
    userParagraph.addEventListener('click', function () {
        if (userParagraph.innerText === 'User') {
            loginModal.style.display = 'block';
            login.style.display = 'block';
        }
    });
});

function closeLoginForm() {
    const loginModal = document.getElementById('biglogin');
    loginModal.style.display = 'none';
}