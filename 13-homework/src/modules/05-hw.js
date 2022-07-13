export const studentsObj = [{
   name: "Tanya",
   course: 3,
   subjects: {
     math: [4, 4, 3, 4],
     algorithms: [3, 3, 3, 4, 4, 4],
     data_science: [5, 5, 3, 4]
   }
 }, {
   name: "Victor",
   course: 4,
   subjects: {
     physics: [5, 5, 5, 3],
     economics: [2, 3, 3, 3, 3, 5],
     geometry: [5, 5, 2, 3, 5]
   }
 }, {
   name: "Anton",
   course: 2,
   subjects: {
     statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
     english: [5, 3],
     cosmology: [5, 5, 5, 5]
   }
 }];

/* #1Створіть функцію getSubjects(students[0] --> 
  ["Math", "Algorithms", "Data science"] - яка повертає список предметів для конкретного студента. 
  Зверніть увагу – назву
предмету необхідно повертати з великої літери, а _ – замінити на пробіл*/
export function getSubjects(studentsObj){
  const arrForMark =  Object.keys(studentsObj.subjects)
  return arrForMark.map(el=>el[0].toUpperCase() + el.slice(1).toLowerCase().replace('_', ' '))
}
//console.log(`#1Створіть функцію getSubjects(students[0])==> `);
//console.log(getSubjects(students[0]))
 /* #2 Створіть функцію getAverageMark(students[0]) --> 3.79 – 
 яка поверне середню оцінку по усім предметам для 
 переданого студента НЕ МАСИВА СТУДЕНТІВ. Оцінку округліть 
 до 2ого знаку. Можна використовувати функції,
  написані у попередніх домашніх завданнях :)*/
export const  getAverageMark = (students)=>{
  const arrForMark = Object.values(students.subjects)
  const length = arrForMark.flat().length
  return Number((arrForMark.flat().reduce((a,b)=>a+b)/length).toFixed(2))
}
//console.log(`#2 Створіть функцію getAverageMark(students[0])==>`);
//console.log(getAverageMark(students[0]))
/* #3 Створіть функцію getStudentInfo(students[0]) --> 
{ "course": 3, "name": "Tanya", "averageMark": 3.79} – 
яка повертає інформацію загального виду по переданому студенту 
(вам знадобиться функція з попереднього завдання). 
ПОвинна бути виведена інформація: курс, ім'я, середня оцінка.*/
function getStudentInfo(student) {
  return  {
    name: student.name,
    course: student.course,
    avarage: getAverageMark(student)
    };
}
//console.log(`#3 Створіть функцію getStudentInfo(students[0])==>`)
//console.log(getStudentInfo(students[0]))
/*№4Ствроіть функцію getStudentsNames(students) --> 
["Anton", "Tanya, "Victor"] –
яка повертає імена студентів у алфавітному порядку.*/
function getStudentsNames(students){
  return students.map((student) => student.name).sort()
}
//console.log(`#4Ствроіть функцію getStudentsNames(students)==> `)
//console.log(getStudentsNames(students))
/* #5 Створіть функцію getBestStudent(students) --> 
"Anton" – яка повертає кращого студента зі списку по показнику середньої оцінки.*/
function getBestStudent (students) {
  const bestMark = Math.max(...students.map(student => getAverageMark(student)));
  //console.log(bestMark)
  return students.map(student => ({name: student.name, averageMark: getAverageMark(student)}))
      .filter(item => item.averageMark === bestMark)
      .map(student => student.name).toString();
};
//console.log(`#5 Створіть функцію getBestStudent(students)==> `)
//console.log(getBestStudent(students))
/* #6 Створіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } 
– яка повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень.*/
function calculateWordLetters(word) {
  const letters = word.split('');
  const counter = {};
  for (const letter of letters) {
    if (!counter[letter]) counter[letter] = 1;
    else counter[letter]++;
  }
  return counter;
}
//console.log(`#6 Створіть функцію calculateWordLetters("тест")==> `)
//console.log(calculateWordLetters("тест"))