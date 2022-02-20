let min;
let max;
let sum = 0;
let pairNum;

do {
	min = +prompt('Від якого числа почнемо додавати?');
} while (min % 1 != 0)
do {
	max = +prompt('До якого числа будемо додавати?');
} while (max % 1 != 0)
pairNum = confirm("Пропускаємо парні числа?");

for (i = min; i <= max; i++){
	if (pairNum === true) {
            if (i % 2) {
                sum += i
            }
        } else {
            sum += i
        }
    }
document.writeln(`<div>Починаємо рахувати з ${min}</div>`);
document.writeln(`<div>Рахуємо до(включно) ${max}</div>`);
document.writeln(`<div>Пропускаємо парні числа ${pairNum}</div><br>`);
document.writeln(`<div>Сума: ${sum}</div>`);