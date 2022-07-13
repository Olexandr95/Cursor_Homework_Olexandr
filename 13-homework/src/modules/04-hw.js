/* #1Створіть функцію getRandomArray(length, min, max) – 
яка повертає масив випадкових цілих чисел. У функції є параметри: length - 
довжина масиву, min – мінімальне значення цілого числа,
max – максимальне значення цілого числа. 
Приклад: getRandomArray(15, 1, 100) –> [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]*/


export function getRandomArray(length,min, max){
   if(min>max) return "Ввведіть мінімальне меншим за максимальне"
   const randomArr = []
   for(let i = 0; i<length; i++){
   randomArr.push(Math.floor(Math.random()*(max-min)+min));
   }
   return randomArr
}
//console.log(`№1 Створіть функцію getRandomArray(length=15, min=1, max=100) =>`);
//console.log(getRandomArray(15, 1, 100))



/* #2Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих в неї аргументів. 
НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ 
Приклад: getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 2*/



function getModa(...modaArr){
   const uniqueNumbers = new Set(modaArr.filter(item => Number.isInteger(item)));
   let max = 0;
   const result = [];
   uniqueNumbers.forEach(uniqueNumber => {
       const count = modaArr.filter(number => number === uniqueNumber).length
       if (max < count) max = count;
       result.push({uniqueNumber, count});
   });
   return result.filter((item) => item.count == max).map(i => i.uniqueNumber).join();
}
//console.log(`№2 Створіть функцію getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) =>  ${getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}`)



/* #3Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
Приклад: getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 34.4*/
function getAverage(...args){
   let length = args.filter((el)=>Number.isInteger(el)).length
   let res = args.filter((el)=>Number.isInteger(el)).reduce((a,b) => a+b);
   return res/length
}
//console.log(`№3 Створіть функцію getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) =>`)
//console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2))



/*#4Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів. 
НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
Приклад: getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 23 
Приклад: getMedian(1, 2, 3, 4) –> 2.5
Приклад: getMedian(1, 2, 3, 4, 5) –> 3*/


function getMedian(...arr){
   const sortArr = arr.filter((el)=>Number.isInteger(el)).sort((a,b) => a-b);
   const length = sortArr.length
   if(sortArr.length % 2 ===0){
      return (sortArr[length/2-1]+sortArr[length/2])/2
   }
   return sortArr[(length-1)/2]
}
//console.log(`№4 Створіть функцію getMedian(1, 2, 3, 4) => ${getMedian(1, 2, 3, 4)}`)



/* #5Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції
Приклад: filterEvenNumbers(1, 2, 3, 4, 5, 6) -> [1, 3, 5]*/


function filterEvenNumbers(...numbers){
  return numbers.filter((el) => el%2!==0 && el!== true)
}
//console.log(`№5 Створіть функцію filterEvenNumbers(1, -2, 3, -4, -5, 6) => ${filterEvenNumbers(1, 2, 3, 4, 5, 6)}`)


/*#6 Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0
Приклад: countPositiveNumbers(1, -2, 3, -4, -5, 6) -> 3*/
function countPositiveNumbers(...positive){
   return positive.filter((el) => el>0 && el!== true).length
}
//console.log(`№6 Створіть функцію countPositiveNumbers(1, -2, 3, -4, -5, 6) => ${countPositiveNumbers(1, -2, 3, -4, -5, 6)}`)
/*#7Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5
Приклад: getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) -> [55, 55]*/


function getDividedByFive(...divFive){
   return divFive.filter((el) => el!==0 && el!==false).filter((el) => el%5===0)
}
//console.log(`№7 Створіть функцію getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) =>`);
//console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2))


/*#8Створіть функцію replaceBadWords(string) – яка 1) розіб'є фразу на слова, 2) замінить погані слова на зірочки (*). При вирішенні цього завдання необхідно розбити масив на слова за допомогою функції .split(" "), після чого масив необхідно буде склеїти .join(" ") Погані слова: shit та fuck. Передбачте можливість розширювати список цих слів у майбутньому.
Приклад: replaceBadWords("Are you fucking kidding?") -> "Are you ****ing kidding?" Приклад: replaceBadWords("Holy shit!") -> "Holy ****!" Приклад: replaceBadWords("It's bullshit!") -> "It's bull****!"*/
/*function replaceBadWords(string){
   let reg = /fuck|shit/gi
   let res = string.replaceAll(reg, '****')
   return res
}*/


function replaceBadWords(string){
   const badWords = ['shit', 'fuck']
   const result = string.toLowerCase().split(" ").map((el) => {
      badWords.forEach((badWord) => {
        if (el.includes(badWord)) {
          el = el.replaceAll(
            badWord,
            new Array(badWord.length).fill("*").join("")
          );
        }
      });

      return el;
    });

  return result.join("");
};
//console.log(`№8 Створіть функцію replaceBadWords(string) => ${replaceBadWords("It's bullshit!, Shitfuckfuck")}`)


/*#9Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні склади по 3 букви.
Якщо букв менше трьох – не розбиває. Пробіли завжди видаляються. Рядок приводится до нижнього регістру. 
Приклад: divideByThree("Commander) -> ["com", "man", "der"] 
Приклад: divideByThree("live") -> ["liv", "e"]*/
/*function divideByThree(word){
return word.match(/.{1,3}/g)
}*/


function divideByThree(word){
   const res = [];
   const letters = word.toLowerCase().split('').filter((el) => el !== ' ');
   for(let i = 0; i<letters.length; i+=3){
      res.push(letters.join('').substring(i,i +3))
   }
   return res;
   
}
//console.log(`№9 Створіть функцію divideByThree(word) =>`)
//console.log(divideByThree('Commander'))



/*#10Створіть функцію generateCombinations(word), яка видасть всі можливі перестановки(унікальні, 
   без повторень) букв в слові. 
Для тестів не передавайте слова в яких більше 10 букв. 
Краще взагалі обмежити работу функції 10 буквами. 
Приклад: generateCombinations("man") 
-> ["man", "mna", "amn", "anm", "nam", "nma"] 
Приклад: generateCombinations("ol") -> ["ol", "lo"]*/

function generateCombinations(word) {
   if(word.length===1){
      return [word]
   }
   else if (word.length <= 2) {
       return [word[0] + word[1], word[1] + word[0]].filter((el, pos, arr) => arr.indexOf(el) === pos)
   }else if(word.length>=10){
      return 'Введіть не більше 10 символів'
   } else {
       let anagrams = [];
       let before, focus, after;
       let shortWord, subAnagrams, newEntry;
       for (let i = 0; i < word.length; i++) {
           before = word.slice(0, i);
           focus = word[i];
           after = word.slice(i + 1, word.length + 1);
           shortWord = before + after;
           subAnagrams = generateCombinations(shortWord);
           for (let j = 0; j < subAnagrams.length; j++){

               newEntry = focus + subAnagrams[j];
               anagrams.push(newEntry);
           }
       }
       return  anagrams.filter((el, pos, arr) => arr.indexOf(el) === pos);
   }
}
/*console.log(`№10 Створіть функцію generateCombinations('123') =>`)
console.log(generateCombinations('f'));
console.log(generateCombinations('ff'));
console.log(generateCombinations('ffffff'));*/