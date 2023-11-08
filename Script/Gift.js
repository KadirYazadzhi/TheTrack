const checkbox = document.getElementById("checkbox");
const professional = document.getElementById("professional");
const master = document.getElementById("master");
const basic = document.getElementById("basic");

checkbox.addEventListener("click", () => {
    basic.textContent = basic.textContent === "500 лв." ? "50 лв." : "500 лв.";
    professional.textContent =
        professional.textContent === "700 лв." ? "70 лв." : "700 лв.";
    master.textContent = master.textContent === "1400 лв." ? "140 лв." : "1400 лв.";
});