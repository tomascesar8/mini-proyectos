let tirados = '';
let tiros = 0;

let cara1 = 0;
let cara2 = 0;
let cara3 = 0;
let cara4 = 0;
let cara5 = 0;
let cara6 = 0;
let icon1 = '<i class="fas fa-dice-one fa-lg" style="color: #7a4868;"></i>'
let icon2 = '<i class="fas fa-dice-two fa-lg" style="color: #7a4868;"></i>'
let icon3 = '<i class="fas fa-dice-three fa-lg" style="color: #7a4868;"></i>'
let icon4 = '<i class="fas fa-dice-four fa-lg" style="color: #7a4868;"></i>'
let icon5 = '<i class="fas fa-dice-five fa-lg" style="color: #7a4868;"></i>'
let icon6 = '<i class="fas fa-dice-six fa-lg" style="color: #7a4868;"></i>'

function tirarDado() {
    let numeroDado = Math.floor(Math.random() * 6) + 1;
    tiros = tiros + 1;
    switch (numeroDado) {
        case 1:
            cara1 = cara1 + 1;
            numeroDado = icon1;
            break;
        case 2:
            cara2 = cara2 + 1;
            numeroDado = icon2;
            break;
        case 3:
            cara3 = cara3 + 1;
            numeroDado = icon3;
            break;
        case 4:
            cara4 = cara4 + 1;
            numeroDado = icon4;
            break;
        case 5:
            cara5 = cara5 + 1;
            numeroDado = icon5;
            break;
        case 6:
            cara6 = cara6 + 1;
            numeroDado = icon6;
            break;
    }
    tirados = tirados + `${numeroDado} `;
    let aMostrar = `
        <div class="container w-75 container-resultado d-flex align-items-start">
            <div class="col-5 align-self-start text-center historial d-flex flex-column rounded-3">
                <div class="ultimo-tiro border border-solid border-dark bg-white opacity-75 rounded-3 p-3 mb-3">
                    <h3 class="fw-bolder mb-4">Último tiro:</h3>
                    <h1 class="mb-2">${numeroDado}</h1>
                </div>
                <div class="cantidad-tiros border border-solid border-dark bg-white opacity-75 rounded-3 p-3 mb-3">
                    <h4 class="fw-bolder">Cantidad de tiros: ${tiros}</h4>
                </div>
                <div class="historial border border-solid border-dark bg-white opacity-75 rounded-3 p-3">
                    <h4 class="fw-bolder">Historial:</h4>
                    <h3>${tirados}</h3>
                </div>
            </div>
            <div class="col-6 ps-4 m-auto conteo d-flex flex-column border border-solid bg-white rounded-3 p-3 m-5">
                <h5 class="fw-bolder p-2 text-white bg-secondary rounded-5">Cantidad de veces que salió cada número:</h5>
                <p class="fs-5 m-0 pt-2 fw-semibold text-danger">
                    <span class="fw-bolder text-dark">• El lado ${icon1} salió ${cara1} ${cara1==1? 'vez' : 'veces'}.</span><br>
                    - Con un porcentaje de: ${((cara1/tiros)*100).toFixed(2)} %
                </p>
                <p class="fs-5 m-0 fw-semibold text-danger">
                    <span class="fw-bolder text-dark">• El lado ${icon2} salió ${cara2} ${cara2==1? 'vez' : 'veces'}.</span><br>
                    - Con un porcentaje de: ${((cara2/tiros)*100).toFixed(2)} %
                </p>
                <p class="fs-5 m-0 fw-semibold text-danger">
                    <span class="fw-bolder text-dark">• El lado ${icon3} salió ${cara3} ${cara3==1? 'vez' : 'veces'}.</span><br>
                    - Con un porcentaje de: ${((cara3/tiros)*100).toFixed(2)} %
                </p>
                <p class="fs-5 m-0 fw-semibold text-danger">
                    <span class="fw-bolder text-dark">• El lado ${icon4} salió ${cara4} ${cara4==1? 'vez' : 'veces'}.</span><br>
                    - Con un porcentaje de: ${((cara4/tiros)*100).toFixed(2)} %
                </p>
                <p class="fs-5 m-0 fw-semibold text-danger">
                    <span class="fw-bolder text-dark">• El lado ${icon5} salió ${cara5} ${cara5==1? 'vez' : 'veces'}.</span><br>
                    - Con un porcentaje de: ${((cara5/tiros)*100).toFixed(2)} %
                </p>
                <p class="fs-5 m-0 fw-semibold text-danger">
                    <span class="fw-bolder text-dark">• El lado ${icon6} salió ${cara6} ${cara6==1? 'vez' : 'veces'}.</span><br>
                    - Con un porcentaje de: ${((cara6/tiros)*100).toFixed(2)} %
                </p>
            </div>
        </div>
    `;
    let marginBtn = document.querySelector('.margin-top-btn');
    marginBtn.style.display = 'none';
    document.getElementById('resultado').innerHTML = aMostrar;
}