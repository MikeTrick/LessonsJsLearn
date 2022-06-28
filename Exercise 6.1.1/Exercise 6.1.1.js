const sumTo = (a) => {
    if (a === 0) return a
    return (a+sumTo(a-1));
}

alert(sumTo(3));

/*
const sumTo = (n) => {
    let sum = 0
    for (let i = 0; i<=n; i++) {
        sum +=i;
    }
    return sum
}
alert(sumTo(3));*/

const sumTo = (n) => {
    return n * (n + 1) / 2;
}

alert(sumTo(100));
