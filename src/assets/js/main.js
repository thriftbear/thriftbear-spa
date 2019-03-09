
/**
 * Checks whethere an incoming object is valid JSON
 * @param  {Object} input Object to be parsed
 * @return {Boolean} True / False
 */
function isValidJson(input) {
  try {
      JSON.parse(input);
  } catch (e) {
      return false;
  }
  return true;
}

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  $('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
    }, 1400, 'easeInOutExpo');
    event.preventDefault();
  });
});

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

// // Highlight the top nav as scrolling occurs
// $('body').scrollspy({
//     target: '.navbar-fixed-top'
// })

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

document.addEventListener("DOMContentLoaded", function(event) {
  // Preset variables necessary for navbar hiding on scroll
  var previousScroll = 0;
  var $navbar = $('nav.navbar');
  var navbarOffset = $navbar.height();


  /**
   * SCROLLING RELATED
   */
  var $slider = $('#slider .gallery');

  console.log('Everyting criss and curry.');

  // PRESETS
  var sliderHeight = $slider.outerHeight();
  var sliderTop = $slider.offset().top;
  var sliderBottom = sliderTop + sliderHeight;
  var windowTop = 0;
  var windowBottom = 0;
  var scrollPosition = 0;
  var prevPosition = 0;
  var scrollDirection = 'down';
  var windowWidth = $(window).width();
  var windowHeight = $(window).height();
  var sliderPos = 0;

  /**
   * Initialize flickity slider library
   */
  $slider.flickity({
    "freeScroll": true,
    "wrapAround": false,
    "pageDots": false,
    // "setGallerySize": false,
    "cellAlign": 'left',
    // "contain": true
  });

  /**
   * Detect scroll direction, vertcal, and horizontal amount
   */
  $(window).scroll(function() {
    scrollPosition = windowTop = $(this).scrollTop();
    windowBottom = windowTop + $(this).innerHeight();

    // DETERMINE SCROLL DIRECTION
    scrollDirection = (scrollPosition > prevPosition ? 'down' : 'up');
    // Saves the "new" prevPosition for iteration.
    prevPosition = scrollPosition;

    // Grab browser dimensions in case user has resized it
    windowWidth = $(window).width();
    windowHeight = $(window).height();

    console.log(
      `direction=${scrollDirection} | scrollPos= ${Math.floor(scrollPosition)} // `
      + `sliderHeight=${Math.floor(sliderHeight)} // `
      + `sliderTop=${Math.floor(sliderTop)} | sliderBottom=${Math.floor(sliderBottom)} `
    );

    if (scrollDirection == "down" && scrollPosition >= sliderTop-85 && sliderPos !== 2) {
      console.warn(" >> >> >> ")
      $('#slider .gallery .flickity-viewport').animate({
          scrollLeft: 1200
        }, 800, 'swing');
        sliderPos = 2;
    }
    if (scrollDirection == "up" && scrollPosition < sliderTop+65  && sliderPos !== 1) {
      console.warn(" << << << ")
      $('#slider .gallery .flickity-viewport').animate({
          scrollLeft:  0
        }, 800, 'swing');
        sliderPos = 1;
    }

    // // DEBUG
    // $("#slider").css('background-color', 'rgba(200,0,0,0.5)');
    //$('body').css("-webkit-transform", `translate(${windowWidth}px,0px)`);

    previousScroll = windowTop;
  }).scroll();

});
