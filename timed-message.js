(function() {

    //Check dependencies
    if (!$ && !JQuery) {

        throw "TimedMessage: Cannot initialize JQuery not defined";
    }

    //Constants
    var containerClass = 'tm-timed-message-container';

    //Object Constructor
    var TimedMessage = function(){};

    //@message {html} - HTML alert message should contain
    //@duration {int} - Optional. How long to show the message in milliseconds. Default 4 seconds
    //@additionalSettings {object} - Optional. Additional settings with structure below.  All properties are optional.
    //  @scope {DOM reference} - Root of JQuery selector. Default window.
    //  @fadeOutDuration {int} - Time in milliseconds for the message to fade out.  Change if transition duration change.  Default 1 second
    //  @cssClass {string} - The name of the css class to add to the timed message.  This will also remove default css.  Default is nothing.
    //  @onDone {function} - Function called once the message has completely faded out.
    TimedMessage.prototype.createMessage = function (message, duration, additionalSettings) {
        
        //__Set Defaults__

        duration = duration || 4000;
        additionalSettings = additionalSettings || {};

        //__Check types__

        if (typeof message !== "string") {
            throw "TimedMessage: message parameter is expecting a string";
        }

        if (typeof duration !== "number" || duration <= 0) {
            throw "TimedMessage: duration parameter is expecting a number greater than 0";
        }

        if (typeof additionalSettings !== "object") {
            throw "TimedMessage: additionalSettings parameter is expecting an object";
        }

        //__Set Custom Parameter Defaults__

        additionalSettings.scope = additionalSettings.scope || null;
        additionalSettings.fadeOutDuration = additionalSettings.fadeOutDuration || 1000;
        additionalSettings.cssClass = additionalSettings.cssClass || '';
        additionalSettings.onDone = additionalSettings.onDone || function(){};

        //__Lazy Initialization__

        //Add container if it doesn't exist
        var container = $("." + containerClass, additionalSettings.scope);
        if (!container || container.length === 0) {

            var bodyDom = $('body'); 

            //Check if browser finished rendering
            if (!bodyDom || bodyDom.length === 0) {
                throw "DOM has not finished rendering";
            }

            //Add container
            bodyDom.prepend('<div class="tm-overlay"><div class="' + containerClass + '"></div></div>');
        }

        //__Create Message__

        //Create HTML for message
        var alertNewLine = $(document.createElement("br"));
        var alertBox = $(document.createElement("span"));
        alertBox.html(message);

        //Logic for custom styling
        if (additionalSettings.cssClass) {
            alertBox.addClass("custom");
            alertBox.addClass(additionalSettings.cssClass);
        }

        //__Set timed actions__

        //Set hide and show animation
        setTimeout(function () {
            alertBox.addClass("tm-hide");
        }, duration);
        setTimeout(function () {
            alertBox.remove();
            alertNewLine.remove();
            additionalSettings.onDone();
        }, duration + additionalSettings.fadeOutDuration);
        
        //Add to container
        $("." + containerClass, additionalSettings.scope).append(alertBox);
        $("." + containerClass, additionalSettings.scope).append(alertNewLine);
    };

    //___Initialization___

    //Set object in window scope to use
    if (!window.TimedMessage) {

        window.TimedMessage = new TimedMessage;
        console.log("TimedMessage: initialized");
    }
})();