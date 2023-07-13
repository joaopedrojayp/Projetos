// == VARIAVEIS!
let menu = document.querySelector('#menu-bar')
let navbar = document.querySelector('.navbar')

menu.onclick =() =>{
    menu.classList.toggle('bx-menu');
    navbar.classList.toggle('active');
}