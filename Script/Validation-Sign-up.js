document.addEventListener('DOMContentLoaded', function () {
    const userParagraph = document.getElementById('user');
    const formbtn = document.getElementById('submitprofile');
    const login = document.getElementById('smalllogin');
    const loginModal = document.getElementById('biglogin');
    const settingsModal = document.getElementById('settingsModal');
    const settingsNew = document.getElementById('modal-content-New')
    const profilePicture = document.getElementById('profilePicture');
    const oldProfileImage = document.querySelector('.oldProfileImage');
    const profileImageInput = document.getElementById('newImage');
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
                const email = document.getElementById('email');
                const password = document.getElementById('password');

                if (name.value.trim() !== '') {
                    userParagraph.innerText = ` ${name.value.trim()}`;
                    localStorage.setItem('userName', name.value.trim());
                }

                if (email.value.trim() !== '') {
                    localStorage.setItem('userEmail', email.value.trim());
                }

                if (password.value.trim() !== '') {
                    localStorage.setItem('userPassword', password.value.trim());
                }


                loginModal.style.display = 'none';
            }
        });
    }

    // Зареждане на стойността от Local Storage при стартиране на страницата
    const storedUserName = localStorage.getItem('userName');
    if (storedUserName) {
        userParagraph.innerText = ` ${storedUserName}`;
    }

    // Показване на модалната форма
    userParagraph.addEventListener('click', function () {
        if (userParagraph.innerText === 'User') {
            loginModal.style.display = 'block';
            login.style.display = 'block';
            settingsModal.style.display = 'none';
        }
    });


    // Проверка при отваряне на модалната форма за настройки
    document.addEventListener('click', function (event) {
        if (event.target === userParagraph && userParagraph.innerText !== 'User') {
            settingsModal.style.display = 'block'
            loginModal.style.display = 'none';
            login.style.display = 'none';
            loadSettings();  // Зареждане на текущите настройки
        }
    });


    // Запазване на настройките
    function saveSettings() {
        const newName = document.getElementById('newName').value.trim();
        const newEmail = document.getElementById('newEmail').value.trim();
        const newPassword = document.getElementById('newPassword').value.trim();
        const profileImage = localStorage.getItem('profileImage');

        if (newName !== '') {
            localStorage.setItem('userName', newName);
        }
        if (newEmail !== '') {
            localStorage.setItem('userEmail', newEmail);
        }
        if (newPassword !== '') {
            localStorage.setItem('userPassword', newPassword);
        }
        if (profileImage) {
            localStorage.setItem('profileImage', profileImage);
        }
    }
    // Зареждане на текущите настройки
    function loadSettings() {
        const oldName = document.getElementById('oldName');
        const oldEmail = document.getElementById('oldEmail');
        const oldPassword = document.getElementById('oldPassword');
        const profileImage = document.getElementById('profileImage');

        const storedUserName = localStorage.getItem('userName');
        const storedUserEmail = localStorage.getItem('userEmail');
        const storedUserPassword = localStorage.getItem('userPassword');
        const storedProfileImage = localStorage.getItem('profileImage');

        oldName.value = storedUserName || '';
        oldEmail.value = storedUserEmail || '';
        oldPassword.value = storedUserPassword || '';
        profileImage.src = storedProfileImage || '';

        // Визуализация на профилната снимка в изображенията с id-та oldProfileImage и profilePicture
        if (storedProfileImage) {
            oldProfileImage.src = storedProfileImage;
            profilePicture.src = storedProfileImage;
        }
    }

    // Затваряне на модалния прозорец за настройки
    function closeSettingsModal() {
        settingsModal.style.display = 'none';
    }

    // Изтриване на профила и изчистване на Local Storage
    function deleteProfile() {
        localStorage.removeItem('userName');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userPassword');
        localStorage.removeItem('profileImage');

        // Изчистване на стойностите в old полетата и изображенията
        const oldName = document.getElementById('oldName');
        const oldEmail = document.getElementById('oldEmail');
        const oldPassword = document.getElementById('oldPassword');
        const profileImage = document.getElementById('profileImage');

        oldName.value = '';
        oldEmail.value = '';
        oldPassword.value = '';
        profileImage.src = '';

        closeSettingsModal();
    }


    // Бутон за приемане на новите настройки
    const saveChangesBtn = document.getElementById('saveChanges');
    if (saveChangesBtn) {
        saveChangesBtn.addEventListener('click', function () {
            saveSettings();
            closeSettingsModal();

            // Изтриване на информацията в new полетата
            document.getElementById('newName').value = '';
            document.getElementById('newEmail').value = '';
            document.getElementById('newPassword').value = '';
            document.getElementById('newImage').value = '';
        });
    }

    // Бутон за изтриване на профила
    const deleteProfileBtn = document.getElementById('deleteProfileBtn');
    if (deleteProfileBtn) {
        deleteProfileBtn.addEventListener('click', function () {
            deleteProfile();
        });
    }

    // Превключване на видимостта на паролата
    const passwordToggle = document.getElementById('passwordToggle');
    const newPasswordInput = document.getElementById('newPassword');
    if (passwordToggle && newPasswordInput) {
        passwordToggle.addEventListener('click', function () {
            newPasswordInput.type = newPasswordInput.type === 'password' ? 'text' : 'password';
        });
    }

    // Превключване на видимостта на старата парола
    const oldPasswordToggle = document.getElementById('oldPasswordToggle');
    const oldPasswordInput = document.getElementById('oldPassword');
    if (oldPasswordToggle && oldPasswordInput) {
        oldPasswordToggle.addEventListener('click', function () {
            oldPasswordInput.type = oldPasswordInput.type === 'password' ? 'text' : 'password';
        });
    }

    // Бутон за запазване на новите профилни данни
    const saveNewProfileBtn = document.getElementById('newProfile');
    if (saveNewProfileBtn) {
        saveNewProfileBtn.addEventListener('click', function () {
            saveNewProfile();
        });
    }

    function saveNewProfile() {
        const newNameInput = document.getElementById('newName');
        const newEmailInput = document.getElementById('newEmail');
        const newPasswordInput = document.getElementById('newPassword');

        const oldNameInput = document.getElementById('oldName');
        const oldEmailInput = document.getElementById('oldEmail');
        const oldPasswordInput = document.getElementById('oldPassword');

        if (newNameInput && newEmailInput && newPasswordInput && oldNameInput && oldEmailInput && oldPasswordInput) {
            const newNameValue = newNameInput.value.trim();
            const newEmailValue = newEmailInput.value.trim();
            const newPasswordValue = newPasswordInput.value.trim();

            // Запазване на новите данни в Local Storage
            localStorage.setItem('userName', newNameValue);
            localStorage.setItem('userEmail', newEmailValue);
            localStorage.setItem('userPassword', newPasswordValue);

            // Прехвърляне на новите данни в старите полета
            oldNameInput.value = newNameValue;
            oldEmailInput.value = newEmailValue;
            oldPasswordInput.value = newPasswordValue;

            // Изчистване на new полетата
            newNameInput.value = '';
            newEmailInput.value = '';
            newPasswordInput.value = '';
        }
    }



