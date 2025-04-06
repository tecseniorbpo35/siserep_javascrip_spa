import HomeModel from '../models/HomeModel.js';

const HomeController = {
  index: async function () {
    const data = await HomeModel.getMensaje();
    document.getElementById('contenido').innerHTML = `
      <h1>Página de Inicio</h1>
      <p>${data.mensaje}</p>
    `;
  },

  otro: function () {
    document.getElementById('contenido').innerHTML = `
      <h1>Otra Página</h1>
      <p>Contenido alternativo aquí.</p>
    `;
  },
};

export default HomeController;
