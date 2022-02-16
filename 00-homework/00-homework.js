const cola = 15.678;
const fanta = 123.965;
const sprite = 90.2345;


const max = Math.max(cola,fanta,sprite);
const min = Math.min(cola,fanta,sprite);
const sumItems = cola + fanta + sprite;
const sumFloor = Math.floor(cola) + Math.floor(fanta) + Math.floor(sprite);
const sumRound = Math.round(sumItems/100)*100;
const sumRoundBoolean = (Math.floor(sumItems) % 2) == 0 ? "true" : "false";
const changeFrom500 = 500 - sumItems; 
const middlePrice = (sumItems / 3).toFixed(2);
const discountRandom = Math.round(Math.random()*100);
const randomPricre = ((fanta * discountRandom)/100).toFixed(2);
const pureProfit = (((sumItems * discountRandom)/100)-(sumItems/2)).toFixed(2);

document.write(`<div class"table">Product List:</div><br>`);
document.write(`<div class"table">Coca-Cola  ${cola}</div><br>`);
document.write(`<div class"table">Fanta  ${fanta}</div><br>`);
document.write(`<div class"table">Sprite  ${sprite}</div><br>`);
document.write(`<div class"table">Max value: ${max}</div><br>`);
document.write(`<div class"table">Min value: ${min}</div><br>`);
document.write(`<div class"table">Amount: ${sumItems}</div><br>`);
document.write(`<div class"table">Amount MathFloor: ${sumFloor}</div><br>`);
document.write(`<div class"table">Amount MathRoundto100: ${sumRound}</div><br>`);
document.write(`<div class"table">Amount MathFloorBoolean: ${sumRoundBoolean}</div><br>`);
document.write(`<div class"table">changeFrom500UAH: ${changeFrom500}</div><br>`);
document.write(`<div class"table">middlePriceFixed(2): ${middlePrice}</div><br>`);
document.write(`<div class"table">DiscountRandom: ${discountRandom}</div><br>`);
document.write(`<div class"table">RandomDiscountPrice: ${randomPricre}</div><br>`);
document.write(`<div class"table">PureProfit: ${pureProfit}</div><br>`);

