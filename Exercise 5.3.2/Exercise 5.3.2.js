checkSpam = (str) => {
    let lowChar = str.toLowerCase();

    return (lowChar.includes('viagra')
    || lowChar.includes('xxx') ? ('true') : ('false'))

}

alert(checkSpam('i would like to buy some xXx video and ViaGRa as well'))