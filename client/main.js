import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import 'document-register-element'
import '/imports/ColoredText'
import '/imports/ColorPicker'

Template.body.onCreated(function() {
	this.color = new ReactiveVar({red: 0, green: 0, blue: 0})
})

Template.body.events({
	'change [type=color]'(event, template) {
		template.color.set(event.currentTarget.color)
	}
})

Template.body.helpers({
	color() {return Template.instance().color.get()}
})