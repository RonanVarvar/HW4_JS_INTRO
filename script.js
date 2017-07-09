function getAddition() {
    var a = +prompt('введіть число a');
    var b = +prompt('введіть число b');
    var result = a + b;

    return result;
}

console.log( getAddition() );

function getSubtraction() {
    var a = +prompt('введіть число a');
    var b = +prompt('введіть число b');
    var result = a - b;

    return result;
}

console.log( getSubtraction() );

function getMultiplication() {
    var a = +prompt('введіть число a');
    var b = +prompt('введіть число b');
    var result = a * b;

    return result;
}

console.log( getMultiplication() );

function getQuotient() {
    var a = +prompt('введіть число a');
    var b = +prompt('введіть число b');
    var result = a % b;

    return result;
}

console.log( getQuotient() );

function quadratic() {
    var a = +prompt('введіть число a');
    var b = +prompt('введіть число b');
    var c = +prompt('введіть число c');
    var res1 = -b / 2 / a + Math.pow(Math.pow(b, 2) - 4 * a * c, 0.5) / 2 / a;
    var res2 = -b / 2 / a - Math.pow(Math.pow(b, 2) - 4 * a * c, 0.5) / 2 / a;

    if (isNaN(res1) && isNaN(res2)) {
        console.log('Немає розвязків рівняння');
    } else {
        console.log('x1 = ' + res1, 'x2 = ' + res2);
    }
}

quadratic();

function guessingGame() {
    if (confirm('Чи бажаєте почати гру?')) {
        sessionStorage.clear();
        return compare();
    }

    return console.log('Сьогодні ви не виграли мільйон, а могли');
}

guessingGame();

function compare() {
    var rand = Math.floor(Math.random() * 5);
    var first = +prompt('У вас є 3 спроби, щоб вгадати ціле число від 0 до 5. Введіть число:');
    var second = +prompt('Друга спроба. Введіть число:');
    var third = +prompt('Третя спроба. Введіть число:');

    switch(rand) {
        case first:
            getPrizeamount(10);
            getGameresult();
            break;

        case second:
            getPrizeamount(5);
            getGameresult();
            break;

        case third:
            getPrizeamount(2);
            getGameresult();
            break;

        default:
            getLoss();
            break;
    }
}

function getLoss() {
    if (confirm('Ваш виграш 0$. Чи бажаєте зіграти ще раз?')) {
        return compare();
    }

    return console.log('Дякуємо за гру, ваш виграш становить ' + Number(sessionStorage.getItem('prize')) + '$');
}

function getGameresult() {
    if (confirm('Ви виграли, чи хочете продовжити гру?')) {
        return compare();
    }

    return console.log('Дякуємо за гру, ваш виграш становить ' + sessionStorage.getItem('prize') + '$');
}

function getPrizeamount(bill) {
    var amount = +sessionStorage.getItem('prize');
    var prize;
    var win;

    if (amount > 0) {
        win = bill * 3;
    } else {
        win = bill;
    }

    prize = sessionStorage.setItem('prize', amount + win);
}