alert('Grundschulmathe')
var number1 = Math.floor(Math.random()*20);
var number2 = Math.floor(Math.random()*20);

var userNumber = prompt("Wieviel ist" + number1 + "+" + number2);

if (userNumber == 23) {
    alert('Korrekt')
}
else{
    alert('falsche Antwort')
}