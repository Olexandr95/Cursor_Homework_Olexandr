const APIFILMS = 'https://swapi.dev/api/films/'
const APIPLANETS= 'https://swapi.dev/api/planets/'
const charactersContainer = document.querySelector(".characters");
const chapters = document.querySelector("#chapters");
const getCharacters = document.querySelector("#get-characters");
const planetsSection = document.querySelector(".planets-section");
const planetsContainer = document.querySelector(".planets");
const planetsButtons = document.querySelector(".planet-buttons");
const getPlanets = document.querySelector("#get-planets");
const prevPage = document.querySelector("#prev-page");
const nextPage = document.querySelector("#next-page");
export {APIFILMS,
   APIPLANETS,
   charactersContainer,
	chapters,
	getCharacters,
	planetsSection,
	planetsContainer,
	planetsButtons,
	getPlanets,
	prevPage,
	nextPage}