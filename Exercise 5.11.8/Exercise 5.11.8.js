const formatDate = (date) => {
    const diff = Math.round((Date.now() - date) / 1000);

    if (diff <= 1) {
        return 'Прямо сейчас'
    }
    if (diff <= 30) {
        return `${diff} сек. назад`
    }
    if (diff <= (60 * 60)) {
        return `${Math.round(diff / 60)} мин. назад`
    }
    return `${date.toLocaleDateString()}, ${date.getHours()}:${date.getMinutes()}`;
}

alert(formatDate(new Date(new Date - 1)));

alert(formatDate(new Date(new Date - 30 * 1000)));

alert(formatDate(new Date(new Date - 5 * 60 * 1000)));

alert(formatDate(new Date(new Date - 86400 * 1000)));
