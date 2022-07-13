export const playSound = (target) =>{
  const mp3 = document.querySelector(`audio[data-key="${target}"]`);
  if(!mp3) return;
  mp3.play();
}
export const changeItem = (target) =>{
  const clickedBtn = document.getElementById(target);
  if(clickedBtn == null) return;
  clickedBtn.classList.add("active");
  setTimeout(() => {
    clickedBtn.classList.remove("active");
  }, 500);
}
document.addEventListener("keyup", (e) => {
  playSound(e.keyCode)
  changeItem(e.keyCode)
});
export const btnColection = document.querySelectorAll('.sound');
btnColection.forEach(elem => elem.addEventListener('click', (e)=>{ 
  playSound(e.target.closest('.sound').id)
  changeItem(e.target.closest('.sound').id)
}))