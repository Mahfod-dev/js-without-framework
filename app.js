import Store from './services/Store.js';
import utilsDOM from './services/Utils.js';
import { loadData } from './services/MENU.js';
import Router from './services/Router.js';

window.app = {};

app.store = Store;
app.dom = utilsDOM;
app.router = Router;

// app.store = Store;

window.addEventListener('DOMContentLoaded', () => {
	loadData();
	app.router.init();
});
