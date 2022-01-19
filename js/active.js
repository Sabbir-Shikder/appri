(function ($) {
	"use strict";

// css preloader 
$(window).on('load', function () {
	$("#loading").fadeOut(500);
});
// One Page Nav
var top_offset = $('.header-area').height() - 10;
$('.main-menu nav ul').onePageNav({
	currentClass: 'active',
	scrollOffset: top_offset,
});
// owl carosel for brands item 
$('.brands-active').owlCarousel({
	loop: true,
	autoplay:true,
    margin:0,
	items:4,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    nav:false,
	dots:false,
	responsive: {
		0: {
			items: 1
		},
		376: {
			items: 2
		},
		575: {
			items:3
		},
		992: {
			items:4
		}
    }
})
// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
	scrollText: '<i class="fas fa-long-arrow-alt-up"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});
// slick slider for testimonial items 
 $('.testimonial-active').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	asNavFor: '.test-img-active'
});
$('.test-img-active').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	asNavFor: '.testimonial-active',
	dots: false,
	arrows:false,
	centerMode: true,
	centerPadding: '0px',
	focusOnSelect: true,
	responsive: [
    {
      breakpoint: 575,
      settings: {
		  slidesToShow: 1,
		  centerMode: false,
      }
    }
  ]
});
// counter up js 
jQuery(document).ready(function($) {
   $('.counter').counterUp({
       delay: 10,
       time: 1200
   });
});
// meanmenu
$('#mobile-menu').meanmenu({
	meanMenuContainer: '.mobile-menu',
	meanScreenWidth: '991',
});
// One Page Nav
var top_offset = $('.header-area').height() - 10;
$('.main-menu nav ul').onePageNav({
	currentClass: 'active',
	scrollOffset: top_offset,
});
// css preloader 
$(window).on('load', function () {
		//$("#loading").delay(2000).fadeOut(500);
	$("#loading").fadeOut(500);
});
//for menu active class
$('.portfolio-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});

})(jQuery);

