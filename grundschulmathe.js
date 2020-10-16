alert('Grundschulmathe')

var i;
var points = 0;
for (i = 0; i < 5; i++) {
var number1 = Math.floor(Math.random()*20);
var number2 = Math.floor(Math.random()*20);
var solution = number1 + number2;


var userNumber = prompt("Wieviel ist " + number1 + " + " + number2);
//pointcounter
if (userNumber == solution) {
    

    points++;
   
}
else {
    
    
}



//alert
if (userNumber == solution) {
    

    alert('Korrekt '+ points +"/5")
   
}
else {
    
    alert('falsche Antwort ' + points + "/5")
}
}