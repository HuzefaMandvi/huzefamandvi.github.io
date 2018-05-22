$("#scroll_butt").click(function() {
    $('html, body').animate({
        scrollTop: $("#one").offset().top
    }, 800);
});