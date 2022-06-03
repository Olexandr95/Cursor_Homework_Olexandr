/* #1Створіть функцію getRandomArray(length, min, max) – 
яка повертає масив випадкових цілих чисел. У функції є параметри: length - 
довжина масиву, min – мінімальне значення цілого числа,
max – максимальне значення цілого числа. 
Приклад: getRandomArray(15, 1, 100) –> [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]*/
function getRandomArray(length,min, max){
   const randomArr = []
   for(let i = 0; i<length; i++){
   randomArr.push(Math.floor(Math.random()*(max-min)+min));
   }
   return randomArr
}
console.log(`№1 Створіть функцію getRandomArray(length=15, min=1, max=100) =>`);
console.log(getRandomArray(15, 1, 100))
/* #2Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих в неї аргументів. 
НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ 
Приклад: getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 2*/
function getModa(...modaArr){
const moda = {}
let max = 0
let count = 0
for(let i = 0; i<modaArr.length; i++){
   const item = modaArr[i];
   if(moda[item]) {
 moda[item]++
} else {
 moda[item] = 1
}
   if(count<moda[item]){
      max = item
      count = moda[item]
   }
}
return max
}
console.log(`№2 Створіть функцію getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) =>  ${getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}`)
/* #3Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
Приклад: getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 34.4*/
function getAverage(...args){
   let num = args.length
   let res = args.reduce((a,b) => a+b);
   return res/num
}
console.log(`№3 Створіть функцію getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) =>`)
console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2))
/*#4Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів. 
НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
Приклад: getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 23 
Приклад: getMedian(1, 2, 3, 4) –> 2.5
Приклад: getMedian(1, 2, 3, 4, 5) –> 3*/
function getMedian(...arr){
   const sortArr = arr.sort((a,b) => a-b);
   const length = sortArr.length
   if(sortArr.length % 2 ===0){
      return (sortArr[length/2-1]+sortArr[length/2])/2
   }
   return sortArr[(length-1)/2]
}
console.log(`№4 Створіть функцію getMedian(1, 2, 3, 4) => ${getMedian(1, 2, 3, 4)}`)
/* #5Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції
Приклад: filterEvenNumbers(1, 2, 3, 4, 5, 6) -> [1, 3, 5]*/
function filterEvenNumbers(...numbers){
  return numbers.filter((el) => el%2!==0)
}
console.log(`№5 Створіть функцію filterEvenNumbers(1, -2, 3, -4, -5, 6) => ${filterEvenNumbers(1, 2, 3, 4, 5, 6)}`)
/*#6 Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0
Приклад: countPositiveNumbers(1, -2, 3, -4, -5, 6) -> 3*/
function countPositiveNumbers(...positive){
   return positive.filter((el) => el>0).length
}
console.log(`№6 Створіть функцію countPositiveNumbers(1, -2, 3, -4, -5, 6) => ${countPositiveNumbers(1, -2, 3, -4, -5, 6)}`)
/*#7Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5
Приклад: getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) -> [55, 55]*/
function getDividedByFive(...divFive){
   return divFive.filter((el) => el%5===0)
}
console.log(`№7 Створіть функцію getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) =>`);
console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2))
/*#8Створіть функцію replaceBadWords(string) – яка 1) розіб'є фразу на слова, 2) замінить погані слова на зірочки (*). При вирішенні цього завдання необхідно розбити масив на слова за допомогою функції .split(" "), після чого масив необхідно буде склеїти .join(" ") Погані слова: shit та fuck. Передбачте можливість розширювати список цих слів у майбутньому.
Приклад: replaceBadWords("Are you fucking kidding?") -> "Are you ****ing kidding?" Приклад: replaceBadWords("Holy shit!") -> "Holy ****!" Приклад: replaceBadWords("It's bullshit!") -> "It's bull****!"*/
/*function replaceBadWords(string){
   let reg = /fuck|shit/gi
   let res = string.replaceAll(reg, '****')
   return res
}*/
function replaceBadWords(string){
   let arr = string.split(' ');
   const badWords = ['fuck', 'shit'];
   let res = [];
   for(let i = 0; i<arr.length; i++){
      res.push(arr[i])
      for(let j = 0; j<badWords.length; j++){
         if(arr[i].includes(badWords[j])){
            res.pop(arr[i])
            res.push(arr[i].replaceAll(badWords[j], '****'));
         }
      }
   }
   return res.join(' ')
}
console.log(`№8 Створіть функцію replaceBadWords(string) => ${replaceBadWords("It's bullshit!, fuckerfucker")}`)
/*#9Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні склади по 3 букви.
Якщо букв менше трьох – не розбиває. Пробіли завжди видаляються. Рядок приводится до нижнього регістру. 
Приклад: divideByThree("Commander) -> ["com", "man", "der"] 
Приклад: divideByThree("live") -> ["liv", "e"]*/
/*function divideByThree(word){
return word.match(/.{1,3}/g)
}*/
function divideByThree(word){
   const res = [];
   for(let i = 0; i<word.length; i+=3){
      res.push(word.substring(i,i +3))
   }
   return res;
}
console.log(`№9 Створіть функцію divideByThree(word) =>`)
console.log(divideByThree('Commander'))
/*#10Створіть функцію generateCombinations(word), яка видасть всі можливі перестановки(унікальні, 
   без повторень) букв в слові. 
Для тестів не передавайте слова в яких більше 10 букв. 
Краще взагалі обмежити работу функції 10 буквами. 
Приклад: generateCombinations("man") 
-> ["man", "mna", "amn", "anm", "nam", "nma"] 
Приклад: generateCombinations("ol") -> ["ol", "lo"]*/

function generateCombinations(word) {
   if (word.length < 2) {
       return [word];
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
       return anagrams;
   }
}
console.log(`№10 Створіть функцію generateCombinations('123') =>`)
console.log(generateCombinations('qw'));