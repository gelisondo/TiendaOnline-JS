const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const iconMenu = document.querySelector('.menu');
const mobilMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
iconMenu.addEventListener('click', toggleMobilMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive');

    //Verificamos que el aside este abierto
    if (!isAsideClosed){
        aside.classList.add('inactive');
    }

    //El toogle cambia el valor, si existe inactive la saca, si no lo agrega
    desktopMenu.classList.toggle('inactive');

}

function toggleMobilMenu(){
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed){
        aside.classList.add('inactive');
    }

    //Cambia el valor
    mobilMenu.classList.toggle('inactive');

}

function toggleCarritoAside() {
    const isMobilMenuClosed = mobilMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if(!isMobilMenuClosed){
        //Si esta abierto lo cerramos
        mobilMenu.classList.add('inactive');
      }

    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }


    aside.classList.toggle('inactive');

}
