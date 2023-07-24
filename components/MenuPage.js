export class MenuPage extends HTMLElement {
	constructor() {
		super();

		this.root = this.attachShadow({ mode: 'open' });

		const style = document.createElement('style');

		this.root.appendChild(style);

		async function loadCss() {
			const css = await fetch('/components/MenuPage.css');

			const request = await css.text();

			style.textContent = request;
		}

		loadCss();
	}

	connectedCallback() {
		const template = document.getElementById('menu-page-template');
		const templateContent = template.content;

		this.root.appendChild(templateContent.cloneNode(true));
	}
}

customElements.define('menu-page', MenuPage);
