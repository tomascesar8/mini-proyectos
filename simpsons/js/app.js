const url = 'http://localhost:3000';


const postCharacter = async () =>{
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let address = document.getElementById('address').value;
    let image = document.getElementById('img-file').value;
    const character = {
        name,
        age,
        address,
        image
    }

    try{
        const response = await fetch(`${url}/characters/`,{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(character)
        });
        const data = await response.json();
        console.log(data);
    }catch(error){
        console.log(error);
    }
};

const getCharacter = async () =>{
    let response = await fetch(`${url}/characters`);
    let data = await response.json();
    let random = Math.floor(Math.random()*data.length);
    console.log(random);
    let randomImg = document.createElement('div');
    randomImg.innerHTML = `
        <img class="mt-4 bg-warning rounded-4 border border-dark border-5 p-3" src="${data[random].image}" height="310px">
    `
    document.querySelector('.random-img').appendChild(randomImg);
    setTimeout(function () {
        randomImg.remove()
    },2000)

}


alert('ESTA APP SOLO FUNCIONA SI ANTES SE INICIA EN CONSOLA EL COMANDO json-server --watch "simpsons/db/db.json"');

