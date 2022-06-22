//Функция с использованием ? :

const age = prompt('whats your age?', '14')

function checkAge(age) {
    (age > 18) ? true : confirm('Родители разрешили?')
}

checkAge(age);

// Функция с использванием ||

/*
const age = prompt('whats your age?', '14')

function checkAge(age) {
    (age > 18) || confirm('Родители разрешили?')
}

checkAge(age);
*/


