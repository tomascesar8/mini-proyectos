function actualizarItemAccordion(event) {
  // Obtener el botón del acordeón que se ha hecho clic
  const button = event.target.closest('.accordion-button');

  // Verificar si se ha encontrado el botón del acordeón y se ha hecho clic en él
  if (button) {
      // Obtener todos los elementos .link-app del acordeón
      const allLinkApps = document.querySelectorAll('.link-app');

      // Iterar sobre todos los elementos .link-app y restablecer los estilos
      allLinkApps.forEach(linkApp => {
          const externalLinkIcon = linkApp.querySelector('.fa-external-link');
          externalLinkIcon.style.color = ''; // Restablecer el color predeterminado
          linkApp.style.animation = ''; // Quitar la animación
      });

      // Seleccionar el icono externo dentro de link-app del botón actual
      const externalLinkIcon = button.parentElement.querySelector('.link-app .fa-external-link');
      const linkApp = button.parentElement.querySelector('.link-app');

      // Verificar si el botón tiene la clase 'collapsed'
      if (!button.classList.contains('collapsed')) {
          // Si no tiene la clase 'collapsed', aplicar estilos al icono externo
          externalLinkIcon.style.color = 'white'; // Cambiar el color a blanco
          linkApp.style.animation = 'pulseAnimation 500ms infinite alternate ease-in-out'; // Aplicar animación
      }
  }
}

document.addEventListener('click', actualizarItemAccordion);



const accordionButton = document.querySelector('.btn-last-child');

accordionButton.addEventListener('click', () => {
  setTimeout(() => {
    document.documentElement.scrollTop = document.documentElement.scrollHeight;
  }, 300);
  
});

let primerItemBtn = document.querySelector('.first-child .accordion-button');

primerItemBtn.addEventListener('click', () => {
  primerItemBtn.style.setProperty('--bs-accordion-btn-icon-transform', 'rotate(-180deg)');
});




// // Primero, define la puerta y su animación
// const puerta = document.createElement('div');
// puerta.style.width = '100px';
// puerta.style.height = '150px';
// puerta.style.backgroundImage = 'url("ruta/a/la/imagen/de/la/puerta.png")';
// puerta.style.backgroundSize = 'cover';
// puerta.style.position = 'absolute';
// puerta.style.top = '50%';
// puerta.style.left = '50%';
// puerta.style.transform = 'translate(-50%, -50%)';
// puerta.style.cursor = 'pointer';
// puerta.addEventListener('click', () => {
//   abrirPuerta();
// });

// // Luego, define la función que abre la puerta y muestra tu objeto
// function abrirPuerta() {
//   // Aquí podrías agregar una animación para que la puerta se abra
//   const sistemaSeguridad = document.createElement('div');
//   sistemaSeguridad.style.width = '100%';
//   sistemaSeguridad.style.height = '100%';
//   sistemaSeguridad.style.backgroundColor = '#000';
//   sistemaSeguridad.style.opacity = 0.8;
//   sistemaSeguridad.style.position = 'fixed';
//   sistemaSeguridad.style.top = 0;
//   sistemaSeguridad.style.left = 0;
//   sistemaSeguridad.style.display = 'flex';
//   sistemaSeguridad.style.alignItems = 'center';
//   sistemaSeguridad.style.justifyContent = 'center';
//   const objetoJS = document.createElement('pre');
//   objetoJS.innerText = JSON.stringify(tomasCesar, null, 2);
//   objetoJS.style.color = '#fff';
//   objetoJS.style.fontSize = '18px';
//   objetoJS.style.fontFamily = 'monospace';
//   sistemaSeguridad.appendChild(objetoJS);
//   document.body.appendChild(sistemaSeguridad);
// }