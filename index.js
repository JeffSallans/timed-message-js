//JQuery document composition complete
$(function(){
    TimedMessage.createMessage("This is a <b>timed</b><br/> message demo");
    $(".clickme").click(function() {
        var message = $("#message").val();
        var duration = $("#duration").val();
        
        //Use warning message if message is not provided
        message = message || "Please enter a message";

        if (duration) {
            TimedMessage.createMessage(message, duration);
        }
        else {
            TimedMessage.createMessage(message);
        }
    });
});