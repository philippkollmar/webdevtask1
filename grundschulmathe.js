
alert('Grundschulmathe')


//Zufallszahl
const generateRandomnumber = (max) => Math.floor(Math.random() * max + 1);

//Addition/Multiplikation (Funktion)
function askAditionTask(mathFn, opratorLiteral) {
    var number1 = generateRandomnumber(20);
    var number2 = generateRandomnumber(20);

    var solution = mathFn(number1, number2);

    var userNumber = parseInt(
        prompt(`Wieviel ist ${number1} ${opratorLiteral} ${number2}`),
        10
    );

    if (userNumber === solution) {
        return 1;
    }
    return 0;
}
//Addition
var i = 0;
var points = 0;
for (i = 0; i < 5; i++) {
    let result = askAditionTask((a, b) => { return a + b }, '+');
    points += result;
    if (result) {
        alert('Korrekte Antwort: ' + points + '/5')
    } else {
        alert('Falsche Antwort: ' + points + '/5')
    }

}
alert('Du hast ' + points + " Aufgaben von 5 richtig beantwortet.")

//Subtraktion
var pointsSub = 0;
if (points >= 4) {
    alert('Level 2: Subtraktion')
    for (i = 0; i < 5; i++) {
        var number3 = generateRandomnumber(20);
        var number4 = generateRandomnumber(20);
        let solutionSub;
        let question;
        if (number3 >= number4) {
            solutionSub = number3 - number4
            question = `Wieviel ist ${number3} - ${number4}?`
        } else {
            solutionSub = number4 - number3
            question = `Wieviel ist ${number4} - ${number3}?`
        }

        var userNumber = prompt(question);

        //alert
        if (userNumber == solutionSub) {
            pointsSub++;
            alert('Korrekt ' + pointsSub + "/5")
        }
        else {
            alert('falsche Antwort ' + pointsSub + "/5")
        }
    }
}
else {
    alert('Bitte versuche es erneut')
}


//Multiplikation
if (pointsSub >= 4) {
    alert('Level 3: Multiplikation')
    var pointsMul = 0;
    for (i = 0; i < 5; i++) {
        pointsMul += askAditionTask((a, b) => { return a * b }, '*');

        if(pointsMul){
            alert('Korrekte Antwort: ' + pointsMul + '/5')
        } else {
            alert('Falsche Antwort: ' + pointsMul + '/5')
        }
    }
}
else {
    alert('Bitte versuche es erneut')
}

pointsMul = 4;
if (pointsMul >= 4) {
    alert('Level 4: Division')
    var pointsDiv = 0;
    for (i = 0; i < 5; i++) {
        let numerator = generateRandomnumber(9);
        let denominator = generateRandomnumber(9);
        let userNumerator = numerator * denominator;
        let solutionDiv = userNumerator / denominator;

        var userNumber = prompt(`Wieviel ist ${userNumerator} / ${denominator}?`)

        //alert
        if (userNumber == solutionDiv) {
            pointsDiv++;
            alert('Korrekt ' + pointsDiv + "/5")
        }
        else {
            alert('falsche Antwort ' + pointsDiv + "/5")
        }
    }
}
else {
    alert('Bitte versuche es erneut')
}