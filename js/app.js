$(document).foundation()
$(function () {
    $('#logo').data('size', 'big');
});

$(window).scroll(function () {
    if ($(document).scrollTop() > 0) {
        if ($('#logo').data('size') == 'big') {
            $('#logo').data('size', 'small');
            $('#logo').stop().animate({
                width: '50px',
                height: '50px',
                marginLeft: '-20px'
            }, 600);
        }
    } else {
        if ($('#logo').data('size') == 'small') {
            $('#logo').data('size', 'big');
            $('#logo').stop().animate({
                width: '100px',
                height: '100px',
                marginLeft: '-40px'
            }, 600);
        }
    }
});

//this is where we apply opacity to the arrow
$(window).scroll(function () {

    //get scroll position
    var topWindow = $(window).scrollTop();
    //multipl by 1.5 so the arrow will become transparent half-way up the page
    var topWindow = topWindow * 1.5;

    //get height of window
    var windowHeight = $(window).height();

    //set position as percentage of how far the user has scrolled
    var position = topWindow / windowHeight;
    //invert the percentage
    position = 1 - position;

    //define arrow opacity as based on how far up the page the user has scrolled
    //no scrolling = 1, half-way up the page = 0
    $('.arrow-wrap').css('opacity', position);

});






//Code stolen from css-tricks for smooth scrolling:
$(function () {
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
