function addition() {
    var a = +prompt('введіть число a');
    var b = +prompt('введіть число b');
    var result = a + b;
    console.log(result);
}
addition();

function subtraction() {
    var a = +prompt('введіть число a');
    var b = +prompt('введіть число b');
    var result = a - b;
    console.log(result);
}
subtraction();

function multiplication() {
    var a = +prompt('введіть число a');
    var b = +prompt('введіть число b');
    var result = a * b;
    console.log(result);
}
multiplication();

function quotient() {
    var a = +prompt('введіть число a');
    var b = +prompt('введіть число b');
    var result = a % b;
    console.log(result);
}
quotient();

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
        beginGame();
    } else {
        console.log('Сьогодні ви не виграли мільйон, а могли');
    }
}
guessingGame();
	
function getGameresult() {
	if (confirm('Ви виграли, чи хочете продовжити гру?')) {
		beginGame();
		} else {
			console.log('Дякуємо за гру, ви виграли ' + 
			sessionStorage.getItem('prize') + '$'); 
		}
}

function beginGame() {
	var a = Math.random() * 5;
	var rand = Math.floor(a);	
	var first = +prompt('У вас є 3 спроби, щоб вгадати ціле число від 0 до 5. Введіть число:');
	var second = +prompt('Друга спроба. Введіть число:');
	var third = +prompt('Третя спроба. Введіть число:');
      
	switch (rand) {
        case first:
            var j = +sessionStorage.getItem('prize');

            if (j > 0) {
                var i = +30;
            } else {
                i = +10;
            }
			
			var prize = sessionStorage.setItem('prize', j + i);
            
		getGameresult();
		break;
			
        case second:
            var j = +sessionStorage.getItem('prize');

            if (j > 0) {
                var i = +15;
            } else {
                i = +5;
            }
			
			var prize = sessionStorage.setItem('prize', j + i);
			
		getGameresult();
		break;
		
        case third:
            var j = +sessionStorage.getItem('prize')
			
			if (j > 0) {
                var i = +6;
            } else {
                i = +2;
            }
			
			var prize = sessionStorage.setItem('prize', j + i);
		getGameresult();
		break;
        
		default:
            if (confirm('Ваш виграш 0$. Чи бажаєте зіграти ще раз?')) {
                beginGame();
            } else {
                console.log('Дякуємо за гру, ви виграли ' + Number(
                    sessionStorage.getItem('prize')) + '$');
                break;
            }
	}
}