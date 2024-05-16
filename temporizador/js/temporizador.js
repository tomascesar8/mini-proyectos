let time = document.createElement('div');
time.classList.add('w-75', 'h-75')
time.innerHTML = `
    <form class='w-50 bg-secondary d-flex align-items-center justify-content-between rounded-5 text-light flex-column p-4'>
        <h1 class="mb-2 text-warning">Temporizador</h1>
        <label for="count-time" class="mb-3 label-tempo">Ingresá el tiempo:</label>
        <div id="count-time" class="d-flex justify-content-center">
            <input id="hours" placeholder="h" class="form-control ms-1 me-1 mb-1 w-25" min="0" step type="number">
            <input id="mins" placeholder="min" class="form-control ms-1 me-1 mb-1 w-25" max="59" min="0" type="number">
            <input id="seconds" placeholder="seg" class="form-control ms-1 me-1 mb-1 w-25" max="59" min="0" type="number">
        </div>
        <div id="buttons" class="w-100 mt-3 d-flex rounded-5 p-3 bg-danger justify-content-evenly">
            <div id="start" type="button" onclick="iniciar()"><i class="fs-2 fas fa-play"></i></div>
            <div id="pause" type="submit" onclick="pause()"><i class="fs-2 fas fa-pause"></i></div>
            <div id="stop" type="submit" onclick="stop()"><i class="fs-2 fas fa-stop"></i></div>
        </div>
    </form>
`
let containerTime = document.getElementById('clock-container');
containerTime.appendChild(time);
containerTime.classList.add('w-100', 'h-50', 'd-flex');

let seconds = 0;
let min = 0;
let hours = 0;
let interval;
let hAux, mAux, sAux;
let secondsPause = 0;

localStorage.removeItem('secondsPause')

function iniciar() {
  if(JSON.parse(localStorage.getItem('secondsPause')) === 0){
    secondsPause = JSON.parse(localStorage.getItem('secondsPause'));
    seconds= secondsPause;
    document.getElementById('start').removeEventListener("click",iniciar);
  }else if(JSON.parse(localStorage.getItem('secondsPause'))){
    secondsPause = JSON.parse(localStorage.getItem('secondsPause'));
    seconds= Number(secondsPause);
    console.log(secondsPause);
    document.getElementById('start').removeEventListener("click",iniciar);
    console.log('LS');
  }else if(!JSON.parse(localStorage.getItem('secondsPause'))){
    console.log('NO LS');
    seconds = document.getElementById('seconds').value;
    min = document.getElementById('mins').value;
    hours = document.getElementById('hours').value;
  }
  interval = setInterval(start,1000);           //? MALA PRACTICA?
}

function start(){
  seconds--;
        if (seconds < 0) {
          seconds = 59;
          min--;
          if (min < 0) {
            min = 59;
            hours--;
            if (hours < 0) {
              hours = 0;
              min = 0;
              seconds = 0;
              clearInterval(interval);
              }
          }
        }
          if (seconds==0) {
            seconds = '0';
          }
          if (min==0) {
            min = '0';
          }
          if(hours==0){
            hours = '0';
          }
          if (seconds<10) { //?como hacer para que no se imprima un cero cada vez que se realiza el intervalo?
            sAux = `0${seconds}`
          }else{
            sAux=seconds;
          }
          if (min<10) {
            mAux = `0${min}`
          }else{
            mAux=min;
          }
          if(hours<10){
            hAux = `0${hours}`
          }else{
            hAux=hours;
          }
        let countTime = document.getElementById('count-time');
        countTime.innerHTML = `
        <div id="count-hours" class="ms-1" onclick=""><h1>${hAux} :</h1></div>
        <div id="count-mins" class="ms-1" onclick=""><h1>${mAux} :</h1></div>
        <div id="count-segs" class="ms-1" onclick=""><h1 id="count-seconds-h">${sAux}</h1></div>
        `
        if(sAux == 0 && mAux == 0 && hAux == 0){
          stop();
        }
        localStorage.removeItem('secondsPause');
};

function pause(){
  let secondsPause = Number(document.getElementById('count-seconds-h').innerHTML);
  clearInterval(interval);
  document.getElementById('start').addEventListener("click",iniciar);
  console.log(secondsPause);
  localStorage.setItem('secondsPause', JSON.stringify(secondsPause));
}
function stop() {
  let countTime = document.getElementById('count-time');
  countTime.innerHTML = `
  <div id="count-time" class="d-flex justify-content-center">
    <input id="hours" placeholder="h" class="form-control ms-1 me-1 mb-1 w-25" type="number">
    <input id="mins" placeholder="min" class="form-control ms-1 me-1 mb-1 w-25" max="59" min="0" type="number">
    <input id="seconds" placeholder="seg" class="form-control ms-1 me-1 mb-1 w-25" max="59" min="0" type="number">
  </div>
  `
  clearInterval(interval);
  localStorage.removeItem('secondsPause');
}