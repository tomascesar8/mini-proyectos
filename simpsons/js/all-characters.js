const url = 'http://localhost:3000';

const getCharacters = async () =>{
    let response = await fetch(`${url}/characters`);
    let data = await response.json();
    console.log(data);
    data.forEach((character) => {
        let cardCharacter = document.createElement('div');
        cardCharacter.classList.add('col-6', 'col-sm-4', 'col-md-3', 'col-lg-2') 
        cardCharacter.innerHTML = `
        <div class="card m-1 m-sm-2">
            <img src="${character.image}" height="150" class="card-img-top p-2 pb-0 pb-sm-0 p-sm-3" alt="...">
            <div class="card-body pt-0">
                <h5 class="card-title m-0">${character.name}</h5>
                <p class="card-text m-0">Age: ${character.age}</p>
                <p class="card-text m-0">Adress: ${character.address}</p>
            </div>
        </div>
        `;
        ;
        document.getElementById('all-characters').appendChild(cardCharacter);
    });
};

getCharacters()