let ingresarTarea = document.createElement('div');
ingresarTarea.classList.add('pt-5')
ingresarTarea.innerHTML = `
    <form id="form-tarea" onsubmit="agregarTarea(event)">
        <fieldset>
            <legend>
                <h2 class="mb-4 w-100 text-white text-center fw-bolder bg-info p-1" for="input-tarea">LISTA DE TAREAS</h2>
                <textarea id="input-tarea" class="mb-2 form-control" cols="40" rows="3" type="textarea" required></textarea>
                <button class="btn btn-primary w-100" type="submit">Agregar tarea</button>
            </legend>
        </fieldset>
    </form>
`
let bodyContain = document.getElementById('body-contain');
bodyContain.appendChild(ingresarTarea);

function agregarTarea(event) {
    event.preventDefault();
    let tareas = document.createElement('div');
    tareas.setAttribute('id', 'tareas');
    tareas.innerHTML = `
            <ul id="lista-tareas">
            </ul>
    `
    let inputTarea = document.getElementById('input-tarea').value;
    let newTarea = document.createElement('li');
    newTarea.innerHTML = inputTarea;
    newTarea.style.maxWidth = "350px";
    newTarea.classList.add('bg-light', 'w-100', 'd-flex', 'ps-3', 'rounded', 'align-items-center')
    let listaTareas = document.getElementById('tareas');
    tareas.appendChild(newTarea);
    ingresarTarea.appendChild(tareas);
    // listaDeTareas.push(newTarea);

    let deleteTarea = document.createElement('button');
    deleteTarea.innerText = `x`;
    deleteTarea.classList.add('btn', 'text-danger', 'fw-bold', 'fs-5', 'me-2', 'ms-auto');
    deleteTarea.setAttribute('onclick', 'removeTarea(event)');
    newTarea.appendChild(deleteTarea);


    document.getElementById('form-tarea').reset();
}
function removeTarea(event){
    event.target.parentElement.remove();
    // listaDeTareas.find(tarea=>)
}