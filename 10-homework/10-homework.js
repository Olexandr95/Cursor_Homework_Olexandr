const time = 50;
async function getRandomChinese (length = 4) {
	if(length < 0 || !Number.isInteger(length)) throw new Error("Enter positive number")
 		let result = []
		for (let i = 0; i < length; i++) {
			const sign = String(Date.now()).slice(-5)
			await new Promise((resolve, reject) => setTimeout(resolve, time))
			result.push(String.fromCharCode(sign))
			}
			return result.join("")
}

getRandomChinese(5)
  .then(result => console.log(result))
  .catch(err => console.log(err))
