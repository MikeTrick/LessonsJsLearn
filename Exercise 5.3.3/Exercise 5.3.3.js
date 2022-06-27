truncate = (str, maxlength) => {
    maxlength.length = maxlength;

    return (str.length > maxlength) ? (str.slice(0,(maxlength-1)) + '...') : str;
}

alert(truncate('Hey! How u doin\'?',15))
