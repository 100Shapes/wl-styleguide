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

// Scroll Reveal
$(function(){
    // Changing the defaults
    window.sr = ScrollReveal({ reset: true });

    // Customizing a reveal set
    sr.reveal('.top-header .copy h1:nth-of-type(1)', {
        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        origin: 'bottom',
        distance: '40px',
        duration: 600,
        delay: 0,
        reset: false
    });
    sr.reveal('.top-header .copy h1:nth-of-type(2)', {
        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        origin: 'bottom',
        distance: '80px',
        duration: 800,
        delay: 200,
        reset: false
    });
    sr.reveal('.partnership', {
        easing: 'linear',
        origin: 'bottom',
        distance: '0px',
        duration: 800,
        delay: 1200,
        reset: false
    });
    sr.reveal('.left-aligned-image-text', {
        easing: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
        origin: 'bottom',
        duration: 600,
        delay: 200,
        reset: false
    });
    sr.reveal('.left-aligned-image-text .copy .row', {
        easing: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
        origin: 'bottom',
        duration: 600,
        delay: 200,
        reset: false
    });
    sr.reveal('.logo .columns', {
        easing: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
        origin: 'bottom',
        duration: 600,
        delay: 200,
        reset: false
    });
    sr.reveal('.right-aligned-image-text', {
        easing: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
        origin: 'bottom',
        duration: 600,
        delay: 200,
        reset: false
    });
    sr.reveal('.tabbed', {
        easing: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
        origin: 'bottom',
        duration: 600,
        delay: 200,
        reset: false
    });
    sr.reveal('.value .items .columns', {
        easing: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
        origin: 'bottom',
        duration: 600,
        delay: 200,
        reset: false
    });
    sr.reveal('.plan', {
        distance: '60px',
        duration: 600,
        delay: 200
     });
    sr.reveal('.highlight', {
        duration: 600,
        delay: 0
    });
    sr.reveal('.badge', {
        easing: 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
        origin: 'top',
        duration: 400,
        delay: 600
    });
    sr.reveal('.testimonial', {
        duration: 1000
    }, 200);
    sr.reveal('.testimonial .person', {
        easing: 'cubic-bezier(0.86, 0, 0.07, 1);',
        rotate: { x: 0, y: 0, z: 100 },
        distance: '50px',
        scale: 0.7,
        duration: 1200,
        delay: 200
    });
    sr.reveal('.regular', {
        easing: 'cubic-bezier(0.55, 0.085, 0.68, 0.53);',
        scale: 1,
        duration: 600,
        delay: 200,
        reset: false
     });
    sr.reveal('.regular .wrapper > *', {
        easing: 'cubic-bezier(0.55, 0.085, 0.68, 0.53);',
        scale: 0.9,
        duration: 800,
        delay: 600,
        reset: false
     });

});

// Button Ripple Animation Effect

$(function(){
    //jQuery time
    var parent, ink, d, x, y;
    $(".button").click(function(e){
        parent = $(this).parent();
        //create .ink element if it doesn't exist
        if(parent.find(".ink").length == 0)
            $(this).prepend("<span class='ink'></span>");

        ink = parent.find(".ink");
        //incase of quick double clicks stop the previous animation
        ink.removeClass("animate");

        //set size of .ink
        if(!ink.height() && !ink.width())
        {
            //use parent's width or height whichever is larger for the diameter to make a circle which can cover the entire element.
            d = Math.max(parent.outerWidth(), parent.outerHeight());
            ink.css({height: d, width: d});
        }

        //get click coordinates
        //logic = click coordinates relative to page - parent's position relative to page - half of self height/width to make it controllable from the center;
        x = e.pageX - parent.offset().left - ink.width()/2;
        y = e.pageY - parent.offset().top - ink.height()/2;

        //set the position and add class .animate
        ink.css({top: y+'px', left: x+'px'}).addClass("animate");
    })
});
