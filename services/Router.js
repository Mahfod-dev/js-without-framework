const Router = {
	init: () => {
		console.log('init router');

		app.dom.$$('a.navlink').forEach((link) => {
			link.on('click', function (e) {
				e.preventDefault();

				const href = link.getAttribute('href');

				Router.go(href);
			});
		});

		window.addEventListener('popstate', function (e) {
			Router.go(e.state.route, false);
		});

		Router.go(location.pathname);
	},

	go: (route, addHistory = true) => {
		console.log('go to route', route);

		if (addHistory) history.pushState({}, route, route);

		let page = null;

		switch (route) {
			case '/':
				page = document.createElement('h1');
				page.textContent = 'Home';
				break;
			case '/order':
				page = document.createElement('h1');
				page.textContent = 'Order';
				break;

			default:
				if (route.startsWith('/product-')) {
					pageElement = document.createElement('details-page');
					pageElement.dataset.productId = route.substring(
						route.lastIndexOf('-') + 1
					);
				} else {
					page = document.createElement('h1');
					page.textContent = '404';
				}
				break;
		}

		if (page) {
			const main = app.dom.$('main');
			app.dom.$('main').innerHTML = '';
			main.appendChild(page);
			window.scrollTo(0, 0);
		}
	},
};

export default Router;
