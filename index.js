//JQuery document composition complete
$(function(){

    //Create the welcome message
    TimedMessage.createMessage("Welcome", 2000, {

            //Add another message when finished 
            onDone: function() {
                TimedMessage.createMessage("This is a <b>timed</b><br/> message demo");
            }
        }
    );

    //Add functionality to create message from input
    $(".clickme").click(function() {
        var message = $("#message").val();
        var duration = $("#duration").val();
        
        //Use warning message if message is not provided
        message = message || "Please enter a message";

        //Add undo 30% of the time
        if (Math.random() < .5) {
            message += " | <a class='undo' onClick='clearForm();'>CLEAR FORM</a>"
        }

        //Determine if we should call with duration
        if (duration) {
            TimedMessage.createMessage(message, duration);
        }
        else {
            TimedMessage.createMessage(message);
        }
    });

    //Clear forms function
    window.clearForm = function() {
        $("#message").val('');
        $("#duration").val('');
    }

    //Give them the speal
    setTimeout(function () {
            TimedMessage.createMessage("no 'OK' click == happier users", 9000);
        }, 10000);
    setTimeout(function () {
            TimedMessage.createMessage("Great for saves");
        }, 15000);
    setTimeout(function () {
            TimedMessage.createMessage("Try with | <a class='undo' onClick='clearForm();'>UNDO</a>", 10000);
        }, 21000);
    setTimeout(function () {
        TimedMessage.createMessage("Easy to clear default styles", 4000, {
            cssClass: 'nope'
        });
    }, 30000);
    setTimeout(function () {
            TimedMessage.createMessage("You can use this!");
        }, 35000);
    setTimeout(function () {
        TimedMessage.createMessage("Are you still there?", 20000, {
            cssClass: 'nope'
        });
    }, 100000);
});