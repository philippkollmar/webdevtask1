alert('Grundschulmathe')

var i;
var points= 0;

for (i = 0; i < 5; i++) {

var number1 = Math.floor(Math.random()*20);
var number2 = Math.floor(Math.random()*20);
var solution = number1 + number2;

var userNumber = prompt("Wieviel ist " + number1 + " + " + number2);

if (userNumber == solution) {
    alert('Korrekt '+ points + 1 +"/5")
}
else{
    alert('falsche Antwort' + points + "/5")
}
}