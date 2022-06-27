readNumber = () => {
    const a = prompt('Введите числовое значение', 0);

    if (isNaN(a)) {
        readNumber();
    } else if (a == null || a === '') {
        alert('Ввод отменен')
    }  else alert(`Число: ${a}`);
        }
readNumber();