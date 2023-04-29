let productos = JSON.parse(localStorage.getItem('products'));
console.log(productos);
let idProducto = window.location.hash.slice(1);
console.log(idProducto);
let mostrarProducto = productos.find(producto=>producto.id == idProducto);
console.log(mostrarProducto)
let paginaProducto = document.createElement('div');
paginaProducto.classList.add('container', 'd-flex', 'flex-column', 'justify-content-center', 'vh-100');
paginaProducto.innerHTML = `
<h1 class="text-center m-0 p-3">${mostrarProducto.nombre}</h1>
<div class="d-flex justify-content-center"><img id="product-img" src="${mostrarProducto.image}" alt="1.2 Imagen ${mostrarProducto.nombre}"></div>
<h3 class="text-center p-2">$${mostrarProducto.precio} </h3>
`
let padre = document.getElementById('div-product-container');
padre.appendChild(paginaProducto)