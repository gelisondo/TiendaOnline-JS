const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');


menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    // el toogle cambia el valor, si existe inactive la saca, si no lo agrega
    desktopMenu.classList.toggle('inactive');

}