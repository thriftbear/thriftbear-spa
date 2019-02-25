
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

// // Highlight the top nav as scrolling occurs
// $('body').scrollspy({
//     target: '.navbar-fixed-top'
// })

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});


document.addEventListener("DOMContentLoaded", function(event) {
  // Insert video clip after page load

  //   var clipHtml =
  //     '<iframe width="100%" height="auto" ' +
  //     'src="https://www.youtube.com/embed/videoseries?list=PLKLZzVqyarZut67VWZEbf5Sh4ss0gnvV0&version=3&vq=hd1080&rel=0&amp;showinfo=0" ' +
  //     'frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>' +
  //     '</iframe>';

  /*
  var vimeoClipHtml =
    '<iframe src="https://player.vimeo.com/video/305559748" width="100%" height="auto" ' +
    'frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
  $('#video-clip-wrapper').append(vimeoClipHtml);
*/

  // var videoLoop = document.getElementById("video-loop");
  // console.warn("Video playing.");
  // videoLoop.play();

  // Preset variables necessary for navbar hiding on scroll
  var previousScroll = 0;
  var $navbar = $('nav.navbar');
  var navbarOffset = $navbar.height();


  $(window).scroll(function() {
    var windowTop = $(this).scrollTop();

    // Show navbar on upward scroll
    if (windowTop >= navbarOffset) {
      // Hide navbar on downward scroll
      if (windowTop > previousScroll) {
        if (!$navbar.hasClass('hidden')) {
          $navbar.addClass('hidden');
        }
      } else {  // Show navbar on upward scroll
        if ($navbar.hasClass('hidden')) {
           $navbar.removeClass('hidden');
        }
      }
    }
    // Show navbar when user reaches TOP of page
    else {
      if ($navbar.hasClass('hidden')) {
        $navbar.removeClass('hidden');
      }
    }
    previousScroll = windowTop;
  }).scroll();
});
