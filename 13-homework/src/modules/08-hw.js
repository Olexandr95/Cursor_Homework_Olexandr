export const startBnt = document.querySelector('#btn-generate');
startBnt.addEventListener('click', generateBlocksInterval, {once:true})
function createContainer(){
  const container = document.querySelector(".container-tile");
  console.log(container)
  for(let i=0; i<25; i++){
    container.innerHTML += `<div class="tile"></div>`
  }
}
const generateRandomColorBG = () => Math.floor(Math.random()*257);
export function generateBlocksInterval(){
  createContainer();
  const tile = document.querySelectorAll('.tile');
  setInterval(()=>{
    tile.forEach(tile => tile.style.backgroundColor = `rgb(${generateRandomColorBG()}, ${generateRandomColorBG()}, ${generateRandomColorBG()})`)

  }, 1000)
}