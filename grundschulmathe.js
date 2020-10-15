alert('Grundschulmathe')
var number1 = Math.floor(Math.random()*20);
var number2 = Math.floor(Math.random()*20);
var solution = number1 + number2;

var userNumber = prompt("Wieviel ist " + number1 + " + " + number2);

if (userNumber == solution) {
    alert('Korrekt')
}
else{
    alert('falsche Antwort')
}