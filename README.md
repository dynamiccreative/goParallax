# goParallax
Jquery parallax plugin

parallax element with options :
<ul>
  <li>orientation : up down left right</li>
  <li>duation : 0.4s default</li>
  <li>scale: 1.4 default = ratio move element</li>
</ul>

* Utilisation
  ```sh
  $(window).on('scroll', function() {
    if($('.parallax')[0]) { $('.parallax').goParallax({orientation: "up", duration: 0.4, scale: 1.4}); }
    if($('.parallax-down')[0]) { $('.parallax-down').goParallax({orientation: "down", duration: 0.8, scale: 1.2}); }
    if($('.parallax-left')[0]) { $('.parallax-left').goParallax({orientation: "up left", duration: 0.4, scale: 1.4}); }
    if($('.parallax-right')[0]) { $('.parallax-right').goParallax({orientation: "up right", duration: 0.4, scale: 1.4}); }
  });
  ```
