# Meteor & Web Components example
Example of using web components in a meteor project with blaze and the babel transpiler.

[Take a look at the running web app](https://dev1an.github.io/Meteor-web-components-example/)

## How to run the example

```shell
meteor npm install && meteor
```

## Lessons learned

- There is a [bug](https://github.com/babel/babel/issues/4480) in the [babel transpiler](http://babeljs.io) that prevents you from extending the HTMLElement with ES6 classes. Here are two possible solutions:

  - remove the ecmascript package with ``meteor remove ecmascript``
  - add the document-register-element module using:  ``npm install document-register-element`` and then in your javascript file using ES6 classes, add: ``import 'document-register-element'``

- Meteor's blaze-html-templates package converts all ``<template>`` tags in your HTML files into Blaze templates, so you cannot simply clone the contents of your templates into your custom element's shadowDOM. Here are three simple solutions:

  - When you are using react to bind data to your DOM, you can simply remove Blaze entirely from your project so you can use the standard HTML ``<template>`` tags again. You can do this with the command:  ``meteor remove blaze-html-templates && meteor add static-html``.

  - When you do want to use Blaze inside your project you can write your shadow-root templates as a string in your javascript files and use ``shadowRoot.innerHTML = myLongHTMLTemplateString``.

  - Or you can write the shadow-root templates as Blaze templates and render them with Blaze straight into your shadow-root. This is easily achivable using the following Blaze function ``Blaze.renderWithData(Template.templateName, shadowRoot)``. Notice though that when you render a Blaze template manually you should also let blaze know when your template instance should be removed. Look at [this example](https://github.com/Dev1an/Meteor-web-components-example/blob/2a609f45ab0367643d17e3b13c1cc859d920b5e5/imports/ColoredText.js#L25) for more information.