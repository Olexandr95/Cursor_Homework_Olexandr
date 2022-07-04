import { charactersContainer,
	chapters,
	getCharacters,
	planetsButtons,
	getPlanets,
	prevPage,
	nextPage,
	index } from './variables.js'
import {createChepter, createPlanet} from './functions.js'

getCharacters.addEventListener("click", () => {
	charactersContainer.innerHTML = "";
	const chapter = chapters.value;
	createChepter(chapter);
});

getPlanets.addEventListener("click", () => {
	planetsButtons.style.display = "flex";
	createPlanet(index);
});

prevPage.addEventListener("click", () => {
	index > 0 ? index-- : (index = 9);
	createPlanet(index);
});

nextPage.addEventListener("click", () => {
	index < 9 ? index++ : (index = 0);
	createPlanet(index);
});




