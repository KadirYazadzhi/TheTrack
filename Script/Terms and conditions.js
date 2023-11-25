$(function(){
    var btnSubmit = $('#submit');
    btnSubmit.attr('disabled', 'disabled');
    $('input[name=terms]').change(function(e){
        if($(this).val() == 'agree'){
            btnSubmit.removeAttr('disabled');
        }else{
            btnSubmit.attr('disabled', 'disabled');
        }
    });
});
// Получаване на референции към бутоните и формата
const submitButton = document.getElementById('submit');
const cancelButton = document.getElementById('cancel');
const myForm = document.getElementById('myForm');

// Добавяне на слушател за събитието "submit" на формата
myForm.addEventListener('submit', function(event) {
    // Предотвратяване на изпращането на формата (за да не се презарежда страницата)
    event.preventDefault();

    // Пренасочване към index.html
    window.location.href = 'index.html';
});

// Добавяне на слушател за събитието "click" на бутона "Cancel"
cancelButton.addEventListener('click', function() {
    // Тук можете да добавите друго действие, ако е необходимо
    console.log('Cancel button clicked');
});