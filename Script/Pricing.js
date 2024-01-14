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
        Kaloyan();
        Kiril();
        Kristiana();
        Maria();
        Martin();
        Muska();
        Nikol();
        Nikola();
        Spas();
        Hristian();
        Admin();
    }
}

function Admin() {
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

    if (username.value.trim() === 'Admin' && password.value === '341508') {
        Body.style.backgroundColor = 'white';
        background.style.display = 'none';
        Form.style.display = 'none';
        nameText.innerHTML = 'Здравей, ******.'
        table.style.display = 'block';
        tableNew.style.display = 'block';
        priceOn.innerHTML = '******';
        priceOff.innerHTML = '******';


    } else {
        // Махнете този ред, за да не връща false;
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

    if (username.value.trim() === 'Ilian' && password.value === '318257') {
        Body.style.backgroundColor = 'white';
        background.style.display = 'none';
        Form.style.display = 'none';
        nameText.innerHTML = 'Здравей, Илиян.'
        table.style.display = 'block';
        tableNew.style.display = 'block';
        priceOn.innerHTML = '35.00 лв.';
        priceOff.innerHTML = '20.00 лв.';


    } else {
        // Махнете този ред, за да не връща false;
    }
}

function Kaloyan() {
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

    if (username.value.trim() === 'Kaloyan' && password.value === '975346') {
        Body.style.backgroundColor = 'white';
        background.style.display = 'none';
        Form.style.display = 'none';
        nameText.innerHTML = 'Здравей, Калоян.'
        table.style.display = 'block';
        tableNew.style.display = 'block';
        priceOn.innerHTML = '35.00 лв.';
        priceOff.innerHTML = '20.00 лв.';


    } else {
        // Махнете този ред, за да не връща false;
    }
}

function Kiril() {
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

    if (username.value.trim() === 'Kiril' && password.value === '208914') {
        Body.style.backgroundColor = 'white';
        background.style.display = 'none';
        Form.style.display = 'none';
        nameText.innerHTML = 'Здравей, Кирил.'
        table.style.display = 'block';
        tableNew.style.display = 'block';
        priceOn.innerHTML = '55.00 лв.';
        priceOff.innerHTML = '00.00 лв.';


    } else {
        // Махнете този ред, за да не връща false;
    }
}

function Kristiana() {
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

    if (username.value.trim() === 'Kristiana' && password.value === '753148') {
        Body.style.backgroundColor = 'white';
        background.style.display = 'none';
        Form.style.display = 'none';
        nameText.innerHTML = 'Здравей, Кристияна.'
        table.style.display = 'block';
        tableNew.style.display = 'block';
        priceOn.innerHTML = '35.00 лв.';
        priceOff.innerHTML = '20.00 лв.';


    } else {
        // Махнете този ред, за да не връща false;
    }
}

function Maria() {
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

    if (username.value.trim() === 'Maria' && password.value === '619357') {
        Body.style.backgroundColor = 'white';
        background.style.display = 'none';
        Form.style.display = 'none';
        nameText.innerHTML = 'Здравей, Мария.'
        table.style.display = 'block';
        tableNew.style.display = 'block';
        priceOn.innerHTML = '35.00 лв.';
        priceOff.innerHTML = '20.00 лв.';


    } else {
        // Махнете този ред, за да не връща false;
    }
}


function Martin() {
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

    if (username.value.trim() === 'Martin' && password.value === '425178') {
        Body.style.backgroundColor = 'white';
        background.style.display = 'none';
        Form.style.display = 'none';
        nameText.innerHTML = 'Здравей, Мартин.'
        table.style.display = 'block';
        tableNew.style.display = 'block';
        priceOn.innerHTML = '55.00 лв.';
        priceOff.innerHTML = '00.00 лв.';


    } else {
        // Махнете този ред, за да не връща false;
    }
}

function Muska() {
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

    if (username.value.trim() === 'Muska' && password.value === '836914') {
        Body.style.backgroundColor = 'white';
        background.style.display = 'none';
        Form.style.display = 'none';
        nameText.innerHTML = 'Здравей, Муска.'
        table.style.display = 'block';
        tableNew.style.display = 'block';
        priceOn.innerHTML = '35.00 лв.';
        priceOff.innerHTML = '20.00 лв.';


    } else {
        // Махнете този ред, за да не връща false;
    }
}


function Nikol() {
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

    if (username.value.trim() === 'Nikol' && password.value === '297461') {
        Body.style.backgroundColor = 'white';
        background.style.display = 'none';
        Form.style.display = 'none';
        nameText.innerHTML = 'Здравей, Никол.'
        table.style.display = 'block';
        tableNew.style.display = 'block';
        priceOn.innerHTML = '35.00 лв.';
        priceOff.innerHTML = '20.00 лв.';


    } else {
        // Махнете този ред, за да не връща false;
    }
}


function Nikola() {
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

    if (username.value.trim() === 'Nikol' && password.value === '503718') {
        Body.style.backgroundColor = 'white';
        background.style.display = 'none';
        Form.style.display = 'none';
        nameText.innerHTML = 'Здравей, Никола.'
        table.style.display = 'block';
        tableNew.style.display = 'block';
        priceOn.innerHTML = '35.00 лв.';
        priceOff.innerHTML = '20.00 лв.';


    } else {
        // Махнете този ред, за да не връща false;
    }
}


function Spas() {
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

    if (username.value.trim() === 'Spas' && password.value === '684215') {
        Body.style.backgroundColor = 'white';
        background.style.display = 'none';
        Form.style.display = 'none';
        nameText.innerHTML = 'Здравей, Спас.'
        table.style.display = 'block';
        tableNew.style.display = 'block';
        priceOn.innerHTML = '35.00 лв.';
        priceOff.innerHTML = '20.00 лв.';


    } else {
        // Махнете този ред, за да не връща false;
    }
}


function Hristian() {
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

    if (username.value.trim() === 'Hristian' && password.value === '149827') {
        Body.style.backgroundColor = 'white';
        background.style.display = 'none';
        Form.style.display = 'none';
        nameText.innerHTML = 'Здравей, Християн.'
        table.style.display = 'block';
        tableNew.style.display = 'block';
        priceOn.innerHTML = '35.00 лв.';
        priceOff.innerHTML = '20.00 лв.';


    } else {
        // Махнете този ред, за да не връща false;
    }
}


