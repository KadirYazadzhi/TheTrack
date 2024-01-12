function validateName() {
    const username = document.getElementById('username');
    const errorUsername = document.getElementById('usernameError');

    if (username.value.trim() === '') {
        errorUsername.innerHTML = 'Please enter a valid username.';
        username.style.border = '2px solid red';
        username.style.backgroundColor = '#fff5f5';
        username.style.color = '#fd0000';
        username.style.boxShadow = '1px 1px 5px #fd0000';
        return false;
    } else {
        errorUsername.innerText = '';
        username.style.border = '2px solid green';
        username.style.backgroundColor = '#f5fff5';
        username.style.color = '#008627';
        username.style.boxShadow = '1px 1px 5px #008627';
        return true;
    }
}

function validatePassword() {
    const password = document.getElementById('password');
    const errorPassword = document.getElementById('passwordError');

    if (password.value.trim() === '') {
        errorPassword.innerHTML = 'Please enter a valid password.';
        password.style.border = '2px solid red';
        password.style.backgroundColor = '#fff5f5';
        password.style.color = '#fd0000';
        password.style.boxShadow = '1px 1px 5px #fd0000';
        return false;
    } else {
        errorPassword.innerText = '';
        password.style.border = '2px solid green';
        password.style.backgroundColor = '#f5fff5';
        password.style.color = '#008627';
        password.style.boxShadow = '1px 1px 5px #008627';
        return true;
    }
}


function ValidateForm() {
    const isNameValid = validateName();
    const isPasswordValid = validatePassword();

    if (isNameValid && isPasswordValid) {
        Iliqn();
    }
}


function Iliqn() {
    const background = document.getElementById('back');
    const table = document.getElementById('table');
    const tableNew = document.getElementById('table-New');
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const priceOn = document.getElementById('priceOn');
    const priceOff = document.getElementById('priceOff');
    const Form = document.getElementById('form');
    const nameText = document.getElementById('nameText');
    const Body = document.body;

    if (username.value.trim() === 'Ilian_User' && password.value === 'Ili@n1234') {
        Body.style.backgroundColor = 'white';
        background.style.display = 'none';
        Form.style.display = 'none';
        nameText.innerHTML = 'Здравей, Илиян Каймакански.'
        table.style.display = 'block';
        tableNew.style.display = 'block';
        priceOn.innerHTML = '35.00 лв.';
        priceOff.innerHTML = '20.00 лв.';


    } else {
        // Махнете този ред, за да не връща false;
    }
}

