let x = +prompt('Введите любое число', '0')
let n = +prompt('Введите любое число', '0')

let pow = function (x, n) {
    if (n < 1 || n % 1 !== 0) {
        return (`Степень ${n} не поддерживается, введите натуральное число`)
    } else return (x ** n)
}
pow(x, n)
