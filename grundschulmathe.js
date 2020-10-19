
alert('Grundschulmathe')

const generateRandomnumber = (max) => Math.floor(Math.random() * max + 1);

function askAditionTask(mathFn, opratorLiteral) {
    var number1 = generateRandomnumber(20);
    var number2 = generateRandomnumber(20);

    var solution = mathFn(number1, number2);

    var userNumber = parseInt(
        prompt(`Wieviel ist ${number1} ${opratorLiteral} ${number2}`),
        10
    );


    //pointcounter
    //alert

    alert(solution + " " + userNumber)
    if (userNumber === solution) {
        return 1;
    }
    return 0;
}



var i = 0;
var points = 0;
for (i = 0; i < 5; i++) {
    let result =  askAditionTask((a, b) => { return a + b }, '+');
    points += result;
    if (result) {
        alert ('Korrekte Antwort: ' + points + '/5')
    } else {
        alert ('Falsche Antwort: ' + points + '/5')
    }

}

alert('Du hast ' + points + " Aufgaben von 5 richtig beantwortet.")

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

        //pointcounter
        if (userNumber == solutionSub) {
            pointsSub++;
        }

        //alert
        if (userNumber == solutionSub) {
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

if (pointsSub >= 4) {
    var pointsMul = 0;
    for (i = 0; i < 5; i++) {
        pointsMul += askAditionTask((a, b) => { return a * b }, '*');
    }
}