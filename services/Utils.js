const utilsDOM = {
	$: (s) =>
		document.querySelector(s)
			? document.querySelector(s)
			: console.log(`${s} doesnt exist`),

	$$: (s) => document.querySelectorAll(s),
};

HTMLElement.prototype.on = function (a, b, c) {
	this.addEventListener(a, b, c);
};

HTMLElement.prototype.off = function (a, b) {
	this.removeEventListener(a, b);
};

HTMLElement.prototype.$ = (s) => this.querySelector(s);

HTMLElement.prototype.$$ = (s) => this.querySelectorAll(s);

export default utilsDOM;
