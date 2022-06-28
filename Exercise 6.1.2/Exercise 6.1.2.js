const factorial = (a) => {
    if (a === 1) return a
    return (a * factorial(a-1));
}

alert(factorial(5));
