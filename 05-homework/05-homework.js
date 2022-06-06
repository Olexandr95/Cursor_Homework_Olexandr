const students = [{
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

console.log(students)
 /*Створіть функцію getSubjects(students[0] --> 
   ["Math", "Algorithms", "Data science"] - 
   яка повертає список предметів для конкретного студента. 
   Зверніть увагу – назву предмету 
 необхідно повертати з великої літери, а _ – замінити на пробіл
function getSubjects(name){
   const subjects = students[name].subjects;
   const res = []
   for(let key in subjects){
   res.push(key[0].toUpperCase()+key.slice(1).toLowerCase().replace('_', ' '))
   }
  return res
}
console.log(getSubjects(0))*/
/*const getSubject = name => {
   // Тут ти проходишся по кожному елементу массиву (в даному випадку це об'єкт) і знаходиш потрібний, тобто шукаєш такий щоб в нього було вказане name
   let currentStudent = {};
   for (const student of students) {
     if (student.name === name) {
       currentStudent = student;
       break;  
     }
   }
   // А далі вже робиш маніпуляцію з цим студентом
   console.log(currentStudent);
   const res = []
   for(let key in subjects){
      res.push(key[0].toUpperCase()+key.slice(1).toLowerCase().replace('_', ' '))
   }
   return res
 }
 
getSubject('Tanya')*/
function getSubjects(numberOfStudent) {
   const studentSubjects = students[numberOfStudent].subjects;
   const formattedSubjects = []
   for (const subject in studentSubjects) {
     formattedSubjects.push(subject[0].toUpperCase() + subject.slice(1).toLowerCase().replace('_', ' '));
   }
   return formattedSubjects;
 }
 console.log(getSubjects(0));
 /*Створіть функцію getAverageMark(students[0]) --> 3.79 – 
 яка поверне середню оцінку по усім предметам для 
 переданого студента НЕ МАСИВА СТУДЕНТІВ. Оцінку округліть 
 до 2ого знаку. Можна використовувати функції,
  написані у попередніх домашніх завданнях :)*/
function getAverageMark(numberOfStudent){
   const subjects = students[numberOfStudent].subjects;
   const marks = [];
   let avarage;
   for(const subject in subjects){
      marks.push(subjects[subject]);
   }
   avarage = marks.flat().reduce((a, b) => a + b) / marks.flat().length;
   return Number(avarage.toFixed(2));

}
console.log(getAverageMark(0));
/*Створіть функцію getStudentInfo(students[0]) --> 
{ "course": 3, "name": "Tanya", "averageMark": 3.79} – 
яка повертає інформацію загального виду по переданому студенту 
(вам знадобиться функція з попереднього завдання). 
ПОвинна бути виведена інформація: курс, ім'я, середня оцінка.*/
function getStudentInfo(student) {
   const current = students.indexOf(student);
   console.log(current);
   const avarage = getAverageMark(current);
     return  {
      name: student.name,
      course: student.course,
      avarage: avarage
      };
 }
 
console.log(getStudentInfo(students[0]))