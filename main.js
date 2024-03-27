const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const iconMenu = document.querySelector('.menu');
const mobilMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

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


// Generamos un arrays para guardar objetos con los datos de latienda
const productList = [];


//Agregamos elementos al arrays con los datos de los productos.
productList.push({
    name: 'bike',
    price: 120,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Pantalla',
    price: 500,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'PC',
    price: 800,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});



//    <div class="product-card">
//       <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
//       <div class="product-info">
//         <div>
//           <p>$120,00</p>
//           <p>Bike</p>
//         </div>
//         <figure>
//           <img src="./icons/bt_add_to_cart.svg" alt="">
//         </figure>
//       </div>
//     </div>


//Resivimos un array como parametro para renderizar
function renderProducts(arr){
    //Recorremos el array para representar en HTML nuestros productos
    //nos da directamente el elemento del array
    for (product of arr ){
        //creamos elementos HTML
        const productCard = document.createElement('div');
        //Le agregamos una clase
        productCard.classList.add('product-card');
    
        //Agregamos una imagen 
        const img = document.createElement('img');
        //Seteamos un atributo y le damos el valor del objeto product.img
        img.setAttribute('src', product.imagen);
    
        
            //creamos elementos HTML
            const productInfo = document.createElement('div');
            //Le agregamos una clase
            productInfo.classList.add('product-info');
    
            
                //Div de contenido y nombre
                const productInfoDiv = document.createElement('div');
            
                    //Agregamos dos parrafos
                    const productPrice = document.createElement('p');
                    productPrice.innerText = '$' + product.price;
    
                    const productName = document.createElement('p');
                    productName.innerText = product.name;
    
                //Figure
                const productInfoFigure = document.createElement('figure');
                    const productInfoFigureImg = document.createElement('img');
                    productInfoFigureImg.setAttribute('src', './icons/bt_add_to_cart.svg');
    
            //Agregamos El orden de los elementos con appendChild, indicando cual sera el hijo del elemento seleccionado
            //Agregamos a product-card debajo de cards-container
            cardsContainer.appendChild(productCard);
    
            productCard.appendChild(img);
            productCard.appendChild(productInfo);
    
                //Generamos el Orden de los DIV
                productInfo.appendChild(productInfoDiv);
    
                    //Generamos el Orden de los DIV
                    productInfoDiv.appendChild(productPrice);
                    productInfoDiv.appendChild(productName);
    
                    //Generamos el Orden de los DIV
                    productInfoFigure.appendChild(productInfoFigureImg);
    
    }

}


//Llamamos la función para renderizar
renderProducts(productList);