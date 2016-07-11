$(document).foundation();

// Header banner always in centered

/* fix vertical when not overflow
call fullscreenFix() if .fullscreen content changes */
function fullscreenFix(){
    var h = $('body').height();
    // set .fullscreen height
    $(".top-header .copy").each(function(i){
        if($(this).innerHeight() > h){
            $(this).closest(".full-screen-banner").addClass("overflow");
        }
    });
}
$(window).resize(fullscreenFix);
fullscreenFix();

/* resize background images */
function backgroundResize(){
    var windowH = $(window).height();
    $(".full-screen-banner").each(function(i){
        var path = $(this);
        // variables
        var contW = path.width();
        var contH = path.height();
        var imgW = path.attr("data-img-width");
        var imgH = path.attr("data-img-height");
        var ratio = imgW / imgH;
        // overflowing difference
        var diff = parseFloat(path.attr("data-diff"));
        diff = diff ? diff : 0;
        // remaining height to have fullscreen image only on parallax
        var remainingH = 0;
        if(path.hasClass("parallax")){
            var maxH = contH > windowH ? contH : windowH;
            remainingH = windowH - contH;
        }
        // set img values depending on cont
        imgH = contH + remainingH + diff;
        imgW = imgH * ratio;
        // fix when too large
        if(contW > imgW){
            imgW = contW;
            imgH = imgW / ratio;
        }
        //
        path.data("resized-imgW", imgW);
        path.data("resized-imgH", imgH);
        path.css("background-size", imgW + "px " + imgH + "px");
    });
}
$(window).resize(backgroundResize);
$(window).focus(backgroundResize);
backgroundResize();


// Burger menu animation
$(document).ready(function(){
    $('#mobile-nav-icon').on('click', function(){
        $(this).toggleClass('open');
        $('.top-bar').toggleClass('full-height');
        $('body').toggleClass('noscroll');
    });
    $('#mobile-nav-icon').on('tap', function(){
        $(this).toggleClass('open');
        $('.top-bar, body').toggleClass('full-height');
        $('body').toggleClass('noscroll');
    });
    $('body.noscroll').on('touchmove', function(e) {
            e.preventDefault();
    }, false);
});

// Fancy Select with mobile tabs selection
$(document).ready(function(){
    $('select').fancySelect();
    // Used only with Fancy Select
    $('select option').each(function(i) {
        $(this).data('mobile', 'panel' + (i%3 + 1));
    });

    $('select.mobile-select').on('blur change', function() {
        $(this).find('option').removeClass('selected');
        $(this).find(':selected').addClass('selected');
        if($(this).find(':selected').hasClass('selected')) {
            var $panelClass = $(this).find(':selected').data('mobile');
            $('.tabs-panel').each(function() {
                var $tabsID = $(this).attr('id');
                if($panelClass == $tabsID) {
                    $('.tabs-panel').removeClass('is-active');
                    $(this).addClass('is-active');
                }
            });
        }
    });
});

// Nav colouring scroll magic

$(function(){
    $(window).scroll(function() {
            var check = $('body').find('.top-header');
            if (check.length) {
                var scroll = $(window).scrollTop(); // how many pixels you've scrolled
                var os = $('.top-header').offset().top; // pixels to the top of div1
                //var ht = $('.top-header .content').height(); // height of div1 in pixels
                // if you've scrolled further than the top of div1 plus it's height
                // change the color. either by adding a class or setting a css property
                if(scroll > os + 60){
                    $('.top-bar').addClass('color');
                } else {
                    $('.top-bar').removeClass('color');
                }
            }
            
    });
});
