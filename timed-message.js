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
    //@returns {promise} - A promise object () when the message disappears
    TimedMessage.prototype.createMessage = function (message, duration, additionalSettings) {
        
        duration = duration || 4000;
        additionalSettings = additionalSettings || {};
        additionalSettings.scope = additionalSettings.scope || null;
        additionalSettings.fadeOutDuration = additionalSettings.fadeOutDuration || 1000;
        
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

        //Create HTML for message
        var alertNewLine = $(document.createElement("br"));
        var alertBox = $(document.createElement("span"));
        alertBox.html(message);
        
        //Set hide and show animation
        setTimeout(function () {
            alertBox.addClass("tm-hide");
        }, duration);
        setTimeout(function () {
            alertBox.remove();
            alertNewLine.remove();
        }, duration + additionalSettings.fadeOutDuration);
        
        //Add to container
        $("." + containerClass, additionalSettings.scope).append(alertBox);
        $("." + containerClass, additionalSettings.scope).append(alertNewLine);
    };

    //Set object in window scope to use
    if (!window.TimedMessage) {

        window.TimedMessage = new TimedMessage;
        console.log("TimedMessage initialized");
    }
})();