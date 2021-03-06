(function($) {

    window.oldDivLength = -1;
    window.currentDivLength = -1;

    function createNotification() {
        var message = $('div.Mu.SP:last').text();
        var user = $('div.UR.UG:last').text();
        var title = "Hangouts: " + user;
        var options = {
            body: message
        };
        if (Notification.permission === "granted") {
            var notification = new Notification(title, options);
        } else if (Notification.permission !== "denied") {
            Notification.requestPermission(function(permission) {
                if (!('permission' in Notification)) {
                    Notification.permission = permission;
                }
                if (permission === "granted") {
                    var notification = new Notification(title, options);
                }
            });
        }
    }

    function checkNewMessage(noNotification) {
        var divLength = $('div').length;
        if (window.oldDivLength == -1) {
            window.oldDivLength = divLength;
        }
        window.currentDivLength = divLength;
        if (window.currentDivLength > window.oldDivLength && window.oldDivLength !== 0) {
            if (!window.windowFocus || noNotification !== true) {
                createNotification();
            }
            window.oldDivLength = window.currentDivLength;
        }
    }

    $(document).on('ready', function() {
        setTimeout(function() {}, 5000);
        window.checkingMessages = setInterval(checkNewMessage, 100);

        window.windowFocus = false;
        $(window).focus(function() {
            clearInterval(window.checkingMessages);
            window.windowFocus = true;
        }).blur(function() {
            checkNewMessage(true);
            window.checkingMessages = setInterval(checkNewMessage, 100);
            window.windowFocus = false;
        });
    });

})(jQuery);