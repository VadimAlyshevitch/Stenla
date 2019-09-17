/*function isNumber(inputStr) {
    for (var i = 0; i < inputStr.length; i++) {
        var oneChar = inputStr.charAt(i)
        if (oneChar < '0' || oneChar > '9') {
            alert('Вводите только положительное число!')
            return false
        }
    }
    alert('Вы ввели положительное число!')
    return true
}
function checkNumeric(fld) {
    var inputStr = fld.value
    var fldName = fld.name
    var formName = fld.form.name
    if (isNumber(inputStr)) {
    
    } else {
        setTimeout('doSelection(document.' + formName + '. ' + fldName + ')', 0)
    }
}
 
function doSelection(fld) {
    fld.focus()
    fld.select()
}

isWhole(value);
console.log(isPrime(value));
function isPrime() {
if (value <= 3)
{
    return value > 1
}   
else if(value % 2 == 0 || value % 3 == 0){
    return console.log(`${value}  не составное число`);
} 
   
let i = 5
while (i * i <= value)
{
    if (value % i == 0 || value % (i + 2) == 0){
        return console.log(`${value}  не составное число`);
    }
    i = i + 6
} return console.log(`${value} составное число`);  
       
}
*/