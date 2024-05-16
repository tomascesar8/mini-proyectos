let containerClock = document.createElement('div');
    containerClock.setAttribute('id', 'container-clock')
    containerClock.classList.add(
        'bg-secondary',
        'd-flex',
        'justify-content-center',
        'align-items-center',
        'rounded-5',
        'text-light',
        'flex-column')
    containerClock.innerHTML = `
        <h3 class="text-warning pt-3">Cronómetro</h3>
        <div id="time" class="fs-1">00:00:00</div>
        <div id="buttons-chron" class="w-75 mt-2 mb-4 d-flex justify-content-around">
            <div id="start"><i class="text-black-50 fs-3 fas fa-play"></i></div>
            <div id="pause"><i class="text-black-50 fs-3 fas fa-pause"></i></div>
            <div id="stop"><i class="text-black-50 fs-3 fas fa-stop"></i></div>
        </div>
            `
    let bodyContain = document.querySelector('#clock-container');
    bodyContain.appendChild(containerClock);
    bodyContain.classList.add('w-100', 'h-25', 'd-flex', 'justify-content-start', 'align-items-center');
    h = 0;
    m = 0;
    s = 0;

    document.getElementById('start').addEventListener('click', start);
    document.getElementById('pause').addEventListener('click', pause);
    document.getElementById('stop').addEventListener('click', stop);

    function start(){
        escribir();
        id = setInterval(escribir,1000);
        document.getElementById('start').removeEventListener("click",start);
    }
    function escribir(){
        let hAux, mAux, sAux;
        s++;

        if (s>59){m++;s=0;}
        if (m>59){h++;m=0;}
        if (h>24){h=0;}

        if (s<10){sAux="0"+s;}else{sAux=s;}
        if (m<10){mAux="0"+m;}else{mAux=m;}
        if (h<10){hAux="0"+h;}else{hAux=h;}

        document.getElementById("time").innerHTML = `${hAux}:${mAux}:${sAux}`;
    }
    function pause(){
        clearInterval(id);
        document.getElementById('start').addEventListener("click",start);

    }
    function stop(){
        clearInterval(id);
        document.getElementById("time").innerHTML="00:00:00";
        h=0;m=0;s=0;
        document.querySelector("#start").addEventListener("click",start);
    };