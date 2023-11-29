const checkbox = document.getElementById("checkbox");
const professional = document.getElementById("professional");
const master = document.getElementById("master");
const basic = document.getElementById("basic");

checkbox.addEventListener("click", () => {
    basic.textContent = basic.textContent === "900 лв." ? "100 лв." : "900 лв.";
    professional.textContent =
        professional.textContent === "2 400 лв." ? "300 лв." : "2 400 лв.";
    master.textContent = master.textContent === "1 500 лв." ? "170 лв." : "1 500 лв.";
});



function closeModalVoucher() {
    var modal = document.getElementById('popupBox');
    modal.style.display = 'none';
}






const popup = document.querySelector(".popupBox");
const close = document.querySelector(".close");

window.onload = function () {
    setTimeout(() => {
        popup.style.display = "block";
    }, 3000);
};

close.addEventListener("click", () => {
    popup.style.display = "none";
});






// Отваря модалния прозорец
function openModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'block';
}

// Затваря модалния прозорец
function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
}




function openModalVoucherNew() {
    var modal = document.getElementById('myModalVoucher');
    modal.style.display = 'block';
}

// Затваря модалния прозорец
function closeModalVoucherNew() {
    var modal = document.getElementById('myModalVoucher');
    modal.style.display = 'none';
    var Newmodal = document.getElementById('popupBox');
    Newmodal.style.display = 'none';
}
