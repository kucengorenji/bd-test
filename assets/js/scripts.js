(function ($) {
    "use strict";
    $(window).on('load', function() {
        setTimeout(function(){
            $('body').addClass('loaded')
        }, 1000);
    })
})(jQuery);
