var scroll_pos=0;
var scroll_time;

$(function(){
    $(window).scroll(function() {
    	var header = $(document.getElementById("header"));

        clearTimeout(scroll_time);
        var current_scroll = $(window).scrollTop();

        if(current_scroll >= header.outerHeight()) {
            if (current_scroll <= scroll_pos) {
                header.removeClass('hidden');
            }
            else {
                header.addClass('hidden');
            }
        }

        scroll_time = setTimeout(function() {
        scroll_pos = $(window).scrollTop();
        }, 100);
    });
});