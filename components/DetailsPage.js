export class DetailsPage extends HTMLElement {
	constructor() {
		super();
	}
	// connectedCallback() {
	// 	this.productId = this.dataset.productId;
	// 	this.innerHTML = `<h1>Product ${this.productId}</h1>`;
	// }
}
customElements.define('details-page', DetailsPage);
