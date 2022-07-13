import '../src/scss/index.scss'
import {max as maxH1} from '../src/modules/00-hw.js'
import {getMaxDigit} from '../src/modules/02-hw.js'
import {students,getGIRLS,getBOYS,getTeam} from './modules/03-hw.js'
import {getRandomArray} from './modules/04-hw.js'
import {studentsObj, getSubjects} from './modules/05-hw.js'
import {ukraine, getMyTaxes} from './modules/06-hw.js'
import {student as StudentClass} from './modules/07-hw.js'
import {startBnt,generateBlocksInterval} from './modules/08-hw.js'
import  './modules/09-hw.js'
import {getRandomChinese} from './modules/10-hw'
import '../src/sounds/1.mp3'
import '../src/sounds/2.mp3'
import '../src/sounds/3.mp3'
import '../src/sounds/4.mp3'
import '../src/sounds/5.mp3'
import '../src/sounds/6.mp3'
import '../src/sounds/7.mp3'
import '../src/sounds/8.mp3'
import '../src/sounds/9.mp3'
import './modules/11-hw-js/11-hw.js'
import './planets/planet-0.jpg'
import './planets/planet-1.jpg'
import './planets/planet-2.jpg'
import './planets/planet-3.jpg'
import './planets/planet-4.jpg'
import './planets/planet-5.jpg'
import './planets/planet-6.jpg'
import './planets/planet-7.jpg'
import './planets/planet-8.jpg'
import './planets/planet-9.jpg'
import {idGenerator} from  './modules/12-hw.js'


console.log('HW #1 =>', maxH1)
console.log(`HW #2 => ${getMaxDigit(987)}`);
console.log(`HW #3 => ${getTeam(students)}`)
console.log(`HW #4 => ${getRandomArray(15, 1, 100)}`)
console.log(`HW #5 => ${getSubjects(studentsObj[0])}`)
console.log(`HW #6 => ${getMyTaxes.call(ukraine, 3000)}`);
console.group("HW #7")
console.log('student.getInfo() => ', StudentClass.getInfo());
console.log('student.marks => ', StudentClass.marks);
console.log('student.getAverageMark() => ', StudentClass.getAverageMark());
StudentClass.dismiss();
console.log('student.marks after student.dismiss() => ', StudentClass.marks);
StudentClass.recover();
console.log('student.marks after student.recover() => ', StudentClass.marks);
console.groupEnd()
console.group("HW #12")
console.group('Завдання 1: Hескінченний генератор ідентифікаторів')
console.log("idGenerator.next().value -> " , idGenerator.next().value);
console.log("idGenerator.next().value -> " , idGenerator.next().value);
console.log("idGenerator.next().value -> " , idGenerator.next().value)
console.log("idGenerator.next().value -> " , idGenerator.next().value)
console.log("idGenerator.next().value -> " , idGenerator.next().value);
console.groupEnd()

console.groupEnd()