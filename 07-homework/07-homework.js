class Student {
  constructor(university, course, fullName){
    this.university = university
    this.course = course
    this.fullName = fullName
    this.marksArr = []
    this.dismissed = false
  }
  getInfo(){
    return `Студент ${this.course}го курсу ${this.university}, ${this.fullName}`;
  }
  get marks(){
    if (this.dismissed) return null
  return this.marksArr;
  }
  set marks(mark){
    if (this.dismissed) return
  return this.marksArr.push(mark)
  }
  getAverageMark(){
    if (this.dismissed) return null;
    return Number(this.marksArr.reduce((sum,arr)=>sum+arr)/this.marksArr.length.toFixed(1))
  }
  dismiss(){
    this.dismissed = true;
  }
  recover(){
    this.dismissed = false;
  }
}

class BudgetStudent extends Student{
  constructor(university, course, fullName, scholarShip){
    super(university, course, fullName)
    this.scholarShip = scholarShip
  }
  getScholarShip(){
    setInterval(()=>{
      if(this.getAverageMark()>=4){
        return console.log(`Ви отримали ` + this.scholarShip + ` грн. стипендії`)
      }
      if(this.getAverageMark()<4){
        return console.log("Треба краще вчитись, щоб отримати стипендію")
      }
    }, 30000)
  }
}



const student = new Student('Вища Школа Психотерапії м.Одеса', 1, 'Остап Бендер', [5, 4, 4, 5, 5]);
[5, 4, 4, 5, 5].forEach(mark => student.marks = mark)
console.log('student.getInfo() => ', student.getInfo());
console.log('student.marks => ', student.marks);
console.log('student.getAverageMark() => ', student.getAverageMark());
student.dismiss();
console.log('student.marks after student.dismiss() => ', student.marks);
student.recover();
console.log('student.marks after student.recover() => ', student.marks);

const budgetStudent = new BudgetStudent('Львівська політехніка', 1, 'Олександр Рущак', 1400);
[4, 5, 4, 5, 5].forEach(mark => budgetStudent.marks = mark)

console.log('budgetStudent.getInfo() => ', budgetStudent.getInfo());
console.log('budgetStudent.marks => ', budgetStudent.marks);
console.log('budgetStudent.getAverageMark() => ', budgetStudent.getAverageMark());
budgetStudent.dismiss();
console.log('budgetStudent.marks after budgetStudent.dismiss() => ', budgetStudent.marks);
budgetStudent.recover();
console.log('budgetStudent.marks after budgetStudent.recover() => ', budgetStudent.marks);
budgetStudent.getScholarShip()