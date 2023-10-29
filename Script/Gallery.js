document.addEventListener("DOMContentLoaded", function() {
    const modal = document.createElement("div");
    modal.className = "modal";
    document.body.appendChild(modal);

    const modalContent = document.createElement("div");
    modalContent.className = "modal-content";
    modal.appendChild(modalContent);

    const closeBtn = document.createElement("span");
    closeBtn.className = "close";
    closeBtn.innerHTML = "&times;";
    modalContent.appendChild(closeBtn);

    const imgThumbnails = document.querySelectorAll(".ImgThumbnail");
    imgThumbnails.forEach(function(thumbnail) {
        thumbnail.addEventListener("click", function() {
            modal.style.display = "block";
            const img = document.createElement("img");
            img.src = this.src;
            modalContent.innerHTML = "";
            modalContent.appendChild(img);
        });
    });

    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    modal.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape" || event.key === "Esc") {
            modal.style.display = "none";
        }
    });
});
