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
    $('#mobile-nav-icon').click(function(){
        $(this).toggleClass('open');
    });
});

// Fancy Select
$(document).ready(function(){
    $('select').fancySelect();
});

// Dropdown navigation menu

/* $(document).ready(function() {

	// Add classes for parent items
    console.log($('.dropdown.menu li a').data('id'));
    $('.dropdown.menu li').each(function() {
        if ($(this).find('a').data('id')) {
            $(this).addClass('is-dropdown-submenu-parent');
        }
    });
	if (!$('.dropdown.menu li a').data('id')) {
		$(this).addClass('is-dropdown-submenu-parent');
	}
    //variable where currentAnchor is stored
    var currentSection = 0;
    // hides the submenu as soon as the DOM is ready
    $('.subnav-container').hide();
    // toggles the submenu on clicking the noted link  
    $('.dropdown.menu li a.link').click(function() {
 
        // remove active class
        $('.dropdown.menu li a.link').removeClass('active');
        // add active class
        $(this).addClass('active');
        
        var href = $(this).attr('href');
        //hide all submenus
        $('#hidden>ul').hide();
        
        //show one particular menu
        $(href).show();

        
        //logic for hiding and showing submenu
        if(currentSection == 0){
            $('.subnav-container').slideToggle(200);
            currentSection = href;
        } else if (currentSection == href) {
             $('.subnav-container').slideToggle(200);
             currentSection = 0;    
        } else {
            currentSection = href;
        }
        return false;     		
    });
}); */
