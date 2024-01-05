const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});





function validateField() {
    const username = document.getElementById('username');
    const email = document.getElementById('emailNew');
    const phone = document.getElementById('phone');
    const message = document.getElementById('message');

    const FieldName = document.getElementById('usernameError');
    const FieldEmail = document.getElementById('emailNewError');
    const FieldPhone = document.getElementById('phoneError');
    const FieldMessage = document.getElementById('messageError');

    if (username.value.trim() === '') {
        FieldName.innerText = 'Please enter valid name.';
        username.style.border = '2px solid red';
        username.style.backgroundColor = '#fff5f5';
        username.style.color = '#fd0000';
        username.style.boxShadow = '1px 1px 5px #fd0000';
    } else {
        FieldName.innerText = '';
        username.style.border = '2px solid green';
        username.style.backgroundColor = '#f5fff5';
        username.style.color = '#008627';
        username.style.boxShadow = '1px 1px 5px #008627';
    }

    if (email.value.trim() === '') {
        FieldEmail.innerText = 'Please enter valid email.';
        email.style.border = '2px solid red';
        email.style.backgroundColor = '#fff5f5';
        email.style.color = '#fd0000';
        email.style.boxShadow = '1px 1px 5px #fd0000';
    } else {
        FieldEmail.innerText = '';
        email.style.border = '2px solid green';
        email.style.backgroundColor = '#f5fff5';
        email.style.color = '#008627';
        email.style.boxShadow = '1px 1px 5px #008627';
    }

    if (phone.value.trim() === '') {
        FieldPhone.innerText = 'Please enter valid phone.';
        phone.style.border = '2px solid red';
        phone.style.backgroundColor = '#fff5f5';
        phone.style.color = '#fd0000';
        phone.style.boxShadow = '1px 1px 5px #fd0000';
    } else {
        FieldPhone.innerText = '';
        phone.style.border = '2px solid green';
        phone.style.backgroundColor = '#f5fff5';
        phone.style.color = '#008627';
        phone.style.boxShadow = '1px 1px 5px #008627';
    }

    if (message.value.trim() === '') {
        FieldMessage.innerText = 'Please enter valid message.';
        message.style.border = '2px solid red';
        message.style.backgroundColor = '#fff5f5';
        message.style.color = '#fd0000';
        message.style.boxShadow = '1px 1px 5px #fd0000';
        return true;
    } else {
        FieldMessage.innerText = '';
        message.style.border = '2px solid green';
        message.style.backgroundColor = '#f5fff5';
        message.style.color = '#008627';
        message.style.boxShadow = '1px 1px 5px #008627';
        return false;
    }

}

function ValidateName() {
    const username = document.getElementById('username');
    const FieldName = document.getElementById('usernameError');

    if (username.value.trim() === '') {
        FieldName.innerText = 'Please enter valid name.';
        username.style.border = '2px solid red';
        username.style.backgroundColor = '#fff5f5';
        username.style.color = '#fd0000';
        username.style.boxShadow = '1px 1px 5px #fd0000';
    } else {
        FieldName.innerText = '';
        username.style.border = '2px solid green';
        username.style.backgroundColor = '#f5fff5';
        username.style.color = '#008627';
        username.style.boxShadow = '1px 1px 5px #008627';
    }
}

function ValidateEmail() {
    const email = document.getElementById('emailNew');
    const FieldEmail = document.getElementById('emailNewError');

    if (email.value.trim() === '') {
        FieldEmail.innerText = 'Please enter valid email.';
        email.style.border = '2px solid red';
        email.style.backgroundColor = '#fff5f5';
        email.style.color = '#fd0000';
        email.style.boxShadow = '1px 1px 5px #fd0000';
    } else {
        FieldEmail.innerText = '';
        email.style.border = '2px solid green';
        email.style.backgroundColor = '#f5fff5';
        email.style.color = '#008627';
        email.style.boxShadow = '1px 1px 5px #008627';
    }
}

function ValidatePhone() {
    const phone = document.getElementById('phone');
    const FieldPhone = document.getElementById('phoneError');

    if (phone.value.trim() === '') {
        FieldPhone.innerText = 'Please enter valid phone.';
        phone.style.border = '2px solid red';
        phone.style.backgroundColor = '#fff5f5';
        phone.style.color = '#fd0000';
        phone.style.boxShadow = '1px 1px 5px #fd0000';
    } else {
        FieldPhone.innerText = '';
        phone.style.border = '2px solid green';
        phone.style.backgroundColor = '#f5fff5';
        phone.style.color = '#008627';
        phone.style.boxShadow = '1px 1px 5px #008627';
    }
}

function ValidateMessage() {
    const message = document.getElementById('message');
    const FieldMessage = document.getElementById('messageError');

    if (message.value.trim() === '') {
        FieldMessage.innerText = 'Please enter valid message.';
        message.style.border = '2px solid red';
        message.style.backgroundColor = '#fff5f5';
        message.style.color = '#fd0000';
        message.style.boxShadow = '1px 1px 5px #fd0000';
        return true;
    } else {
        FieldMessage.innerText = '';
        message.style.border = '2px solid green';
        message.style.backgroundColor = '#f5fff5';
        message.style.color = '#008627';
        message.style.boxShadow = '1px 1px 5px #008627';
        return false;
    }
}

function submitForm() {
    if (validateField()) {
        // Ако валидацията е успешна, изпращаме формата
        document.querySelector('form').submit();
    }
}

