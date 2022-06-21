const a = prompt('Введите первое число', '0')
const b = prompt('Введите второе число', '0')

const result = (+a + +b < 4) ? 'Мало' : 'Много';

window.alert(result)