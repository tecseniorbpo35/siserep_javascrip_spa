import HomeController from './controllers/HomeController.js';

const Router = {
  routes: {
    '': HomeController.index,
    '#/home': HomeController.index,
    '#/otro': HomeController.otro,
  },

  init: function () {
    window.addEventListener('hashchange', this.handleRoute.bind(this));
    this.handleRoute(); 
  },

  handleRoute: function () {
    const hash = location.hash || '#/home';
    const route = this.routes[hash];
    if (route) {
      route();
    } else {
      this.routes['#/home'](); 
    }
  },
};

export default Router;
