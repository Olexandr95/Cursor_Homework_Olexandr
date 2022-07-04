import {charactersContainer,
	planetsSection,
	planetsContainer,
  APIFILMS,
  APIPLANETS
} from './variables.js'


export async function createChepter(index=0) {
	try {
	  const request = await fetch(`${APIFILMS}${index}`).then(
		 (response) => response.json()
	  );
 
	  for (let promise of request.characters) {
		 const hero = await fetch(promise).then((res) => res.json());
		 charactersContainer.insertAdjacentHTML("beforeend",
			`<div class="character">
			  <img src="./img/characters/${hero.name.split(" ").join("")}.jpg" 
			  class="hero-image" alt="Character photo not found">
			  <p id="name">${hero.name}</p>
			  <p id="gender">${hero.gender}</p>
			  <p id="birth-date">${hero.birth_year}</p>
			</div>`
		 );
	  }
	} catch (e) {
	  console.log(e);
	}
 }

export async function createPlanet(planetIndex) {
	try {
	  planetsContainer.innerHTML = "";
	  planetsSection.style.height = "1000px";
	  const { results: planetsArray } = await fetch(
		 `${APIPLANETS}`
	  ).then((response) => response.json());
 
	  planetsContainer.insertAdjacentHTML("afterbegin",
		 `<div class="planet__image-container">
			<img src="./img/planets/planet-${planetIndex}.jpg" class="planet-image" alt="planet-image" />
			<div class="planet-description">
			  <p>Planet Name: ${planetsArray[planetIndex].name}</p>
			  <p>Climate: ${planetsArray[planetIndex].climate}</p>
			  <p>Population: ${planetsArray[planetIndex].population}</p>
			  <p>Terrain: ${planetsArray[planetIndex].terrain}</p>
			  <p>Films: ${planetsArray[planetIndex].films.map((film) =>film.slice(-2, -1))}</p>
			</div>
		 </div>
	  `
	  );
	} catch (e) {
	  console.log(e);
	}
 }