function NOD(a, b){
    while (a != b){
        if (a > b){
            a -= b;
        } else {
            b -= a;
        }
    }
    return (a);
}

function NOK(a, b){
    return (Math.abs(a * b)/NOD(a, b));
}

function check(a, b) {
    if(
        (typeof a != 'number'|| typeof b != 'number')
        || isNaN(a)
        || isNaN(b)
    ) {
        return false
    }
    return true
}

let a = Number(prompt("Введите A:"));
let b = Number(prompt("Введите B:"));

if (!check(a,b)) {
    alert('Некорректный ввод')
} else {
    alert ('NOK: ' + NOK(a, b));
    alert ('NOD: ' + NOD(a, b));
}



