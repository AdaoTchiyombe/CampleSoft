const menu = [...document.getElementsByClassName('iconMenu')];
const navBar=[...document.querySelectorAll('.menu')];

console.log(navBar);
menu.addEventListener('click', ()=> {
    navBar.classList.toggle('show');
})