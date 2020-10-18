alert('Grundschulmathe')

var i;
var points = 0;

for (i = 0; i < 5; i++) {
var number1 = Math.floor(Math.random()*21);
var number2 = Math.floor(Math.random()*21);
var solution = number1 + number2;

var userNumber = prompt("Wieviel ist " + number1 + " + " + number2);
//pointcounter
if (userNumber == solution) {
    points++;
}

//alert
if (userNumber == solution) {
    alert('Korrekt '+ points +"/5") 
}
else {
    alert('falsche Antwort ' + points + "/5")
}

}

alert ('Du hast ' + points + " Aufgaben von 5 richtig beantwortet." )

var pointsSub = 0;

if (points>=4){
    alert ('Level 2: Subtraktion' )
    for (i = 0; i < 5; i++) {
        var number3 = Math.floor(Math.random()*11)+10;
        var number4 = Math.floor(Math.random()*11);
        var solutionSub = number3 - number4;
        var userNumber = prompt("Wieviel ist " + number3 + " - " + number4);
    
        //pointcounter
     if (userNumber == solutionSub) {
            pointsSub++;
        }

        //alert
        if (userNumber == solutionSub) {
            alert('Korrekt '+ pointsSub +"/5") 
        }
        else {
            alert('falsche Antwort ' + pointsSub + "/5")
        }

        }
}
else {
    alert('Bitte versuche es erneut')
}