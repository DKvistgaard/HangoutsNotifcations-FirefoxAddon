(function($) {

    $(document).on('ready', function() {
        setTimeout(function() {}, 5000);
        setInterval(checkNewMessage, 500);

        window.windowFocus = false;
        $(window).focus(function() {
            window.windowFocus = true;
        }).blur(function() {
            window.windowFocus = false;
        });
    });

    window.oldDivLength = -1;
    window.currentDivLength = -1;
    function checkNewMessage() {
        var divLength = $('div').length;
        if (window.oldDivLength == -1) {
            window.oldDivLength = divLength;
        }
        window.currentDivLength = divLength;
        if (window.currentDivLength > window.oldDivLength && window.oldDivLength !== 0) {
            if (!window.windowFocus) {
                console.log('new message!!');
            }
            window.oldDivLength = window.currentDivLength;
        }
    }

})(jQuery);