class User {
    constructor(name, lastname, country, email, password, admin){
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.country = country;
        this.admin = admin;
    }
}
class Producto{
    constructor(id, nombre, precio, image){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.image = image;
    }
}
let users = [
    new User('Tomás','César', 'Argentina', 'tomcesar@hotmail.com', '123456', true),
    new User('Nicolás','César', 'Argentina', 'n_cesar@hotmail.com', '111111', false),
    new User('Gonzalo','César', 'Argentina', 'g_ces@hotmail.com', '222222', false),
    new User('María Celeste','César', 'Argentina', 'celecesar@hotmail.com', '333333', false),
    new User('Viviana Matilde','Bacha', 'Argentina', 'vmbacha7@outlock.com', '444444', false),
];
let productos=[
    new Producto(1,'Agua',220,'assets/img/agua.jpg'),
    new Producto(2,'Cerveza', 500, 'assets/img/cerveza.JPG'),
    new Producto(3, 'Pan', 120, 'assets/img/pan.JPG'),
    new Producto(4, 'Chocolate', 250, 'assets/img/chocolate.JPG'),
    new Producto(5, 'Helado 1/4', 650, 'assets/img/helado.JPG'),
    new Producto(6, 'Queso 200grs', 500, 'assets/img/queso.JPG'),
];

let usersLocalStorage = localStorage.getItem('users'); 
console.log(usersLocalStorage);
let dataUsersLS = JSON.parse(usersLocalStorage);
console.log(dataUsersLS);
if(!dataUsersLS){
    let usersJSON = JSON.stringify(users);
    localStorage.setItem('users', usersJSON);
}
// localStorage.clear()
let productsLocalStorage = localStorage.getItem('products'); 
console.log(productsLocalStorage);
let dataProductsLS = JSON.parse(productsLocalStorage);
console.log(dataProductsLS);
if(!dataProductsLS){
    let productsJSON = JSON.stringify(productos);
    localStorage.setItem('products', productsJSON);
}



//! TAREA: PASAR FUNCION A LOCAL STORAGE
function loginCheck(event){
    event.preventDefault();
    let email = document.querySelector('#email').value;
    let pass = document.querySelector('#pass').value;
    const usersLSConvertido = JSON.parse(localStorage.getItem('users'));
    let userLogged = usersLSConvertido.find(user=>user.email==email);
    let passUserLogged = userLogged.password == pass;
    console.log(email);
    console.log(pass);
    if(userLogged){
        console.log('Email verificado');
        if(passUserLogged){
            localStorage.setItem('user', JSON.stringify(userLogged));
            window.location.assign(window.location.origin + '/carrito2.0/main.html');  //tambien puede ponerse: window.location.assign(window.location.origin+'/main.html')
            console.log('Iniciaste sesión');
        }else{
            let invalidPass = document.createElement('div');
            invalidPass.innerText = '*Contraseña incorrecta'
            invalidPass.classList.add('alert', 'alert-danger', 'p-1', 'w-fluid', 'ms-2', 'me-2');
            let parentElement = document.getElementById('login-form');
            parentElement.append(invalidPass);
            console.log('Contraseña incorrecta');
            setTimeout(() => {parentElement.removeChild(invalidPass)}, 5000);            
        }
    }else{
        let invalidEmail = document.createElement('div');
        invalidEmail.innerText = '*Email incorrecto'
        invalidEmail.classList.add('alert', 'alert-danger', 'p-1', 'w-50', 'ms-2');
        let parentElement = document.getElementById('login-form');
        parentElement.append(invalidEmail);
        console.log('El email no se corresponde con ningún usuario');
        setTimeout(() => {parentElement.removeChild(invalidEmail)}, 5000);
    }
}

function register() {
    let name = document.getElementById('register-name').value;
    let lastname = document.getElementById('register-lastname').value;
    let country = document.getElementById('register-country').value;
    let email = document.getElementById('register-email').value;
    let newUserPass = document.getElementById('register-pass').value;

    if (name && lastname && country && email && newUserPass) {
        let newUser = new User(name, lastname, country, email, newUserPass);

        let data = localStorage.getItem('users');
        let usersLS = JSON.parse(data);
        usersLS.push(newUser);
        data = JSON.stringify(usersLS);
        localStorage.setItem('users', data);
        localStorage.setItem('user', JSON.stringify(newUser));
        window.location.assign(window.location.origin + '/carrito2.0/main.html');
    } else {
        // Crear contenedor de alerta
        let camposVacios = document.createElement('div');
        camposVacios.innerText = '*Completar todos los campos es obligatorio';
        camposVacios.classList.add('alert', 'alert-danger', 'p-1', 'w-100', 'text-center', 'mt-2');
        
        // Seleccionar el formulario de registro
        let registerForm = document.getElementById('register-form');
        
        // Seleccionar el botón submit del formulario
        let submitButton = registerForm.querySelector('button[type="button"]');

        // Insertar el contenedor de alerta antes del botón submit
        registerForm.insertBefore(camposVacios, submitButton);

        // Autoeliminar el elemento de aviso después de 3 segundos
        setTimeout(() => { registerForm.removeChild(camposVacios) }, 3000);
    }
}

