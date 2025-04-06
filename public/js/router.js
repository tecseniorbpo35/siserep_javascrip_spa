import HomeController from './controllers/HomeController.js';

const Router = {
  routes: {
    '': HomeController.index,
    '#/home': HomeController.index,
    '#/otro': HomeController.otro,
  },

  init: function () {
    window.addEventListener('hashchange', this.handleRoute.bind(this));
    this.handleRoute(); // Se llama para procesar la primera carga de la página
  },

  handleRoute: function () {
    const hash = location.hash || '#/home';
    const route = this.routes[hash];
    if (route) {
      route();
    } else {
      this.routes['#/home'](); // Redirige a home si la ruta no existe
    }
  },
};

export default Router;
