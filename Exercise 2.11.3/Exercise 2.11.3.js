const login = prompt('Введите логин', '');

if (login === 'Администратор') {
    const password = prompt('Введите пароль', '');
    if (password === 'Я главный') {
        window.alert('Здравствуйте!')
    } else if (password == null || password === '') {
        window.alert('Отменено')
    } else window.alert('Неправильный пароль')
} else if (login == null || login === '') {
    window.alert('Отменено')
} else window.alert('Я вас не знаю')
