alert('Grundschulmathe')


//Zufallszahl
const generateRandomnumber = (max) => Math.floor(Math.random() * max + 1);

let whichNumberPair = true;

//Addition/Multiplikation (Funktion)
function askTask(mathFn, operatorLiteral) {
    var number1 = generateRandomnumber(20);
    var number2 = generateRandomnumber(20);

    var solution = mathFn(number1, number2);

    var userNumber = parseInt(
        prompt(`Wieviel ist ${number1} ${operatorLiteral} ${number2}`),
        10
    );

    if (userNumber === solution) {
        return 1;
    }
    return 0;
}

//Subtraktion/Division (Funktion)
function askTaskSubDiv(mathFn, operatorLiteral) {
    let question;
    let solution;
    if (whichNumberPair === false) {
        let numerator = generateRandomnumber(9);
        let denominator = generateRandomnumber(9);
        let userNumerator = numerator * denominator;
        solution = mathFn(userNumerator, denominator)
        question = `Wieviel ist ${userNumerator} ${operatorLiteral} ${denominator}?`

    } else {
        var number3 = generateRandomnumber(20);
        var number4 = generateRandomnumber(20);

        if (number3 >= number4) {
            solution = mathFn(number3, number4);
            question = `Wieviel ist ${number3} ${operatorLiteral} ${number4}?`
        } else {
            solution = mathFn(number4, number3);
            question = `Wieviel ist ${number4} ${operatorLiteral} ${number3}?`
        }

    }
    var userNumber = parseInt(prompt(question), 10);

    if (userNumber === solution) {
        return 1;
    }
    return 0;

}


//Addition
var i = 0;
var points = 0;
alert('Level 1: Addition')
for (i = 0; i < 5; i++) {
    let result = askTask((a, b) => { return a + b }, '+');

    if (result) {
        points++;
        alert('Korrekte Antwort: ' + points + '/5')
    } else {
        alert('Falsche Antwort: ' + points + '/5')
    }

}
alert('Du hast ' + points + " Aufgaben von 5 richtig beantwortet.")


//Subtraktion

if (points >= 4) {
    alert('Level 2: Subtraktion')
    points = 0;
    for (i = 0; i < 5; i++) {
        let result = askTaskSubDiv((a, b) => { return a - b }, '-');

        if (result) {
            points++;
            alert('Korrekte Antwort: ' + points + '/5')
        } else {
            alert('Falsche Antwort: ' + points + '/5')
        }

    }
}
else {
    alert('Bitte versuche es erneut')
}
alert('Du hast ' + points + " Aufgaben von 5 richtig beantwortet.")


//Multiplikation

if (points >= 4) {
    alert('Level 3: Multiplikation')
    var points = 0;
    for (i = 0; i < 5; i++) {
        let result = askTask((a, b) => { return a * b }, '*');

        if (result) {
            points++;
            alert('Korrekte Antwort: ' + points + '/5')
        } else {
            alert('Falsche Antwort: ' + points + '/5')
        }
    }
}
else {
    alert('Bitte versuche es erneut')
}
alert('Du hast ' + points + " Aufgaben von 5 richtig beantwortet.")

//Division
whichNumberPair = false;
if (points >= 4) {
    alert('Level 4: Division')
    points = 0;
    for (i = 0; i < 5; i++) {
        let result = askTaskSubDiv((a, b) => { return a / b }, '/');

        if (result) {
            points++;
            alert('Korrekte Antwort: ' + points + '/5')
        } else {
            alert('Falsche Antwort: ' + points + '/5')
        }

    }
}
else {
    alert('Bitte versuche es erneut')
}
alert('Du hast ' + points + " Aufgaben von 5 richtig beantwortet.")
alert('Du hast alle verfuegbaren Level durchgespielt!')