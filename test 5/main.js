const isPalindrome =  (string) => {
    if (string == string.split('').reverse().join('') || string.lenght <= 100 ) {
        alert(string + ' Число палиндром.');
    }
    else {
        alert(string + ' Число не палиндром.');
    }
}


const btn = document.getElementById('run')
//document.getElementById('run').onsubmit = function() {
  
//}

btn.addEventListener('click', function() {
    
    isPalindrome(document.getElementById('your_input').value);
    return false;
})