let fechaCumple = new Date(1993,8,8);
let cumpleMama = new Date(1963,11,25);
let fechaHoy = new Date();
let msTranscurridos = Math.abs(fechaHoy.getTime()-fechaCumple.getTime());
let msDia = 24 * 60 * 60 * 1000;
// console.log(`Desde 1970 hasta hoy: ${Math.floor(Date.now()/msDia/365)} años y ${Math.floor(Date.now()/msDia)} dias`);
// console.log(`Desde 1970 hasta mi nacimiento (08/09/1993): ${Math.floor(fechaCumple/msDia/365)} años y ${Math.floor(fechaCumple/msDia)} días`);
console.log(`Desde mi nacimiento (08/09/1993) transcurrieron: 
- ${Math.floor(msTranscurridos/msDia/365)} años,
- ${Math.floor(msTranscurridos/(msDia*30))} meses, 
- ${Math.floor(msTranscurridos/(msDia*7))} semanas, 
- ${Math.floor(msTranscurridos/msDia)} días, 
- ${Math.floor(msTranscurridos/(msDia)*24)} horas, 
- ${Math.floor(msTranscurridos/60/1000)} minutos y 
- ${Math.floor(msTranscurridos/1000)} segundos`);

function clock(){
  let date = new Date();
  let day = date.getDay();
  let numberDate = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  let hours = date.getHours();
  let min = date.getMinutes();
  let seconds = date.getSeconds();
  let meridiem;

  if (hours>12) {
      hours = hours-12;
      meridiem = 'PM';
  } else {
      if(hours==0){
          hours = 12;
      }
      meridiem = 'AM';
  }

  if(min<10){
      min = '0'+min;
  }
  if(seconds<10){
      seconds = '0'+seconds;
  }

  let semana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
  let mes = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

  let containerClock = document.getElementById('clock-container');
  containerClock.innerHTML = `
      <div class="fecha">
          <p>${semana[day]}</p>
          <p>${numberDate}</p>
          <p>de ${mes[month]}</p>
          <p>del ${year}</p>
      </div>

      <div class="reloj ">
          <p id="horas" class="horas">${hours}</p>
          <p>:</p>
          <p id="minutos" class="minutos">${min}</p>
          <p>:</p>
          <div class="caja-segundos">
          <p id="segundos" class="segundos">${meridiem}</p>
              <p id="ampm" class="ampm">${seconds}</p>
          </div>
      </div>
  `
}

let intervalo = window.setInterval(clock, 1000);