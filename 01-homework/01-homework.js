let min;
let max;
let sum = 0;
let pairNum;

do {
	min = +prompt('Від якого числа почнемо додавати?');
	if ((min !== parseInt(min)) || (Object.is(NaN , min) === true))  alert("Введіть ціле число");
} while (min % 1 != 0 )
do {
	max = +prompt('До якого числа будемо додавати?');
    if ((max !== parseInt(max)) || (Object.is(NaN , max) === true))  alert("Введіть ціле число");
} while (max % 1 != 0)
pairNum = confirm("Пропускаємо парні числа?");
if (max > min){
for (i = min; i <= max; i++){
    if (pairNum && i % 2 == 0) {
                continue;
        } 
            sum +=i;
    }
} else{
    for (i = max; i <= min; i++){
    if (pairNum && i % 2==0) {
                 continue;
        }
            sum +=i;
    }
}
document.writeln(`<div>Починаємо рахувати з ${min}</div>`);
document.writeln(`<div>Рахуємо до(включно) ${max}</div>`);
document.writeln(`<div>Пропускаємо парні числа ${pairNum}</div><br>`);
document.writeln(`<div>Сума: ${sum}</div>`);