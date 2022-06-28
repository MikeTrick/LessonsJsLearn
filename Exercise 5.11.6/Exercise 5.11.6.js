const getSecondsToday = () => {
    const start = new Date();
    start.setHours(0,0,0,0);
    return Math.round((Date.now() - start) / 1000)
}

alert(getSecondsToday());
