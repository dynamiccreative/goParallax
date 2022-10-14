$.fn.goParallax = function(options) {
                    
    var settings = $.extend({
        orientation: "up",
        duration: 0.4,
        scale: 1.4
    }, options );

    
    
    var elementHeight = $(this).outerHeight();
    var rangeMax = elementHeight * options.scale - elementHeight;
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + elementHeight;
    
    var h = $(window).height();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + h;
    
    if (elementBottom > viewportTop && elementTop < viewportBottom) {
    
        var e = ((viewportBottom - elementTop) / ((h + elementHeight) / 100)).toFixed(1);
        e = Math.min(100, Math.max(0, e));
        var translateValue = ((e / 100) * rangeMax - rangeMax / 2).toFixed(0);

        var n = settings.orientation.includes("left") ? translateValue * -1 : translateValue;
        var t = settings.orientation.includes("up") ? translateValue * -1 : translateValue;

        //console.log(e, translateValue)

        $(this).css({"will-change": "transform","transform": "translate3d("+n+"px, "+t+"px, 0px)","transition": "transform "+settings.duration+"s cubic-bezier(0, 0, 0, 1) 0s"});
    
        //console.log(elementTop, elementBottom, viewportTop, viewportBottom, hh)
    }
    //return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).on('scroll', function() {
    //$('.parallax').goParallax({orientation: "up", duration: 0.4, scale: 1.4});
    //$('.parallax-down').goParallax({orientation: "down", duration: 0.8, scale: 1.2});
    $('.parallax-left').goParallax({orientation: "up left", duration: 0.4, scale: 1.4});
    $('.parallax-right').goParallax({orientation: "up right", duration: 0.4, scale: 1.4});
});