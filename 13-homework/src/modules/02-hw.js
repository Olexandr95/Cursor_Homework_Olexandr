//#1
export function getMaxDigit(num){
    let big = 0;
    const arr = num.toString().split('');
    for(let i=0; i<arr.length; i++){
       if(arr[i]>big) {
 big = arr[i] 
} 
    }
    return big
 }
//сonsole.log(getMaxDigit(987));
//№2
function pow(x, n){
     let result = 1;
     if(n>0){
     for (let i=0; i<n;i++){
         result*=x;
     }
    }else if(n<0){
        for (let i=n; i<0;i++){
            result*=x;
        }
        result=1/result
    }
    return result
 }
//console.log(pow(-5,-2));
 //#3 
 function formatName(name){
    return name[0].toUpperCase()+ name.slice(1).toLowerCase()
 }
 //console.log(formatName('вЛАД'))
 //#4 
 function clearProfit(zp, tax = 19.5){
     return zp -zp/100 *tax;
 }
//console.log(clearProfit(1000));
//#5 
 function getRandomNumber(n, m){
    return Math.floor(Math.random()*(m-n)+n)
 }
//console.log(getRandomNumber(1,5))
//№6
 function countLetter(letter, word){
   let count =0;
   let arr = word.toLowerCase().split('')
   for(let i =0; i<arr.length; i++){
      if(arr[i]===letter.toLowerCase()){
         count++
      }
   }
   return count
 }
//console.log(countLetter('А', 'Авганістан'))
 // #7
 function convertCurrency(sum, curs = 25){
    let str = sum.toString().toUpperCase();
    let value = parseInt(sum);
    if(isNaN(parseInt(sum))) {
 return 'Введіть число' 
}
    if(str.includes('UAH')){
      return value/curs
    }else if(str.includes('$')){
       return value*curs
    }else{
      return "Enter current valut 'UAH' or '$'"
    }
 }
//console.log(convertCurrency("2500UAH"))
//#10
function getRandomPassword(num=8){
    let arr = [];
    for(let i =0; i<num; i++){
       arr.push(Math.floor(Math.random()*10))
    }
    return arr.join('')
 }
//console.log(getRandomPassword(5));
//#11
 function deleteLetters(letter, word){
 let res = [];
 let arr = word.toLowerCase().split('')
 for(let i=0; i<arr.length; i++){
   if(arr[i]===letter.toLowerCase()) {
      continue 
   } else {
   res.push(arr[i]) 
   }
 }
 return res.join('')
}
//console.log(deleteLetters('a', 'blablabla'));
//#12
function isPalyndrom(str){
    let arr = deleteLetters(' ', str).toLowerCase()
    console.log(arr)
    let res = arr.split('').reverse().join('')
 return arr===res 
}
//console.log(isPalyndrom("madam"))
//№13 
 function deleteDuplicateLetter(text){
    return text.toLowerCase().split('').filter((item,pos, self) => self.indexOf(item)===text.lastIndexOf(item)).join('')
}
//console.log(deleteDuplicateLetter("Бісквіт був дуже ніжним"))

/*document.writeln(`<div><b>Функція №1:</b><p>getMaxDigit(1236)  ==>  ${getMaxDigit(123)}</p></div>`);
document.writeln(`<div><b>Функція №2:</b><p>Pow(2, 4)==> ${pow(2, 4)}</p></div>`);
document.writeln(`<div><b>Функція №3:</b><p>formatName('вЛАД')==> ${formatName('влад')}</p></div>`);
document.writeln(`<div><b>Функція №4:</b><p>clearProfit(1000)==> ${clearProfit(1000)}</p></div>`);
document.writeln(`<div><b>Функція №5:</b><p>getRandomNumber(1, 10)==> ${getRandomNumber(1, 10)}</p></div>`);
document.writeln(`<div><b>Функція №6:</b><p>countLetter('a', 'Americaaaaa')==> ${countLetter('a', 'Americaaaaa')}</p></div>`);
document.writeln(`<div><b>Функція №7:</b><p>convertCurrency('100$')==> ${convertCurrency('100$')}UAH</p></div>`);
document.writeln(`<p>convertCurrency('2500UAH')==> ${convertCurrency('2500UAH')}$<p>`);
document.writeln(`<p>convertCurrency('100$')==> ${convertCurrency('100$')}<p>`);
document.writeln(`<div><b>Функція №8:</b><p>getRandomPassword(4)==> ${getRandomPassword(4)}</p></div>`);
document.writeln(`<div><b>Функція №9:</b><p>deleteLetters('a', 'blablabla')==> ${deleteLetters('a', 'blablabla')}</p></div>`);
document.writeln(`<div><b>Функція №10:</b><p>isPalyndrom('madam')==> ${isPalyndrom('madam')}</p></div>`);
document.writeln(`<p>isPalyndrom('Я несу гусеня')==> ${isPalyndrom('Я несу гусеня')}</p>`);
document.writeln(`<p>isPalyndrom('кокос')==> ${isPalyndrom('кокос')}</p>`);
document.writeln(`<div><b>Функція №11:</b><p>deleteDuplicateLetter('Бісквіт був дуже ніжним')==> ${deleteDuplicateLetter('Бісквіт був дуже ніжним')}</p></div>`);*/
