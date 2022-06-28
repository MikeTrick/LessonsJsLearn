const makeCounter = () => {
    let count = 0;

    let counter = () => count++;

    counter.set = value => count = value;
    counter.decrease = () => count--;

    return counter;
}

const counter = makeCounter();

alert(counter());
alert(counter());

counter.set(10);

alert(counter());

counter.decrease();

alert(counter());
