import Router from './router.js';

document.addEventListener('DOMContentLoaded', () => {
  Router.init();
});

async function cargarVista(url, destino) {
  console.log(`Cargando vista desde: ${url} a ${destino}`);
  const res = await fetch(url);
  const html = await res.text();

  const elemento = document.querySelector(destino);
  if (elemento) {
    console.log(`Elemento encontrado: ${destino}`);
    elemento.innerHTML = html;
  } else {
    console.error(`No se encontró el elemento con el selector: ${destino}`);
  }
}

async function cargarPlantilla() {
  console.log('Cargando plantilla...');
  const res = await fetch('/view/plantilla.html');
  const html = await res.text();
  document.getElementById('app').innerHTML = html;

  console.log('Cargando componentes...');
  await cargarVista('/view/components/header.html', '[data-component="header"]');
  await cargarVista('/view/components/footer.html', '[data-component="footer"]');
  await cargarVista('/view/components/aside1.html', '[data-component="aside1"]');
  await cargarVista('/view/components/aside2.html', '[data-component="aside2"]');

  Router.init(); 
}

window.addEventListener('DOMContentLoaded', cargarPlantilla);