// Обработка на събитие при избор на нова снимка
    profileImageInput.addEventListener('change', function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const imageData = e.target.result;
                localStorage.setItem('profileImage', imageData);

                // Визуализация на профилната снимка в изображенията с id-та oldProfileImage и profilePicture
                oldProfileImage.src = imageData;
                profilePicture.src = imageData;

                // Проверка дали бутона с id newProfile е натиснат, преди да се приемат промените
                const newProfileBtn = document.getElementById('newProfile');
                if (newProfileBtn && newProfileBtn.classList.contains('active')) {
                    saveNewProfile();  // Ако бутона е натиснат, приеми промените
                }
            };
            reader.readAsDataURL(file);
        }
    });


    // Зареждане на стойностите от Local Storage в "old" полетата при рестартиране
    loadSettings();
    saveSettings()
});















const modal = document.getElementById('settingsModal');
const profileImage = document.getElementById('profileImage');
const newImageInput = document.getElementById('newImage');



function closeModal() {
    modal.style.display = 'none';
}

newImageInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
        profileImage.src = e.target.result;
    };

    reader.readAsDataURL(file);
});


document.addEventListener('DOMContentLoaded', function () {
    // Вашият съществуващ код

    const closeLoginButton = document.getElementById('closeLogin');
    const loginModal = document.getElementById('biglogin');

    if (closeLoginButton) {
        closeLoginButton.addEventListener('click', function () {
            loginModal.style.display = 'none';
        });
    }

    // Вашият съществуващ код
});
