# timed-message-js

A lite JavaScript library for displaying non-blocking alert messages.  The focus is on simple setup and easy to override CSS.

## [Demo](http://jeffsallans.github.io/timed-message-js)

## Setup

Requires [JQuery](http://jquery.com/)

HTML file
```html
<head>
	...
	<link rel="stylesheet" href="timed-message.css">
	<script type="text/javascript" src="timed-message.js"></script>
	...
</head>
```

## Use

JavaScript file
```javascript
TimedMessage.createMessage("This is a <b>timed</b><br/> message demo");
```

## createMessage Details

| Parameter | Type | Default | Description |
| --------- |:----:| ------- | ---- |
| message | html | N/A | HTML alert message should contain
| duration | int | 4 sec | Optional. How long to show the message in milliseconds.
| additionalSettings | object | null | Optional. Additional settings with structure below. All properties are optional.
| additionalSettings.scope | DOM reference | window | Root of JQuery selector.
| additionalSettings.fadeOutDuration | int | 1 sec | Time in milliseconds for the message to fade out.  Change if transition duration change.
| additionalSettings.cssClass | string | null | The name of the css class to add to the timed message.  This will also remove default css.
| additionalSettings.onDone | function | null | Function called once the message has completely faded out.

## License

[Apache License 2.0](http://tldrlegal.com/license/apache-license-2.0-(apache-2.0))