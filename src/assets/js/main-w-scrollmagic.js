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
   * SCROLLING TESTS!
   */
  const $home = $('header');
  const $mission = $('#mission');
  const $slider = $('#slider');
  // const $detail  = $('#detail');
  // const $about  = $('#about');
  // const $contact = $('#contact');

  console.log('Everyting criss and curry.');

  // PRESETS
  var sliderHeight = $slider.outerHeight();
  var sliderTop = $slider.offset().top;
  var sliderBottom = sliderTop + sliderHeight;
  const debug = true;
  var windowTop = 0;
  var windowBottom = 0;
  var scrollPosition = 0;
  var prevPosition = 0;
  var scrollDirection = 'down';
  var windowWidth = $(window).width();
  var windowHeight = $(window).height();
  console.log('sliderHeight: ' + sliderHeight);

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

    if (debug) {
      console.log(
        `direction=${scrollDirection} | scrollPos= ${scrollPosition} `
        // + `sliderHeight=${sliderHeight} | sliderBottom=${sliderBottom} | sliderTop=${sliderTop}`
        // + `homeScrollLeft=${homeScrollLeft}`
      );
      // console.log(` windowTop: ${windowTop} / windowBottom: ${windowBottom}`);
      // console.log(` scrollPosition: ${scrollPosition} `);
      // console.log('=============================================');
    }

    var controller = new ScrollMagic.Controller();
    // build scene
    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger1", duration: 300
      })
      .setPin(".pinned-div")
      // .addIndicators({name: "1 (duration)"}) // add indicators
      .addTo(controller);

      previousScroll = windowTop;
  }).scroll();


});
