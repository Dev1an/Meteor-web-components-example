class ColoredText extends HTMLElement {
	constructor() {
		super()
		this.color = {red: 0, green: 0, blue: 0}
	}

	attributeChangedCallback(name, oldValue, newValue) {
		this.color[name] = newValue || 0
		this.style.color = `rgb(${this.color.red}, ${this.color.green}, ${this.color.blue})`
	}

	static get observedAttributes() { return ["red", "green", "blue"]; }
}

customElements.define("colored-text", ColoredText);