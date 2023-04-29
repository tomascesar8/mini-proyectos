let carrito;
let products;

if(JSON.parse(localStorage.getItem('carrito'))){
    carrito = JSON.parse(localStorage.getItem('carrito'));
}else{
    carrito = [];
};

if(JSON.parse(localStorage.getItem('products'))){
    products = JSON.parse(localStorage.getItem('products'));
}else{
    products = [];
}

let user = JSON.parse(localStorage.getItem('user')); 

let userName = document.getElementById('nav-name');
userName.innerText = `
    Hola ${user.name}!
`
userName.classList.add('text-success')

function logOut() {
    window.location.assign(window.location.origin);
    localStorage.removeItem('user');
}

let logOutButton = document.getElementById('log-out-button');
logOutButton.classList.add('btn', 'btn-secondary')

carrito.forEach(product=>{
    let productCard = document.createElement('li');
    productCard.innerHTML = `
    <div id="${product.id}" class="card w-100 ">
        <div class="card-body w-100">
            <h5 class="card-title">${product.nombre}</h5>
            <p class="card-text">${product.precio}</p>
            <a href="#" id="eliminar-producto" onclick="eliminarProducto(event)" class="btn btn-primary">Eliminar producto</a>
        </div>
    </div>
    `;
    // productCard.id = product.id; //! otra manera de agregar un atributo al elemento creado
    let carritoContainer = document.getElementById('carrito-container');
    carritoContainer.appendChild(productCard);
    carritoContainer.classList.add('d-flex', 'bg-light', 'flex-wrap')
    productCard.classList.add('m-1', 'list-unstyled');
});



products.forEach(producto=>{
    let productCard = document.createElement('div');
    productCard.innerHTML = `
    <div class="card" id=${producto.id} style="width: 18rem;">
        <img src="${producto.image}" class="card-img-top" alt="1.2 Imagen ${producto.nombre}">
        <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">$${producto.precio}</p>
        </div>
    </div>
    <div class="buttons-product">
        <button onclick="redirigir(event)" class="btn btn-success w-100 " >Ver producto</button>
        <button onclick="agregarProducto(event)" class="btn btn-info w-100" >Agregar</button>
    </div>
    `;
    productCard.classList.add('col-4','mt-3');
    let productsContainer = document.getElementById('products-container');
    productsContainer.classList.add('py-2', 'pb-4')
    productsContainer.appendChild(productCard);
    }
);

function agregarProducto(event) {
    let productId = event.target.parentElement.parentElement.querySelectorAll('div')[0].id  ;
    console.log(productId);
    let product = products.find(producto=>producto.id == productId);
    carrito.push(product);
    let productCard = document.createElement('li');
    productCard.innerHTML = `
    <div id="${product.id}" class="card w-100">
        <div class="card-body">
            <h5 class="card-title">${product.nombre}</h5>
            <p class="card-text">${product.precio}</p>
            <button id="eliminar-producto" type="button" onclick="eliminarProducto(event)" class="btn btn-primary">Eliminar producto</button>
        </div>
    </div>
    `
    console.log(carrito);
    let carritoContainer = document.getElementById('carrito-container');
    carritoContainer.appendChild(productCard);
    carritoContainer.classList.add('d-flex', 'bg-light', 'flex-wrap')
    productCard.classList.add('m-1', 'list-unstyled');
    conteoCarrito();
    
    localStorage.setItem('carrito', JSON.stringify(carrito));
};

function eliminarProducto(event) {
    let idLS = (((event.target.parentElement).parentElement).id);
    let posicionEnCarrito = carrito.indexOf(carrito.find(producto=>producto.id == idLS));
    let eliminar = carrito.splice(posicionEnCarrito,1);
    ((event.target.parentElement).parentElement).parentElement.remove() //? COMO ACORTAR LA SELECCION DEL ELEMENTO?
    localStorage.setItem('carrito', JSON.stringify(carrito));
    conteoCarrito();
    console.log(carrito);
    // let carritoLS = JSON.parse(localStorage.getItem('carrito'));
    
}//? PORQUÉ CUANDO ACTUALIZO NO ME DEJA ELIMINAR LOS ITEMS?

function deleteAll(event) {
    carrito = [];
    console.log(carrito);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    conteoCarrito();
    window.location.reload();
}

function redirigir(event){
    let idProducto = event.target.parentElement.parentElement.querySelectorAll('div')[0].id;
    window.location.assign(window.location.origin + `/carrito2.0/producto.html#${idProducto}`);
}

function conteoCarrito(params) {
    let conteo = carrito.length;
    let cartButton = document.getElementById('cart-button');
    cartButton.innerText = `Carrito (${conteo})`
}
conteoCarrito();