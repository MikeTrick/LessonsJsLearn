sumInput = () => {
    let arr = [];

    while (true) {
        let element = prompt('Введите число', 0)
        if (element === '' || element === null || !isFinite(element)) break
        else {
            arr.push(+element);
        }
    }

    let sum = 0;
    for (let key of arr) {
        sum += key;
    }
    return sum
}
alert(sumInput());