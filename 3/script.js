
let maxNam = 0;
function max() {
    maxNam = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > maxNam) maxNam = arguments[i];
    }
    console.log(`${maxNam}`);
}

max(5, -2);
max(5, -2, 30, 6);
max(5, -2, 30, 6, 6, 45, 12, 18, -9, 0, 16, 26, 35);


