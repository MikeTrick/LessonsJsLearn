const calculator = {

    read() {
        this.a = +prompt('Введите первое значение', '0');
        this.b = +prompt('Введите второе знаение', '0');
    },

    sum() {
        return (this.a + this.b);
    },

    mul() {
        return (this.a * this.b);
    },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());