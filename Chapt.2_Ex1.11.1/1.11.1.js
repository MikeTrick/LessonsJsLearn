let coords = elem.getBoundingClientRect();

let corner1 = [coords.left, coords.top];
let corner2 = [coords.right, coords.bottom];

let corner3 = [coords.left + field.clientLeft, coords.top + field.clientTop];

let corner4 = [
    coords.left + elem.clientLeft + elem.clientWidth,
    coords.top + elem.clientTop + elem.clientHeight
];