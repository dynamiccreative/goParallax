/*! jQuery goParallax Plugin - v1.0 - 14/10/2022
 * https://www.dynamic-creative.com
 * Copyright (c) 2022 dynamic creative; Licensed MIT */

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
        $(this).css({"will-change": "transform","transform": "translate3d("+n+"px, "+t+"px, 0px)","transition": "transform "+settings.duration+"s cubic-bezier(0, 0, 0, 1) 0s"});
    }
};

$(window).on('scroll', function() {
    if($('.parallax')[0]) { $('.parallax').goParallax({orientation: "up", duration: 0.4, scale: 1.4}); }
    if($('.parallax-down')[0]) { $('.parallax-down').goParallax({orientation: "down", duration: 0.8, scale: 1.2}); }
    if($('.parallax-left')[0]) { $('.parallax-left').goParallax({orientation: "up left", duration: 0.4, scale: 1.4}); }
    if($('.parallax-right')[0]) { $('.parallax-right').goParallax({orientation: "up right", duration: 0.4, scale: 1.4}); }
});
