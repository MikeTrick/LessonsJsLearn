let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

const printList = (list) => {
    let tmp = list;

    while (tmp) {
        alert(tmp.value);
        tmp = tmp.next;
    }

}
printList(list);

/*const printList = ({value, next}) => {
    alert(value);
    if (next) {
        printList(next)
    }
}*/

