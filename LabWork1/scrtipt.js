let form = document.getElementById('tour-form');
let resultsArea = document.getElementById('results-area');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let fio = document.getElementById('fio').value;
    let tourists = document.getElementById('tourists').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    let comments = document.getElementById('comments').value;

    if (fio === "") {
        alert("Ошибка: Не введено ФИО заказчика!");
        return;
    }
    if (tourists === "") {
        alert("Ошибка: Не указано количество туристов!");
        return;
    }
    if (phone === "") {
        alert("Ошибка: Не введен номер телефона!");
        return;
    }
    if (email === "") {
        alert("Ошибка: Не введен адрес электронной почты!");
        return;
    }

    let phoneRegex = /^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/;
    if (phoneRegex.test(phone) === false) {
        alert("Ошибка: Телефон введен неверно! Требуемый формат: +7(XXX)XXX-XX-XX");
        return;
    }

    if (email.includes("@") === false || email.includes(".") === false) {
        alert("Ошибка: Некорректный email! Почта обязательно должна содержать символы «@» и «.»");
        return;
    }

    let newCard = document.createElement('div');
    newCard.className = 'result-card';
    
    newCard.innerHTML = "<h3>Заявка на тур оформлена!</h3>" +
                        "<p><b>ФИО:</b> " + fio + "</p>" +
                        "<p><b>Количество туристов:</b> " + tourists + "</p>" +
                        "<p><b>Телефон:</b> " + phone + "</p>" +
                        "<p><b>Email:</b> " + email + "</p>" +
                        "<p><b>Пожелания:</b> " + (comments === "" ? "Нет" : comments) + "</p>";

    resultsArea.appendChild(newCard);

    form.reset();
});