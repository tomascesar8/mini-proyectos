let x = 0;
let y = 0;
let mascota = document.querySelector('#mascota');
let corral = document.querySelector('#corral');

function moverMascota(event) {
    event.preventDefault();
    console.log(event.keyCode);
    mascotaLimit = mascota.getBoundingClientRect();
    corralLimit = corral.getBoundingClientRect();

    switch(event.keyCode) {
        case 37:
            if(mascotaLimit.left > corralLimit.left){
                x--
            }
        break;
        case 38:
            if(mascotaLimit.top > corralLimit.top){
                y--
            }
        break;
        case 39:
            if(Math.round(mascotaLimit.right) < corralLimit.right){
                x++
            }
        break;
        case 40:
            if(mascotaLimit.bottom < corralLimit.bottom){
                y++
            }
        break;
        }
        mascota.style.transform = `translate(${x*10}px,${y*10}px)`
}
document.addEventListener('keydown', moverMascota);

