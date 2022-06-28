const getSecondsToTomorrow = () => {
    const current = new Date();
    const end = new Date(current.getFullYear(), current.getMonth(), current.getDate() + 1);
    return Math.round((end - Date.now()) / 1000)
}

alert(getSecondsToTomorrow());