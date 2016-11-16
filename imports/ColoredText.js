import './ColoredText.html'

export class ReactiveColor {
	constructor() {
		this.red   = new ReactiveVar(200)
		this.green = new ReactiveVar(200)
		this.blue  = new ReactiveVar(0)
	}
}

class ColoredText extends HTMLElement {
	constructor() {
		super()
		this.color = new ReactiveVar(new ReactiveColor)
		this.view = Blaze.renderWithData(
			Template.ColoredText,             // render this template
			this.color,                       // with this.color as data context
			this.attachShadow({mode: 'open'}) // into the the shadow root
		)
	}

	disconnectedCallback() {
		// Remove the Blaze View in such a way that any
		// behaviors attached to the DOM by Meteor are cleaned up.
		Blaze.remove(this.view)
	}
}

customElements.define("colored-text", ColoredText);