$(function(){
  'use strict';
  
	// Left Sidebar
	$('#menu-left').sideNav({
		menuWidth: 240, // Default is 240
		edge: 'left',
		closeOnClick: true // Closes side-nav on <a> clicks
	});
	// Right Sidebar
	$('#menu-right').sideNav({
		menuWidth: 240, // Default is 240
		edge: 'right',
		closeOnClick: false // Closes side-nav on <a> clicks
	});

	// Featured slider
	$('.featured-slider').slick({
		dots: true,
		arrows: false,
		autoplay: true,
	});
	
	// Pictures & Video widget slider
	if ($(window).width() > 767) {
		$('.widget-item-slider').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			prevArrow: '<span class="prev-arr"><i class="fa fa-chevron-left"></i></span>',
			nextArrow: '<span class="next-arr"><i class="fa fa-chevron-right"></i></span>',
		});
	} else {
		$('.widget-item-slider').slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			prevArrow: '<span class="prev-arr"><i class="fa fa-chevron-left"></i></span>',
			nextArrow: '<span class="next-arr"><i class="fa fa-chevron-right"></i></span>',
		});
	}
	
	// Gallery slider
	$('.featured-gallery-slider').slick({
		dots: true,
		autoplay: true,
		prevArrow: '<span class="prev-arr"><i class="fa fa-chevron-left"></i></span>',
		nextArrow: '<span class="next-arr"><i class="fa fa-chevron-right"></i></span>',
	});
	
	// Swipebox gallery
	$( '.swipebox' ).swipebox();
	
	// Right sidebar tabs
	$('ul.tabs').tabs();

	// Scroll to top
	var winScroll = $(window).scrollTop();
	if (winScroll > 1) {
		$('#to-top').css({bottom:"10px"});
	} else {
		$('#to-top').css({bottom:"-100px"});
	}
	$(window).on("scroll",function(){
		winScroll = $(window).scrollTop();

		if (winScroll > 1) {
			$('#to-top').css({opacity:1,bottom:"30px"});
		} else {
			$('#to-top').css({opacity:0,bottom:"-100px"});
		}
	});
	$('#to-top').click(function(){
		$('html, body').animate({scrollTop: '0px'}, 800);
		return false;
	});
});