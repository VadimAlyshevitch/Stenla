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
// не работает проверка
function check() {
    if(typeof a != 'number'|| typeof b != 'number')
    {
        alert('poshel nahui')
    }
    return
}

let a = Number(prompt("Enter A:"));
let b = Number(prompt("Enter B:"));


alert ('NOK: ' + NOK(a, b));
alert ('NOD: ' + NOD(a, b));

check(a,b);