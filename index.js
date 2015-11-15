//JQuery document composition complete
$(function(){
    TimedMessage.createMessage("This is a <b>timed</b><br/> message demo");
    $(".clickme").click(function() {
        var message = $("#message").val();
        var duration = $("#duration").val();
        
        if (duration) {
            TimedMessage.createMessage(message, duration);
        }
        else {
            TimedMessage.createMessage(message);
        }
    });
});