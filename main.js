//Asignamos la selección de elementos HTML a una Constante.
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const iconMenu = document.querySelector('.menu');
const mobilMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');

//Escuchamos el evento click para llamar una función
menuEmail.addEventListener('click', toggleDesktopMenu);
iconMenu.addEventListener('click', toggleMobilMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu(){
    //Si existe devolvera un True
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    //Verificamos que el aside este abierto
    if (!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    //El toogle cambia el valor, si existe inactive la saca, si no lo agrega
    desktopMenu.classList.toggle('inactive');

}

function toggleMobilMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
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


    shoppingCartContainer.classList.toggle('inactive');

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
    name: 'Moto BMW - Coffe Reacer',
    price: 5000,
    imagen: 'https://cdn.pixabay.com/photo/2016/04/07/06/53/bmw-1313343_960_720.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'GameBoy',
    price: 800,
    imagen: 'https://images.unsplash.com/photo-1531525645387-7f14be1bdbbd?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'TOYOTA MR2',
    price: 7000,
    imagen: 'https://images.pexels.com/photos/17797237/pexels-photo-17797237/free-photo-of-coche-vehiculo-vintage-retro.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

})

//
productList.push({
    name: 'Cassete Video',
    price: 80,
    imagen: 'https://images.pexels.com/photos/17758160/pexels-photo-17758160/free-photo-of-sucio-vintage-retro-kodak.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})



//6
productList.push({
    name: 'Telefono',
    price: 120,
    imagen: 'https://images.pexels.com/photos/17786712/pexels-photo-17786712/free-photo-of-madera-vintage-de-madera-antiguo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

})

//7
productList.push({
    name: 'Wold Waggen Band',
    price: 7000,
    imagen: 'https://images.pexels.com/photos/17606859/pexels-photo-17606859/free-photo-of-vehiculo-viaje-viajar-retro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

})

//8
productList.push({
    name: 'Motor - V5 ',
    price: 7000,
    imagen: 'https://images.pexels.com/photos/17575475/pexels-photo-17575475/free-photo-of-coche-vehiculo-tuberias-retro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

})

//9
productList.push({
    name: 'Write Machine',
    price: 600,
    imagen: 'https://images.pexels.com/photos/3808904/pexels-photo-3808904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

})

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
    
                productInfo.appendChild(productInfoFigure);
                    //Generamos el Orden de los DIV
                    productInfoFigure.appendChild(productInfoFigureImg);
                    console.log(productInfoFigureImg);
    
    }

}


//Llamamos la función para renderizar
renderProducts(productList);