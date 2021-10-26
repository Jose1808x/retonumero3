const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.menu-mobile');

ham.addEventListener('click', ()=>{
  enlaces.classList.toggle('activado');
});