const ukraine = {tax: 0.195, middleSalary: 1789, vacancies: 11476};
const latvia = {tax: 0.25, middleSalary: 1586, vacancies: 3921};
const litva = {tax: 0.15, middleSalary: 1509, vacancies: 1114};
const howOftenToShow = 10000;
const max  = 2000;
const min = 1500;

/*#1 Створіть функцію getMyTaxes.call(country, salary) -> number; 
– яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн. 
Функція повинна викликатись через call та працювати з даними через this*/

function getMyTaxes(salary){
  return  Number((this.tax * +salary).toFixed(2))};
console.log(`getMyTaxes.call(country, salary) -> ${getMyTaxes.call(ukraine, 3000)}`);


/*#2 Створіть функцію getMiddleTaxes.call(country) -> number;
– яка рахує скільки у середньому податків платятт IT-спеціалісти у кожній країні.
(tax * middleSalary). 
Функція повинна викликатись через call та працювати з даними через this*/

function getMiddleTaxes(country){
  return Number((this.tax*this.middleSalary).toFixed(0));
}
console.log(`getMiddleTaxes.call(country) -> ${getMiddleTaxes.call(ukraine)}`);


/*#3Створіть функцію getTotalTaxes.call(country) -> number; 
– яка рахує, скільки всього податків платять IT-спеціалісти у кожній країні. 
(tax * middleSalary * vacancies). 
Функція повинна викликатись через call та працювати з даними через this*/


function getTotalTaxes(country){
  return Number((this.tax * this.middleSalary * this.vacancies).toFixed(0));
}
console.log(`getTotalTaxes.call(country) -> ${getTotalTaxes.call(ukraine)}`);


/*Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт виду: 
{ salary: number, taxes: number, profit: number } кожні 10 секунд. Значення salary 
– генеруйте випадковим чином у діапазоні 1500-2000. taxes – розраховується в залежності 
від вибраної країни та значення salary.
profit = salary - taxes;*/

function getMySalary(country){
  setInterval(()=>{
    let salary = Number((Math.floor(Math.random() * (max - min)) + min).toFixed(0));
    let taxes = Number((this.tax * salary).toFixed(2));
    let profit = salary - taxes;
    return console.log(
      {
      salary : salary,
      taxes : taxes,
      profit : profit
    });
  },howOftenToShow);
}
getMySalary.call(ukraine);