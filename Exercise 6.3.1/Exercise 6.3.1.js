const sum = (a) => {

    return function (b) {
        return a + b; // берёт "a" из внешнего лексического окружения
    };
}

alert(sum(1)(2));
alert(sum(5)(-1));