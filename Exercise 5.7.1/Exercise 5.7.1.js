const unique = (values) => {
    return Array.from(new Set(values));
}

let values = ['Hare', 'Krishna', 'Hare', 'Krishna',
    'Krishna', 'Krishna', 'Hare', 'Hare', ':-O'
];

alert(unique(values))