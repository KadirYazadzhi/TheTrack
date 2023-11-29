const checkbox = document.getElementById("checkbox");
const professional = document.getElementById("professional");
const master = document.getElementById("master");
const basic = document.getElementById("basic");

checkbox.addEventListener("click", () => {
    basic.textContent = basic.textContent === "900 лв." ? "100 лв." : "900 лв.";
    professional.textContent =
        professional.textContent === "1500 лв." ? "170 лв." : "1500 лв.";
    master.textContent = master.textContent === "2400 лв." ? "300 лв." : "2400 лв.";
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
