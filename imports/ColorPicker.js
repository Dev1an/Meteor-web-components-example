class ColorPicker extends HTMLInputElement {
	get color() {
		return {
			red:   parseInt(this.value.slice(1,3), 16),
			green: parseInt(this.value.slice(3,5), 16),
			blue:  parseInt(this.value.slice(5,7), 16)
		}
	}
}

customElements.define("color-picker", ColorPicker, {extends: 'input'});