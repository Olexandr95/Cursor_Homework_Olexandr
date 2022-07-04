function* createIdGenerator() {
	let i = 0;
	while(true){
		yield i++
	}
}

const idGenerator = createIdGenerator();
console.group('Завдання 1: Hескінченний генератор ідентифікаторів')
console.log("idGenerator.next().value -> " , idGenerator.next().value);
console.log("idGenerator.next().value -> " , idGenerator.next().value);
console.log("idGenerator.next().value -> " , idGenerator.next().value)
console.log("idGenerator.next().value -> " , idGenerator.next().value)
console.log("idGenerator.next().value -> " , idGenerator.next().value);
console.groupEnd()

// Advanced

function* newFontGenerator(fontSize = 14) {
	while (typeof fontSize === "number" && fontSize > 0){
		 arg = yield fontSize;

		 if (arg === "up") {
			fontSize += 2;
		 } else if (arg === "down") {
			fontSize -= 2;
		 } 
	}
}

const fontGenerator = newFontGenerator();
console.group('Завдання 2: Створіть генератор, який буде регулювати розміри шрифту для вашого сайту.')
console.group('UP')
console.log('fontGenerator.next("up").value -> ' , fontGenerator.next("up").value); 
console.log('fontGenerator.next("up").value -> ' , fontGenerator.next("up").value);
console.log('fontGenerator.next("up").value -> ' , fontGenerator.next("up").value);
console.log('fontGenerator.next("up").value -> ' , fontGenerator.next("up").value);
console.log('fontGenerator.next("up").value -> ' , fontGenerator.next("up").value);
console.groupEnd()
console.log('fontGenerator.next().value -> ' , fontGenerator.next().value);
console.group("DOWN")
console.log('fontGenerator.next("down").value -> ' , fontGenerator.next("down").value);
console.log('fontGenerator.next("down").value -> ' , fontGenerator.next("down").value);
console.log('fontGenerator.next("down").value -> ' , fontGenerator.next("down").value);
console.log('fontGenerator.next("down").value -> ' , fontGenerator.next("down").value);
console.log('fontGenerator.next("down").value -> ' , fontGenerator.next("down").value);
console.log('fontGenerator.next().value -> ' , fontGenerator.next().value);
console.groupEnd()
console.groupEnd()