getWeekDay = (date) => {
        let week = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

        return week[date.getDay()];
    };

let date = new Date(2022, 2, 17);
alert( getWeekDay(date) );