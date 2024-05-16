//* CON JSON-SERVER

// const url = 'http://localhost:3000';

// const postCharacter = async () =>{
//     let name = document.getElementById('name').value;
//     let age = document.getElementById('age').value;
//     let address = document.getElementById('address').value;
//     let image = document.getElementById('img-file').value;
//     const character = {
//         name,
//         age,
//         address,
//         image
//     }

//     try{
//         const response = await fetch(`${url}/characters/`,{
//             method: "POST",
//             headers:{
//                 "Content-Type":"application/json"
//             },
//             body:JSON.stringify(character)
//         });
//         const data = await response.json();
//         console.log(data);
//     }catch(error){
//         console.log(error);
//     }
// };

// const getCharacter = async () =>{
//     let response = await fetch(`${url}/characters`);
//     let data = await response.json();
//     let random = Math.floor(Math.random()*data.length);
//     console.log(random);
//     let randomImg = document.createElement('div');
//     randomImg.innerHTML = `
//         <img class="mt-4 bg-warning rounded-4 border border-dark border-5 p-3" src="${data[random].image}" height="310px">
//     `
//     document.querySelector('.random-img').appendChild(randomImg);
//     setTimeout(function () {
//         randomImg.remove()
//     },2000)

// }


// alert('ESTA APP SOLO FUNCIONA SI ANTES SE INICIA EN CONSOLA EL COMANDO json-server --watch "simpsons/db/db.json"');




//* ADAPTACIÓN PARA UTILIZAR LA APP UNA VEZ DEPLOYADA

//  Obtener los personajes del localStorage
const getCharactersFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('characters')) || [];
};

//  Guardar los personajes en el localStorage
const saveCharactersToLocalStorage = (characters) => {
    localStorage.setItem('characters', JSON.stringify(characters));
};

//  Inicializar el localStorage con los datos de db.json
const initializeLocalStorage = async () => {
    try {
        const response = await fetch('/simpsons/db/db.json');
        const data = await response.json();
        console.log(data.characters,"1");
        localStorage.setItem('characters', JSON.stringify(data));
    } catch (error) {
        console.log(error);
    }
};

// Llama a la función de inicialización cuando la página cargue y solo si no existe la key 'characters' en el localStorage
window.addEventListener('load', () => {
    if (!localStorage.getItem('characters')) {
        initializeLocalStorage();
        console.log('se aplicoooooo');
    }
});

const postCharacter = () => {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let address = document.getElementById('address').value;
    let image = document.getElementById('img-file').value;
    
    const character = {
        name,
        age,
        address,
        image
    };

    let characters = getCharactersFromLocalStorage();
    console.log(characters, "2");
    characters.characters.push(character);
    saveCharactersToLocalStorage(characters);
    characters = getCharactersFromLocalStorage();
    console.log(characters, "3");

    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('address').value = '';
    document.getElementById('img-file').value = '';


    if (name !== '' && age !== '' && address !== '' && image !== '') {
        document.getElementById('btn-close-modal').click();
    }
};

const getCharacter = () => {
    let characters = getCharactersFromLocalStorage();
    console.log(characters.characters, "4");
    console.log(characters.characters.length, "5");
    let random = Math.floor(Math.random() * characters.characters.length);
    let randomCharacter = characters.characters[random];
    let randomImg = document.createElement('div');
    randomImg.innerHTML = `
        <img class="mt-4 bg-warning rounded-4 border border-dark border-5 p-3" src="${characters.characters[random].image}" height="310px">
    `
    document.querySelector('.random-img').appendChild(randomImg);
    setTimeout(function () {
        randomImg.remove()
    },2000)
};