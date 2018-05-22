$(function(){
    $(window).scroll(function() {
    	var imgDiv = $(document.getElementById("test"));
    	var caption = $(document.getElementById("caption"));

        var scroll = $(window).scrollTop(); // how many pixels you've scrolled
        var winheight = $(window).innerHeight();
        var os = caption.offset().top; // pixels to the top of caption
        var ht = caption.height(); // height of caption in pixels

        //stop the image from scrolling (fixed position) at a position aligned to bottom of the caption div
        var img_stopheight = (os + ht - imgDiv.height());
       	

        if( (scroll + winheight) > (os + ht)){
        	$('.content_image_wrapper_landscape').css("top", img_stopheight);
        	$('.content_image_wrapper_landscape').css("position", "absolute");
        }
        else if((scroll + winheight) < (os + ht)){
        	$('.content_image_wrapper_landscape').css("top", "auto");
        	$('.content_image_wrapper_landscape').css("position", "fixed");
        }
    });
});