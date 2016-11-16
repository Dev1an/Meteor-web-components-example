import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import 'document-register-element'
import '/imports/ColoredText'
import '/imports/ColorPicker'

Template.body.onRendered(function() {
	const picker = document.querySelector('color-picker')
	const text = document.querySelector('colored-text')

	text.color.set( picker.color.get() )
})