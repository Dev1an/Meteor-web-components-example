import {ReactiveColor} from './ColoredText'

class ColorPicker extends HTMLElement {
	constructor() {
		super()
		this.color = new ReactiveVar(new ReactiveColor)
		this.input = document.createElement('input')
		this.attachShadow({mode: 'open'}).appendChild(this.input)
		
		this.input.type = "color"
		this.input.addEventListener('change', () => this.updateReactiveColor())

		this.updateReactiveColor()
	}

	updateReactiveColor() {
		this.color.get()['red'].set(  parseInt(this.input.value.slice(1,3), 16))
		this.color.get()['green'].set(parseInt(this.input.value.slice(3,5), 16))
		this.color.get()['blue'].set( parseInt(this.input.value.slice(5,7), 16))
	}
}

customElements.define("color-picker", ColorPicker);