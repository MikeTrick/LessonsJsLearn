// Без использования оператора НЕ
const age = prompt('Введите свой возраст', 'Укажите числом свой возраст')

if (!(age >= 14 && age <= 90)) {
    window.alert('passed')
} else window.alert('denied');

//С использованием оператора НЕ
/*
const age = prompt('Введите свой возраст', 'Укажите числом свой возраст')

if (age >= 14 || age <= 90) {
    window.alert('passed')
} else window.alert('denied');
*/

