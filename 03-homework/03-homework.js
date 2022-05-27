const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];
const getGIRLS = students.filter((student)=> student.lastIndexOf('а') === student.length-1);
const getBOYS = students.filter((student)=> student.lastIndexOf('а') !== student.length-1);
const teams = getTeam();
const teamsAndThemsArr = getTeamAndThemes();
const studentsMarksArr = getStudentsMarks();
const pairMarksArr = getPairMarks();
console.log(`1. Масив студентів:   ${students}`)
console.log(`2. Масив тем:   ${themes}`)
console.log(`3. Масив оцінок:   ${marks}`)
console.log(`                   Виконання завдання:`)
console.log(`№1 Масив студентів(хлопець + дівчина): ${teams}`);
console.log(teams)
console.log(`№2 Масив студентів(хлопець + дівчина) + тема:  ${teamsAndThemsArr}`)
console.log(teamsAndThemsArr)
console.log(`№3 Масив оцінок і студентів:  ${studentsMarksArr}`);
console.log(studentsMarksArr)
console.log(`№4 Масив студентів по парно + рандомні оцінки:  ${pairMarksArr}`)
console.log(pairMarksArr)
/*Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. У 
вас повинен вийти вкладений масив з парами студентів: 
[["Олександр", "Олена"], [..], [...]];*/
function getTeam(){
   const teamArr = []
   for(let i=0; i<(students.length/2); i++){
      teamArr.push([`${getBOYS[i]}` , `${getGIRLS[i]}`])

   }
   return teamArr
}
/*Зіставте пари з попереднього завдання та теми проєктів, 
над якими студенти будуть працювати. Повинен вийти вкладений масив виду:
[["Олександр і Олена", "Теорія автоматів"], [...], [...]]*/
function getTeamAndThemes(){
   const teamAndThemes = [];
   for(let i=0; i<(students.length/2); i++){
      teamAndThemes.push([`${getBOYS[i]} i ${getGIRLS[i]}` , `${themes[i]}`]);
   }
   return teamAndThemes
}
/*Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]*/
function getStudentsMarks(){
   const studentsMarks = [];
   for(let i = 0; i<students.length; i++){
      studentsMarks.push([`${students[i]}`, `${marks[i]}`])
   }
   return studentsMarks
}
/*Поставте кожній парі випадкову оцінку(від 1 до 5) 
за проєкт(тут функція буде нечистою, але не повинна мутувати массив): 
[["Олександр і Олена", "Теорія автоматів", 5], [...], [...]]*/
function getPairMarks(){
   const pairMarks = [];
   for(let i = 0; i<teamsAndThemsArr.length; i++ ){
      pairMarks.push([...teamsAndThemsArr[i] , `${Math.ceil(Math.random()*(5-1)+1)}`])
   }
   return pairMarks;
}
